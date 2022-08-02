import { proxy } from "valtio";
import { Post, User } from "../model/index";


interface UserStateType{
users: User[],
user?: User
}

 export const UserState  = proxy<UserStateType>({
    users: []
})



interface PostStateType{
    posts:Post[]
}
export const PostState =  proxy<PostStateType>({
    posts:[]
})