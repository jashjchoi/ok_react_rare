import React from 'react'
import { auth} from '../firebase/index';

function Menu({ children }){

    return (
        <>
        <h3> Welcome! <span>{auth.currentUser.displayName}</span>  </h3>
        <div className='menu'>
            {children}
        </div>
        </>
    )
}

export default Menu
