import { useEffect, useRef, useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

import "./style.scss";

import MenuIcon from "../../assets/menu.svg";

type MenuItem = {
  label: string;
  href: string;
};

export const Menu = () => {
  const menuItems: MenuItem[] = [
    {
      label: "Sobre nós",
      href: "/",
    },
    {
      label: "Dúvidas frequentes",
      href: "/duvidas",
    },
    {
      label: "Pets namorando",
      href: "/pets",
    },
    {
      label: "Contato",
      href: "/contato",
    },
    {
      label: "Como funciona",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Comece agora!",
      href: "/pets",
    },
  ];

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

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
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
        <ul className="menu-items">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.href}>{menuItem.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Icone Menu" />
        <p className="menu-title">Menu</p>
      </button>
    </div>
  );
};
