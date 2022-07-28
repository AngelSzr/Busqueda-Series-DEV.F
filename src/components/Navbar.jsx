import { NavLink } from 'react-router-dom'
import { VscGithub } from 'react-icons/vsc'
import { FaSearch, FaHome } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand fs-3" href="#">Seriador</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarColor01">
                    <ul className="navbar-nav ms-auto d-flex justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link " to={'/'} ><FaHome className='fs-3' />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'busqueda'}><FaSearch className='fs-3' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='https://github.com/AngelSzr'><VscGithub className='fs-3' /></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar
