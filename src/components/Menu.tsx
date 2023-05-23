import { useEffect, useRef, useState } from "react";
import "../styles/menu.scss";
import MenuIcon from "../assets/menu.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleScroll = () => {
    document.body.classList.toggle("body-no-scroll");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleScroll();
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      toggleScroll();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu" ref={menuRef}>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <button className="menu-button" onClick={toggleMenu}>
          <AiOutlineCloseCircle />
        </button>
        {/* Conteúdo da barra de navegação */}
        <ul className="menu-items">
          <li>
            <a href="">Sobre nós</a>
          </li>
          <li>
            <a href="">Dúvidas frequentes</a>
          </li>
          <li>
            <a href="">Pets namorando</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Como funciona</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Comece agora!</a>
          </li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="" />
        <p className="menu-title">Menu</p>
      </button>
    </div>
  );
};
