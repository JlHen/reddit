import Listing from "../data-models/post";
import axios from "axios"

export function Search(subReddit:string): Promise<Listing> {
    return axios.get(`https://reddit.com/r/${subReddit}/.json`).then((response)=>{
        return response.data
    })
}