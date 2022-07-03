import React, {useEffect} from "react";
import $ from "jquery";
import img_logo from "../assets/header/logo.png";
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
                            alt="logo"/><span>FIREPING</span>
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
                            alt="logo"/><span>FIREPING</span>
                    </div>
                </div>
                <ul>
                    <li className="header_home_li">
                        <a href="#who">Who Are We</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#roadmap">Road Map</a>
                    </li>
                    <li>
                        <a href="#token">Tokenomics</a>
                    </li>
                    <li>
                        <a href="#paper">Whitepaper</a>
                    </li>
                    <button className="header_signin_btn">
                        Buy $FRPN on Firepin Swap</button>
                </ul>
            </nav>
        </>
    );
};

export default Header;