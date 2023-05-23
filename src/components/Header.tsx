import { Menu } from "./Menu";
import LoginIcon from "../assets/login.svg";
import Logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <section className="header-nav">
        <Menu />

        <div className="header-logo">
          <img src={Logo} alt="" />
        </div>

        <a href="/login" className="login-btn">
          <img src={LoginIcon} alt="" />
          Entrar
        </a>
      </section>
    </header>
  );
};
