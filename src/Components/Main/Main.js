import React from 'react';
import RadioHeads from './Radio/Radio'
import List from './List/List';
import { ReactComponent as QuestionSvg } from '../../Assets/SVG/Question.svg'


const main = ( props ) => {
    const { handleRadioSwitch, activeRadio } = props
    return (
        <div style={styles.Container}>
           <RadioHeads 
           activeRadio={activeRadio}
           handleRadioSwitch={handleRadioSwitch}/>
           <List />
           <div style={{marginBottom:'15%'}}>
           <QuestionSvg />
           </div>
        </div>
    );
};

const styles = {
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justiftyContent:'center',
        marginLeft: '6px'
    },
}

export default main;