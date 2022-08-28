import Explore from "../components/home/Explore";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import PropertyList from "../components/home/PropertyList";

const Home = () => {
  return (
    <main className="mx-auto p-5">
      <Hero />
      <Explore />
      <PropertyList />
      <Featured />
    </main>
  );
};

export default Home;
