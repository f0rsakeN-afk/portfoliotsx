import Intro from "../components/Intro"
import Navbar from "../components/Navbar"
import Contact from "./Contact"
import Projects from "./Projects"
import Tech from "./Tech"

const Home = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Navbar />
                <Intro />
                <Tech />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Home