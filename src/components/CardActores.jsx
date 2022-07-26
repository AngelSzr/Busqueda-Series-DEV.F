const CardActores = ({ actoresSerie }) => {
    console.log(actoresSerie);
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{actoresSerie[0].character.name}/{actoresSerie[0].person.name}</p>
                <p className="card-text">Edad</p>
            </div>
        </div>
    )
}
export default CardActores