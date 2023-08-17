import {useState} from 'react'
import { useSignup } from '../hooks/signauth'
const Register = () => {
    const [email,setemail]=useState("")
    const [parola,setparola]=useState("")
    const [username,setusername]=useState("")
    const [confirmparola,setconfirmparola]=useState("")
    const {error,pending,signup}=useSignup()
    const handlesubmit=(e)=>{
        e.preventDefault()
       
      if(parola===confirmparola){
        signup(email,parola,username)
      }else{
        alert("parolalar eşleşmedi")
      }
    }
  return (
    <form className='login' onSubmit={handlesubmit}>
            <h3>Not Defteri Giriş Sayfası</h3>
            <label htmlFor="">Kullanıcı Adınız:</label>
            <input type="text" name="" id="" value={username} onChange={(e)=>setusername(e.target.value)}/>

            <label htmlFor="">Email Adresiniz:</label>
            <input type="email" name="" id="" value={email} onChange={(e)=>setemail(e.target.value)}/>

            <label htmlFor="">Parolanız:</label>
            <input type="password" name="" id="" value={parola} onChange={(e)=>setparola(e.target.value)}/>

            <label htmlFor="">Parola Tekrarı:</label>
            <input type="password" name="" id="" value={confirmparola} onChange={(e)=>setconfirmparola(e.target.value)}/>

            {!pending&&<button>Üye ol</button>}
            {pending && <button disabled>İşlem sürüyor</button>}
            {
              error && <div className='error'>{error}</div>
            }
    </form>
  )
}

export default Register