import React from 'react'
import { auth } from '../firebase/index';
import sectionIcon from "../components/assets/images/section-icon.png";
import './assets/css/style.css'

function Menu({ children }){

    return (
        <>
        <div className="container">
            <h3 className="section__title"> Welcome!
                <span className="ml-2"> { auth.currentUser.displayName }</span> 
            </h3>
        </div>
        <div className='menu'>
            {children}
        </div>
        </>
    )
}

export default Menu
