import CardSeries from "./CardSeries"
import { Link } from 'react-router-dom'
import { FaSadTear } from 'react-icons/fa'

const CatalogoSeries = ({ data }) => {
    return (
        data.length === 0 ? (<h1 id="noResults" className='text-center fs-1'>No se encontraron resultados <FaSadTear /></h1>) : (<ul className='row justify-content-center d-flex gx-0 gx-md-5 gy-4'>
            {data.map((item) => (
                <li className='col-12 col-md-6 col-xl-4 col-xxl-3' key={item.show.id}>
                    <Link to={`/busqueda/${item.show.id}`}>
                        <CardSeries {...item} />
                    </Link>
                </li>
            )
            )}
        </ul>)


    )
}

export default CatalogoSeries