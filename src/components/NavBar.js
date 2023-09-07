import React, { Component } from 'react';

class NavBar extends Component {

    showMenu = () => {
        document.getElementById('hamburger-btn').classList.toggle('begone');
        document.getElementById('close-btn').classList.toggle('begone');
        document.getElementById('mob-nav').classList.toggle('hidden');
    }

    hideMenu = () => {}
      
    render() {
        return(
            <>
                <header>
                    <a href="/" id="site-titles">
                        <h1 id="site-title">PatFig.</h1>
                        <h3 id="site-subtitle">Patent figures made easy<sup>(ish)</sup></h3>
                    </a>
                    <div id="show-mob-menu">
                        <span id="hamburger-btn" onClick={this.showMenu}>&#9776;</span>
                        <span id="close-btn" onClick={this.showMenu} className='begone'>&times;</span>
                    </div>
                    <div id="site-nav">
                        <a href="/#/about">About</a>
                        <a href="/#/tutorial">Tutorial</a>
                        <a href="/#/contribute">Contribute</a>
                        <a href="/#/contact">Contact</a>
                    </div>
                </header>
                <div id="mob-nav" className='hidden'>
                    <a href="/#/about">About</a>
                    <a href="/#/tutorial">Tutorial</a>
                    <a href="/#/contribute">Contribute</a>
                    <a href="/#/contact">Contact</a>
                </div>
            </>
        )
    }
}

export default NavBar;
