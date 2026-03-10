"use client";

// ** styles import
import styles from "./index.module.scss";

// ** another import
import { Testimonial } from "@/ultils/type/TestimonialsSectionType";
import Image from "next/image";

export default function SlideCard({ cardItem }: { cardItem: Testimonial }) {
  return (
    <div className={styles.cardContainer}>
      {/* IMAGE */}
      <div className={styles.cardContainer__image}>
        <Image
          src={cardItem.image}
          alt={cardItem.name}
          fill
          className={styles.cardContainer__image__img}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.cardContainer__content}>
        <div className={styles.cardContainer__content__user}>
          <Image
            src={cardItem.avatar}
            alt={cardItem.name}
            width={50}
            height={50}
            className={styles.cardContainer__content__user__avatar}
          />
        </div>

        <div className={styles.cardContainer__content__text}>
          <h4>{cardItem.name}</h4>
          <p>{cardItem.content}</p>
        </div>

        <span className={styles.cardContainer__content__quote}>“</span>
      </div>
    </div>
  );
}
