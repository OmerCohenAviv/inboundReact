import React from 'react';
import { ReactComponent as SvgPlus } from '../../Assets/SVG/plus.svg'
import { ReactComponent as SvgMinus } from '../../Assets/SVG/minus.svg'

const plusCards = (props) => {
    return (
        <div style={styles.container}>
            <p style={styles.Title}>LOREM</p>
            <p style={styles.boxLeft}>
                <SvgPlus width={45} height={45} style={{ backgroundColor: '#00a9ff', borderRadius: ' 100px ', padding: '3px' }} />
            </p>
            <p style={styles.boxLeft}>
                <SvgPlus width={45} height={45} style={{ backgroundColor: '#00a9ff', borderRadius: ' 100px ', padding: '3px' }} />
            </p>
            <p style={styles.boxLeft}>
                <SvgMinus width={45} height={45} style={{ backgroundColor: '#00a9ff', borderRadius: ' 100px ', padding: '3px' }} />
            </p>
            <p style={styles.boxLeft}>
                <SvgPlus width={45} height={45} style={{ backgroundColor: '#00a9ff', borderRadius: ' 100px ', padding: '3px' }} />
            </p>
        </div>
    );
};

const styles = {
    container: {
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    boxLeft: {
        padding: '30px',
        borderRadius: '142px',
        backgroundColor: '#ffffff',
        width: '350px',
        alignSelf: 'center',
        color: '#464646',
         boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
    },
    Title: {
    width:'57.6%',
    fontSize:'36px',
    height: '1.9%',
    alignSelf:'center',
    color: 'white'
    }
}


export default plusCards;