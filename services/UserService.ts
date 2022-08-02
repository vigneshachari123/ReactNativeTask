import { User } from "../model";
import api from "./ApiService"


 export class UserService {
    static getUsers =  async () =>{
        const response =  await api.get<User[]>('users');
        return response.data;
    }

    static getUserById = async (id:number) =>{
        const response = await api.get<User>(`users/${id}`);
        return response.data
    }

}