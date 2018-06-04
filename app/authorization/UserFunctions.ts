import { retriveItemFromStorage, addItemToStorage, removeItem } from "../helpers/localstorage.helper";
import { LoginUser } from "./models/LoginUser";
import { Current_User } from "./settings";
import { UserDetails } from "./models/UserDetails";

export class UserFunctions{

    //return logged user details
    static RetriveUserDetails() :UserDetails{
        return retriveItemFromStorage<UserDetails>(Current_User);
    }
    //add user details to login 

    static addUserDetailsToStorage(user:UserDetails):void{
        addItemToStorage(Current_User,user)
    }

    static removeUserDetails():void{
        removeItem(Current_User)
    }



}