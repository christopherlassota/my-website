import "./Home.scss";
import FeaturedProjects from "../../Components/FeaturedProjects/FeaturedProjects"
import Hero from "../../Components/Hero/Hero"
import Invitation from "../../Components/Invitation/Invitation";

const Home = () => {
    return (
        <section className="home">
        <Hero />
        <FeaturedProjects />
        <Invitation />
        </section>
    )
}

export default Home