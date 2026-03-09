"use-client";

import Social from "./components/Social";
// ** Styles Import
import styles from "./index.module.scss";

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

const listData = [
  {
    id: "sitemap",
    title: "sitemap",
    item: [
      { id: "home", label: "Trang chủ" },
      { id: "introduction", label: "Giới thiệu" },
      { id: "services", label: "Dịch vụ" },
      { id: "news", label: "Tin tức" },
      { id: "contact", label: "Liên hệ" },
    ],
  },
  {
    id: "contact",
    title: "liên hệ",
    item: [
      { id: "phone", label: "+84 89 812 12 97" },
      {
        id: "address",
        label: "6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh (gần Crescent Mall)",
      },
      { id: "services", label: "Dịch vụ" },
      { id: "news", label: "Tin tức" },
      { id: "contact", label: "Liên hệ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContainer__top}>
        {/* Left */}
          <div className={styles.footerContainer__top__logo}>
            <img
              src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1773049732/Frame_1321316155_ewrwbe.png"
              alt="logo"
            />
        </div>
        {/* Center */}
        <div className={styles.center}>
          <p className={styles.label}>{icon} SITEMAP</p>

          <div className={styles.links}>
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

        {/* Right */}
        <div className={styles.right}>
          <p className={styles.label}>{icon} LIÊN HỆ</p>

          <div className={styles.info}>
            <p>+84 898 812 197</p>
            <p>
              6 Đường 2, Phú Mỹ, Quận 7,
              <br />
              TP Hồ Chí Minh
            </p>
            <p>Thứ 2 - Thứ 6: 09:00 - 19:00</p>
            <p>Thứ 7 - CN: 09:00 - 20:00</p>
          </div>

          <button className={styles.booking}>Đặt lịch ngay</button>
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
