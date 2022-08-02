import React from "react";
import { PostService } from "../services/PostService";
import { StateManager } from "./StateManager";
import { Post, User } from './../model/index';
  
export class PostsManager{
    static getPostsById = async (id:number) =>{
        const posts =  await PostService.getPostsById(id)
         StateManager.SetPosts(posts)
    }
}