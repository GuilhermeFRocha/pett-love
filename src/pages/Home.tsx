import useMediaQuery from "../hooks/useMediaQuery";
import "../styles/home.scss";
import { mockPosts } from "../utils/dataHomePage";
import ScrollTransition from "../components/ScrollTransition";

type mockPost = {
  photo: string;
  icon: string;
  title: string;
  description: string;
  lineImg?: string;
  lineMobImg?: string;
};

type RenderizeImageFunction = (
  lineImg?: string,
  lineMobImg?: string
) => JSX.Element;

export default function Home() {
  const matches = useMediaQuery("(max-width: 1124px)");

  const RenderizeImage: RenderizeImageFunction = (lineImg, lineMobImg) => {
    if (!matches) {
      return <img src={lineImg} alt="" />;
    }
    return <img src={lineMobImg} alt="" />;
  };

  return (
    <div className="container-body">
      <section className="highlight-container">
        <p className="highlight-desc">Como funciona</p>
        <h2 className="highlight-title">
          Encontre um pretendente <br /> para o seu animal
        </h2>
        <a href="/pets" className="highlight-link">
          Comece agora!
        </a>
      </section>

      <main>
        {mockPosts.map((post: mockPost) => (
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
            <div className="line-post">
              {RenderizeImage(post.lineImg, post.lineMobImg)}
            </div>
          </ScrollTransition>
        ))}
      </main>
    </div>
  );
}
