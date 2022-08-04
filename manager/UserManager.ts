import React from "react";
import { UserService } from "../services/UserService";
import { StateManager } from "./StateManager";

export class UserManager{
static getAllUsers =  async () => {
    const users =  await UserService.getUsers();
    StateManager.SetUsers(users)
}


static getUserById =  async (id:number) => {
    const user = await UserService.getUserById(id);
    StateManager.SetUserDetails(user)
}

}