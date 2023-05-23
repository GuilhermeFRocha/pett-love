import { MdOutlineFileCopy, MdKeyboardArrowUp } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { Menu } from "./components/Menu";
import LoginIcon from "./assets/login.svg";
import Logo from "./assets/logo.svg";
import LogoFooter from "./assets/logo-footer.svg";
import ArrowDown from "./assets/arrow-down.svg";
import FaceIcon from "./assets/face-icon.svg";
import InstaIcon from "./assets/insta-icon.svg";
import YoutubeIcon from "./assets/youtube-icon.svg";
import Clickweb from "./assets/clickweb.svg";
import { useRef } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import "./styles/home.scss";
import { mockPosts } from "./utils/dataHomePage";
import ScrollTransition from "./components/ScrollTransition";
import { Footer } from "./components/Footer";

function App() {
  const copyRef = useRef<HTMLSpanElement>(null);
  const matches = useMediaQuery("(max-width: 1124px)");

  console.log(matches);

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

  const RenderizeImage = (post: any) => {
    if (!matches) {
      return <img src={post.lineImg} alt="" />;
    }
    return <img src={post.lineMobImg} alt="" />;
  };

  return (
    <div className="container-body">
      <header>
        <section className="header-nav">
          <Menu />

          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>

          <a href="/login" className="login-btn">
            <img src={LoginIcon} alt="" />
            <span>Entrar</span>
          </a>
        </section>
      </header>
      <section className="highlight-container">
        <p className="highlight-desc">Como funciona</p>
        <h2 className="highlight-title">
          Encontre um pretendente <br /> para o seu animal
        </h2>
        <a href="" className="highlight-link">
          Comece agora!
        </a>
      </section>

      <main>
        {mockPosts.map((post: any) => (
          <ScrollTransition>
            <section className="post-container">
              <div className="post-img">
                <img src={post.photo} alt="Imagem dog" />
              </div>
              <div className="post-content">
                <img src={post.icon} alt="Icone do pet" className="post-icon" />
                <h3 className="post-title">{post.title}</h3>
                <p className="post-desc">{post.description}</p>
              </div>
            </section>
            <div className="line-post">{RenderizeImage(post)}</div>
          </ScrollTransition>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
