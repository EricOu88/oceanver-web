// app/api/google-reviews/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const PLACE_ID = process.env.GOOGLE_PLACE_ID!;
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY!;

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,reviews,user_ratings_total&key=${API_KEY}&language=zh-CN`;

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // 每 1 小时更新一次
    });

    const data = await res.json();

    if (data.status !== 'OK') {
      return NextResponse.json(
        { error: data.status, message: data.error_message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error', detail: String(error) },
      { status: 500 }
    );
  }
}
