import os
from PIL import Image, ImageChops

# --- 配置区 ---
INPUT_DIR = 'raw_logos'
OUTPUT_DIR = 'output'
TARGET_SIZE = (400, 400) # 统一画布为 400x400

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def process():
    for filename in os.listdir(INPUT_DIR):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            path = os.path.join(INPUT_DIR, filename)
            
            with Image.open(path) as img:
                # 1. 转为 RGBA
                img = img.convert("RGBA")
                
                # 2. 去除灰色底 (将接近白/灰的像素设为透明)
                data = img.getdata()
                new_data = []
                for item in data:
                    # 阈值 230 可根据你灰底的深浅调整，越大越接近纯白
                    if item[0] > 230 and item[1] > 230 and item[2] > 230:
                        new_data.append((255, 255, 255, 0))
                    else:
                        new_data.append(item)
                img.putdata(new_data)

                # 3. 裁剪多余透明边框
                bg = Image.new(img.mode, img.size, (0, 0, 0, 0))
                diff = ImageChops.difference(img, bg)
                bbox = diff.getbbox()
                if bbox:
                    img = img.crop(bbox)

                # 4. 放入统一的方形透明画布
                canvas = Image.new("RGBA", TARGET_SIZE, (255, 255, 255, 0))
                # 缩放比例，留出 15% 的安全边距
                img.thumbnail((int(TARGET_SIZE[0]*0.85), int(TARGET_SIZE[1]*0.85)), Image.Resampling.LANCZOS)
                
                # 居中粘贴
                offset = ((TARGET_SIZE[0] - img.size[0]) // 2, (TARGET_SIZE[1] - img.size[1]) // 2)
                canvas.paste(img, offset, img)

                # 5. 保存为 WebP
                save_path = os.path.join(OUTPUT_DIR, os.path.splitext(filename)[0] + ".webp")
                canvas.save(save_path, "WEBP", quality=90)
                print(f"成功处理: {save_path}")

if __name__ == "__main__":
    process()