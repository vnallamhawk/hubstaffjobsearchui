import React from 'react';

export const TextBox = (props) =>{
    return(
        <div>
            <input type="text" placeholder={props.placeHolder}/>
        </div>
    )
}