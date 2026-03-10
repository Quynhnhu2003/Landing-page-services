/* eslint-disable @typescript-eslint/no-explicit-any */
// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import { ChooseTimeProps } from "@/ultils/type/NavbarType";

function ChooseTime({ times, selectedTime, setSelectedTime }: ChooseTimeProps) {
  return (
    <div className={styles.chooseTime}>
      <p className={styles.chooseTime__label}>Chọn khung giờ</p>

      <div className={styles.chooseTime__chooseTime}>
        {times.map((time: any) => {
          const hour = Number(time.split(":")[0]);
          const period = hour < 12 ? "AM" : "PM";

          return (
            <button
              key={time}
              className={`${styles.time} ${
                selectedTime === time ? styles.timeActive : ""
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
              <span>{period}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseTime;
