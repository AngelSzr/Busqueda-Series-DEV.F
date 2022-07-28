//Componente
import CardActores from "./CardActores"
import { useParams } from 'react-router-dom'

import useFetcher from "../hooks/useFetcherSerie"

const Serie = () => {
    const { serieID } = useParams()
    const { dataState: data, loading, actoresSerie: actores, temporadas: seasons } = useFetcher(serieID)
    console.log(data);
    console.log(seasons);
    return (
        <div className="container-fluid d-flex row justify-content-center">
            <div className="card mb-5 mt-2 w-75 shadow p-3 bg-body rounded">
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-4  justify-content-center">
                        <img src={data.image?.original || 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'} className="img-fluid rounded-start" alt="..." />
                        <p className="card-text text-center">{data.genres}</p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title fs-1" >{data.name}</h1>
                            <p className="card-text fs-5 lh-base fst-italic">{data.summary}</p>
                            <p className="card-text"><small className="text-muted fs-6">{`Emitido ${data.premiered}`}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <ul className="row d-flex justify-content-center">
                    {actores?.map((item) => (
                        <li className="col-12 col-md-2 col-lg-3 mb-4">
                            <CardActores {...item} />
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Serie
