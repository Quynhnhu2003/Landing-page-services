"use client";

import Image from "next/image";
// ** styles import
import styles from "./index.module.scss";

// ** another import

export default function CartDrawerFooter({
  totalPrice,
  avatarTech,
  nameTech,
  onNext
}: {
  totalPrice: string;
  avatarTech: string;
  nameTech: string;
  onNext: () => void
}) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__technician}>
          <span>Kỹ thuật viên</span>

          <div className={styles.technician}>
            <Image width={24} height={24} src={avatarTech} alt="avatar" />

            <p>{nameTech}</p>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_1613"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_1613)">
                <path
                  d="M5.35008 14.6666L4.16675 13.4833L9.65008 7.99998L4.16675 2.51665L5.35008 1.33331L12.0167 7.99998L5.35008 14.6666Z"
                  fill="#AD8B6C"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className={styles.footer__content__total}>
          <span>Tổng thanh toán</span>
          <b>{totalPrice} đ</b>
        </div>
      </div>

      <button
        className={styles.footer__checkout}
        onClick={onNext}
      >
        Tiếp tục <span>→</span>
      </button>
    </div>
  );
}
