"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BANNER_IMAGES } from "@/constants/images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerSlider() {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full"
        >
            {BANNER_IMAGES.map((banner) => (
                <SwiperSlide key={banner.id}>
                    <div className="relative h-full">
                        <Image
                            src={banner.src}
                            alt={banner.alt}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/50">
                            <div className="container mx-auto px-4 h-full flex items-center">
                                <div className="max-w-2xl text-white">
                                    <h1 className="text-5xl font-bold mb-6">
                                        {banner.title}
                                    </h1>
                                    <p className="text-xl">
                                        {banner.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
