import { useEffect, useState } from "react"
import { getActor, getSerie } from "../utils/getInfo"

const useFetcher = (query = 'rick', opcion = 1) => {
    const [dataState, setDataState] = useState([])
    const [loading, setLoading] = useState(true)
    let getData = () => {
    }

    if (opcion === 1) {
        getData = async () => {
            const { data } = await getSerie(query)
            setDataState(data)
            console.log(data);
        }
    } if (opcion === 2) {
        getData = async () => {
            const { data } = await getActor(query)
            setDataState(data)
            setLoading(false)
            console.log(data);
        }
    }
    useEffect(() => {
        getData()
    }, [query])
    return { dataState, loading }
}

export default useFetcher