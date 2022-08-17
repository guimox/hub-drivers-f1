import { Main, HeroContent, HeroBg, VideoBg } from "./HomeStyles";
import Video from "../../media/video.mp4";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = ({ onGetInputData }) => {
  return (
    <Main>
      <HeroContent>
        <h1>Formula 1 2022</h1>
        <h1>Drivers Hub</h1>
        <h4>Look for data and results from the 2022 season</h4>
        <SearchBar onInput={onGetInputData} />
      </HeroContent>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </Main>
  );
};

export default Home;
