import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <div className="max-w-[1280px]">
      <div className="w-10/12 pt-4 mx-auto">
        <Navbar />
      </div>
      <Container />
      <div
        id="services"
        className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"
      />
      <Services />
      <div
        id="projects"
        className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8"
      />
      <Projects />
      <div id="tools" className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8" />
      <Tools />
    </div>
  );
}
