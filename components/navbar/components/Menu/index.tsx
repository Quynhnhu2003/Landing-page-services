// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import { SectionsType } from "../..";

type MenuProps = {
  active: string;
  sections: SectionsType[];
  setActive: (id: string) => void;
};

function Menu({ setActive, active, sections }: MenuProps) {
  // ** Function
  const scrollToSection = (id: string) => {
    setActive(id);

    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = 90;
    const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <nav className={styles.menuContainer}>
      {sections.map((item: SectionsType) => (
        <div
          className={`${styles.menuContainer__item} ${
            active === item.id && styles.active
          }`}
          key={item.id}
        >
          {" "}
          <button onClick={() => scrollToSection(item.id)}>{item.label}</button>
        </div>
      ))}
    </nav>
  );
}

export default Menu;
