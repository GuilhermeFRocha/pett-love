import { useState } from "react";
import "../styles/menu.scss";
import MenuIcon from "../assets/menu.svg";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-content ${isOpen ? "open" : ""}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="" />
        <p className="menu-title">Menu</p>
      </button>
      <ul className="menu-items">
        <li>
          <a href="">Comece agora</a>
        </li>
      </ul>
    </div>
  );
};
