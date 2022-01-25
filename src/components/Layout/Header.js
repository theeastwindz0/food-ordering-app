import React from 'react'
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import logo from '../../assets/logo.png'
const Header=(props)=>{

    
    return(
    <React.Fragment>
    <header className={classes.header}>
        <div className={classes.logo}>
        <img  src={logo} alt="Logo"/>
        </div>
        <HeaderCartButton  onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt='Table Full of Food'/>
    </div>
    </React.Fragment>
    )
}

export default Header;