export type ServiceItem = {
  name: string;
  desc?: string;
  price: string;
};

export type ServiceCategory = {
  id:string;
  title: string;
  image: string;
  items: ServiceItem[];
};

export type ServiceBlockProps = {
  service: ServiceCategory;
  reverse?: boolean;
};

export type ServiceTabType = {
  id: string;
  name:string;
}

export type ServiceSearchProps = {
  setTextValue: (text:string) => void;
  textValue: string;
}

export type ServiceTabsProps = {
  setActiveTab: (id:string) => void;
  activeTab:string
  tabs: ServiceTabType[]
}
