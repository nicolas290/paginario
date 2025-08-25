import Footer from "../Componentes/Footer"
import Hero from "../Componentes/Hero"
import Navbar from "../Componentes/Navbar"
import "./home.css"

function Home() {
  return (
    <div className="home">
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home