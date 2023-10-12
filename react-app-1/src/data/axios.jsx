import { addIcon } from "@iconify/react";
import axios from "axios";

export const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.om"
})

export const getPosts = async () => {
    const response = await addIcon.get("/posts")
    return response.data
}