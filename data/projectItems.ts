import { aklne, gforce, quizAi, taqyeemi } from "../public/assets/images";
import { ProjectItemProps } from "../types/types";

const projectItems: ProjectItemProps[] = [
  {
    title: "GForce-RT",
    description:
      "Discover the world of GForce-RT, a cutting-edge website showcasing their exceptional work and top-notch services. Built with Next.js and Tailwind CSS",
    image: gforce,
    link: "https://www.gforce-rt.com",
  },
  {
    title: "Taqyeemi App",
    description:
      "A student-centric app empowering users to rate college courses, evaluate instructors, and provide valuable feedback for future students. Enhance your learning journey With access to a wealth of educational resources. Bulit with Flutter and Firebase",
    image: taqyeemi,
    link: "https://github.com/Ali-AlDhamen/taqyeemi",
  },
  {
    title: "Aklne App",
    description:
      "Mobile application that connect individuals and businesses with surplus food to those who are in need. It aims to reduce food waste and help alleviate hunger and poverty. Bulit With Flutter and Firebase",
    image: aklne,
    link: "https://github.com/Radwan-Albahrani/Akalne",
  },
  {
    title: "QuizAI App",
    description:
      "Mobile application for personalized quizzes. you can effortlessly generate quizzes from text or files, or dive into exciting quizzes created by others. Built With Flutter and Firebase (Still Cooking)",
    image: quizAi,
    link: "",
  },
];

export default projectItems;
