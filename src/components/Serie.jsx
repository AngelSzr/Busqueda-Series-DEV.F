import { useState } from "react"
import { getActorsByID } from "../utils/getInfo"
import CardActores from "./CardActores"


const Serie = ({ data, actores }) => {
    return (
        <div className="">
            <div className="card mb-3 mt-5 ">
                <div className="row g-0">
                    <div className="col-md-4  justify-content-center">
                        <h5 className="card-title" >{data.name}</h5>
                        <img src={data.image.medium} className="img-fluid rounded-start" alt="..." />
                        <p className="card-text">{data.genres}</p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text"><small className="text-muted">{`Emitido ${data.premiered}`}</small></p>
                            <p className="card-text">{data.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <CardActores actoresSerie={actores} />
        </div>
    )
}

export default Serie
