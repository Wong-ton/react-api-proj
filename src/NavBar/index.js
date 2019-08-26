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
        <NavContainer color={"royalblue"}>
            <button className="btn">Logo</button>
            <NavRow>
                <NavLeft>
                    <p>Hi there</p>
                </NavLeft>
                <NavMiddle>
                    <p>Hello</p>
                </NavMiddle>
                <NavRight>
                    {/* {
                        routes.map(route =>
                            <Link exact to={`/${route}`}>{route}</Link>
                        )
                    } */}
                    <Link exact to="/">Home</Link>
                    <Link exact to="/register">Register</Link>
                    <Link exact to="/login">Login</Link>
                    <Hamburger setOpen={setOpen} open={open}/>
                </NavRight>
            </NavRow>
            <Overlay className={open ? "show" : "hide"}>
                {
                    routes.map(route =>
                        <Link exact to={`/${route}`}>{route}</Link>)
                }
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