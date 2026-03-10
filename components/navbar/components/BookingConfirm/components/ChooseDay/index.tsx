// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import { ChooseDayProps, DayType } from "@/ultils/type/NavbarType";


function ChooseDay({days, selectedDay, setSelectedDay} : ChooseDayProps) {

  return (
    <div className={styles.chooseDay}>
      <p className={styles.chooseDay__label}>Chọn ngày</p>

      <div className={styles.chooseDay__chooseDay}>
        {days.map((day: DayType, index:number) => (
          <button
            key={index}
            className={`${styles.day} ${
              selectedDay === index ? styles.dayActive : ""
            }`}
            onClick={() => setSelectedDay(index)}
          >
            <span>{day.label}</span>
            <p>{day.date}</p>
          </button>
        ))}
      </div>

      <div className={styles.chooseDay__progress} />
    </div>
  );
}

export default ChooseDay;
