"use client";

// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import Menu from "./components/Menu";
import { useState } from "react";
import CartShopping from "./components/CartShopping";

export type SectionsType = {
  id:string;
  label:string;
}

const sections: SectionsType[] = [
  { id: "home", label: "Trang chủ" },
  { id: "introduction", label: "Giới thiệu" },
  { id: "services", label: "Dịch vụ" },
  { id: "news", label: "Tin tức" },
  { id: "contact", label: "Liên hệ" },
];

export default function Navbar() {
  // ** State
  const [active, setActive] = useState<string>("services");

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContainer__header}>
        <div className={styles.language}>
          <p>English</p>
        </div>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1773049732/Frame_1321316155_ewrwbe.png"
            alt="logo"
          />
        </div>
        <CartShopping quantity={3} />
      </div>

      <div className={styles.navbarContainer__menu}>
        <Menu active={active} setActive={setActive} sections={sections} />
      </div>
    </div>
  );
}
