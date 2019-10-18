import React from 'react';
import CompanyName from './CompanyName/CompanyName';
import BurgerDrawer from './BurgerDrawer/BurgerDrawer';
import Signup from './Signup/Signup';
import Title from './Title/Title';
import Search from './Search/Search';
import Text from './Text/Text';

const header = (props) => {
    return (
        <div style={styles.Container}>
            <div style={styles.ComanyDrawer}>
                <span><CompanyName /></span>
                <span><BurgerDrawer /></span>
            </div>
            <Signup />
            <Title/>
            <Search/>
            <Text />
        </div>
    );
};

const styles = {
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    ComanyDrawer: {
        display: 'flex',
        width: '100%',
        height: '16%',
        marginTop: '4%',
        justifyContent: 'space-around'

    }

};

export default header;