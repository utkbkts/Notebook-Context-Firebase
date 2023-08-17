import { useState } from "react";
import {auth} from "../firebase/config"
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth" 
//Kullanıcı Bilgilerini State'e Aktarma
import {useAuthContext} from "./Useauthcontext"

export const useSignup=()=>{
    const [error,seterror]=useState(null)
    const [pending,setpending]=useState(false)
    const {dispatch}=useAuthContext();

    const signup=async(email,password,Username)=>{
        seterror(null)
        setpending(true)
        try {
            const response = await createUserWithEmailAndPassword(auth,email,password)
            if(!response){
                throw new Error("üyelik işlemi gerçekleşmedi")
            }
            updateProfile(response.user,{
                displayName:Username
            })
            dispatch({type:"LOGIN",payload:response.user}) //login olduğunda aktarılma yapılacak
            seterror(null)
            setpending(false)
        } catch (error) {
            console.log(error.message);
            seterror(error.message)
            setpending(false)
        }
    }
    return {error,pending,signup}
}