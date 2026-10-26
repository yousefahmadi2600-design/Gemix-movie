import HeroSection from "../components/HeroSection";
import ItemSlide from "../components/ItemSlide";
import img from "../assests/images/spiderman.jpg";
const Home = () => {
  const movies = [
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
    { img: img, title: "Spiderman", gen: "action" },
  ];
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto">
        <ItemSlide items={movies} header={"Trending Movies"} />
        <ItemSlide items={movies} header={"Trending Series"} />
        <ItemSlide items={movies} header={"New Releases"} />
        <ItemSlide items={movies} header={"From HBO Max"} />
        <ItemSlide items={movies} header={"Popular Series"} />
      </div>
    </main>
  );
};

export default Home;
