import { useRef } from "react"

const CardActores = (item) => {
    const searchRef = useRef(null)
    const imagenDefecto = 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'
    const newImage = (e) => {
        e.preventDefault()
        if (searchRef.current.attributes[1].value !== imagenDefecto) {
            if (item.person.image.medium) {
                searchRef.current.attributes[1].value = item.person.image.medium
            }
        } else {
        }
        searchRef.current.offsetParent.lastChild.firstChild.lastChild.nodeValue = item.person.name
    }

    const oldImage = (e) => {
        e.preventDefault()
        if (searchRef.current.attributes[1].value !== imagenDefecto) {
            searchRef.current.attributes[1].value = item.character.image.medium
        }
        searchRef.current.offsetParent.lastChild.firstChild.lastChild.nodeValue = item.character.name
    }


    return (
        <div className="card shadow-sm p-3 mb-5 bg-body rounded" style={{ width: '18rem' }} onMouseOver={newImage} onMouseOut={oldImage}>
            <img id={`${item.person.id}`} src={item.character.image?.medium || imagenDefecto} ref={searchRef} className="card-img-top border" alt="..." />
            <div className="card-body">
                <a className="linkActor" href={item.person.url}>
                    <p className="card-text text-center fw-bold nombreActor">{item.character.name}</p>
                </a>
            </div>
        </div>
    )
}
export default CardActores