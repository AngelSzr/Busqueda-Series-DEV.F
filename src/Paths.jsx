import { Routes, Route, Navigate } from "react-router-dom"

//Componentes
import App from "./components/App"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Serie from "./components/Serie"

export const Paths = () => {
    return (
        <section className="containe">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/busqueda" element={<App />} />
                <Route path="/busqueda/:serieID" element={<Serie />} />
                <Route path="/404" element={<p>Error</p>} />
                <Route path="*" element={<Navigate to='404' />} />
            </Routes>
        </section>
    )
}
