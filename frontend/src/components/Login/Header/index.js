import React from 'react';
import logoAzul from '../../../assets/img/logoAzul.png';
import './index.css';

const HeaderLogin = () => {
    return (
        <header>
            <img src={logoAzul} width="100px" alt="logo.png" />
            <h1>Pantheon</h1>
        </header>
    )
}

export default HeaderLogin;