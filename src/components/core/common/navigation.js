import React from 'react';
import { Icon } from 'antd';

export const Navigation = () => {
    return (
        <div>
            <div className="toolbar">
            <nav className="toolbar_navigation">
                <div className="logo">
                    <a href="index.html" title="Hubstaff Talent">
                        <img src="images/logo.png" width="180" />
                    </a>
                </div>
                <div className="spacer" />
                <div className="navbar_items">
                        <ul>
                            <li><a title="Home">HOW IT WORKS</a></li>
                            <li><a title="Browse">BROWSE </a><Icon type="down" /> </li>
                            <li><a title="search">SEARCH</a></li >
                            <li><a title="myAccount">My Account</a><Icon type="down" /></li >
                        </ul >
                </div>
                </nav >
            </div>
        </div>)
}