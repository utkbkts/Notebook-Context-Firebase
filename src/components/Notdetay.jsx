import React from 'react'
import {useFirestore} from "../hooks/Usefirestore"
import moment from "moment"
import "moment/locale/tr"
const Notdetay = ({not}) => {
  const {dokumansil}=useFirestore("notlar")
  return (
    <div className='not-detay'>
        <h4>{not.baslik}</h4>
        <p>{not.aciklama}</p>
        <p className='zaman'>{moment(new Date(not.tarih.toDate())).format("L")}</p>
        <span onClick={()=>dokumansil(not.id)} className='material-symbols-outlined'>delete</span>
    </div>
  )
}

export default Notdetay