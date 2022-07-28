import { useEffect, useState } from "react"
import { getSerieID, getActorsByID, getSeasons } from "../utils/getInfo"

const useFetcher = (id = "184") => {
    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)
    const [actoresSerie, setActoresSerie] = useState(null)
    const [temporadas, setTemporadas] = useState([])
    const getDataSerie = async () => {
        const { data } = await getSerieID(id)
        setDataState(data)
        const { data: actores } = await getActorsByID(data.id)
        setActoresSerie(actores)
        const { data: temporadas } = await getSeasons(data.id)
        setTemporadas(temporadas)
        setLoading(false)
    }

    useEffect(() => {
        getDataSerie()
    }, [id])
    return { dataState, loading, actoresSerie, temporadas }
}

export default useFetcher