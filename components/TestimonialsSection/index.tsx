"use client";

// ** styles import
import styles from "./index.module.scss";

// ** swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ** another import
import { Testimonial } from "@/ultils/type/TestimonialsSectionType";
import SlideCard from "./components/SlideCard";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Thùy Đỗ",
    avatar:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773127412/Rectangle_101_hpfrbb.png",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773127414/fae2554fc60316ca96eaf0dad981ab07_2_1_ehkapk.png",
    content:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân...",
  },
  {
    id: 2,
    name: "Thùy Đỗ",
    avatar:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773127411/Rectangle_100_dc9isi.png",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773127412/fae2554fc60316ca96eaf0dad981ab07_1_ksusrp.png",
    content:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân...",
  },
  {
    id: 3,
    name: "John Doe",
    avatar:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773127411/Frame_2095585124_pqe7s5.png",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773127413/fae2554fc60316ca96eaf0dad981ab07_2_vbahor.png",
    content:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân...",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <p>NHẬN XÉT TỪ</p>
        <h2>Khách Hàng</h2>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.sliderContainer}
      >
        {testimonials.map((item: Testimonial) => (
          <SwiperSlide key={item.id}>
            <SlideCard cardItem={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
