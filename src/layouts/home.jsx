import Footer from "../components/footer";
import Navbar from "../components/navbar";

import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <Navbar />
        <main id="main-home">
            <div id="categories">
                <div id="deportes">
                    <NavLink to="/deportes" id="categoria">Deportes</NavLink>
                </div>
                <div id="politica">
                    <NavLink to="/politica" id="categoria">Politica</NavLink>
                </div>
                <div id="programacion">
                    <NavLink to="/programacion" id="categoria">Programacion</NavLink>
                </div>
            </div>
            <div id="home-content">
                <h1>Content</h1>
            </div>
        </main>
        <Footer />
    </>
  )
}
