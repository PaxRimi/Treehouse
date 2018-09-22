import React from 'react';
import leaf from './img/leaf.png';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="logo">
                        <span>
                            <img src={leaf} alt="leaf icon"/>
                        </span>
                        <p>
                            Treehouse
                        </p>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <i className="fas fa-bars"></i>
                </div>
            </header>
        )
    }
}

export default Header;