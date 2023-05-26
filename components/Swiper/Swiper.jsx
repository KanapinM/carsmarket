import React from 'react';
import { Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'


import 'swiper/swiper-bundle.min.css';

export default ({ auto }) => {
    return (
        <Swiper
            classname='slider'
            modules={[Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {auto.photobank.imgs.map((slide) => (
                <SwiperSlide key={slide._id}>
                    <Image src={slide.url} width={876} height={719} alt="фото автомобиля" className="car__image" placeholder='blur' blurDataURL='auto.photobank.imgs[0].urlThumb' />
                </SwiperSlide>
            ))}

        </Swiper>
    );
};