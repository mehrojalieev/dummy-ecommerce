import axios from 'axios'

export const ApiInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json"
    }
})