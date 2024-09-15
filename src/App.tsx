// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import photo1 from '../public/photo-1.jpg'
import photo2 from '../public/photo-2.jpg'
import photo3 from '../public/photo-3.jpg'
import photo4 from '../public/photo-4.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import './App.css'

// import required modules
import {FreeMode} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={photo1} alt="Photo1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt="Photo2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt="Photo3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} alt="Photo4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
