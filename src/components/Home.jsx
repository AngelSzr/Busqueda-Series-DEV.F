import { GiPartyPopper } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'

const Home = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Bienvenido a mi proyecto de Front End <GiPartyPopper /></h1>
            <div id='introduccion' className='w-75 mx-auto shadow-sm p-3 mt-5 rounded'><p className='text-center fs-3'>La finalidad de este proyecto fue utilizar la librería de React utilizando distintos components, hooks, utils, entre otros elementos; Así como explorar el uso de la API 'TVMaze' la cual nos permite hacer una busqueda por nombre, desplegando así una lista de series con cierta similaridad en el título, por lo que podrás elegir la serie que estabas buscando, lo cual te desplegará: información sobre la serie, actores y sus personajes, así como la cantidad de temporadas de la misma.
                Sientete con la libertad de explorar la página, para empezar con la busqueda dale click en el icono  <FaSearch /> lo cual te desplegará una barra de busqueda donde podrás empezar con la navegación!.
                Así como también tienes la oportunidad de entrar a mi repositorio de Github (dándole click en el icono <VscGithub />) por si gustas ver en que otros proyectos he trabajado</p></div>
        </div>
    )
}
export default Home