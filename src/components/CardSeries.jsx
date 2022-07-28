const CardSeries = (item) => {
    return (
        <div id="CardSeries" className="card shadow-sm p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <img className="card-img-top border border-3" alt={item.show.name} src={item.show?.image?.medium || 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'} />
            <div className="card-body">
                <p className="card-text text-center fs-5">{item.show.name}</p>
            </div>
        </div>
    )
}
export default CardSeries