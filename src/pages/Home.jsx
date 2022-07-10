import React, {useEffect} from "react";

import Grid from "@material-ui/core/Grid";
import video_btn_img from "../assets/body/video-btn.png";
import about_img from "../assets/body/about-img.webp";
import service_icon1 from "../assets/body/service-icon-1.png";
import service_icon2 from "../assets/body/service-icon-2.png";
import service_icon3 from "../assets/body/service-icon-3.png";
import service_icon4 from "../assets/body/service-icon-4.png";
import partner_icon1 from "../assets/body/partners-logo-1.png";
import partner_icon2 from "../assets/body/partners-logo-2.png";
import partner_icon3 from "../assets/body/partners-logo-3.webp";
import partner_icon4 from "../assets/body/partners-logo-4.webp";
import case_icon1 from "../assets/body/cases-icon-1.webp";
import case_icon2 from "../assets/body/cases-icon-2.png";
import case_icon3 from "../assets/body/cases-icon-3.png";
import case_icon4 from "../assets/body/cases-icon-4.png";
import bnb_round from "../assets/body/BSC-round.webp";
import avax_round from "../assets/body/avax-round.png";
import eth_round from "../assets/body/eth-round.png";
import solana_round from "../assets/body/solana-round.png";
import polygon_round from "../assets/body/polygon-round.png";
import token_img from "../assets/body/token-img.png";
import img_logo from "../assets/header/logo.png";
const Home = () => {
    return (
        <div id="body">
            <section className="economy">
                <div className="container" style={{ marginTop: "100px" }}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md={10}>
                            <div className="font_first">
                                <h1>
                                    Pexdos TOKEN&nbsp;
                                    <span>
                                        Building towards a community-driven
                                        METAVERSE Universe
                                    </span>
                                </h1>
                                <p>
                                    Community driven DAO platform with METAVERSE
                                    integration.
                                </p>
                            </div>

                            <div className="countdown">
                                <div id="countdown"></div>
                            </div>
                            {/* <div className="promo__btns-wrap">
                                <a className="btn" href="#">
                                    <button className="btn btn--medium swap-btn">
                                        <span className="swap-icon"></span>
                                        Buy $PXDS on Pexdos Swap
                                    </button>
                                </a>
                            </div> */}
                            {/* <div className="promo__btns-wrap">
                                <a
                                    href="https://pancakeswap.finance/swap?outputCurrency=0x2F1F71377e5C1070c6694171CFBde0eb6daf8023
                                                                                                                                                                                                                        "
                                    className="btn btn--medium btn--orange"
                                >
                                    <span>Buy $PXDS on PancakeSwap</span>
                                </a>
                            </div>
                            <div className="promo__btns-wrap">
                                <a
                                    href="https://dex.guru/token/0x2f1f71377e5c1070c6694171cfbde0eb6daf8023-bsc"
                                    className="btn btn--medium btn--orange"
                                >
                                    <span>Price Chart</span>
                                </a>
                            </div> */}
                            <p>
                                Token Contract Address:
                                0x2F1F71377e5C1070c6694171CFBde0eb6daf8023
                            </p>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        style={{
                            marginTop: "50px",
                            position: "relative",
                        }}
                    >
                        <Grid item xs={12}>
                            <a className="scroll-down" href="#scroll"></a>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        id="scroll"
                        style={{
                            marginTop: "150px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Grid item md={4}></Grid>
                        <Grid
                            item
                            xs={10}
                            md={6}
                            style={{ position: "relative" }}
                        >
                            <a
                                data-jarallax-element="-40"
                                href=""
                                className="economy__video-btn video-btn popup-youtube"
                                style={{
                                    transform:
                                        "translate3d(0px, -9.08485px, 0px)",
                                }}
                                data-jarallax-original-styles="transform: translate3d(0px, 114.859px, 0px);"
                            >
                                <img
                                    src={video_btn_img}
                                    alt="video buttong image"
                                />
                                <div
                                    id="jarallax-container-0"
                                    style={{
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        overflow: "hidden",
                                        pointerEvents: "none",
                                        zIndex: "-100",
                                    }}
                                >
                                    <div style={{ position: "absolute" }}></div>
                                </div>
                            </a>
                            <div className="economy__block">
                                <div className="economy__block-content">
                                    <div className="section-header section-header--white section-header--tire section-header--small-margin">
                                        <h4>WhO&nbsp; is Pexdos?</h4>

                                        <h2>
                                            We Are All In One &nbsp;
                                            <span>
                                                DAO &amp; METAVERSE Company
                                            </span>
                                        </h2>
                                    </div>
                                    <p>
                                        Pexdos is a decentralized protocol based
                                        on the $PXDS token – collateralized and
                                        backed by the METAVERSE DAO.
                                    </p>
                                    <ul>
                                        <li>
                                            <span>$PXDS</span>
                                            will be the reserve currency on BNB.
                                            In order to maintain price stability
                                            Pexdos will use the Algorithmic
                                            Reserve Currency algorithm and will
                                            also be supported by other
                                            decentralized assets. METAVERSE DAO
                                            is focused on a long term and
                                            profitable treasury fund allocation.
                                        </li>
                                        <li>
                                            <span>Our mission</span>
                                            is to use treasury funds allocated
                                            from users towards NFT Game
                                            development, 3D &amp; METAVERSE VR
                                            Games, along with investing directly
                                            into teams and corporations that
                                            have a long term vision on METAVERSE
                                            games and P2E!
                                        </li>
                                        <li>
                                            <span>Community Led.</span>
                                            This will be achieved through
                                            community voting as per majority
                                            decisions made by Pexdos Community.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="about" id="who">
                <div className="container">
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={10} md={6}>
                            <div id="transcroller-body">
                                <div data-aos-once="true" data-aos="fade-right">
                                    <div className="aos-item__inner">
                                        <div className="section-header section-header--animated section-header--tire section-header--small-margin">
                                            <h4>WHO ARE WE</h4>
                                            <h2>
                                                Pexdos
                                                <br />
                                                <div className="bg-title">
                                                    WHO ARE WE
                                                </div>
                                            </h2>
                                        </div>
                                        <div className="about__animated-content">
                                            <p>
                                                Community Led DAO platform with
                                                METAVERSE integration.
                                            </p>
                                            <ul>
                                                <li>
                                                    Staking Platform and Farming
                                                </li>
                                                <li>
                                                    A percentage of each
                                                    transaction is allocated
                                                    towards treasury.
                                                </li>
                                                <li>
                                                    Multi Chain integration for
                                                    better user experience.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={6}>
                            <img
                                src={about_img}
                                className="about__img img-responsive"
                                alt=""
                            ></img>
                        </Grid>
                    </Grid>
                </div>
                <section className="services" id="project">
                    <div className="section-header section-header--animated section-header--center section-header--medium-margin">
                        <h4>How Pexdos WORKS</h4>
                        <h2>Community is everything</h2>
                    </div>
                    <Grid container spacing={2} justifyContent="center">
                        <div
                            className="container"
                            style={{
                                marginBottom: "30px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                md={2}
                                style={{
                                    marginBottom: "30px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div id="transcroller-body">
                                    <div
                                        data-aos-once="true"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="1000"
                                    >
                                        <div className="aos-item__inner">
                                            <div
                                                className="service"
                                                style={{
                                                    position: "relative",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <div className="service_bg bg_first"></div>
                                                <img
                                                    src={service_icon1}
                                                    alt=""
                                                />
                                                <div className="service_title">
                                                    Treasury Revenue
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                md={2}
                                style={{
                                    marginBottom: "30px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div id="transcroller-body">
                                    <div
                                        data-aos-once="true"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        data-aos-duration="1000"
                                    >
                                        <div className="aos-item__inner">
                                            <div
                                                className="service"
                                                style={{
                                                    position: "relative",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <div className="service_bg bg_second"></div>
                                                <img
                                                    src={service_icon2}
                                                    alt=""
                                                />
                                                <div className="service_title">
                                                    Treasury Growth
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                md={2}
                                className="hide_service_content"
                            >
                                <img
                                    src={img_logo}
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        marginTop: "30px",
                                        marginRight: "10px",
                                    }}
                                    alt=""
                                />
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                md={2}
                                style={{
                                    marginBottom: "30px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div id="transcroller-body">
                                    <div
                                        data-aos-once="true"
                                        data-aos="fade-up"
                                        data-aos-delay="500"
                                        data-aos-duration="1000"
                                    >
                                        <div className="aos-item__inner">
                                            <div
                                                className="service"
                                                style={{
                                                    position: "relative",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <div className="service_bg bg_third"></div>
                                                <img
                                                    src={service_icon3}
                                                    alt=""
                                                />
                                                <div className="service_title">
                                                    Game Development
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                md={2}
                                style={{
                                    marginBottom: "30px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <div id="transcroller-body">
                                    <div
                                        data-aos-once="true"
                                        data-aos="fade-up"
                                        data-aos-delay="700"
                                        data-aos-duration="1000"
                                    >
                                        <div className="aos-item__inner">
                                            <div
                                                className="service"
                                                style={{
                                                    position: "relative",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <div className="service_bg bg_fourth"></div>
                                                <img
                                                    src={service_icon4}
                                                    alt=""
                                                />
                                                <div className="service_title">
                                                    Staking Rewards
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </section>
                <div
                    id="roadmap"
                    className="container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div className="section-header section-header--animated section-header--center section-header--medium-margin">
                        <h4>Our way</h4>
                        <h2>Road Map</h2>
                        <div className="bg-title">ROADMAP</div>
                    </div>

                    <div className="col-lg-6 offset-lg-4 col-sm-8 offset-sm-4">
                        <div className="road" style={{ width: "80%" }}>
                            <div className="road__item">
                                <div className="road__item-metka"></div>
                                <div className="road__item-content">
                                    <div className="road__item-title">
                                        Q1 2022
                                    </div>
                                    <p></p>
                                    <p>Pexdos TOKEN Platform Build.</p>
                                    <p>
                                        <b>
                                            Funding Rounds with Presale and
                                            start as decentralized as possible
                                        </b>
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="road__item">
                                <div className="road__item-metka"></div>
                                <div className="road__item-content">
                                    <div className="road__item-title">
                                        Q2 2022
                                    </div>
                                    <p></p>
                                    <p>Launch on Pancakeswap.</p>
                                    <p>
                                        <b>Multi Chain deployment (ETH-AVAX)</b>
                                    </p>
                                    <p>Launch on Uniswap.</p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="road__item">
                                <div className="road__item-metka"></div>
                                <div className="road__item-content">
                                    <div className="road__item-title">
                                        Q3 2022
                                    </div>
                                    <p></p>
                                    <p>METAVERSE Game Development Phase 1</p>
                                    <p>
                                        <b>CEX Listing.</b>
                                    </p>
                                    <p>Build a Game studio.</p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="road__item">
                                <div className="road__item-metka"></div>
                                <div className="road__item-content">
                                    <div className="road__item-title">
                                        Q4 2022
                                    </div>
                                    <p></p>
                                    <p>
                                        METAVERSE Game Development Phase 2 -
                                        Test
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="road__item road__item">
                                <div className="road__item-metka"></div>
                                <div className="road__item-content">
                                    <div className="road__item-title">
                                        Q1 2023
                                    </div>
                                    <p></p>
                                    <p>
                                        <b>
                                            Big Data application integration and
                                            DAO Integration
                                        </b>
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="roadmap"></section>

            <div id="transcroller-body">
                <div
                    data-aos-once="true"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                >
                    <div className="aos-item__inner">
                        <section className="partner">
                            <div className="partners-logo__block">
                                <div className="partners-logo__item">
                                    <img src={partner_icon1} alt="" />
                                    <p>BSCSCAN</p>
                                </div>
                                <div className="partners-logo__item">
                                    <img src={partner_icon2} alt="" />
                                    <p>COINMARKETCAP</p>
                                </div>
                                <div className="partners-logo__item">
                                    <img src={partner_icon3} alt="" />
                                    <p>COINGECKO</p>
                                </div>
                                <div className="partners-logo__item">
                                    <img src={partner_icon4} alt="" />
                                    <p>CERTIK</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <section className="case">
                <div className="container">
                    <div
                        style={{ marginTop: "120px" }}
                        className="section-header section-header--animated section-header--center section-header--medium-margin"
                    >
                        <h4>Pexdos PROJECTS</h4>
                        <h2>Building a community-driven METAVERSE Universe</h2>
                        <div className="bg-title">PROJECTS</div>
                    </div>
                </div>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={10} md={5}>
                        <div id="transcroller-body">
                            <div
                                data-aos-once="true"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                            >
                                <div className="aos-item__inner">
                                    <div className="flex">
                                        <img
                                            src={case_icon1}
                                            alt=""
                                            className="cases__item-icon"
                                        />
                                        <div className="cases__item-content">
                                            <div className="cases__item-title">
                                                Treasury Growth
                                            </div>
                                            <p className="cases__item-text">
                                                Treasury inflow is increasing
                                                the Treasury Balance and backs
                                                outstanding $PXDS tokens and
                                                regulates staking APY.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <div id="transcroller-body">
                            <div
                                data-aos-once="true"
                                data-aos="fade-left"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                            >
                                <div className="aos-item__inner">
                                    <div className="flex">
                                        <img
                                            src={case_icon2}
                                            alt=""
                                            className="cases__item-icon"
                                        />
                                        <div className="cases__item-content">
                                            <div className="cases__item-title">
                                                Treasury Revenue
                                            </div>
                                            <p className="cases__item-text">
                                                Liquidity Pool fees and Bond
                                                sales increase the treasury
                                                revenue, and lock in liquidity
                                                and helping to control supply.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <div id="transcroller-body">
                            <div
                                data-aos-once="true"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="2000"
                            >
                                <div className="aos-item__inner">
                                    <div className="flex">
                                        <img
                                            src={case_icon3}
                                            alt=""
                                            className="cases__item-icon"
                                        />
                                        <div className="cases__item-content">
                                            <div className="cases__item-title">
                                                Game Development
                                            </div>
                                            <p className="cases__item-text">
                                                Building DAO METAVERSE games.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <div id="transcroller-body">
                            <div
                                data-aos-once="true"
                                data-aos="fade-left"
                                data-aos-delay="300"
                                data-aos-duration="2000"
                            >
                                <div className="aos-item__inner">
                                    <div className="flex">
                                        <img
                                            src={case_icon4}
                                            alt=""
                                            className="cases__item-icon"
                                        />
                                        <div className="cases__item-content">
                                            <div className="cases__item-title">
                                                Staking Rewards
                                            </div>
                                            <p className="cases__item-text">
                                                Compounds yields automatically
                                                through a treasury backed token
                                                with intrinsic value.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        marginBottom: "100px",
                    }}
                >
                    <a
                        href="https://pancakeswap.finance/swap?outputCurrency=0x2F1F71377e5C1070c6694171CFBde0eb6daf8023"
                        className="btn btn--orange btn--uppercase"
                        style={{ padding: "5px 10px" }}
                    >
                        <span>Buy $PXDS on PancakeSwap</span>
                    </a>
                </div>
            </section>
            <section className="stat">
                <div
                    className="container section-header"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <h2 style={{ marginTop: "100px" }}>Stats</h2>
                    <div className="bg-title">Token Stats</div>
                </div>
                <Grid container justifyContent="center" spacing={2}>
                    <div
                        className="container"
                        style={{
                            marginBottom: "60px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Grid item xs={10} sm={5} md={3}>
                            <div className="counter__item">
                                <div className="counter__item-title">
                                    Pre-Sale $PXDS Starting PRICE (USD)
                                </div>
                                <div className="counter counter__item-value counter__item-value--blue numscroller">
                                    0.000067
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} sm={5} md={3}>
                            <div className="counter__item">
                                <div className="counter__item-title">
                                    PRE-SALE TOKEN Allocation
                                </div>
                                <div className="counter counter__item-value counter__item-value--blue numscroller">
                                    0.000067
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} sm={5} md={3}>
                            <div className="counter__item">
                                <div className="counter__item-title">
                                    Total PRE-SALE TOKEN
                                </div>
                                <div className="counter counter__item-value counter__item-value--blue numscroller">
                                    0.000067
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} sm={5} md={3}>
                            <div className="counter__item">
                                <div className="counter__item-title">
                                    Total PRE-SALE TOKEN
                                </div>
                                <div className="counter counter__item-value counter__item-value--blue numscroller">
                                    1
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </section>
            <section className="section section--no-pad-bot facts">
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="section-header section-header--animated section-header--center section-header--small-margin">
                        <h4>MULTI CHAIN STRUCTURE</h4>
                        <h2>MULTI-CHAIN SWAPPABLE SMART CONTRACT</h2>
                        <div className="bg-title">MULTI CHAIN</div>
                    </div>
                </div>
                <section className="roadmap"></section>
                <div className="container" style={{ marginTop: "-100px" }}>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="space-between"
                        className="chain_grp"
                    >
                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={2}
                            style={{ textAlign: "center" }}
                        >
                            <img src={bnb_round} className="bnb_round" alt="" />
                            <div className="facts__title">
                                BInance Smart Chain
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={2}
                            style={{ textAlign: "center" }}
                        >
                            <img src={eth_round} className="eth_round" alt="" />
                            <div className="facts__title">ETHEREUM</div>
                        </Grid>

                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={2}
                            style={{ textAlign: "center" }}
                        >
                            <img
                                src={polygon_round}
                                className="pol_round"
                                alt=""
                            />
                            <div className="facts__title">POLYGON</div>
                        </Grid>

                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={2}
                            style={{ textAlign: "center" }}
                        >
                            <img
                                src={avax_round}
                                className="avax_round"
                                alt=""
                            />
                            <div className="facts__title">AVALANCE</div>
                        </Grid>

                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={2}
                            style={{ textAlign: "center" }}
                        >
                            <img
                                src={solana_round}
                                className="sol_round"
                                alt=""
                            />
                            <div className="facts__title">SOLANA</div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="section token" id="token">
                <div className="container" justifyContent="space-between">
                    <Grid container>
                        <Grid item xs={10} md={5}>
                            <img src={token_img} alt="" className="token_img" />
                        </Grid>
                        <Grid item xs={10} md={7}>
                            <div id="transcroller-body">
                                <div
                                    data-aos-once="true"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="1000"
                                >
                                    <div className="aos-item__inner">
                                        <div className="col-lg-6 offset-lg-6 token__animated-content aos-init aos-animate">
                                            <div className="section-header section-header--tire section-header--small-margin">
                                                <h4>About PXDS</h4>
                                                <h2>Tokenomics</h2>
                                                <div className="bg-title">
                                                    TOKENOMICS
                                                </div>
                                            </div>
                                            <ul className="token__info-list">
                                                <li>
                                                    <span>Token name:</span>
                                                    Pexdos TOKEN&nbsp; &nbsp;
                                                    &nbsp; &nbsp;&nbsp;
                                                </li>
                                                <li>
                                                    <span>Ticker Symbol:</span>
                                                    $PXDS&nbsp; &nbsp; &nbsp;
                                                    &nbsp;&nbsp;
                                                </li>
                                                <li>
                                                    <span>Decimals:</span>
                                                    12;
                                                </li>
                                                <li>
                                                    <span>TOTAL SUPPLY:</span>
                                                    100 BILLION $PXDS
                                                </li>
                                                <li>
                                                    <span>
                                                        PHASE 1 PRE-SALE:
                                                    </span>
                                                    04/03/2022 - 15/04/2022
                                                </li>
                                                <li>
                                                    <span>
                                                        PHASE 2 PRE-SALE:
                                                    </span>
                                                    15/04/2022 - 12/05/2022
                                                </li>
                                                <li>
                                                    <span>
                                                        PHASE 3 PRE-SALE:
                                                    </span>
                                                    12/05/2022 - 24/06/2022
                                                </li>
                                                <li>
                                                    <span>TOTAL PRE-SALE:</span>
                                                    30,000,000,000 $PXDS
                                                </li>
                                                <li>
                                                    <span>TAX:</span>
                                                    6% TAX on ALL Orders
                                                </li>
                                                <li></li>
                                            </ul>
                                            <h2>TAX</h2>
                                            <div className="data__info">
                                                <div className="data__info-item">
                                                    AIRDROP TO USERS
                                                    <b
                                                        style={{
                                                            color: "#77c0f6",
                                                        }}
                                                    >
                                                        2%
                                                    </b>
                                                </div>
                                                <div className="data__info-item">
                                                    LP ACQUISITION
                                                    <b
                                                        style={{
                                                            color: "#f9778a",
                                                        }}
                                                    >
                                                        2%
                                                    </b>
                                                </div>
                                                <div className="data__info-item">
                                                    MARKETING-DEVELOPMENT
                                                    <b
                                                        style={{
                                                            color: "#f3d667",
                                                        }}
                                                    >
                                                        2%
                                                    </b>
                                                </div>
                                            </div>
                                            <a
                                                style={{ padding: "10px" }}
                                                href="https://pancakeswap.finance/swap?outputCurrency=0x2F1F71377e5C1070c6694171CFBde0eb6daf8023"
                                                className="btn btn--small btn--uppercase btn--orange"
                                            >
                                                <span>
                                                    Buy $PXDS on PancakeSwap
                                                </span>
                                            </a>
                                            <div className="token__desc">
                                                <div className="token__desc-title">
                                                    &nbsp;
                                                </div>
                                                <div className="token__desc-text">
                                                    <p>&nbsp;</p>
                                                    <p>&nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="roadmap1"></section>

            <section
                className="docs"
                id="paper"
                style={{ marginTop: "-500px" }}
            >
                <div className="container">
                    <div className="section-header section-header--animated seaction-header--center section-header--tire section-header--medium-margin">
                        <h4>Our files</h4>
                        <h2>Documents</h2>
                        <div className="bg-title">DOCUMENTS</div>
                    </div>
                </div>
                <Grid container spacing={2} justifyContent="center">
                    <div
                        className="container"
                        style={{
                            marginBottom: "30px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={3}
                            style={{
                                marginBottom: "30px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div id="transcroller-body">
                                <div
                                    data-aos-once="true"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="1000"
                                >
                                    <div className="aos-item__inner">
                                        <div
                                            className="service service_other"
                                            style={{
                                                position: "relative",
                                                textAlign: "center",
                                            }}
                                        >
                                            <div className="service_bg1"></div>
                                            <img
                                                src={img_logo}
                                                alt=""
                                                style={{
                                                    position: "relative",
                                                    zIndex: 1,
                                                    width: "50px",
                                                    marginBottom: "50px",
                                                }}
                                            />
                                            <div className="service_title1">
                                                Terms & Conditions
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={3}
                            style={{
                                marginBottom: "30px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div id="transcroller-body">
                                <div
                                    data-aos-once="true"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000"
                                >
                                    <div className="aos-item__inner">
                                        <div
                                            className="service service_other"
                                            style={{
                                                position: "relative",
                                                textAlign: "center",
                                            }}
                                        >
                                            <div className="service_bg1"></div>
                                            <img
                                                src={img_logo}
                                                alt=""
                                                style={{
                                                    position: "relative",
                                                    zIndex: 1,
                                                    width: "50px",
                                                    marginBottom: "50px",
                                                }}
                                            />
                                            <div className="service_title1">
                                                WhitePaper
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={3}
                            style={{
                                marginBottom: "30px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div id="transcroller-body">
                                <div
                                    data-aos-once="true"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    data-aos-duration="1000"
                                >
                                    <div className="aos-item__inner">
                                        <div
                                            className="service service_other"
                                            style={{
                                                position: "relative",
                                                textAlign: "center",
                                            }}
                                        >
                                            <div className="service_bg1"></div>
                                            <img
                                                src={img_logo}
                                                alt=""
                                                style={{
                                                    position: "relative",
                                                    zIndex: 1,
                                                    width: "50px",
                                                    marginBottom: "50px",
                                                }}
                                            />
                                            <div className="service_title1">
                                                Privacy Policy
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={3}
                            style={{
                                marginBottom: "30px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div id="transcroller-body">
                                <div
                                    data-aos-once="true"
                                    data-aos="fade-up"
                                    data-aos-delay="700"
                                    data-aos-duration="1000"
                                >
                                    <div className="aos-item__inner">
                                        <div
                                            className="service service_other"
                                            style={{
                                                position: "relative",
                                                textAlign: "center",
                                            }}
                                        >
                                            <div className="service_bg1"></div>
                                            <img
                                                src={img_logo}
                                                alt=""
                                                style={{
                                                    position: "relative",
                                                    zIndex: 1,
                                                    width: "50px",
                                                    marginBottom: "50px",
                                                }}
                                            />
                                            <div className="service_title1">
                                                Gertik Audit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </section>
            <section className="data">
                <div className="container" justifyContent="space-between">
                    <Grid container>
                        <Grid item xs={10} md={5}>
                            <main>
                                <section>
                                    <h1>Статистика браузеров (06.2014)</h1>
                                    <div className="pie-container">
                                        <div id="safari" className="pie"></div>
                                        <div id="ie" className="pie"></div>
                                        <div id="firefox" className="pie"></div>
                                        <div id="chrome" className="pie"></div>
                                    </div>
                                    <div className="stats">
                                        <ul>
                                            <li data-name="dis">
                                                50% Distribution
                                            </li>
                                            <li data-name="presale">
                                                30% Pre-Sale
                                            </li>
                                            <li data-name="Team">
                                                10% Team Funds
                                            </li>
                                            <li data-name="Marketing">
                                                10% Marketing
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </main>
                        </Grid>
                        <Grid item xs={10} md={7}>
                            <div id="transcroller-body">
                                <div
                                    data-aos-once="true"
                                    data-aos="fade-left"
                                    data-aos-delay="1000"
                                    data-aos-duration="1000"
                                >
                                    <div className="aos-item__inner">
                                        <div className="col-lg-6 offset-lg-6 token__animated-content aos-init aos-animate">
                                            <div className="section-header section-header--tire section-header--small-margin">
                                                <h4>TOKEN INFORMATION</h4>
                                                <h2>
                                                    Token Distribution &
                                                    Deployment
                                                </h2>
                                                <div className="bg-title">
                                                    Token Distribution &
                                                    Deployment
                                                </div>
                                            </div>
                                            <ul className="token__info-list">
                                                <li>
                                                    <span>Name:</span>
                                                    Pexdos&nbsp; &nbsp; &nbsp;
                                                    &nbsp;&nbsp;
                                                </li>
                                                <li>
                                                    <span>First Chain:</span>
                                                    BSC (BEP-20)&nbsp; &nbsp;
                                                    &nbsp; &nbsp;&nbsp;
                                                </li>
                                                <li>
                                                    <span>Second Chain:</span>
                                                    ETHEREUM (ERC-20)
                                                </li>
                                                <li>
                                                    <span>
                                                        Third Chain and later
                                                        on:
                                                    </span>
                                                    To be decided with user
                                                    votes.
                                                </li>

                                                <li></li>
                                            </ul>
                                            <div className="data__info">
                                                <div className="data__info-item">
                                                    Bridge Reserve
                                                    <b
                                                        style={{
                                                            color: "#77c0f6",
                                                        }}
                                                    >
                                                        5,000,000,000 PXDS
                                                    </b>
                                                </div>
                                                <div className="data__info-item">
                                                    Pre-SALE
                                                    <b
                                                        style={{
                                                            color: "#f9778a",
                                                        }}
                                                    >
                                                        30,000,000,000 PXDS
                                                    </b>
                                                </div>
                                            </div>
                                            <p>No New Token emissions</p>

                                            <a
                                                style={{ padding: "10px" }}
                                                href="https://pancakeswap.finance/swap?outputCurrency=0x2F1F71377e5C1070c6694171CFBde0eb6daf8023"
                                                className="btn btn--small btn--uppercase blue"
                                            >
                                                <span>
                                                    Buy $PXDS on PancakeSwap
                                                </span>
                                            </a>
                                            <div className="token__desc">
                                                <div className="token__desc-title">
                                                    &nbsp;
                                                </div>
                                                <div className="token__desc-text">
                                                    <p>&nbsp;</p>
                                                    <p>&nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="footer">
                    <div className="container">
                        <Grid
                            container
                            justifyContent="center"
                            style={{ textAlign: "center" }}
                        >
                            <Grid
                                item
                                style={{ justifyContent: "center" }}
                                xs={12}
                                md={6}
                            >
                                <a href="#" className="logo">
                                    <div className="logo__img">""</div>
                                    <div className="logo__title">Pexdos</div>
                                </a>
                                <div className="copyright">© 2022, Pexdos</div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="social-block__title">
                                    Stay connected:
                                </div>
                                <ul
                                    className="social-list"
                                    style={{ justifyContent: "center" }}
                                >
                                    <li className="social-list__item">
                                        <a
                                            href="https://twitter.com/Pexdos_io"
                                            className="social-list__link"
                                        >
                                            <i className="fontello-icon fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="social-list__item">
                                        <a
                                            href="https://www.facebook.com/Pexdos"
                                            className="social-list__link"
                                        >
                                            <i className="fontello-icon fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="social-list__item">
                                        <a
                                            href="https://t.me/PexdosTOKENOFFICIAL"
                                            className="social-list__link"
                                        >
                                            <i className="fontello-icon fab fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li className="social-list__item">
                                        <a
                                            href="https://www.instagram.com/Pexdos_io"
                                            className="social-list__link"
                                        >
                                            <i className="fontello-icon fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
