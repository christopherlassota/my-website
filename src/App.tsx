import "./App.scss";
import FeaturedProjects from "./Components/FeaturedProjects/FeaturedProjects";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <FeaturedProjects />
    </>
  );
}

export default App;