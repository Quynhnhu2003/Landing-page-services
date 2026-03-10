"use client";

// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useState } from "react";
import Menu from "./components/Menu";
import CartShopping from "./components/CartShopping";
import { CartItemsType, SectionsType } from "@/ultils/type/NavbarType";
import Image from "next/image";
import CartDrawer from "./components/CartDrawer";
import CartContent from "./components/CartContent";
import BookingConfirm from "./components/BookingConfirm";
import BookingSuccessModal from "./components/BookingSuccessModal";

const sections: SectionsType[] = [
  { id: "home", label: "Trang chủ" },
  { id: "introduction", label: "Giới thiệu" },
  { id: "services", label: "Dịch vụ" },
  { id: "news", label: "Tin tức" },
  { id: "contact", label: "Liên hệ" },
];

const CartItems: CartItemsType[] = [
  {
    id: "item01",
    name: "Sơn gel",
    price: "264,000 đ",
    time: "10 phút",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773115896/Image_3_ycntug.png",
    services: [
      {
        id: "service01",
        image:
          "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773132243/Image_6_lhp7dk.png",
        effect: "Da beo",
        quantity: 1,
      },
      {
        id: "service01",
        image:
          "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773132243/Image_5_lszies.png",
        effect: "Da beo",
        quantity: 2,
      },
    ],
  },
  {
    id: "item02",
    name: "Mắt mèo",
    price: "88,000 đ",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773132243/Image_6_lhp7dk.png",
  },
  {
    id: "item03",
    name: "Sơn nhũ",
    price: "88,000 đ",
    time: "10 phút",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773132243/Image_5_lszies.png",
  },
];

export default function Navbar() {
  // ** State
  const [active, setActive] = useState<string>("services");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [step, setStep] = useState<"cart" | "booking">("cart");
  const [openModal, setOpenModal] = useState<boolean>(false);

  // ** function
  const closeMenu = () => setIsOpen(false);

  const onCloseCart = (stepCart: string) => {
    setIsCartOpen(false);

    if (stepCart && stepCart === "booking") {
      setOpenModal(true);
    }
  };

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
            <CartShopping quantity={3} onClick={() => setIsCartOpen(true)} />
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
          <CartShopping quantity={3} onClick={() => setIsCartOpen(true)} />
        </div>
      </div>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={CartItems}
      >
        {step === "cart" && (
          <CartContent
            isOpen={isCartOpen}
            cartItems={CartItems}
            onClose={() => setIsCartOpen(false)}
            onNext={() => setStep("booking")}
          />
        )}

        {step === "booking" && (
          <BookingConfirm onClose={() => onCloseCart("booking")} />
        )}
      </CartDrawer>

      <BookingSuccessModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}
