import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Expertise from "../Expertise/Expertise";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div id="home">
            <Banner />
            <About />
            <Expertise />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;