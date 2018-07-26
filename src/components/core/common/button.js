import React from 'react';

const Button = (props) => {
    return(
        <button className={props.className} type={props.type} onClick={props.btnSearch}>{props.btnSearchTxt} </button>
    );
}

export default Button;