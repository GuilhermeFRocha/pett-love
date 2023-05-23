import { useEffect, useRef, useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

import "./style.scss";

import MenuIcon from "../../assets/menu.svg";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      window.document.body.classList.add("body-no-scroll");
    } else {
      window.document.body.classList.remove("body-no-scroll");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  console.log(isOpen);

  return (
    <div className="menu" ref={menuRef}>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <button className="menu-button" onClick={toggleMenu}>
          <AiOutlineCloseCircle />
        </button>
        <ul className="menu-items">
          <li>
            <a href="/">Sobre nós</a>
          </li>
          <li>
            <a href="/duvidas">Dúvidas frequentes</a>
          </li>
          <li>
            <a href="/pets">Pets namorando</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <a href="/">Como funciona</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/pets">Comece agora!</a>
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
