import { Cta } from "../../Components/Cta/Cta"
import { Footer } from "../../Components/Footer/Footer"
import { Hero } from "../../Components/Hero/Hero"
import { Services } from "../../Components/Services/Services"




export const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Cta />
            <Footer />
        </div>
    )
}