import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "../Swiper/AutoSwipe.css";

function createSlide(image) {
  return (
    <SwiperSlide key={image.id}>
      <img className="imgSlider" src={image.image} alt={`Image ${image.id}`} />
    </SwiperSlide>
  );
}

function AutoSwiper() {
  let imagesUrl = [
    { id: 2, image: require("../Swiper/images/148f5ae7caf84edd.webp") },
    { id: 3, image: require("../Swiper/images/e674f3f2f725660a.webp") },
    { id: 4, image: require("../Swiper/images/84366329b543fbda.webp") },
    { id: 5, image: require("../Swiper/images/417ea5d9fc446959.webp") },
    { id: 6, image: require("../Swiper/images/b0321ff888a520e1 (1).webp") },
    { id: 7, image: require("../Swiper/images/b215a6918fcb9025.webp") },
    { id: 8, image: require("../Swiper/images/c8d734ba73b10992.webp") }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
    >
      {imagesUrl.map(createSlide)}
    </Swiper>
  );
};

export default AutoSwiper;
