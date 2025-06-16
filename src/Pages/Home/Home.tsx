import "./Home.scss";
import FeaturedProjects from "../../Components/FeaturedProjects/FeaturedProjects"
import Hero from "../../Components/Hero/Hero"

const Home = () => {
    return (
        <section className="home">
        <Hero />
        <FeaturedProjects />
        </section>
    )
}

export default Home