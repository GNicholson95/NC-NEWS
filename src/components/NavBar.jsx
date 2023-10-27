import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <nav>
            {isOpen && (
                <ul>
                    <Link to={`../`}><li>Home</li></Link>
                    <Link to={`./Articles`}><li>Articles</li></Link>
                    <Link to={`./Topics`}><li>Topics</li></Link>
                </ul>
            )}
            <Hamburger rounded toggled={isOpen} toggle={setOpen} duration={0.5} label="Show menu"/>
        </nav>
        </>
    )
}

export default NavBar;
