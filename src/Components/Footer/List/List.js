import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Btn from "@material-ui/core/Fab";


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
        color: 'white',
        fontWeight: 'bold',
        width: '37px',
        height: '37px',
        fontSize: '15px',
    },

    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

const ButtonsSwitch = (props) => {
    const classes = useStyles();
    const { handleClickNum, activeNum } = props
    return (
        <div>
            <Btn color={activeNum === 1 ? 'primary' : 'default'} aria-label="switch" className={classes.fab} onClick={() => handleClickNum(1)} >
                1
             </Btn>
            <Btn color={activeNum === 2 ? 'primary' : 'default'} aria-label="switch" className={classes.fab} onClick={() => handleClickNum(2)} >
                2
             </Btn>
            <Btn color={activeNum === 3 ? 'primary' : 'default'} aria-label="switch" className={classes.fab} onClick={() => handleClickNum(3)} >
                3
             </Btn>
            <Btn color={activeNum === 4 ? 'primary' : 'default'} aria-label="switch" className={classes.fab} onClick={() => handleClickNum(4)} >
                4
             </Btn>
            <Btn color={activeNum === 5 ? 'primary' : 'default'} aria-label="switch" className={classes.fab} onClick={() => handleClickNum(5)} >
                5
             </Btn>

        </div >
    );
}

export default ButtonsSwitch
