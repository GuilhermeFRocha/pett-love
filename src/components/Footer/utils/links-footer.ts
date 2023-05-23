import FaceIcon from "../../../assets/face-icon.svg";
import InstaIcon from "../../../assets/insta-icon.svg";
import YoutubeIcon from "../../../assets/youtube-icon.svg";

export type LinkFooter = {
  href: string;
  label: string;
};

export type SocialMediaLink = {
  name: string;
  url: string;
  icon: string;
};


export const linksFooter: LinkFooter[] = [
  { href: "/", label: "Sobre nós" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/duvidas", label: "Dúvidas frequentes" },
  { href: "/blog", label: "Blog" },
  { href: "/pets", label: "Comece agora!" },
  { href: "/contato", label: "Contato" },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/ClickwebAgencia/",
    icon: FaceIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/clickweb/",
    icon: InstaIcon,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@clickwebagenciadigital1101",
    icon: YoutubeIcon,
  },
];