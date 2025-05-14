"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Banner_1, Banner_2, Banner_3 } from "@images/index";
import S from "./styles.module.scss";

const SLIDE = [Banner_1, Banner_2, Banner_3];

const CardList = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation]}
      className={S.swiper}
    >
      {SLIDE.map((img, index) => (
        <SwiperSlide key={img.src + index} className={S.slide}>
          <Image src={img} alt={`banner_${index + 1}`} fill />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardList;
