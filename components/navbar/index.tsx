"use client";

// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useState } from "react";
import Menu from "./components/Menu";
import CartShopping from "./components/CartShopping";
import { SectionsType } from "@/ultils/type/NavbarType";
import Image from "next/image";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ** function
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContainer__header}>
        <div className={styles.language}>English</div>

        <div className={styles.logo}>
          <Image
            width={200}
            height={60}
            src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1773049732/Frame_1321316155_ewrwbe.png"
            alt="logo"
          />
        </div>

        <div className={styles.right}>
          <div className={styles.cartDesktop}>
            <CartShopping quantity={3} />
          </div>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}

      <div
        className={`${styles.navbarContainer__menu} ${
          isOpen ? styles.open : ""
        }`}
      >
        <Menu
          active={active}
          setActive={(id) => {
            setActive(id);
            closeMenu();
          }}
          sections={sections}
        />

        <div className={styles.cartMobile}>
          <CartShopping quantity={3} />
        </div>
      </div>
    </div>
  );
}
