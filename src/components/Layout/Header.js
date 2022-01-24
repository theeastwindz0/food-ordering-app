import React,{Fragment} from 'react'
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header=()=>{
    return(
    <React.Fragment>
    <header className={classes.header}>
        <h1>FOOD APP</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt='Table Full of Food'/>
    </div>
    </React.Fragment>
    )
}

export default Header;