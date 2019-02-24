import React from 'react';
import puppy from "./images/download.jpeg";
import './scrapbook.css';



export default props => {

    return (
        <div className="scrapbook-container">
            <img src={puppy}/>
        </div>
    )
}