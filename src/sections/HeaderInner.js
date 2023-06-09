import React from 'react'

const HeaderInner = () => {
    return (
        <>
            <header id="header" className="row Inner_header position-relative">
                <div className="col-12 py-2  z-index-1 top-bar align-self-start">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-6 align-self-center hidden-xs hidden-sm">
                                <div className="row">
                                    <div className="col col-auto ">
                                        <div>
                                            {" "}
                                            <span className="mr-2">Call to Book</span>
                                            <span className="icon-call" />{" "}
                                            <a href="tel:+9101244550000">012 44 55 0000</a>
                                        </div>
                                    </div>
                                    <div className="col col-auto border-left">
                                        <span className="icon-email" />{" "}
                                        <a href="mailto:customercare@flebo.in">customercare@flebo.in</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg-top-bar col-12 col-lg-6">
                                <div className="row justify-content-lg-end flex-row justify-content-sm-center login-r-sec">
                                    <div className="col col-auto align-self-center border-right sm-icons">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/Fleboin-106073985346129/"
                                                    target="_blank"
                                                >
                                                    <span className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/InFlebo" target="_blank">
                                                    <span className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/channel/UCAd_KFAJ9UKgVnRGC4nFZ2w"
                                                    target="_blank"
                                                >
                                                    <span className="fa fa-youtube-play" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://instagram.com/flebo.in?utm_medium=copy_link"
                                                    target="_blank"
                                                >
                                                    <span className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.linkedin.com/company/flebo-in"
                                                    target="_blank"
                                                >
                                                    <span className="icon-linkedin-1" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col col-auto align-self-center">
                                        <ul className="list-unstyled mb-0">
                                            <li className="my-account hidden mr-0">
                                                <a href="/dashboard/viewreports">My Account</a>
                                            </li>
                                            <li className="login-signup mr-0">
                                                <a href="/?login_popup=true">Login/Signup</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex flex-column z-index-1">
                    <nav className="row bg-white px-sm-2 py-4 px-lg-5 py-lg-4">
                        <div className="container">
                            <div className="row top-header">
                                <div className="flex-grow-0 text-center logo text-lg-left sh-logo col-auto col">
                                    <div className="mob-menu text-center hidden-md hidden-lg mr-4">
                                        <button
                                            type="button"
                                            className="navbar-toggle x collapsed"
                                            data-toggle="collapse"
                                            data-target="#mob-slideNav"
                                        >
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <a className="position-relative d-inline-block flebo-logo" href="/">
                                        <img
                                            src="https://flebo.in/health/wp-content/themes/flebo/images/flebo-dark-logo-n.svg"
                                            className="img-fluid"
                                            alt="flebo.in"
                                            width=""
                                            height=""
                                        />
                                    </a>
                                    <div
                                        id="main-nav"
                                        className="d-flex justify-content-end d-lg-none col"
                                    >
                                        <ul className="align-self-center nav">
                                            <li className="nav-item align-item-center">
                                                <img
                                                    src="https://flebo.in/health/wp-content/themes/flebo/images/ontime-flebo.png"
                                                    className="img-fluid"
                                                    alt="on Time or 100% money back Guarantee"
                                                    width=""
                                                    height=""
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-3 mt-lg-0 text-center d-flex hidden-xs header-heading hidden-sm align-self-center1 justify-content-center col">
                                    <div className="align-self-center">
                                        <h1 className="title mt-0 mb-2 py-0 sp-red-color font-size-24">
                                            Delhi
                                        </h1>
                                        <ul className="breadcrumbs font-size-10">
                                            <li className="breadcrumbs">
                                                <a href="#" className="home-breadcrumb">
                                                    Home
                                                </a>
                                                <span className="entry-categories"> &gt; Delhi</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="logo-max-w d-lg-block d-none col">
                                    <img
                                        src="https://flebo.in/health/wp-content/themes/flebo/images/flebo-offer-sticker.png"
                                        className="img-fluid"
                                        alt="flebo offer"
                                        width=""
                                        height=""
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="offer-code d-lg-none d-xl-none d-md-none row">
                        <div className="col">
                            <div className="align-items-center row">
                                <div className="col">
                                    <div className="w-100 text-center font-semiBold align-self-center">
                                        50% Cashback + 20% off
                                    </div>
                                </div>
                                <div className="col-auto code px-4 fullHeight d-flex col">
                                    <div className="cursor-pointer w-100 text-center align-self-center">
                                        <div data-toggle="modal" data-target="#exampleModalCenter">
                                            <span className="mr-2">Code :</span>
                                            <span className="font-semiBold">FLEBO2050</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-header sub-header-search-form row py-lg-2">
                        <div className="align-self-center px-0 col">
                            <div className="container">
                                <div className="justify-content-center row">
                                    <div className="align-self-center hidden-md hidden-lg text-center my-3 col-xl-6 col-lg-5 col-sm-12">
                                        <h3 className="title text-black my-0 py-0 font-size-14">Delhi</h3>
                                        <ul className="breadcrumbs text-grey font-size-12">
                                            <li>
                                                <a href="/" className="text-grey">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mytest" className="text-grey">
                                                    Delhi
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12">
                                        <div className="search-form px-2 mb-4 mb-lg-0 col-lg-12">
                                            <div className="justify-content-center flex-nowrap mx-0 row">
                                                <div className="d-flex w-100">
                                                    <div className="col-md-3 col-sm-4 col-5 col">
                                                        <div className="pr-2 row">
                                                            <div className="input-tooltip d-none">
                                                                <span className="first d-none">
                                                                    Presently this pincode is not serviceable
                                                                </span>
                                                                <span className="second d-none">
                                                                    Please enter 6 digit Valid Pincode.
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="d-flex px-0 bg-white rounded-5 overflow-hidden col py-1"
                                                                id="searchTooltip"
                                                            >
                                                                <div className="pl-4 pr-2 pt-1 pb-2 align-self-center w-45-px">
                                                                    <img
                                                                        src="https://flebo.in/health/wp-content/themes/flebo/images/placeholder-icon.svg"
                                                                        className="w-45-px"
                                                                        alt="location"
                                                                        width=""
                                                                        height=""
                                                                    />
                                                                </div>
                                                                <div className="position-absolute right-0 mr-3 top-bottom-0 d-flex translateY-10 mt-1">
                                                                    <i className="fa fa-times text-danger align-self-center font-size-16 d-none" />
                                                                    <i className="fa fa-spinner text-danger align-self-center font-size-16 d-none fa-spin" />
                                                                    <i className="fa fa-check text-lightgreen align-self-center font-size-16 d-none" />
                                                                </div>
                                                                <input
                                                                    autoComplete="off"
                                                                    onkeypress="return onlyNumberKey(event)"
                                                                    pattern="[6-9]{1}[0-9]{9}"
                                                                    min={6}
                                                                    maxLength={6}
                                                                    name="pincode"
                                                                    placeholder="Pincode"
                                                                    type="text"
                                                                    id="pincode"
                                                                    className="form-control flex-grow-1 border-0 py-4 align-self-center form-control"
                                                                    defaultValue={110059}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9 col-sm-8 col-7 col">
                                                        <div className="row">
                                                            <div className="d-flex px-0 bg-white rounded-5 mt-md-0 overflow-hidden col py-1">
                                                                <div className="pl-4 pr-2 pt-1 pb-2 align-self-center w-40-px">
                                                                    <img
                                                                        src="https://flebo.in/health/wp-content/themes/flebo/images/search-icon.svg"
                                                                        className="w-40-px"
                                                                        alt="search"
                                                                        width=""
                                                                        height=""
                                                                    />
                                                                </div>
                                                                <input
                                                                    autoComplete="off"
                                                                    name="txtsearch"
                                                                    placeholder="Add another test or health package"
                                                                    type="text"
                                                                    id="txtsearch"
                                                                    className="form-control bg-white flex-grow-1 py-4 border-0 form-control align-self-center"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-0 col-lg-12">
                                            <div className="collapse w-100" id="collapseExample">
                                                <div className="px-0 py-0 rounded-5 bg-white text-black red_scrollbar card-body">
                                                    <div className="d-flex flex-column">
                                                        <div className="list">
                                                            <div id="final-data" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderInner