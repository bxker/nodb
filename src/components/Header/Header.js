import React from 'react';
//css
import './Header.css';
//component imports
import Nav from './Nav/Nav';

export default function Header(props) {
    return(
        <div className="header-div">
            <header className="header">
                <section>
                    <h1>PC Parts List</h1>
                </section>
                <Nav />
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