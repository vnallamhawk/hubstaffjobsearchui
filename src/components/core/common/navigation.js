import React from 'react';
import { Icon } from 'antd';
export const Navigation = () => {
    return (
        <div>
            <header className="header-container">
 <div className="logo">
   <a href="index.html" title="Hubstaff Talent">
   <img src="../../images/logo.png" width="180"/>
   </a>
 </div>
    <nav>
        <ul>
            <li><a title="Home">HOW IT WORKS</a></li>
        <li><a title="Browse">BROWSE </a><Icon type="down" /> </li>
    <li><a title="search">SEARCH</a></li >
        <li><a title="myAccount">My Account</a><Icon type="down" /></li >
   </ul >
 </nav >
</header>
</div>)
}