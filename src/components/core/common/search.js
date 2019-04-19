import React from 'react';
export const Search = (props) =>{
    return(
            <input name={props.name} onKeyPress={props.onKeyPress} onChange={props.onChange} className="searchInput" type="text" placeholder={props.placeHolder}/>
          )
}