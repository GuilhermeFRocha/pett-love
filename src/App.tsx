import { Menu } from "./components/Menu";
import LoginIcon from "./assets/login.svg";
import Logo from "./assets/logo.svg";
import DogImg from "./assets/dog.svg";
import DogsImg from "./assets/dogs.svg";
import CatImg from "./assets/cat.svg";
import PetIcon from "./assets/pet.svg";
import LupaIcon from "./assets/sear.svg";
import ScheduleIcon from "./assets/agende.svg";
import LineRight from "./assets/line-right.svg";
import LineLeft from "./assets/line-left.svg";

import "./styles/home.scss";

function App() {
  return (
    <>
      <header>
        <section className="header-nav">
          <Menu />

          <a href="/" className="login-btn">
            <img src={LoginIcon} alt="" />
            Entrar
          </a>
        </section>

        <section className="header-container">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
          <p className="header-desc">Como funciona</p>
          <h2 className="header-title">
            Encontre um pretendente <br /> para o seu animal
          </h2>
          <a href="" className="header-link">
            Comece agora!
          </a>
        </section>
      </header>

      <main>
        <section className="posts-container">
          <img src={DogImg} alt="Imagem dog" />
          <div className="posts-content">
            <img src={PetIcon} alt="Icone do pet" className="post-icon" />
            <h3>
              Cadastre seu <span>animal</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              egestas, erat et convallis gravida, nisl libero imperdiet dolor,
              et vestibulum tortor quam in nunc.
            </p>
          </div>
        </section>
        <div className="line-post">
          <img src={LineRight} alt="" />
        </div>
        <section className="posts-container">
          <div className="posts-content">
            <img src={LupaIcon} alt="Icone do pet" className="post-icon" />
            <h3>
              <span>Procure</span> pretendentes
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              egestas, erat et convallis gravida, nisl libero imperdiet dolor,
              et vestibulum tortor quam in nunc.
            </p>
          </div>
          <img src={DogsImg} alt="Imagem dog" />
        </section>
        <div className="line-post">
          <img src={LineLeft} alt="" />
        </div>
        <section className="posts-container">
          <img src={CatImg} alt="Imagem dog" />
          <div className="posts-content">
            <img src={ScheduleIcon} alt="Icone do pet" className="post-icon" />
            <h3>
              Marque um <span>encontro</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              egestas, erat et convallis gravida, nisl libero imperdiet dolor,
              et vestibulum tortor quam in nunc.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
