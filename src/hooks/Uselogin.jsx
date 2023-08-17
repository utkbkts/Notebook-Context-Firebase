import { useState } from "react";
import { auth } from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth"
import { useAuthContext } from "./Useauthcontext";
export const Uselogin=()=>{
    const [error,setError]=useState(null)
    const [pending,setPending]=useState(false)
    const {dispatch} =useAuthContext()

    const login=async(email,password)=>{
        setError(null)
        setPending(true)

        try {
          const res = await signInWithEmailAndPassword(auth,email,password)
          dispatch({type:"LOGIN",payload:res.user})
            setPending(false)
            setError(null)
        } catch (error) {
            console.log(error);
            setError(error.message)
            setPending(false)
        }
    }
    return {login,error,pending}
}
