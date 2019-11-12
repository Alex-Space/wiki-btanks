import React from 'react';
import Logo from './wiki-logo-48x48.png'


const MainLogo = (props) => {
    return(
        <div className="bt-main-logo-box">
            <img className="bt-main-logo" src={Logo} alt="logo"/>
        </div>
    );
}

export default MainLogo;