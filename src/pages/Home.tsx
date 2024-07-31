import Intro from "../components/Intro"
import Navbar from "../components/Navbar"
import Tech from "./Tech"

const Home = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Navbar />
                <Intro />
                <Tech />
            </div>
        </div>
    )
}

export default Home