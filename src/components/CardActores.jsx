const CardActores = (item) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.person.image.medium} className="card-img-top" alt="..." href={item.person.url} />
            <div className="card-body">
                <p className="card-text">{item.character.name}</p>
                <p className="card-text">Edad</p>
            </div>
        </div>
    )
}
export default CardActores