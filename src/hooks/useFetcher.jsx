import { useEffect, useState } from "react"
import { getSerie, getActorsByID, getSeasons, getSeries } from "../utils/getInfo"

const useFetcher = (query = 'rick') => {
    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        const { data } = await getSeries(query)
        setDataState(data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [query])
    return { dataState, loading }
}

export default useFetcher