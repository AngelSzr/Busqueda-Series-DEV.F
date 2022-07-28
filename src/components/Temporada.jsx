const Temporada = (item) => {
    return (
        <div className="container-fluid d-flex row justify-content-center">
            <div className="card mb-5 mt-5 w-75 shadow-lg  p-3 bg-body rounded">
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-4  justify-content-center">
                        <img src={item.image?.original || 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'} className="img-fluid rounded-start" alt='' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title fs-1" >Temporada {item.number}</h2>
                            <p className="card-text fs-5 lh-base fst-italic">{item.summary}</p>
                            <p className="card-text"><small className="text-muted fs-6">{`Emitido en ${item?.premiereDate || 'Se desconoce'}`}</small></p>
                            <p className="card-text"><small className="text-muted fs-6">{`Finalizó en ${item?.endDate || 'Se desconoce'}`}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Temporada