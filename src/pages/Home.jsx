import React from 'react'
import Notform from '../components/Notform'
import {useAuthContext} from "../hooks/Useauthcontext"
import Notdetay from '../components/Notdetay'
import { Usecollection } from '../hooks/Usecollection'
const Home = () => {
  const {user}=useAuthContext()
  const {documents,error}=Usecollection("notlar",["uid","==",user.uid],["tarih","desc"]) // belgedeki uid giriş yapan kullanıcı uid ile eşit ise
  return (
    <div className='home'>
      <Notform uid={user.uid}/>
      <hr />
      <div className='notlar'>
        {error && <div className='error'>{error}</div>}
        {documents && documents.map((doc)=>(
          <Notdetay not={doc} key={doc.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home