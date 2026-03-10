// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import { CustomerInfoProps } from "@/ultils/type/NavbarType";

function CustomerInfo({ cusName, cusPhone }: CustomerInfoProps) {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoContainer__info}>
        <p>Tên khách hàng</p>
        <span>{cusName}</span>
      </div>

      <div className={styles.infoContainer__info}>
        <p>Số điện thoại</p>
        <span>{cusPhone}</span>
      </div>
    </div>
  );
}

export default CustomerInfo;
