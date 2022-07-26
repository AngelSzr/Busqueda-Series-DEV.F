import axios from "axios";

const url = `https://api.tvmaze.com/singlesearch/`

export const getSerie = async (query = 'girls') => {
    return await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
}

export const getActor = async (query = "lauren") => {
    return await axios.get(`https://api.tvmaze.com/search/people?q=${query}`)
}

export const getActorsByID = async (id = "1") => {
    return await axios.get(`https://api.tvmaze.com/shows/${id}/cast`)
}

