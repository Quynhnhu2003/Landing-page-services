// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useState } from "react";
import CustomerInfo from "./components/CustomerInfo";
import { DayType } from "@/ultils/type/NavbarType";
import ChooseDay from "./components/ChooseDay";
import ChooseTime from "./components/ChooseTime";

const days: DayType[] = [
  { label: "Thứ 2", date: "01/09" },
  { label: "Thứ 3", date: "02/09" },
  { label: "Thứ 4", date: "03/09" },
  { label: "Thứ 5", date: "04/09" },
  { label: "Thứ 6", date: "05/09" },
  { label: "Thứ 7", date: "06/09" },
  { label: "Chủ Nhật", date: "07/09" },
];

const times = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
];

function BookingConfirm({onClose}:{onClose: () => void}) {
  // ** state
  const [selectedDay, setSelectedDay] = useState<number>(2);
  const [selectedTime, setSelectedTime] = useState<string>("10:00");

  return (
    <div className={styles.bookingContainer}>
      <h2 className={styles.bookingContainer__header}>Xác Nhận Đặt Lịch</h2>

      <CustomerInfo cusName="Thuỳ Đỗ" cusPhone="0969-886-969" />

      <ChooseDay
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <ChooseTime times={times} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />

      <button className={styles.bookingContainer__submit} onClick={onClose}>
        Đặt Lịch <span>→</span>
      </button>
    </div>
  );
}

export default BookingConfirm;
