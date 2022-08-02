import { PostState, UserState } from './../store/Index';
import { Post, User } from '../model/index';
export class StateManager{
    static SetUsers =  (users:User[]) => {
        UserState.users = users
    }

    static SetUserDetails = (user:User) =>{
        UserState.user = user
    }

    static SetPosts = (posts:Post[]) => {
        PostState.posts = posts
    }
}