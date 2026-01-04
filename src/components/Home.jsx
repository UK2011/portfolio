import Cards from "./Cards/Cards"
import { ReactLenis } from "lenis/react"

const Home = () => {
    return (

        <div className="main">
            <ReactLenis root />
            <section className="intro">
                <h1>Projects Showcase</h1>
            </section>
            <Cards />
            <section className="outro">
                <h1>Contact</h1>
            </section>

        </div>
    )
}

export default Home