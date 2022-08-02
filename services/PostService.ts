import React from "react";
import { Post } from "../model";
import api from "./ApiService"

 export class PostService {
    static getPostsById = async (id:number) =>{
    const response =  await api.get<Post[]>(`posts/?userId=${id}`);
    return response.data;
    }
}
