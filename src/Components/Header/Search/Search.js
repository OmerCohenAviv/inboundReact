import React from 'react';
import classes from './Search.module.css';
import { ReactComponent as SearchSvg } from '../../../Assets/SVG/Search.svg'

const search = () => {
    return (
        <div className={classes.ContainerSearch}>
            <input type='text' className={classes.Search} placeholder='Enter Your Dream Company' />
            <SearchSvg width={60} height={50} style={{ backgroundColor: '#00a9ff', borderRadius: '0 100px 100px 0', padding: '3px' }} />
        </div>
    

        );
    };
    
    
    
export default search;