import React,{useContext} from 'react'
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import logo from '../../assets/logo.png'
import CartContext from '../../store/CartContext'
const Header=(props)=>{

    const cartCtx=useContext(CartContext);

    /* reduce method which transform array of datat into a single value*/
    const totalItems=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)
    return(
    <React.Fragment>
    <header className={classes.header}>
        <div className={classes.logo}>
        <img  src={logo} alt="Logo"/>
        </div>
        <HeaderCartButton totalItems={totalItems} onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt='Table Full of Food'/>
    </div>
    </React.Fragment>
    )
}

export default Header;