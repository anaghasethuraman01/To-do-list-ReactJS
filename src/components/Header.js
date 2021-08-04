import React from 'react';
import logo from '../logo.svg';
const Header = () => {
    return (
        <div>
        <header >
            <img src={logo} className="App-logo" alt="logo" />
            <h1> <span style={{color:'lightblue' }} > ReactJS :  </span> To-Do List</h1>
        </header>
        </div>
    )
}

export default Header
