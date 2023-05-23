import DogImg from "../assets/dog.svg";
import DogsImg from "../assets/dogs.svg";
import CatImg from "../assets/cat.svg";
import PetIcon from "../assets/pet.svg";
import LupaIcon from "../assets/sear.svg";
import ScheduleIcon from "../assets/agende.svg";
import LineRight from "../assets/line-right.svg";
import LineLeft from "../assets/line-left.svg";
import LineMobRight from "../assets/line-mob-right.svg";
import LineMobLeft from "../assets/line-mob-left.svg";

export const mockPosts = [
  {
    photo: DogImg,
    icon: PetIcon,
    title: "Cadastre seu animal",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecegestas, erat et convallis gravida, nisl libero imperdiet dolor,et vestibulum tortor quam in nunc.",
    id: "1",
    lineImg: LineRight,
    lineMobImg: LineMobRight,
  },
  {
    photo: DogsImg,
    icon: LupaIcon,
    title: "Procure pretendentes",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecegestas, erat et convallis gravida, nisl libero imperdiet dolor,et vestibulum tortor quam in nunc.",
    id: "2",
    lineImg: LineLeft,
    lineMobImg: LineMobLeft,
  },
  {
    photo: CatImg,
    icon: ScheduleIcon,
    title: " Marque um encontro",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecegestas, erat et convallis gravida, nisl libero imperdiet dolor,et vestibulum tortor quam in nunc.",
    id: "3",
  },
];
