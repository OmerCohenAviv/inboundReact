import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import classes from "./List.module.css"


const list = () => {
    return (
        <div className={classes.Container}>
            <p className={classes.Title}>Lorem ipsum dolor sit amet, consectetuer </p>
            <span><FiberManualRecordIcon  color='inherit'/></span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            <span><FiberManualRecordIcon  color='inherit'/></span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            <span><FiberManualRecordIcon  color='inherit'/></span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            <span><FiberManualRecordIcon  color='inherit'/></span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
    );
};



export default list 