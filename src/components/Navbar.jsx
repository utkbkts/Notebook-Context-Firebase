import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/Uselogout'
import { useAuthContext } from '../hooks/Useauthcontext'
const Navbar = () => {
  const {logout}=useLogout()
  const {user} =useAuthContext()
  return (
    <header>
        <div className='container'>
            <Link to="/"><h1>Not Defteri Uygulaması</h1></Link>
        </div>
        <nav>
         {!user && (<div>
            <Link to="/login">Giriş</Link>
            <Link to="/register">Üye ol</Link>
          </div>)}
        { user && (<div>
          <span>{user.displayName}</span> &nbsp;
            <button onClick={logout}>Çıkış</button>
          </div>)}
        </nav>
    </header>
  )
}

export default Navbar