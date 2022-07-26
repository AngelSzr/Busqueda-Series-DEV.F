import { useEffect, useState } from "react"
import { getActor, getSerie, getActorsByID } from "../utils/getInfo"

const useFetcher = (query = 'rick', opcion = 1) => {
    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)
    const [actoresSerie, setActoresSerie] = useState(true)
    let getData = () => {
    }

    if (opcion === 1) {
        getData = async () => {
            const { data } = await getSerie(query)
            setDataState(data)
            const { data: actores } = await getActorsByID(data.id)
            setActoresSerie(actores)
            setLoading(false)
        }
    } if (opcion === 2) {
        getData = async () => {
            const { data } = await getActor(query)
            setDataState(data)
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [query])
    return { dataState, loading, actoresSerie }
}

export default useFetcher