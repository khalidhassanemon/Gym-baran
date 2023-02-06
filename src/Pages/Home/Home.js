import React from 'react';
import Middle from '../Middle/Middle';
import Last from '../Last/Last';
import Secondlast from '../SecondLast/Secondlast';
import UpperSide from '../UpperSide/UpperSide';
import './Home.css';
import DownLast from '../DownLast/DownLast';
import BoxShadows from '../BoxShadows/BoxShadows';
const Home = () => {
    return (
        <div>
            <UpperSide></UpperSide>
            <Middle></Middle>
            <Last></Last>
            <Secondlast></Secondlast>
            <DownLast></DownLast>
            <BoxShadows></BoxShadows>
        </div>
    );
};

export default Home;