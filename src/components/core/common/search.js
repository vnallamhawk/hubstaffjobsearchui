import React from 'react';
export const Search = (props) =>{
    return(
            <input name={props.name} onChange={props.onChange} className="searchInput" type="text" placeholder={props.placeHolder}/>
          )
}