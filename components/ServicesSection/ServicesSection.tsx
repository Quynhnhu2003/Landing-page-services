"use client";

// ** styles import
import styles from "./index.module.scss";

// ** components import
import ServiceTabs from "./components/ServiceTabs";
import ServiceBlock from "./components/ServiceBlock";
import ServiceSearch from "./components/ServiceSearch";

// ** another import
import {
  ServiceCategory,
  ServiceTabType,
} from "@/ultils/type/ServicesSectionType";
import { useMemo, useState } from "react";

const services: ServiceCategory[] = [
  {
    id: "services1",
    title: "Gói Combo",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773115896/Image_iyqmqn.png",
    items: [
      {
        name: "Perfectly Polished",
        desc: "Làm móng classic Mani Pedi",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm móng classic Mani Pedi",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm móng classic Mani Pedi",
        price: "390k",
      },
    ],
  },
  {
    id: "services2",
    title: "Medicure",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773115895/Image_1_ajsiro.png",
    items: [
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
    ],
  },
  {
    id: "services3",
    title: "Pedicure",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773115895/Image_2_zceesk.png",
    items: [
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
    ],
  },
  {
    id: "services4",
    title: "Hiệu Ứng",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773115896/Image_3_ycntug.png",
    items: [
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
      {
        name: "Perfectly Polished",
        desc: "Làm mới màu sắc (Mani hoặc Pedi)...",
        price: "390k",
      },
    ],
  },
  {
    id: "services5",
    title: "Drinks",
    image:
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1773116013/Image_4_iqopnv.png",
    items: [
      { name: "Latte", price: "50k" },
      { name: "Espresso", price: "50k" },
      { name: "Americano", price: "50k" },
      { name: "Cappuccino", price: "50k" },
    ],
  },
];

const tabs: ServiceTabType[] = [
  {
    id: "combo",
    name: "GÓI COMBO",
  },
  {
    id: "medicure",
    name: "MEDICURE",
  },
  {
    id: "pedicure",
    name: "PEDICURE",
  },
  {
    id: "effect",
    name: "HIỆU ỨNG",
  },
];

export default function ServicesSection() {
  // ** state
  const [textValue, setTextValue] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("combo");

  // ** Function
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const finalServices: ServiceCategory[] = useMemo(() => {
    const keyword = normalize(textValue.trim());

    if (!keyword) {
      return services.filter((service) => service.id === activeTab);
    }

    return services
      .map((service) => {
        const serviceTitle = normalize(service.title);

        // match title -> return full service
        if (serviceTitle.includes(keyword)) {
          return service;
        }

        // match items
        const filteredItems = service.items.filter((item) => {
          const name = normalize(item.name);
          const desc = normalize(item.desc || "");

          return name.includes(keyword) || desc.includes(keyword);
        });

        if (filteredItems.length > 0) {
          return {
            ...service,
            items: filteredItems,
          };
        }

        return null;
      })
      .filter(Boolean) as ServiceCategory[];
  }, [textValue, activeTab]);

  const displayServices = finalServices.length > 0 ? finalServices : services;
  return (
    <section className={styles.servicesContainer}>
      <h2 className={styles.servicesContainer__title}>Dịch Vụ</h2>

      <div className={styles.servicesContainer__top}>
        <ServiceTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
        <ServiceSearch textValue={textValue} setTextValue={setTextValue} />
      </div>

      <div className={styles.servicesContainer__list}>
        {displayServices.map((service: ServiceCategory, index: number) => (
          <ServiceBlock
            key={service.id}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
