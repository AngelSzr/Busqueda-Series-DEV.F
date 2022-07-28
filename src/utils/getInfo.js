import axios from "axios";

const url = `https://api.tvmaze.com/singlesearch/`

export const getSeries = async (query = 'girls') => {
    return await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
}
export const getSerie = async (query = 'girls') => {
    return await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
}

export const getActor = async (query = "lauren") => {
    return await axios.get(`https://api.tvmaze.com/search/people?q=${query}`)
}

export const getActorsByID = async (id = "1") => {
    return await axios.get(`https://api.tvmaze.com/shows/${id}/cast`)
}
export const getSeriesByActorsID = async (id = "5858") => {
    return await axios.get(`https://api.tvmaze.com/people/${id}/castcredits`)
}
export const getSerieID = async (id = "184") => {
    return await axios.get(`https://api.tvmaze.com/shows/${id}`)
}
export const getSeasons = async (id = "184") => { //id de la serie
    return await axios.get(`https://api.tvmaze.com/shows/${id}/seasons`)
}


