import "./Home.css";
import { Hero, MostPopular, GamingLibrary } from "../../components/index";

const Home = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <GamingLibrary />
    </>
  );
};

export default Home;
