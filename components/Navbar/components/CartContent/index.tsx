"use client";

// ** styles import
import styles from "./index.module.scss";

// ** another import
import { Fragment } from "react/jsx-runtime";
import { CartContentProps, CartItemsType } from "@/ultils/type/NavbarType";
import CartDrawerItem from "./components/CartDrawerItem";
import CartDrawerFooter from "./components/CartDrawerFooter";

export default function CartContent({
  isOpen,
  onClose,
  cartItems,
  onNext,
}: CartContentProps) {
  return (
    <Fragment>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>Giỏ hàng</h2>
        </div>

        <div className={styles.body}>
          {cartItems.map((item: CartItemsType) => (
            <CartDrawerItem key={item.id} item={item} />
          ))}
        </div>

        <CartDrawerFooter
          onNext={onNext}
          totalPrice="440,000"
          avatarTech="https://res.cloudinary.com/dwcg5odh2/image/upload/v1773127412/Rectangle_101_hpfrbb.png"
          nameTech="Võ Thị Bích Phượng"
        />
      </div>
    </Fragment>
  );
}
