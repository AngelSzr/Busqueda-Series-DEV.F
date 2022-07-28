//Componente
import CardActores from "./CardActores"
import { useParams } from 'react-router-dom'

import useFetcher from "../hooks/useFetcherSerie"
import Temporada from "./Temporada"

const Serie = () => {
    const { serieID } = useParams()
    const { dataState: data, loading, actoresSerie: actores, temporadas: seasons } = useFetcher(serieID)
    return (
        <div className="container-fluid d-flex row justify-content-center">

            <div className="card mb-5 mt-5 w-75 shadow-lg  p-3 bg-body rounded">
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-4  justify-content-center">
                        <a href={data.url}><img src={data.image?.original || 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'} className="img-fluid rounded-start" alt="..." />  </a>
                        <p className="card-text text-center fw-bold">{data.genres}</p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title fs-1" >{data.name}</h2>
                            <p className="card-text fs-5 lh-base fst-italic">{data.summary}</p>
                            <p className="card-text"><small className="text-muted fs-6">{`Emitido en ${data.premiered}`}</small></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ml-5">
                <ul className=" row d-flex justify-content-center mx-auto">
                    <h1 className="text-center mb-5">Actores </h1>
                    {actores?.map((item) => (
                        <li className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <CardActores {...item} />
                        </li>
                    ))
                    }
                </ul>
            </div>

            <div className="ml-5">
                <ul className=" list-group mx-auto">
                    <h1 className="text-center mb-1">Temporadas </h1>
                    {seasons?.map((item) => (
                        <li className="">
                            <Temporada {...item} />
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Serie
