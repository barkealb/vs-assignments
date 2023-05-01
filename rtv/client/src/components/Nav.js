import React, { useContext} from 'react'
import { UserContext } from '../context/UserProvider'


function Nav() {
    const { token, logout } = useContext(UserContext)
    
  return (
    <div className='nav-bar'>
    {token ?
    <>
        <ul className='list-container'>
            <li>Home</li>
            <li>Profile</li>
            <li>Public</li>
        </ul>
        <button onClick={logout}>SignOut</button>
    </>
    :
    <>
    <ul>
            <li>Home</li>
    </ul>
    <button>SignUp/login</button>
    </>
    }  
    </div>
  )
}

export default Nav