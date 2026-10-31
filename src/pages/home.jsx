import HeroSection from "../components/HeroSection";
import ItemSlide from "../components/ItemSlide";
const Home = () => {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto">
        <ItemSlide
          header={"Trending Movies"}
          time={true}
          url={`trending/movie/`}
        />
        <ItemSlide
          header={"Trending Series"}
          time={true}
          url={`trending/tv/`}
        />
        <ItemSlide header={"New Releases"} url={"movie/now_playing"} />
        <ItemSlide header={"Popular Movies"} url={"movie/top_rated"}/>
      </div>
    </main>
  );
};

export default Home;
