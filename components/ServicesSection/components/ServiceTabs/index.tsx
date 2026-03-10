"use client";

// ** styles import
import styles from "./index.module.scss";

// ** another import
import { ServiceTabsProps, ServiceTabType } from "@/ultils/type/ServicesSectionType";

function ServiceTabs({setActiveTab, activeTab, tabs}: ServiceTabsProps) {
  return (
    <div className={styles.servicesTabs}>
      {tabs.map((tab: ServiceTabType) => (
        <span
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${activeTab === tab.id && styles.active} ${
            styles.servicesTabs__item
          }`}
        >
          {tab.name}
        </span>
      ))}
    </div>
  );
}

export default ServiceTabs;
