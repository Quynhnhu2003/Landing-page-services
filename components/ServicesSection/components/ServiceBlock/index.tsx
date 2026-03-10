"use client";

// ** styles import
import styles from "./index.module.scss";

// ** another import
import Image from "next/image";
import {
  ServiceBlockProps,
  ServiceItem,
} from "@/ultils/type/ServicesSectionType";

function ServiceBlock({ service, reverse }: ServiceBlockProps) {
  return (
    <div className={`${styles.serviceBlock} ${reverse && styles.reverse}`}>
      <div className={styles.serviceBlock__image}>
        <Image width={100} height={100} src={service.image} alt={service.title} />
      </div>

      <div className={styles.serviceBlock__content}>
        <h3>{service.title}</h3>

        <div className={styles.serviceBlock__list}>
          {service.items.map((item: ServiceItem, index: number) => (
            <div key={index} className={styles.serviceBlock__item}>
              <div>
                <p className={styles.serviceBlock__item__name}>{item.name}</p>
                {item.desc && (
                  <p className={styles.serviceBlock__item__des}>{item.desc}</p>
                )}
                <p className={styles.serviceBlock__item__price}>{item.price}</p>
              </div>

              <button className={styles.serviceBlock__item__add}>+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceBlock;
