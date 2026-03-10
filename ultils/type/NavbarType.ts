export type SectionsType = {
    id:string;
    label:string;
  }

export  type MenuProps = {
    active: string;
    sections: SectionsType[];
    setActive: (id: string) => void;
  };
  
  export type CartShoppingProps = {
    quantity: number
}