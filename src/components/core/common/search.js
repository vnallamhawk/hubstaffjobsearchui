import React from 'react';
export const Search = (props) =>{
    return(<div>
            <input className="searchInput" type="text" placeholder={props.placeHolder}/>
            <button className="btnSubmit" type="submit" onClick={props.btnSearch}>{props.btnSearchTxt}</button>
        </div>)
}