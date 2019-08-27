import React, { useState } from 'react';

import { 
    NavContainer,
    NavRow,
    NavLeft,
    NavMiddle,
    NavRight,
    Link,
    HamburgerContainer,
    HamburgerBar,
    Overlay
} from './style'


const NavBar = ({ routes = [] }) => {
    const [ open, setOpen ] = useState(false)

    window.onresize = () => (window.innerWidth > 900 && open) && setOpen(false)

    return(
        <NavContainer>
            <NavRow>
                <NavLeft>
                    <h1 className="logo">WEBFLIX</h1>
                </NavLeft>
                <NavMiddle>
                </NavMiddle>
                <NavRight>
                    <Link exact to="/trending/movies">Movies</Link>
                    <Link exact to="/trending/shows">Shows</Link>
                    <Link exact to="/users/register">Register</Link>
                    <Link exact to="/users/login">Login</Link>
                    <Hamburger setOpen={setOpen} open={open}/>
                </NavRight>
            </NavRow>
            <Overlay className={open ? "show" : "hide"}>
                    <Link exact to="/trending/movies">Movies</Link>
                    <Link exact to="/trending/shows">Shows</Link>
                    <Link exact to="/users/register">Register</Link>
                    <Link exact to="/users/login">Login</Link>
            </Overlay>
        </NavContainer>
    )
}

const Hamburger = ({ setOpen, open }) =>
<HamburgerContainer className={open ? "open" : "closed"}onClick={() => setOpen(!open)}>
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
</HamburgerContainer>

export default NavBar;