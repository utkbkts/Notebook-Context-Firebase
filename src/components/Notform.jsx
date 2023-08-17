import React, { useState, useEffect } from "react";
import { useFirestore } from "../hooks/Usefirestore";
const Notform = ({ uid }) => {
  const [baslik, setbaslik] = useState("");
  const [aciklama, setaciklama] = useState("");
  const { dokumanEkle, response } = useFirestore("notlar");
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (baslik === "" || aciklama === "") {
      return alert("boş bırakılamaz");
    }
    const not = { baslik, aciklama };

    dokumanEkle({ uid, baslik, aciklama });
  };
  useEffect(() => {
    if (response.success) {
      setbaslik("");
      setaciklama("");
    }
  }, [response.success]);
  return (
    <form action="" className="create" onSubmit={handlesubmit}>
      <h3>Yeni bir not ekle</h3>

      <label htmlFor="">Not başlık:</label>
      <input
        type="text"
        name=""
        onChange={(e) => setbaslik(e.target.value)}
        value={baslik}
        id=""
      />

      <label htmlFor="">Not açıklama:</label>
      <input
        type="text"
        name=""
        onChange={(e) => setaciklama(e.target.value)}
        value={aciklama}
        id=""
      />

      <button>Not ekle</button>
    </form>
  );
};

export default Notform;
