/* eslint-disable @typescript-eslint/no-explicit-any */
export type SectionsType = {
  id: string;
  label: string;
};

export type MenuProps = {
  active: string;
  sections: SectionsType[];
  setActive: (id: string) => void;
};

export type CartShoppingProps = {
  quantity: number;
  onClick?: () => void;
};

export type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItemsType[];
  children: React.ReactNode;
};

export type CartContentProps = {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItemsType[];
  onNext: () => void;
};

export type ServiceItem = {
  id: string;
  image: string;
  effect: string;
  quantity: number;
};

export type CartItemsType = {
  id: string;
  name: string;
  price: string;
  image: string;
  time?: string;
  services?: ServiceItem[];
};

export type DayType = {
  label: string;
  date: string;
};

export type ChooseTimeProps = {
  times: any;
  setSelectedTime: (time: string) => void;
  selectedTime: string;
};

export type ChooseDayProps = {
  days: DayType[];
  selectedDay: number;
  setSelectedDay: (daySelected: number) => void;
};

export type CustomerInfoProps = {
  cusName: string;
  cusPhone: string;
};
