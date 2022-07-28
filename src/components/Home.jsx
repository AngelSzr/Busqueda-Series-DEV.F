import { GiPartyPopper } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'

const Home = () => {
    return (
        <div id="introduccionDiv" className='mt-5'>
            <h1 id='Welcome' className='text-center'>Bienvenido a mi proyecto de Front End <GiPartyPopper /></h1>
            <div id='introduccion' className='w-75 mx-auto shadow-sm p-3 mt-5 rounded'><p className='text-center fs-3'>
                Proyecto para la busqueda de series, utilizando React JS, usando la API 'TVMaze'.</p>
                <p className='text-center fs-3'>
                    Sientete con la libertad de explorar la página, al darle click al icono '<FaSearch />' te mostrará una barra de busqueda donde podrás empezar con la navegación!
                    Así como también puedes acceder a mi repositorio de Github  <VscGithub /> </p></div>
        </div>
    )
}
export default Home