"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Banner_2 } from "@images/index";
import Image from "next/image";
import S from "./styles.module.scss";

const BANNER = [Banner_2, Banner_2, Banner_2];
const Banner = () => {
  return (
    <div className={S.swiperWrap}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className={S.swiper}
      >
        {BANNER.map((img, index) => (
          <SwiperSlide key={img.src + index} className={S.slide}>
            <Image src={img} alt={`banner_${index + 1}`} fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
