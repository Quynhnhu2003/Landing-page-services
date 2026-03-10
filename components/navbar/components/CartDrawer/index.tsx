"use client";

// ** styles import
import styles from "./index.module.scss";

// ** another import
import { Fragment } from "react/jsx-runtime";
import { CartDrawerProps } from "@/ultils/type/NavbarType";

export default function CartDrawer({
  isOpen,
  onClose,
  children,
}: CartDrawerProps) {
  return (
    <Fragment>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </Fragment>
  );
}
