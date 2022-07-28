import CardActores from "./CardActores"

const ActoresSerie = ({ actores }) => {
    return (
        <ul className="row d-flex justify-content-center">
            {actores?.map((item) => (
                <li className="col-12 col-md-2 col-lg-3 mb-4">
                    <CardActores {...item} />
                </li>
            ))
            }
        </ul>
    )
}
export default ActoresSerie