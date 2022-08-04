import React from "react";
import { User } from "../model";
import { PostService } from "../services/PostService";
import { StateManager } from "./StateManager";
  
interface UserdataType {
      item: User;
  }
export class PostsManager{
    static getPostsById = async (userData:UserdataType) =>{
        const posts =  await PostService.getPostsById(userData.item.id)
         StateManager.SetPosts(posts)
    }
}