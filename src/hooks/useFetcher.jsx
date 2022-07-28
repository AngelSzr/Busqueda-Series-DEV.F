import { useEffect, useState } from "react"
import { getActor, getSerie, getActorsByID, getSeriesByActorsID, getSeasons } from "../utils/getInfo"

const useFetcher = (query = 'rick', opcion = "1") => {
    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)
    const [actoresSerie, setActoresSerie] = useState(null)
    const [temporadas, setTemporadas] = useState([])
    let getData = async () => {
        const { data } = await getSerie(query)
        setDataState(data)
        const { data: actores } = await getActorsByID(data.id)
        setActoresSerie(actores)
        const { data: temporadas } = await getSeasons(data.id)
        setTemporadas(temporadas)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [query])
    return { dataState, loading, actoresSerie, temporadas }
}

export default useFetcher