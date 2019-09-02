import React from 'react';
import './Nav.css';

export default function Nav(props) {
    return (
        <nav className="header-views">
            <ul>
                <li onClick={props.changeViewParts} >Parts</li>
                <li onClick={props.changeViewPurchased} >Purchased</li>
            </ul>
        </nav>
    )
}