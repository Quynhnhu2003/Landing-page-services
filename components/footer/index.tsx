"use client";

// ** Styles Import
import styles from "./index.module.scss";

// ** Another import
import Social from "./components/Social";
import Image from "next/image";

const icon = (
  <svg
    width="21"
    height="8"
    viewBox="0 0 21 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="#B19879" />
    <circle cx="17" cy="4" r="3.5" stroke="#B19879" />
  </svg>
);

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContainer__top}>
        {/* Left */}
        <div className={styles.footerContainer__top__logo}>
          <Image
          width={100}
          height={100}
            src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1773049732/Frame_1321316155_ewrwbe.png"
            alt="logo"
          />
        </div>

        <div className={styles.footerContainer__top__listData}>
          <div className={`${styles.item} ${styles["item--first"]}`}>
            <p className={styles.item__label}>{icon} SITEMAP</p>

            <div className={styles.item__links}>
              <div>
                <p>Trang chủ</p>
                <p>Giới thiệu</p>
                <p>Dịch vụ</p>
              </div>

              <div>
                <p>Tin tức</p>
                <p>Liên hệ</p>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.item}>
              <p className={styles.item__label}>{icon} LIÊN HỆ</p>

              <div className={styles.item__info}>
                <p>+84 898 812 197</p>
                <p>
                  6 Đường 2, Phú Mỹ, Quận 7,
                  <br />
                  TP Hồ Chí Minh
                </p>
                <p>Thứ 2 - Thứ 6: 09:00 - 19:00</p>
                <p>Thứ 7 - CN: 09:00 - 20:00</p>
              </div>
            </div>
            <div className={styles.booking}>
              <button>Đặt lịch ngay</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerContainer__bottom}>
        <Social />
        <div className={styles.copyright}>
          © 2025 — Copyright The OM Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer