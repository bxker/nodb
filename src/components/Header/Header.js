import React from 'react';
//css
import './Header.css';
//component imports
import Nav from './Nav/Nav';

export default function Header(props) {
    //add destructuring 
    const {changeViewParts, changeViewPurchased} = props
    return(
        <div className="header-div">
            <header className="header">
                <section>
                    <h1>PC Parts List</h1>
                </section>
                <Nav changeViewParts={changeViewParts} changeViewPurchased={changeViewPurchased}/>
                <section className="search-box">
                    <div>
                        {/* <img /> */}
                        <input type="text" placeholder="Search" />
                    </div>
                </section>
            </header>
        </div>
    )
}