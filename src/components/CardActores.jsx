import { useRef } from "react"

const CardActores = (item) => {
    const searchRef = useRef(null)
    const newImage = (e) => {
        e.preventDefault()
        searchRef.current.attributes[1].value = item.person.image.medium
        searchRef.current.offsetParent.lastChild.firstChild.lastChild.nodeValue = item.person.name
    }
    const oldImage = (e) => {
        e.preventDefault()
        searchRef.current.attributes[1].value = item.character.image.medium
        searchRef.current.offsetParent.lastChild.firstChild.lastChild.nodeValue = item.character.name
    }


    return (
        <div className="card shadow-sm p-3 mb-5 bg-body rounded" style={{ width: '18rem' }} onMouseOver={newImage} onMouseOut={oldImage}>
            <a href={item.person.url}>
                <img id={`${item.person.id}`} src={item.character.image?.medium || 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'} ref={searchRef} className="card-img-top border" alt="..." />
            </a>
            <div className="card-body">
                <p className="card-text text-center">{item.character.name}</p>
            </div>
        </div>
    )
}
export default CardActores