import { useRef } from "react"

const CatalogoSeries = (item) => {
    return (
        <ul className='row gx-0 gx-md-5 gy-4'>
            {data.map(item => (
                <li className='col-12 col-md-6 col-lg-3' key={item.imdbID}>
                    <CardMovie {...item} />
                </li>
            )
            )}
        </ul>
    )
}

export default CatalogoSeries