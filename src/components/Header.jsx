import React, {useEffect} from "react";
import $ from "jquery";
import img_logo from "../assets/header/logo.png";

import {Link} from "react-router-dom";

const Header = () => {

    useEffect(() => {
        $(window).on("scroll", function () {
            if ($(window).scrollTop()) {
                $("nav").addClass("black");
            } else {
                $("nav").removeClass("black");
            }
        });
        $(".menu h4").click(function () {
            $("nav ul").toggleClass("active");
        });
        $("#body").click(function () {
            $("nav ul").removeClass("active");
        });
    }, []);
    return (
        <>
            <div className="responsive-bar">
                <div className="logo"
                    style={
                        {width: "70%"}
                }>
                    <div className="logo_container">
                        <img src={img_logo}
                            alt="logo"/><span><a href="/" style={{color:"white"}}>Pexdos</a></span>
                    </div>
                </div>
                <div className="menu">
                    <h4>Menu</h4>
                </div>
            </div>
            <nav>
                <div className="logo"
                    style={
                        {width: "10%"}
                }>
                    <div className="logo_container">
                        <img src={img_logo}
                            alt="logo"/><span><a href="/" style={{color:"white"}}>Pexdos</a></span>
                    </div>
                </div>
                <ul>
                    <li className="header_home_li">
                        <a className="mob-menu__link" href="#who">Who Are We</a>
                    </li>
                    <li>
                        <a className="mob-menu__link" href="#project">Projects</a>
                    </li>
                    <li>
                        <a className="mob-menu__link" href="#roadmap">Road Map</a>
                    </li>
                    <li>
                        <a className="mob-menu__link" href="#token">Tokenomics</a>
                    </li>
                    <li>
                        <a className="mob-menu__link" href="#paper">Whitepaper</a>
                    </li>
                    <button className="header_signin_btn">
                        Buy $PXDS on Pexdos Swap</button>
                    &nbsp;
                                                &nbsp;
                                                &nbsp;
                    <Link to="/signin">
                        <button className="header_signin_btn">
                            Sign In</button>
                    </Link>

                </ul>
            </nav>
        </>
    );
};

export default Header;
