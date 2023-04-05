import axios from "axios"

export const rootUrl = process.env.REACT_APP_API_URL;

export const axiosHelper= axios.create({headers:{
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
    'Access-Control-Allow-Methods': '*',
    "Content-Type": "application/json"
}})
