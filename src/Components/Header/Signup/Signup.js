import React from 'react';
import Button from '@material-ui/core/Button/Button'



const signup = (props) => {
    return (
        <Button variant='text' color='inherit' style={styles.Button}>
            Check
        </Button>

    );
};

const styles = {
    Button: {
        height: '7.894736842105263%',
        width: '45.6%',
        alignSelf:'center',
        color: '#ffffff',
        backgroundColor: '#00a9ff',
        borderRadius: '41.5px'
    }
}

export default signup;