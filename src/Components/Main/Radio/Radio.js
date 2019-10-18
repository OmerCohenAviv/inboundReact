import React from 'react'
import Radio from '@material-ui/core/Radio/Radio'
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup'


const radios = ( props ) => {
    const { handleRadioSwitch, activeRadio} = props
    return (
        <RadioGroup style={{display:'flex', flexDirection:'row',alignSelf:'center'}}>
            <Radio style={{ color: 'white' }} onClick={() => handleRadioSwitch(1)} checked={activeRadio === 1}/>
            <Radio style={{ color: 'white' }} onClick={() => handleRadioSwitch(2)} checked={activeRadio === 2}/>
            <Radio style={{ color: 'white' }} onClick={() => handleRadioSwitch(3)} checked={activeRadio === 3}/>
            <Radio style={{ color: 'white' }} onClick={() => handleRadioSwitch(4)} checked={activeRadio === 4}/>
            <Radio style={{ color: 'white' }} onClick={() => handleRadioSwitch(5)} checked={activeRadio === 5}/>
        </RadioGroup>
    );
};

export default radios;