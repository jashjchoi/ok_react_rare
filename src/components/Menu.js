import React from 'react'
import { auth } from '../firebase/index';
import sectionIcon from "../components/assets/images/section-icon.png";
import './assets/css/style.css'

function Menu({ children }){

    return (
        <>
        <div className="menu-container"> 
    
            <img src={sectionIcon} alt="section-icon" className="mx-3"/>
            <h3 className="section__title">
                Welcome!  { auth.currentUser.displayName }</h3> 
            
            <img src={sectionIcon} alt="section-icon" className="mx-3"/>

        </div>
        <div className='menu'>
            {children}
        </div>
        </>
    )
}

export default Menu
