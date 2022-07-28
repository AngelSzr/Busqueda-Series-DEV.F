const CardSeries = (item) => {
    console.log(item);
    return (
        <div className="card shadow-sm p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <img className="card-img-top border" alt={item.show.name} src={item.show?.image?.medium || 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'} />
            <div className="card-body">
                <p className="card-text text-center">{item.show.name}</p>
            </div>
        </div>
    )
}
export default CardSeries