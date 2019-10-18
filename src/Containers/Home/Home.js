import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Secondary from '../../Components/Secondary/Secondary';
import PlusCards from '../../Components/PlusCards/PlusCards';
import classes from './Home.module.css';
import Footer from '../../Components/Footer/Footer';

class Home extends Component {
    state = {
        activeRadio: 1,
        activeNum: 1
    }

    radioSwitchHandler = (type) => {
        this.setState({activeRadio: type})
    };
    NumSwitchHandler = (type) => {
        this.setState({activeNum: type})
    };
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <div className={classes.BackgroundTop}>
                    <Header />
                </div >
                <div style={{ height: '48.6%%' }} className={classes.Center}>
                    <div className={classes.BackgroundMidFirst}>
                        <Main 
                        activeRadio={this.state.activeRadio}
                        handleRadioSwitch={this.radioSwitchHandler}
                        />
                    </div>
                    <div className={classes.BackgroundMidSecond}>
                        <Secondary />
                    </div>
                </div>
                <div style={{ height: '21.1%', width: '100%', }}>
                    <PlusCards />
                </div>
                <div style={{ height: '20.3%', width: '100%', backgroundColor: 'rgb(98, 59, 187)' }}>
                    <Footer
                    handleClickNum={this.NumSwitchHandler}
                    activeNum={this.state.activeNum} />
                </div>
            </div>
        );
    };
};



export default Home;