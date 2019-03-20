import React from 'react'
import { Instagram, Compass, User, Heart } from 'react-feather';

import './SearchBar.css'

function SearchBar(props){
    return(
        <div className="barContainer">

            <div className="logo"><Instagram/></div>
            <div className="title"> <h1>Instagram</h1></div>
    
            <div className="search">
                <form>
                    <input placeholder="Search"></input>
                </form>
            </div>

            <div className="icons">
                <div><Compass/></div>
                <div><Heart/></div>
                <div><User/></div>
            
            </div>
        </div>
    )
}


export default SearchBar;