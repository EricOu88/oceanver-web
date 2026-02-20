'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 这里定义轮播图的数据
// 您稍后可以将 '/images/...' 替换为您实际的图片路径
const slides = [
  {
    id: 1,
    title: "Bay Media Star 通讯服务",
    description: "为您提供最优质的家庭与商业网络解决方案，连接无限可能。",
    bgColor: "from-blue-900 to-blue-600", // 如果图片没加载，会显示这个渐变背景
    image: "/hero-bg-1.jpg", // 替换您的图片路径
  },
  {
    id: 2,
    title: "高速光纤网络",
    description: "极速稳定，畅享4K视频与在线游戏，告别卡顿。",
    bgColor: "from-purple-900 to-indigo-600",
    image: "/hero-bg-2.jpg",
  },
  {
    id: 3,
    title: "专业商业安防",
    description: "ADT 智能监控与报警系统，全天候守护您的资产安全。",
    bgColor: "from-slate-900 to-slate-700",
    image: "/hero-bg-3.jpg",
  },
];

export default function CarouselHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动播放功能：每 5 秒切换一次
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-[500px] w-full m-auto group overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`w-full h-full absolute top-0 left-0 bg-gradient-to-r ${slides[currentIndex].bgColor}`}
        >
            {/* 如果您有真实图片，请取消下面 Image 组件的注释，并确保路径正确 */}
            {/* <Image 
               src={slides[currentIndex].image} 
               alt={slides[currentIndex].title}
               fill
               className="object-cover opacity-40 mix-blend-overlay" 
               priority
            /> 
            */}
            
            {/* 文字内容区域 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                >
                  {slides[currentIndex].title}
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl max-w-2xl drop-shadow-md"
                >
                  {slides[currentIndex].description}
                </motion.p>
                
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors"
                >
                  了解详情
                </motion.button>
            </div>
        </motion.div>
      </AnimatePresence>

      {/* 左箭头 */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* 右箭头 */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      {/* 底部圆点指示器 */}
      <div className="absolute bottom-4 flex justify-center py-2 w-full space-x-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer transition-all duration-300 border border-white rounded-full ${
                currentIndex === slideIndex ? 'bg-white w-8 h-2' : 'bg-transparent w-2 h-2'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}