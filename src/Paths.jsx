import { Routes, Route } from "react-router-dom"

//Componentes
import App from "./components/App"
import Navbar from "./components/Navbar"
import Serie from "./components/Serie"

export const Paths = () => {
    return (
        <section className="containe">
            <Navbar />
            <Routes>
                <Route path="/" element={<p>home</p>} />
                <Route path="/busqueda" element={<App />} />
                <Route path="/busqueda/:serieID" element={<Serie />} />
            </Routes>
        </section>
    )
}
