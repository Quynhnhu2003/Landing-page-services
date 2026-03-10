"use client";

// ** styles import
import styles from "./index.module.scss";

//  ** Another Import
import { ContentBookingType } from "@/ultils/type/BookingType";

const ContentBooking: ContentBookingType = {
  content: "Đặt lịch hẹn chữa lành",
  description:
    "Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ những điều nhỏ nhất và lan tỏa đến cả tâm hồn.",
  btnText: "TRẢI NGHIỆM NGAY",
};

function Booking() {
  return (
    <section className={styles.healingSection}>
      <div className={styles.healingSection__content}>
        <h1>{ContentBooking.content}</h1>

        <p>{ContentBooking.description}</p>

        <button>{ContentBooking.btnText}</button>
      </div>
    </section>
  );
}

export default Booking;
