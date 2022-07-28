import { useRef } from "react"
import CardSeries from "./CardSeries"
import { Link } from 'react-router-dom'

const CatalogoSeries = ({ data }) => {
    return (
        <ul className='row gx-0 gx-md-5 gy-4'>
            {data.map(item => (
                <li className='col-12 col-md-6 col-lg-3' key={item.show.id}>
                    <Link to={`/busqueda/${item.show.id}`}>
                        <CardSeries {...item} />
                    </Link>
                </li>
            )
            )}
        </ul>
    )
}

export default CatalogoSeries