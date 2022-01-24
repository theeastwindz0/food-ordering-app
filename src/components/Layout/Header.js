import React,{Fragment} from 'react'
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'

const Header=()=>{
    return(
    <React.Fragment>
    <header className={classes.header}>
        <h1>FOOD APP</h1>
        <button>CART</button>
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt='Table Full of Food'/>
    </div>
    </React.Fragment>
    )
}

export default Header;