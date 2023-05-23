import { useRef } from "react";

import { MdOutlineFileCopy, MdKeyboardArrowUp } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

import "./style.scss";

import LogoFooter from "../../assets/logo-footer.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import FaceIcon from "../../assets/face-icon.svg";
import InstaIcon from "../../assets/insta-icon.svg";
import YoutubeIcon from "../../assets/youtube-icon.svg";
import Clickweb from "../../assets/clickweb.svg";

export const Footer = () => {
  const copyRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCopy = async () => {
    const { textContent } = copyRef.current ?? {};

    if (textContent) {
      try {
        await navigator.clipboard.writeText(textContent);
        console.log(
          "Valor copiado para a área de transferência: ",
          textContent
        );
      } catch (error) {
        console.error("Erro ao copiar valor: ", error);
      }
    }
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-newsletter">
          <img src={LogoFooter} alt="" />
          <div className="footer-content-newsletter">
            <label htmlFor="email">Receba nossas novidades</label>
            <div className="footer-input">
              <input type="email" placeholder="Digite seu e-mail" id="email" />
              <button>Cadastrar</button>
            </div>
          </div>
        </div>

        <div className="footer-container-nav">
          <div className="footer-content-nav">
            <nav className="footer-navbar">
              <ul>
                <li>
                  <a href="/">Sobre nós</a>
                </li>
                <li>
                  <a href="/como-funciona">Como funciona</a>
                </li>
                <li>
                  <a href="/duvidas">Dúvidas frequentes</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/pets">Comece agora!</a>
                </li>
                <li>
                  <a href="/contato">Contato</a>
                </li>
              </ul>
            </nav>
            <div className="footer-entitie">
              <p className="footer-entitie-title">Ajude uma entidade</p>
              <p className="footer-entitie-desc">
                <span>
                  SOS Vida Animal <img src={ArrowDown} alt="" />
                </span>
              </p>
              <p className="footer-entitie-desc">
                Banco Itaú: Ag <span>8804</span> Conta <span>01234-5</span>
              </p>
              <p className="footer-entitie-desc">
                PIX: <span ref={copyRef}>43.660.696/0001-95</span>{" "}
                <MdOutlineFileCopy
                  color="#fff"
                  size="20"
                  onClick={handleCopy}
                  cursor="pointer"
                />
              </p>
            </div>
          </div>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.facebook.com/ClickwebAgencia/"
                target="_blank"
              >
                <img src={FaceIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/clickweb/" target="_blank">
                <img src={InstaIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@clickwebagenciadigital1101"
                target="_blank"
              >
                <img src={YoutubeIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-politicas">
          <a href="/politica-privacidade">Política de privacidade</a>
          <TbPointFilled size={4} color="#fff" />
          <a href="/termos-uso">Termos de uso</a>
          <TbPointFilled size={4} color="#fff" />
          <a href="/politica-cookies">Política de Cookies</a>
          <TbPointFilled size={4} color="#fff" />
          <a href="/politica-cancelamento">Política de cancelamento</a>
        </div>
      </div>

      <div className="footer-rodape">
        <p>Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95 </p>

        <MdKeyboardArrowUp className="footer-icon" onClick={handleClick} />

        <img src={Clickweb} alt="" />
      </div>

      <div className="footer-mob-rodape">
        <MdKeyboardArrowUp className="footer-icon" onClick={handleClick} />
      </div>
    </footer>
  );
};
