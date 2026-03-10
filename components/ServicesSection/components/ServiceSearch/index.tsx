"use client";

// ** styles import
import styles from "./index.module.scss";

// ** another import
import { ServiceSearchProps } from "@/ultils/type/ServicesSectionType";

function ServiceSearch({setTextValue, textValue}: ServiceSearchProps) {
  // ** Function
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const clearValue = () => {
    setTextValue("");
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContainer__form}>
        <input
          type="text"
          name={"search"}
          value={textValue}
          maxLength={150}
          placeholder={"Tìm kiếm"}
          onChange={handleInputChange}
          className={styles.searchContainer__form__input}
        />
        {textValue ? (
          <button
            className={styles.searchContainer__form__clearable}
            onClick={clearValue}
          >
            x
          </button>
        ) : (
          <label className={styles.searchContainer__form__icon}>
            <svg
              width="25"
              height="24"
              fill="none"
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#DDDFE4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.887 21C17.1337 21 21.387 16.7467 21.387 11.5C21.387 6.25329 17.1337 2 11.887 2C6.64026 2 
          2.38696 6.25329 2.38696 11.5C2.38696 16.7467 6.64026 21 11.887 21Z"
              />
              <path
                stroke="#DDDFE4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22.387 22L20.387 20"
              />
            </svg>
          </label>
        )}
      </div>
    </div>
  );
}

export default ServiceSearch;
