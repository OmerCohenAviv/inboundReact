import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import classes from './BurgerDrawer.module.css';

const burgerDrawer = () => {
    return (
        <span className={classes.ContainerBurgerDrawer}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
            >
                <MenuIcon  className={classes.MenuIcon} fontSize={'large'} fontSizeAdjust='true' color='inherit'/>
            </IconButton>
        </span>
    );
};



export default burgerDrawer;