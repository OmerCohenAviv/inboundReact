import React from 'react';
import classes from './List/List.module.css'
import ButtonsSwitch from './List/List';

const SliderBottom = (props) => {
    const { handleClickNum, activeNum} = props;
    return (
        <div className={classes.Container}>
            <p className={classes.Title}>Lorem </p>
            <p className={classes.SecondTitle}> Lorem </p>
            <p className={classes.Text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
 </p>
            <ButtonsSwitch  handleClickNum={handleClickNum} activeNum={activeNum}/>
        </div>
    );
};


export default SliderBottom