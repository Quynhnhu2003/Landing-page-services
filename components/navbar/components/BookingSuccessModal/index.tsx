"use client";

// ** styles import
import styles from "./index.module.scss";

// ** another import
import { useEffect } from "react";

type BookingSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function BookingSuccessModal({ isOpen, onClose }: BookingSuccessModalProps) {
  // ** useEffect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>

        <div className={styles.iconWrapper}>
          <div className={styles.iconCircle}>✈</div>

          <div className={styles.check}>✓</div>
        </div>

        <h2 className={styles.title}>Gửi Yêu Cầu Thành Công!</h2>

        <p className={styles.content}>
          Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
          thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
      </div>
    </div>
  );
}

export default BookingSuccessModal;
