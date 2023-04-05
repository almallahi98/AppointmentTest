import axios from "axios"

export const rootUrl = process.env.REACT_APP_API_URL;

export const axiosHelper= axios.create({headers:{
    'Content-Type': 'application/json'
}})
