import React from 'react'
import HeaderBlackStrip from '../components/HeaderBlackStrip';
import MobileNav from '../components/MobileNav';
import * as config from '../config';

const Header = () => {
    return (

        <header id="header" className="row position-relative z-index-3 flex-shrink-0 ">
            <HeaderBlackStrip />
            <div className="d-flex flex-column z-index-1 col-lg-12">
                <nav className="row header-nav px-5 py-4">
                    <div className="lg-screen-max-width container-fluid">
                        <div className="justify-content-between top-header row">
                            <div className="flex-grow-0 text-center logo text-lg-left lg-logo col-auto col">
                                <div className="mob--menu text-center hidden-md hidden-lg mr-4 px-0 col">
                                    <button aria-label="Menu Button" type="button"
                                        className="navbar-toggle x collapsed btn btn-outline-danger my-0">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <a className="position-relative d-inline-block flebo-logo" href="/">
                                    <img loading="lazy" src="https://img.flebo.in/assets/flebo-dark-logo-n.svg"
                                        alt="Flebo.in" className="img-fluid" />
                                </a>
                            </div>
                            <div id="main-nav" className="d-flex justify-content-end col">
                                <ul className="align-self-center nav">
                                    <li className="nav-item d-flex flex-row align-item-center hidden-xs hidden-sm hidden">
                                        <div className="w-25-px mr-2 align-self-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512}
                                                className="img-fluid" viewBox="0 0 512 512">
                                                <path fill="#e31019"
                                                    d="M416.755.662c40.927.107 60.339 19.148 60.531 59.424.188 40.411.252 80.824-.026 121.236-.264 37.565-20.724 61.088-57.998 56.696-52.431-6.167-86.727 12.088-115.464 56.006-28.005 42.791-67.409 42.625-95.767-.217-28.848-43.578-63.063-62.156-115.558-55.806-36.994 4.473-57.487-19.361-57.722-56.977-.255-41.123-.289-82.245.013-123.368.272-36.458 20.31-56.73 56.56-56.938 55.3-.315 272.26-.192 325.432-.055zM274.072 204.918c48.486 0 95.805-.442 143.103.217 19.289.268 26.651-7.772 26.311-26.72-.698-38.952-.681-77.938-.005-116.89.324-18.612-6.243-27.154-25.885-27.065-107.688.468-215.377.4-323.062.051-17.676-.059-26.201 6.303-25.954 24.809.536 40.374.558 80.773-.008 121.147-.269 18.702 8.589 25.102 26.111 24.605 21.945-.621 44.072-1.69 65.813.519 10.547 1.072 22.8 6.887 30.035 14.565 17.433 18.493 31.372 40.284 48.869 58.7 5.456 5.737 22.038 9.827 26.243 6.205 14.296-12.308 25.341-28.392 39.603-45.392-13.509-.595-21.851-.962-31.172-1.366-.005-10.649-.005-20.379-.005-33.385zM42.906 377.913c-13.121-46.094-6.934-73.036 20.596-92.647 23.732-16.906 56.142-16.612 79.543.716 26.861 19.897 33.117 48.405 19.156 91.481 37.47 27.175 45.328 66.77 42.957 110.689-.856 15.889-7.184 23.344-23.268 23.281-52.478-.217-104.965-.289-157.442.047-17.255.106-23.273-7.767-24.119-24.604-2.175-43.302 5.861-82.041 42.579-108.961zm132.752 98.588c-6.358-20.357-9.734-38.356-17.561-54.142-7.44-14.998-19.451-24.89-39.68-15.935-8.793 3.894-22.178 4.035-30.908.128-20.085-8.997-32.406.43-39.816 15.488-7.938 16.131-11.261 34.529-17.369 54.461h145.334zm-72.299-101.508c18.425-.336 33.644-16.096 33.296-34.483-.349-18.48-16.037-33.623-34.475-33.279-18.535.349-33.606 15.952-33.266 34.457.332 18.471 16.025 33.644 34.445 33.304zM468.671 377.461c37.45 27.243 45.345 66.826 42.932 110.761-.873 15.93-7.308 23.277-23.341 23.209-52.478-.226-104.964-.293-157.442.038-17.297.106-23.2-7.89-24.043-24.677-2.183-43.306 5.908-82.024 42.608-108.918-13.211-45.885-6.95-73.06 20.634-92.661 23.757-16.876 56.159-16.548 79.538.805 26.796 19.91 33.006 48.286 19.114 91.443zm11.798 99.075c-4.141-17.616-5.589-33.321-11.555-47.073-10.176-23.438-20.966-26.822-45.988-22.08-9.444 1.792-20.949 2.958-29.111-.8-20.029-9.227-32.376.49-39.752 15.556-7.895 16.131-11.185 34.513-17.241 54.397h143.649zM443.096 340.39c-.417-18.476-16.161-33.568-34.594-33.159-18.531.417-33.551 16.079-33.147 34.577.4 18.471 16.152 33.594 34.564 33.185s33.589-16.233 33.176-34.603z" />
                                                <path fill="#e31019"
                                                    d="M134.131 103.635h39.846v32.211h-39.846v-32.21zM276.435 104.287v31.393h-39.974v-31.393h39.974zM337.791 135.718V104.24h40.348v31.478h-40.348z" />
                                            </svg>
                                        </div>
                                        <a href="/public/forum/" className="nav-link mt-1 align-self-center">
                                            Discussion Board
                                        </a>
                                    </li>
                                    <li className="nav-item align-item-center" />
                                    <li className="nav-item d-flex flex-row align-item-center hidden-xs hidden-sm">
                                        <div className="w-25-px mr-1 align-self-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512}
                                                className="img-fluid" viewBox="0 0 512 512">
                                                <path fill="#e31019"
                                                    d="m473.489 138.918-.015-.399a533.034 533.034 0 0 1-.461-15.91c-.418-28.231-22.86-51.582-51.094-53.16-58.867-3.285-104.406-22.48-143.316-60.406l-.332-.316c-12.692-11.636-31.836-11.636-44.531 0l-.332.316c-38.91 37.925-84.449 57.121-143.316 60.41-28.23 1.574-50.675 24.925-51.093 53.16a530.026 530.026 0 0 1-.461 15.906l-.023.926c-1.145 60.027-2.566 134.734 22.425 202.542 13.742 37.289 34.554 69.703 61.855 96.347 31.094 30.344 71.82 54.433 121.046 71.597a37.383 37.383 0 0 0 4.961 1.351c2.391.476 4.797.715 7.203.715s4.817-.238 7.203-.715a37.46 37.46 0 0 0 4.981-1.36c49.168-17.195 89.851-41.297 120.918-71.637 27.289-26.652 48.101-59.074 61.856-96.371 25.086-68.012 23.668-142.859 22.527-203zm-50.715 192.606c-26.36 71.469-80.168 120.55-164.5 150.043a7.764 7.764 0 0 1-.953.258 6.746 6.746 0 0 1-2.641-.004 7.65 7.65 0 0 1-.946-.254c-84.421-29.438-138.265-78.492-164.605-149.964-23.035-62.504-21.731-131.082-20.578-191.582l.008-.336c.234-5.199.391-10.644.477-16.629.188-12.535 10.172-22.906 22.731-23.605 33.313-1.859 62.578-8.297 89.469-19.68 26.856-11.367 50.707-27.391 72.91-48.984 1.129-.953 2.594-.957 3.719 0 22.207 21.593 46.058 37.617 72.91 48.984 26.89 11.383 56.156 17.82 89.472 19.68 12.558.699 22.543 11.07 22.726 23.609.09 6.016.246 11.461.481 16.625 1.149 60.57 2.422 129.203-20.68 191.839z" />
                                                <path fill="#e31019"
                                                    d="M255.998 128.411c-70.359 0-127.597 57.242-127.597 127.598 0 70.359 57.238 127.601 127.597 127.601 70.356 0 127.598-57.242 127.598-127.601 0-70.356-57.242-127.597-127.597-127.597zm0 225.152c-53.793 0-97.555-43.762-97.555-97.555s43.762-97.555 97.555-97.555c53.789 0 97.55 43.762 97.55 97.555s-43.762 97.555-97.55 97.555z" />
                                                <path fill="#e31019"
                                                    d="m292.67 216.395-59.266 59.266-16.086-16.086c-5.867-5.867-15.379-5.867-21.246 0-5.863 5.867-5.863 15.379 0 21.242l26.711 26.711c2.934 2.933 6.778 4.399 10.621 4.399s7.688-1.465 10.621-4.399l69.891-69.891c5.863-5.867 5.863-15.379 0-21.242-5.867-5.871-15.379-5.871-21.246 0z" />
                                            </svg>
                                        </div>
                                        <a className="nav-link mt-1 align-self-center" href="/#our-promise">
                                            Our Promise
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="fullHeight header-center mt-4 mt-lg-0 row">
                    <div className="align-self-center col-lg-12">
                        <div className="lg-screen-max-width container-fluid">
                            <div className="justify-content-center mb-4 row">
                                <div
                                    className="text-center mb-4 d-flex justify-content-center align-items-center flex-column col-lg-12">
                                    <h4 className="text-black font-semiBold mt-0">
                                        Book a Home Collection
                                    </h4>
                                    <h1 className="text-primary-color px-lg-5 mt-0 mt-lg-3 mb-0">
                                        Book Any Test From Any Lab
                                    </h1>
                                </div>
                                <div className="d-lg-flex d-md-flex justify-content-center w-100 book_test_and_lab">
                                    <div className="w-custom">
                                        <div className="test-search-bar px-0 col-lg-12">
                                            <div className="search-form mb-0 col-lg-12">
                                                <div className="justify-content-center flex-nowrap mx-0 row">
                                                    <div className="d-flex flex-wrap w-100">
                                                        <div className="col-6 col-lg-3 col-xl-2 order-lg-0 col">
                                                            <div className="pincode row">
                                                                <div
                                                                    className="d-flex px-0 bg-white rounded-5 overflow-hidden col">
                                                                    <div className="align-self-center w-30-px ml-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024}
                                                                            height={1024} viewBox="0 0 1024 1024"
                                                                            className="img-fluid">
                                                                            <path fill="#e31019"
                                                                                d="M512 0C300.224 0 128 172.224 128 384c0 266.176 346.624 615.872 361.344 630.656 6.272 6.208 14.464 9.344 22.656 9.344s16.384-3.136 22.656-9.344C549.376 999.872 896 650.176 896 384 896 172.224 723.776 0 512 0zm0 945.728C435.584 863.936 192 587.328 192 384c0-176.448 143.552-320 320-320s320 143.552 320 320c0 203.136-243.584 479.936-320 561.728z" />
                                                                            <path fill="#e31019"
                                                                                d="M512 192c-105.856 0-192 86.144-192 192s86.144 192 192 192 192-86.144 192-192-86.144-192-192-192zm0 320c-70.592 0-128-57.408-128-128s57.408-128 128-128 128 57.408 128 128-57.408 128-128 128z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div
                                                                        className="position-absolute right-0 mr-3 top-bottom-0 d-flex" />
                                                                    <input autoComplete="off" pattern="[6-9]{1}[0-9]{9}"
                                                                        inputMode="numeric" min={6} maxLength={6}
                                                                        name="pincode" placeholder="Pincode" type="text"
                                                                        id="pincode"
                                                                        className="form-control flex-grow-1 border-0 py-4 align-self-center form-control"
                                                                        defaultValue="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-lg-3 col-xl-2 order-lg-2 col">
                                                            <div className="row">
                                                                <div className="d-flex pl-2 pr-2 bg-white rounded-5 col">
                                                                    <select
                                                                        className="border-0 w-100 bg-transparent position-relative z-index-1">
                                                                        <option value="pathology_radiology">
                                                                            All
                                                                        </option>
                                                                        <option value="radiology">Radiology</option>
                                                                        <option value="pathology">Pathology</option>
                                                                    </select>
                                                                    <i className="fa fa-angle-down pl-2 position-absolute top-0 right-0 mr-3 font-size-16 bottom-0 z-index-0 text-grey d-flex align-items-center"
                                                                        aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-md-12 col-lg-6 col-xl-8 mt-md-2-px mt-xs-2-px order-lg-1 col">
                                                            <div className="search-test row">
                                                                <div
                                                                    className="d-flex px-0 bg-white rounded-5 overflow-hidden col">
                                                                    <div className="align-self-center w-20-px ml-3">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024}
                                                                            height={1024} viewBox="0 0 1024 1024"
                                                                            className="img-fluid">
                                                                            <path fill="#e31019"
                                                                                d="M450.949 0C202.304 0 .001 202.302.001 450.948c0 248.66 202.302 450.948 450.948 450.948 248.66 0 450.948-202.288 450.948-450.948C901.897 202.303 699.609 0 450.949 0zm0 818.648c-202.746 0-367.696-164.952-367.696-367.696 0-202.747 164.95-367.699 367.696-367.699 202.745 0 367.696 164.95 367.696 367.696 0 202.745-164.952 367.7-367.696 367.7z" />
                                                                            <path fill="#e31019"
                                                                                d="M1011.804 952.945 773.146 714.287c-16.263-16.263-42.598-16.263-58.858 0-16.263 16.249-16.263 42.613 0 58.862l238.654 238.654c8.13 8.13 18.776 12.197 29.433 12.197 10.639 0 21.296-4.067 29.429-12.197 16.26-16.249 16.26-42.609 0-58.858z" />
                                                                        </svg>
                                                                    </div>
                                                                    <input autoComplete="off" name="txtsearch"
                                                                        placeholder="Book a Pathology or Radiology Test"
                                                                        type="text" id="txtsearch"
                                                                        className="form-control flex-grow-1 py-4 border-0 form-control"
                                                                        defaultValue="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" Uploads align-self-center mb-4 mb-lg-0 overflow-hidden">
                                        <span
                                            className="mx-4 text-black font-semilight font-size-18 d-sm-block d-md-inline-block">
                                            or
                                        </span>
                                        <div className="file-input">
                                            <input type="file" id="prescription" name="upload-precription"
                                                accept="image/*,capture=camera" style={{ display: "none" }} />
                                            <button className="upload-file">Upload a file</button>
                                            <label className="input-label cursor-pointer">
                                                <span className="w-40-px d-inline-block m-auto cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={998} height={1024}
                                                        className="img-fluid" viewBox="0 0 998 1024">
                                                        <path fill="#e31019"
                                                            d="M319.478 6.256c-8.116-8.332-21.277-8.334-29.396-.004L61.431 240.918l29.393 30.166 193.167-198.25v97.834c0 35.346-27.919 64-62.359 64h-62.359v42.665h62.359c57.372-.068 103.862-47.785 103.93-106.665V21.334c0-5.656-2.187-11.08-6.084-15.078z" />
                                                        <path fill="#e31019"
                                                            d="M803.722 597.333V106.666C803.654 47.786 757.162.07 699.791 0h-394.94c-5.513.002-10.798 2.25-14.695 6.25L61.505 240.918c-3.897 4-6.09 9.426-6.09 15.082v661.333c.068 58.88 46.561 106.596 103.931 106.667h540.445c57.37-.071 103.862-47.787 103.931-106.667V896H762.15v21.333c0 35.346-27.921 64-62.359 64H159.346c-34.44 0-62.359-28.654-62.359-64V264.832L313.456 42.665h386.335c34.441 0 62.359 28.654 62.359 64V597.33l41.572.003z" />
                                                        <path fill="#e31019"
                                                            d="M575.036 511.997c-11.479 0-20.787 9.552-20.787 21.333v64h41.572v-42.664h41.572v-42.669h-62.356zM387.939 725.333h-41.572v-42.664c0-11.784-9.305-21.336-20.787-21.336h-83.145c-11.48 0-20.787 9.552-20.787 21.336v42.664h-41.572c-11.48 0-20.787 9.552-20.787 21.336V832c0 11.784 9.307 21.333 20.787 21.333h41.572V896c0 11.784 9.307 21.333 20.787 21.333h83.145c11.482 0 20.787-9.549 20.787-21.333v-42.667h41.572c11.482 0 20.787-9.549 20.787-21.333v-85.333c-.003-11.781-9.305-21.333-20.787-21.333zm-20.788 85.334h-41.572c-11.479 0-20.786 9.552-20.786 21.333v42.667h-41.572V832c0-11.781-9.307-21.333-20.787-21.333h-41.572V768h41.572c11.48 0 20.787-9.552 20.787-21.333V704h41.572v42.667c0 11.781 9.307 21.333 20.786 21.333h41.572v42.667z" />
                                                        <path fill="#e31019"
                                                            d="M159.289 511.997h415.724v42.667H159.289v-42.667zM159.289 405.333h540.445V448H159.289v-42.667zM387.939 298.669h311.795v42.664H387.939v-42.664zM471.082 191.999h228.649v42.666H471.082v-42.666zM387.939 191.999h41.611v42.708h-41.611v-42.708zM673.829 841.232c-1.967-.685-6.155-1.027-12.564-1.027h-52.308c-4.445 0-7.992-.683-10.642-2.051-2.649-1.455-3.975-4.059-3.975-7.822 0-2.733.643-4.915 1.925-6.538 3.248.856 6.367 1.281 9.358 1.281 2.993 0 5.343-.299 7.052-.898 1.709-.683 3.206-1.835 4.487-3.461 2.563-3.419 3.847-9.103 3.847-17.051V672.512c-.257-5.984-2.224-9.786-5.897-11.411-1.113-.512-2.652-.982-4.616-1.41-1.88-.428-3.763-.856-5.643-1.281-1.793-.515-3.332-1.111-4.613-1.796-2.565-1.368-3.847-3.161-3.847-5.385 0-4.017.683-6.879 2.051-8.588 1.967.683 6.197 1.024 12.692 1.024h16.668l50.512-1.41c26.325 0 46.025 4.703 59.103 14.102 13.076 9.318 19.614 22.481 19.614 39.49 0 12.734-4.143 24.442-12.435 35.126-9.232 11.881-21.966 19.915-38.206 24.103 4.445 3.077 9.486 8.717 15.129 16.922l13.59 19.873c12.734 18.548 23.289 27.821 31.665 27.821 3.164 0 5.556-.299 7.181-.898l3.203-1.284c.685-.255 1.455-.383 2.308-.383.856 0 1.754.683 2.694 2.051.94 1.281 1.41 2.778 1.41 4.487s-.727 3.76-2.179 6.155c-1.455 2.308-3.505 4.401-6.155 6.283-5.984 4.359-12.522 6.538-19.616 6.538s-12.947-1.197-17.563-3.589c-4.529-2.395-8.72-5.514-12.564-9.36-3.763-3.931-7.223-8.376-10.384-13.333a242.836 242.836 0 0 1-8.72-15.258l-7.564-15.255c-5.383-11.112-9.699-18.248-12.947-21.409-3.164-3.248-6.068-4.873-8.72-4.873h-12.947c-2.137 0-3.206-1.539-3.206-4.616 0-4.272 1.625-7.606 4.873-9.998 1.111-.769 4.443-1.197 9.998-1.284 5.556-.171 11.794-1.365 18.718-3.589 7.008-2.221 12.779-5.257 17.308-9.103 8.804-7.606 13.204-18.29 13.204-32.051 0-11.537-3.847-20.981-11.537-28.333-8.72-8.289-20.855-12.519-36.412-12.692-10.256 0-17.093 1.539-20.512 4.616-3.419 2.907-5.215 8.42-5.385 16.539v130.899c0 6.751 1.88 11.025 5.643 12.818 1.195.515 2.778.985 4.742 1.41 1.967.428 3.847.898 5.643 1.413 1.88.425 3.461.982 4.742 1.665 2.565 1.368 3.847 3.206 3.847 5.514 0 3.931-.683 6.753-2.051 8.462zm124.487-13.079c0-3.161 1.452-7.094 4.359-11.794 2.907-4.787 6.795-10.043 11.666-15.77 4.96-5.811 10.77-12.052 17.437-18.718l21.026-21.409-26.283-38.463c-6.325-9.486-12.222-14.228-17.692-14.228-2.308 0-4.317.383-6.026 1.153-1.625.683-2.949 1.027-3.975 1.027-.94 0-1.709-.215-2.308-.643a5.793 5.793 0 0 1-1.539-1.665c-1.709-2.565-1.494-5.427.643-8.591 2.221-3.161 4.613-5.769 7.179-7.819 6.239-4.873 13.162-7.307 20.769-7.307 5.044 0 8.762.725 11.154 2.179 4.275 2.479 8.034 6.667 11.282 12.564l27.181 50.641c11.366-11.624 19.957-22.436 25.768-32.437 1.967-3.847 2.949-7.092 2.949-9.744 0-4.529-4.359-7.307-13.076-8.331-.769-1.284-1.155-2.652-1.155-4.104s.811-2.862 2.437-4.23c1.709-1.455 3.802-2.649 6.281-3.589 4.96-1.967 10.513-2.949 16.668-2.949s11.025 1.41 14.617 4.23c3.673 2.736 5.511 5.855 5.511 9.358 0 3.419-.769 6.837-2.308 10.258-1.539 3.419-3.631 7.05-6.281 10.896s-5.685 7.819-9.103 11.923a281.923 281.923 0 0 1-10.77 12.18c-10.169 10.513-17.563 17.82-22.179 21.921l27.307 39.358c3.421 4.787 6.496 8.678 9.232 11.668 2.82 2.907 5.598 4.359 8.334 4.359s4.957-.341 6.667-1.027c3.76-1.539 6.155-1.581 7.179-.126 1.796 2.649 1.754 5.598-.126 8.846-1.883 3.161-3.975 5.769-6.283 7.819-5.469 4.703-11.411 7.052-17.82 7.052-12.734 0-21.795-5.427-27.181-16.282l-27.947-50.257c-14.958 15.982-24.403 29.061-28.333 39.23a14.188 14.188 0 0 0-1.155 5.643c0 1.88 1.239 3.503 3.718 4.871 2.565 1.284 5.685 2.137 9.36 2.565.853.853 1.281 2.137 1.281 3.847s-.769 3.203-2.308 4.487c-1.539 1.281-3.505 2.35-5.897 3.203-7.693 2.736-15.94 3.419-24.744 2.053-10.342-1.625-15.512-6.241-15.512-13.848z" />
                                                    </svg>
                                                </span>
                                                <span className="text-primary-color cursor-pointer pl-3 text-left">
                                                    Upload
                                                    <br />
                                                    Prescription
                                                    <i className="fa fa-angle-right ml-2" aria-hidden="true" />
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div
                                            className="d-flex justify-content-center flex-wrap tests-packages-by-featured-list col">
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Bone
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Diabetes
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Gastro
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Gynae
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Heart
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Kidney
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Liver
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Prostate
                                                </span>
                                            </label>
                                            <label
                                                className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                                                <span className="w-15-px mr-2">
                                                    <label className="form-label">
                                                        <input name="organ_checkbox" type="checkbox"
                                                            className="form-control" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </span>
                                                <span className="align-self-center text-capitalize text-black">
                                                    Thyroid
                                                </span>
                                            </label>
                                            <div className="mx-1 health-packages-dd mt-2">
                                                <div className="dropdown">
                                                    <button aria-haspopup="true" aria-expanded="false" id="healthPackages"
                                                        type="button"
                                                        className="font-size-14 font-semiBold rounded-5 py-1  dropdown-toggle btn btn-primary">
                                                        Health Packages{" "}
                                                        <i className="fa fa-angle-down font-size-16" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7" />
                                <div className="text-center d-flex justify-content-center px-2 px-md-4 px-lg-0 col-lg-12">
                                    <div className="justify-content-center mt-4 row">
                                        <div className="pl-lg-0 col-lg-3 col-md-4 col-sm-5 col-6">
                                            <div className="row">
                                                <div className="col-12">
                                                    <a className="btn-how-we-work" href="/">
                                                        <span className="play-icon">
                                                            <span className="w-15-px d-block m-auto pt-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={1024}
                                                                    height={1024} className="img-fluid"
                                                                    viewBox="0 0 1024 1024">
                                                                    <path fill="#FFFFFF"
                                                                        d="M217.831 22.578c-92.32-52.956-167.166-9.574-167.166 96.819V904.53c0 106.496 74.846 149.821 167.166 96.916l686.243-393.554c92.349-52.977 92.349-138.803 0-191.764L217.831 22.578z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <img loading="lazy"
                                                            src="https://img.flebo.in/assets/images/yt-self-reliant-india-05-min.jpg"
                                                            alt="आत्मनिर्भर भारत (Self-Reliant India)"
                                                            className="w-100 rounded-5 img-thumbnail" />
                                                    </a>
                                                </div>
                                                <div className="col-12">
                                                    <p className="mt-3 mb-0 text-black font-bold font-size-16">
                                                        <span className="font-hindi">आत्मनिर्भर भारत</span>{" "}
                                                        <br />
                                                        <small className="font-bold text-black font-size-14">
                                                            (Self-Reliant India)
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 pr-lg-0 col-lg-3 col-md-4 col-sm-5 col-6">
                                            <div className="row">
                                                <div className="col-12">
                                                    <a className="btn-how-we-work" href="/">
                                                        <span className="play-icon">
                                                            <span className="w-15-px d-block m-auto pt-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={1024}
                                                                    height={1024} className="img-fluid"
                                                                    viewBox="0 0 1024 1024">
                                                                    <path fill="#FFFFFF"
                                                                        d="M217.831 22.578c-92.32-52.956-167.166-9.574-167.166 96.819V904.53c0 106.496 74.846 149.821 167.166 96.916l686.243-393.554c92.349-52.977 92.349-138.803 0-191.764L217.831 22.578z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <img loading="lazy"
                                                            src="https://img.flebo.in/assets/images/yt-painless-thumbnail-05-min.jpg"
                                                            alt="A Painless Experience"
                                                            className="w-100 rounded-5 img-thumbnail" />
                                                    </a>
                                                </div>
                                                <div className="col-12">
                                                    <p className="mt-3 mb-0 text-black font-bold font-size-14">
                                                        A Painless Experience
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logo-slider col">
                        <section className="row py-4">
                            <div className="col">
                                <div className="px-0 container">
                                    <div className="row">
                                        <div className="col-auto align-self-center w-fit-content text col">
                                            <p
                                                className="font-size-16 l-height-20 text-black font-bold m-0 position-relative">
                                                A Few Of #OurBloodRelations
                                            </p>
                                            <small className="font-size-14 text-grey">
                                                90+ Partner Labs
                                            </small>
                                        </div>
                                        <div className="align-self-center w-70 logos col">
                                            <div className="slider-items">
                                                <div className="owl-carousel owl-carousel owl-loaded owl-drag">
                                                    <div className="owl-stage-outer">
                                                        <div className="owl-stage" style={{
                                                            transform: "translate3d(-3628px, 0px, 0px)",
                                                            transition: "all 3s ease 0s", width: 6649
                                                        }}>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/max-lab-by-max-hospital">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/wB7HisxyjOmF7BCMI2kg4O4PdMlj4Rk6OUuPlH52.png"
                                                                            alt="Max Lab by Max Hospital"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/metropolis">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/q5GFEdJAXBup2szgUzLGXL72f2k6lRwtbPPKr9uU.png"
                                                                            alt="Metropolis" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/mirage-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/1KV7xxbh1bbJdEoJIXHGDpXUheUiZXM9IX3IBqFz.jpg"
                                                                            alt="Mirage Lab" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/molecular-quest-healthcare-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/gs0wN9xS0jP9i4erqsLLilRwEmKnMR4DHtXn4otQ.jpg"
                                                                            alt="Molecular Quest Healthcare Pvt, Ltd."
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/niramaya-pathlabs-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/L8uN18yBcML1OZukcoDJ0vFUXBKaduisdaZlDp6D.jpg"
                                                                            alt="NirAmaya Pathlabs Pvt. Ltd."
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/orange-health-rapidx-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/QWXpQ8MIri8mr3vMJjFpGPtR5F23DvP2EHv4w0H8.png"
                                                                            alt="Orange Health (Rapidx Lab)"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/pathkind-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/kcP7Qw9KJKgMTo6xoliadIvEDXaCx1mxGQZEi9Gr.png"
                                                                            alt="Pathkind Lab" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/pro-labs">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/tSSvTHWSsBuv41oAxWRxTOsQLzogc4aBgnm35Szd.jpg"
                                                                            alt="PRO LAB'S" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/prognosis-laboratories">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/EdsztJCkkP03f0sFmrFWRwYbLScHCRhQuiZGpZoz.png"
                                                                            alt="Prognosis Laboratories"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/thyrocare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/IXNgIhrh0oUN7dKeihIU4u432fblTUPWiXSqttLa.jpg"
                                                                            alt="Thyrocare" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/accuprobe-healthcare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/HXTNvyL4CyglXjwcm1CHUFYdwZ1EPEc3dpZyl9eS.jpg"
                                                                            alt="Accuprobe Healthcare" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/augmentum-diagnostics">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/mxaBqQaqkd9jNLtMkqKxKc0k7sjKSPXacBMnffuy.jpg"
                                                                            alt="Augmentum Diagnostics"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/city-x-ray-scan-clinic-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/65nxF6E0y5YRvbVvOIRSSyU8xsNfRqMJ2MbUbcYA.jpg"
                                                                            alt="City X-Ray & Scan Clinic Pvt Ltd"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/crl-diagnostics">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/0HdmCUsqVBRZurxU88Hhnar5pkLLijlceSeagSOU.png"
                                                                            alt="CRL Diagnostics" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/d-diagnocare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/kzcGFGPQXUCL9HsKqvXxeAxdDZp0wEm4OIF4mV5U.png"
                                                                            alt="D+ Diagnocare" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/dgd-dr-gargs-diagnostics">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/BkkU083mQMmkcAt0NlFO6F3V9epMGEGNjtqe7jTE.jpg"
                                                                            alt="D.G.D. (Dr. Garg's Diagnostics)"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/dr-dodas-diagnostics-and-healthcare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/bqbXfqkq4GcESsM7IHWjPEjoqO5iFc7oNOmF9m3g.jpg"
                                                                            alt="Dr Doda's Diagnostics and Healthcare"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/dr-lal-path-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/ZrUffXIPw1wfxntnO3DpEu4tLrqr1q2sfLN6PgBm.jpg"
                                                                            alt="Dr Lal Path Lab" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/labcorp-diagnostics-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/7hqaHwOJTv6tFnnn6DqQao1qkS3MC9l9LMgxTzdv.png"
                                                                            alt="Labcorp Diagnostics Pvt. Ltd."
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/lifeline-laboratory">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/nkD9PEIJJw5fd0Y8qlpv1MfuRwSj84qXUi8nzbav.jpg"
                                                                            alt="Lifeline Laboratory" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/max-lab-by-max-hospital">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/wB7HisxyjOmF7BCMI2kg4O4PdMlj4Rk6OUuPlH52.png"
                                                                            alt="Max Lab by Max Hospital"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{
                                                                width: "auto", marginRight:
                                                                    30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/metropolis">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/q5GFEdJAXBup2szgUzLGXL72f2k6lRwtbPPKr9uU.png"
                                                                            alt="Metropolis" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/mirage-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/1KV7xxbh1bbJdEoJIXHGDpXUheUiZXM9IX3IBqFz.jpg"
                                                                            alt="Mirage Lab" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/molecular-quest-healthcare-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/gs0wN9xS0jP9i4erqsLLilRwEmKnMR4DHtXn4otQ.jpg"
                                                                            alt="Molecular Quest Healthcare Pvt, Ltd."
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/niramaya-pathlabs-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/L8uN18yBcML1OZukcoDJ0vFUXBKaduisdaZlDp6D.jpg"
                                                                            alt="NirAmaya Pathlabs Pvt. Ltd."
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/orange-health-rapidx-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/QWXpQ8MIri8mr3vMJjFpGPtR5F23DvP2EHv4w0H8.png"
                                                                            alt="Orange Health (Rapidx Lab)"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/pathkind-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/kcP7Qw9KJKgMTo6xoliadIvEDXaCx1mxGQZEi9Gr.png"
                                                                            alt="Pathkind Lab" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/pro-labs">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/tSSvTHWSsBuv41oAxWRxTOsQLzogc4aBgnm35Szd.jpg"
                                                                            alt="PRO LAB'S" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/prognosis-laboratories">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/EdsztJCkkP03f0sFmrFWRwYbLScHCRhQuiZGpZoz.png"
                                                                            alt="Prognosis Laboratories"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/thyrocare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/IXNgIhrh0oUN7dKeihIU4u432fblTUPWiXSqttLa.jpg"
                                                                            alt="Thyrocare" className="img-fluid" style={{
                                                                                opacity: 1
                                                                            }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/accuprobe-healthcare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/HXTNvyL4CyglXjwcm1CHUFYdwZ1EPEc3dpZyl9eS.jpg"
                                                                            alt="Accuprobe Healthcare" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/augmentum-diagnostics">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/mxaBqQaqkd9jNLtMkqKxKc0k7sjKSPXacBMnffuy.jpg"
                                                                            alt="Augmentum Diagnostics"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/city-x-ray-scan-clinic-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/65nxF6E0y5YRvbVvOIRSSyU8xsNfRqMJ2MbUbcYA.jpg"
                                                                            alt="City X-Ray & Scan Clinic Pvt Ltd"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/crl-diagnostics">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/0HdmCUsqVBRZurxU88Hhnar5pkLLijlceSeagSOU.png"
                                                                            alt="CRL Diagnostics" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/d-diagnocare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/kzcGFGPQXUCL9HsKqvXxeAxdDZp0wEm4OIF4mV5U.png"
                                                                            alt="D+ Diagnocare" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/dgd-dr-gargs-diagnostics">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/BkkU083mQMmkcAt0NlFO6F3V9epMGEGNjtqe7jTE.jpg"
                                                                            alt="D.G.D. (Dr. Garg's Diagnostics)"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/dr-dodas-diagnostics-and-healthcare">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/bqbXfqkq4GcESsM7IHWjPEjoqO5iFc7oNOmF9m3g.jpg"
                                                                            alt="Dr Doda's Diagnostics and Healthcare"
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/dr-lal-path-lab">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/ZrUffXIPw1wfxntnO3DpEu4tLrqr1q2sfLN6PgBm.jpg"
                                                                            alt="Dr Lal Path Lab" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank"
                                                                        href="/labs/labcorp-diagnostics-pvt-ltd">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/7hqaHwOJTv6tFnnn6DqQao1qkS3MC9l9LMgxTzdv.png"
                                                                            alt="Labcorp Diagnostics Pvt. Ltd."
                                                                            className="img-fluid" style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item cloned" style={{
                                                                width: "auto",
                                                                marginRight: 30
                                                            }}>
                                                                <div className="item">
                                                                    <a target="_blank" href="/labs/lifeline-laboratory">
                                                                        <img loading="lazy"
                                                                            src="https://cdn.flebo.in/lab_logo/nkD9PEIJJw5fd0Y8qlpv1MfuRwSj84qXUi8nzbav.jpg"
                                                                            alt="Lifeline Laboratory" className="img-fluid"
                                                                            style={{ opacity: 1 }} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-nav disabled">
                                                        <button type="button" role="presentation" className="owl-prev">
                                                            <span aria-label="Previous">‹</span>
                                                        </button>
                                                        <button type="button" role="presentation" className="owl-next">
                                                            <span aria-label="Next">›</span>
                                                        </button>
                                                    </div>
                                                    <div className="owl-dots disabled" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <MobileNav />
        </header>

    )
}

export default Header