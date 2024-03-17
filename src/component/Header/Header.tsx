import React from 'react';
import './Header.module.css';


const Header: React.FC = () => {
    return (
        <header>
            <h1>Learn Languages Online</h1>
            <nav>
                <ul>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;