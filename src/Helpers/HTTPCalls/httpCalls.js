import axios from "axios";
import {BASE_URL} from "./Urls";

export const getAllPosts = async() => {
    const {data} = await axios.get(BASE_URL)
    return data
}

export const createPost = async(data) => {
    return await (await axios.post(BASE_URL, data)).data
}

export const deletePostById = async(id, data) => {
    const res = await axios.delete(`${BASE_URL}/${id}`, data)
    console.log(res)
}

export const editPostById = async(data) => {
    return await (await axios.put(`${BASE_URL}/${data.id}`, data)).data
}