import { Menu } from "../Menu";

import "../Header/style.scss";

import LoginIcon from "../../assets/login.svg";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <>
      <header>
        <section className="header-nav">
          <Menu />

          <div className="header-logo">
            <img src={Logo} alt="Logo" />
          </div>

          <button className="login-btn">
            <img src={LoginIcon} alt="Icone Login" />
            <span>Entrar</span>
          </button>
        </section>
      </header>
    </>
  );
};
