import {useState} from 'react'
import {Uselogin} from "../hooks/Uselogin"
const Login = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const {login,error,pending}=Uselogin()
    const handlesubmit=async(e)=>{
        e.preventDefault()
      await login(email,password)
    }
  return (
    <form className='login' onSubmit={handlesubmit}>
            <h3>Not Defteri Giriş Sayfası</h3>
            <label htmlFor="">Email Adresiniz:</label>
            <input type="email" name="" id="" value={email} onChange={(e)=>setemail(e.target.value)}/>

            <label htmlFor="">Parolanız:</label>
            <input type="password" name="" id="" value={password} onChange={(e)=>setpassword(e.target.value)}/>

            {!pending &&<button>Giriş</button>}
            {pending && <button disabled>İşlem Sürüyor</button>}
            {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login