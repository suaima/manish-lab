import React from 'react'

const Header = () => {
    return (
        <>
            <header id="header" className="row position-relative z-index-3 h-100-vh flex-shrink-0 ">
                <div id="book-a-slot" className="py-2 top-bar col-lg-12">
                    <div className="px-md-5 row">
                        <div className="my-1 my-lg-0 lg-screen-max-width container-fluid">
                            <div className="justify-content-end flex-row flex-sm-auto justify-content-space-between row">
                                <div className="align-self-center col-lg-6 col-8">
                                    <div className="row">
                                        <div className="col-auto col">
                                            <a href="tel:+911244550000" className="mr-2 d-flex text-nowrap font-semiBold">
                                                {" "}
                                                <span className="mr-2"> Call to Book</span>{" "}
                                                <span className="mr-2 w-12-px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                        viewBox="0 0 1024 1024" className="img-fluid">
                                                        <path fill="#FFFFFF"
                                                            d="M941.838 672.142c-62.694 0-124.256-9.805-182.586-29.082-28.582-9.752-63.725-.806-81.171 17.107l-115.136 86.918c-133.528-71.277-215.779-153.501-286.083-286.026l84.36-112.138c21.917-21.888 29.779-53.862 20.36-83.862-19.36-58.64-29.195-120.168-29.195-182.888C352.39 36.861 315.529 0 270.222 0H82.168C36.862 0 0 36.861 0 82.168 0 601.502 422.501 1024 941.837 1024c45.306 0 82.163-36.864 82.163-82.17V754.304c0-45.306-36.864-82.163-82.163-82.163z" />
                                                    </svg>{" "}
                                                </span>{" "}
                                                <span>012 44 55 0000</span>
                                            </a>
                                        </div>
                                        <div className="col-auto border-left d-flex hidden-xs hidden-sm col">
                                            <div className="mr-2 w-15-px">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                    viewBox="0 0 1024 1024" className="img-fluid">
                                                    <path fill="#FFFFFF"
                                                        d="M597.582 622.808c-25.478 17.309-55.07 26.458-85.58 26.458s-60.101-9.149-85.577-26.458L6.818 337.728A152.69 152.69 0 0 1 0 332.802v467.136C0 853.496 42.65 896 94.266 896h835.47c52.556 0 94.262-43.464 94.262-96.062V332.8a149.44 149.44 0 0 1-6.83 4.937L597.58 622.809z" />
                                                    <path fill="#FFFFFF"
                                                        d="m40.101 295.722 419.606 277.331c15.884 10.499 34.089 15.747 52.291 15.747 18.206 0 36.413-5.25 52.296-15.747L983.9 295.722c25.114-16.586 40.1-44.344 40.1-74.303 0-51.513-42.274-93.42-94.234-93.42H94.235c-51.96.002-94.234 41.909-94.234 93.47 0 29.909 14.992 57.668 40.1 74.253z" />
                                                </svg>{" "}
                                            </div>
                                            <a href="mailto:customercare@flebo.in">
                                                customercare@flebo.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg-top-bar col-lg-6 col-4">
                                    <div
                                        className="justify-content-end flex-row flex-sm-auto justify-content-space-between flex-nowrap row">
                                        <div className="col-auto align-self-center col">
                                            <a href="/">
                                                <span className="selected-city mr-2">Select Location</span>
                                                <i className="fa fa-angle-down" aria-hidden="true" />
                                            </a>
                                        </div>
                                        <div
                                            className="col-auto align-self-center border-left border-right sm-icons hidden-xs hidden-sm col">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <a href="https://www.facebook.com/Flebo-106073985346129/?modal=admin_todo_tour&notif_id=1645431497830241&notif_t=page_invite&ref=notif"
                                                        rel="noreferrer" target="_blank" className="d-block w-15-px">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                            className="img-fluid" viewBox="0 0 1024 1024">
                                                            <path fill="#FFFFFF"
                                                                d="M674.537 170.027h93.485V7.211C751.894 4.992 696.425 0 631.829 0 497.045 0 404.714 84.779 404.714 240.597V384H255.978v182.016h148.736V1024h182.357V566.059h142.717l22.656-182.016H587.028V258.645c.043-52.608 14.208-88.618 87.508-88.618z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/InFlebo" rel="noreferrer" target="_blank"
                                                        className="d-block w-15-px">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                            className="img-fluid" width={1024} height={1024}
                                                            viewBox="0 0 1024 1024">
                                                            <g id="twitterIcon" />
                                                            <path fill="#FFFFFF"
                                                                d="M1097.143 149.139c-43.52 19.090-89.893 31.744-138.24 37.888 49.737-29.696 87.698-76.361 105.545-132.608-46.373 27.648-97.573 47.177-152.137 58.075-44.032-46.885-106.789-75.922-175.25-75.922-132.827 0-239.762 107.813-239.762 239.982 0 19.017 1.609 37.303 5.559 54.711-199.461-9.728-375.954-105.326-494.519-250.953-20.699 35.913-32.841 77.019-32.841 121.271 0 83.090 42.789 156.745 106.569 199.387-38.546-0.731-76.361-11.922-108.398-29.55 0 0.731 0 1.682 0 2.633 0 116.59 83.163 213.431 192.219 235.739-19.529 5.339-40.814 7.899-62.903 7.899-15.36 0-30.866-0.878-45.422-4.096 31.086 95.013 119.296 164.864 224.183 167.131-81.627 63.854-185.271 102.327-297.472 102.327-19.675 0-38.546-0.878-57.417-3.291 106.277 68.535 232.229 107.666 368.055 107.666 441.49 0 682.862-365.714 682.862-682.715 0-10.606-0.366-20.846-0.878-31.013 47.616-33.792 87.625-75.995 120.247-124.562z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/channel/UCexu9kkuSxz9dY-HW8l07iA"
                                                        rel="noreferrer" target="_blank" className="d-block w-15-px">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                            className="img-fluid" viewBox="0 0 1024 1024">
                                                            <path fill="#FFFFFF"
                                                                d="M1013.6 307.3s-10-70.6-40.8-101.6c-39-40.8-82.6-41-102.6-43.4C727 151.9 512 151.9 512 151.9h-.4s-215 0-358.2 10.4c-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6S0 390.1 0 473.1v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-.2-82.8-10.4-165.8-10.4-165.8zM406 644.9V357.1l276.6 144.4L406 644.9z" />
                                                        </svg>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://instagram.com/flebo.in?utm_medium=copy_link"
                                                        rel="noreferrer" target="_blank" className="d-block w-15-px">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                            className="img-fluid" viewBox="0 0 1024 1024">
                                                            <path fill="#FFFFFF"
                                                                d="M1021.297 301.056c-2.4-54.409-11.194-91.814-23.802-124.227-12.998-34.405-33.005-65.208-59.213-90.815-25.606-26.005-56.614-46.212-90.618-59.011C815.062 14.399 777.853 5.6 723.446 3.202 668.63.6 651.228-.002 512.199-.002 373.172-.002 355.77.6 301.158 2.999c-54.409 2.399-91.815 11.205-124.22 23.802-34.413 13.003-65.216 33.006-90.822 59.215-26.005 25.607-46.204 56.612-59.011 90.62-12.604 32.608-21.403 69.811-23.801 124.22C.702 355.671.1 373.073.1 512.1c0 139.03.602 156.431 3.001 211.043C5.5 777.549 14.306 814.957 26.91 847.367c13.002 34.406 33.202 65.21 59.207 90.816 25.606 26.003 56.612 46.214 90.619 59.014 32.608 12.602 69.811 21.402 124.227 23.802 54.605 2.406 72.014 3.002 211.041 3.002s156.428-.595 211.039-3.002c54.413-2.4 91.814-11.2 124.224-23.802 68.813-26.611 123.226-81.018 149.83-149.83 12.595-32.608 21.402-69.818 23.802-124.224 2.4-54.611 3.002-72.013 3.002-211.043 0-139.027-.205-156.429-2.605-211.041zm-92.211 418.083c-2.202 50.01-10.605 77.011-17.606 95.014-17.203 44.614-52.608 80.019-97.222 97.222-18.003 7.002-45.203 15.405-95.014 17.6-54.01 2.406-70.208 3.002-206.839 3.002-136.628 0-153.03-.595-206.845-3.002-50.01-2.195-77.014-10.598-95.018-17.6-22.2-8.205-42.406-21.203-58.808-38.208-17.003-16.608-30.006-36.608-38.211-58.81-7.001-18.003-15.401-45.21-17.597-95.021-2.407-54.01-3.001-70.214-3.001-206.842s.594-153.03 3.001-206.837c2.196-50.01 10.596-77.015 17.597-95.019 8.205-22.207 21.208-42.406 38.414-58.816 16.596-17.004 36.601-30.006 58.808-38.203 18.003-7.002 45.212-15.402 95.018-17.605 54.01-2.399 70.216-3 206.836-3 136.833 0 153.031.602 206.842 3 50.01 2.204 77.018 10.604 95.021 17.605 22.202 8.197 42.406 21.199 58.81 38.203 17.005 16.605 30.003 36.609 38.208 58.816 7.002 18.004 15.405 45.204 17.606 95.019 2.4 54.01 3.002 70.209 3.002 206.837s-.602 152.634-3.002 206.644z" />
                                                            <path fill="#FFFFFF"
                                                                d="M512.184 249.044c-145.224 0-263.052 117.82-263.052 263.052s117.828 263.05 263.052 263.05c145.235 0 263.052-117.818 263.052-263.05S657.418 249.044 512.184 249.044zm0 433.686c-94.214 0-170.635-76.413-170.635-170.634s76.421-170.635 170.635-170.635c94.221 0 170.636 76.413 170.636 170.635S606.405 682.73 512.184 682.73zM847.057 238.644c0 33.913-27.501 61.411-61.421 61.411-33.914 0-61.408-27.498-61.408-61.411 0-33.921 27.494-61.411 61.408-61.411 33.92 0 61.421 27.49 61.421 61.411z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/company/flebo-in" rel="noreferrer"
                                                        target="_blank" className="d-block w-15-px">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                            className="img-fluid" viewBox="0 0 1024 1024">
                                                            <path fill="#FFFFFF"
                                                                d="M1023.741 1024v-.045h.256V648.403c0-183.721-39.552-325.247-254.336-325.247-103.258 0-172.547 56.661-200.835 110.379h-2.987v-93.227H362.19v683.647h212.054V685.44c0-89.131 16.896-175.318 127.276-175.318 108.755 0 110.381 101.718 110.381 181.033V1024h211.84zM16.909 340.351h212.309V1024H16.909V340.351zM122.968 0C55.086 0 .003 55.083.003 122.965s55.083 124.118 122.965 124.118c67.883 0 122.966-56.235 122.966-124.118C245.891 55.083 190.808 0 122.968 0z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-auto align-self-center hidden-xs hidden-sm col">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <a href="/">Login/Signup</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div className="offer-code row">
                        <div className="col">
                            <div className="align-items-center row">
                                <div className="col">
                                    <div className="w-100 text-center font-semiBold align-self-center">
                                        20% off + 50% Cashback
                                    </div>
                                </div>
                                <div className="col-auto code px-4 fullHeight d-flex col">
                                    <div className="cursor-pointer w-100 text-center align-self-center">
                                        <span className="mr-2">Code :</span>
                                        <span className="font-semiBold">FLEBO2050</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer-tag d-flex mb-4">
                        <img loading="lazy" src="https://img.flebo.in/assets/images/flebo-pathology-2050.png"
                            alt="Special offer on Pathology 20% OFF for First Time User + 50% Cashback in your wallet"
                            className="img-fluid" />
                    </div>
                    <div className="fullHeight header-center mt-4 mt-lg-0 row">
                        <div
                            className="text-center text-lg-right text-grey mb-4 mb-lg-0 px-lg-5 position-lg-absolute col-lg-12">
                            <span className="border rounded-5 px-3 py-2 bg-white mr-lg-4">
                                4.9{" "}
                                <span className="l-height-20 position-relative top--3 btn-disabled">
                                    <span style={{ display: "inline-block", direction: "ltr", touchAction: "none" }}>
                                        <span className="react-simple-star-rating" aria-hidden="true" style={{
                                            position: "relative", display: "inline-block", overflow: "hidden",
                                            whiteSpace: "nowrap", cursor: "pointer", verticalAlign: "middle",
                                            userSelect: "none"
                                        }}>
                                            <span className="empty-icons" style={{
                                                display: "inline-block",
                                                color: "rgb(204, 204, 204)"
                                            }}>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                            </span>
                                            <span className="filled-icons" title="5 out of 5" style={{
                                                position: "absolute",
                                                top: 0, left: 0, color: "rgb(255, 188, 11)", overflow: "hidden",
                                                whiteSpace: "nowrap", display: "inline-block", width: "98%"
                                            }}>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                                <svg fill="currentColor" width={18} height={18} viewBox="0 0 24 24"
                                                    className="star-svg">
                                                    <path fill="currentColor" stroke="none" strokeMiterlimit={10}
                                                        strokeWidth={0}
                                                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </span>{" "}
                                (<span>32,017</span>)
                            </span>
                        </div>
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
                <nav id="mob-slideNav" className=" hidden-md hidden-lg py-0 navbar navbar-expand navbar-light">
                    <div className="fullHeight justify-content-between flex-nowrap flex-column row">
                        <div className="col-lg-12">
                            <button type="button"
                                className="collapsed navbar-toggle x mt-4 ml-2 bg-white border-0 btn btn-outline-light">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <nav className="mt-4 navbar-nav nav-tabs" role="tablist">
                                <a id="controlled-mobile-nav-tab-general" href="#" role="tab" data-rb-event-key="general"
                                    aria-controls="controlled-mobile-nav-tabpane-general" aria-selected="true"
                                    className="nav-item nav-link active">
                                    Navigation
                                </a>
                                <a id="controlled-mobile-nav-tab-account" href="#" role="tab" data-rb-event-key="account"
                                    aria-controls="controlled-mobile-nav-tabpane-account" aria-selected="false"
                                    className="nav-item nav-link">
                                    My Account
                                </a>
                            </nav>
                            <div className="tab-content">
                                <div id="controlled-mobile-nav-tabpane-general"
                                    aria-labelledby="controlled-mobile-nav-tab-general" role="tabpanel" aria-hidden="false"
                                    className="fade font-size-14 red_scrollbar pr-3 fullHeight tab-pane active show">
                                    <ul className="nav d-flex flex-nowrap flex-column mt-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#our-promise">
                                                Our Promise
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#how-we-work">
                                                Flebo.in at Work
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#information-about-tests">
                                                Information about Tests
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#about-section">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/health/" className="nav-link">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/health/press-coverages" className="nav-link">
                                                Press Coverages
                                            </a>
                                        </li>
                                        <li className="hidden">
                                            <a href="/public/forum/" className="nav-link">
                                                Discussion Board
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="/contact">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="mx-0 row">
                                        <div className="col-auto mt-4 pl-2 col">
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
                                    </div>
                                    <div className="Sidenav-Footer mx-0 row">
                                        <div className="px-0 col-lg-12">
                                            <ul className="contact-info mt-3">
                                                <li className="d-flex mb-3">
                                                    <span className="w-40-px">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                            className="img-fluid" viewBox="0 0 1024 1024">
                                                            <path fill="#e31019"
                                                                d="M512.003.001c-9.424 0-17.066 7.642-17.066 17.067v102.4c0 9.425 7.642 17.067 17.066 17.067 9.426 0 17.068-7.642 17.068-17.067v-102.4c0-9.425-7.642-17.067-17.068-17.067zM445.834 38.435l-2.97-16.811c-1.637-9.284-10.487-15.486-19.772-13.85s-15.486 10.487-13.85 19.772l2.97 16.811a17.068 17.068 0 0 0 19.764 13.841h.004c9.284-1.632 15.488-10.479 13.855-19.763zM364.591 57.123l-5.837-16.043a17.871 17.871 0 0 0-.227-.623c-3.396-8.794-13.275-13.169-22.069-9.773s-13.169 13.276-9.772 22.069l5.819 16.026a17.07 17.07 0 0 0 21.884 10.219c8.858-3.223 13.425-13.018 10.202-21.875zM217.876 134.964l-10.975-13.073c-6.023-6.884-16.404-7.795-23.534-2.063-7.347 5.905-8.517 16.646-2.612 23.994l10.974 13.073a17.065 17.065 0 0 0 13.072 6.11c4.016 0 7.903-1.414 10.977-3.996 7.219-6.061 8.157-16.826 2.097-24.045zM156.894 191.729l-13.073-10.974c-7.13-5.73-17.51-4.821-23.535 2.063-6.208 7.094-5.489 17.875 1.604 24.083l13.073 10.973a17.06 17.06 0 0 0 10.957 3.994 17.07 17.07 0 0 0 13.075-6.095c6.061-7.221 5.118-17.986-2.101-24.044zM68.781 332.511l-16.026-5.82a18.444 18.444 0 0 0-.623-.227c-8.917-3.052-18.622 1.704-21.673 10.622-3.053 8.918 1.705 18.622 10.622 21.672l16.043 5.837a16.923 16.923 0 0 0 5.82 1.04 17.068 17.068 0 0 0 16.122-11.291c3.189-8.867-1.414-18.644-10.285-21.833zM44.353 412.211l-16.811-2.97c-9.284-1.637-18.135 4.566-19.772 13.85s4.565 18.136 13.85 19.772l16.811 2.97c.981.168 1.973.254 2.97.256a17.068 17.068 0 0 0 16.819-14.124c1.626-9.284-4.582-18.128-13.867-19.754zM58.205 592.016c-1.636-9.284-10.487-15.484-19.772-13.85l-16.811 2.97c-8.162 1.43-14.116 8.517-14.123 16.803-.004 9.426 7.631 17.072 17.058 17.075a18.006 18.006 0 0 0 2.987-.256l16.811-2.97c9.284-1.637 15.486-10.487 13.85-19.772zM78.998 669.619c-3.219-8.859-13.011-13.435-21.871-10.214l-16.043 5.837a17.068 17.068 0 0 0-11.245 16.057c.008 9.426 7.654 17.061 17.082 17.051a17.079 17.079 0 0 0 5.837-1.04l16.026-5.82c8.86-3.218 13.434-13.01 10.214-21.87zM159.046 807.695c-6.206-7.093-16.99-7.812-24.083-1.605l-13.073 10.975a17.06 17.06 0 0 0-6.095 13.076c.002 9.424 7.644 17.064 17.069 17.064a17.066 17.066 0 0 0 10.957-3.994l13.073-10.973c.186-.15.367-.302.546-.459 7.093-6.206 7.812-16.987 1.606-24.084zM215.751 864.493c-7.347-5.904-18.088-4.736-23.993 2.611l-10.974 13.074a17.057 17.057 0 0 0-3.981 10.944c-.006 9.424 7.628 17.073 17.054 17.079 5.043 0 9.83-2.229 13.072-6.093l10.973-13.072c.159-.179.311-.364.459-.549 5.906-7.345 4.736-18.088-2.611-23.995zM354.378 945.007c-8.859-3.22-18.651 1.353-21.87 10.214l-5.82 16.026a17.075 17.075 0 0 0-1.028 5.84c.002 9.424 7.645 17.064 17.07 17.062a17.067 17.067 0 0 0 16.026-11.229l5.837-16.044c3.22-8.859-1.353-18.651-10.214-21.87zM431.983 965.794c-9.284-1.637-18.136 4.564-19.772 13.85l-2.97 16.812c-1.629 9.284 4.575 18.13 13.859 19.761.978.183 1.973.272 2.97.272a17.065 17.065 0 0 0 16.794-14.113l2.97-16.812c1.637-9.284-4.566-18.134-13.85-19.771zM614.754 996.453l-2.97-16.81c-1.637-9.285-10.487-15.486-19.772-13.85s-15.486 10.487-13.85 19.771l2.97 16.812a17.066 17.066 0 0 0 16.794 14.113c.997 0 1.991-.09 2.97-.272h.002c9.285-1.633 15.488-10.48 13.857-19.763zM697.31 971.247l-5.82-16.026c-3.218-8.861-13.01-13.435-21.872-10.214-8.859 3.218-13.433 13.01-10.214 21.87l5.837 16.044a17.066 17.066 0 0 0 21.867 10.201c8.858-3.224 13.425-13.018 10.202-21.875zM843.207 880.178l-10.973-13.072c-.15-.187-.3-.368-.459-.547-6.206-7.093-16.989-7.812-24.082-1.605-7.093 6.204-7.813 16.989-1.605 24.082l10.975 13.072a16.94 16.94 0 0 0 13.072 6.093 17.06 17.06 0 0 0 10.944-3.981c7.228-6.051 8.181-16.816 2.128-24.042zM902.107 817.067l-13.072-10.975c-.179-.155-.36-.309-.547-.457-7.347-5.906-18.088-4.736-23.993 2.609-5.906 7.347-4.736 18.09 2.611 23.995l13.072 10.973a17.062 17.062 0 0 0 10.957 3.994c5.045 0 9.832-2.231 13.076-6.095 6.058-7.221 5.115-17.986-2.105-24.044zM982.915 665.242l-16.042-5.837c-8.859-3.22-18.651 1.355-21.872 10.214s1.355 18.651 10.214 21.87l16.026 5.82a17.023 17.023 0 0 0 5.837 1.04 17.067 17.067 0 0 0 16.059-11.244c3.215-8.859-1.36-18.65-10.222-21.864zM1002.379 581.136l-16.812-2.97c-9.284-1.635-18.136 4.566-19.771 13.85-1.637 9.285 4.564 18.136 13.85 19.772l16.81 2.97c.986.168 1.986.254 2.986.256a17.068 17.068 0 0 0 16.803-14.122c1.626-9.285-4.582-18.13-13.866-19.756zM1016.221 423.091c-1.637-9.284-10.487-15.486-19.772-13.85l-16.81 2.97a17.069 17.069 0 0 0-14.122 16.819c.004 9.424 7.647 17.062 17.075 17.059a17.822 17.822 0 0 0 2.97-.256l16.81-2.97c9.284-1.637 15.486-10.489 13.85-19.772zM993.313 336.463c-3.394-8.794-13.275-13.169-22.069-9.772l-16.026 5.819a17.068 17.068 0 0 0-11.291 16.123c.035 9.424 7.704 17.039 17.128 17.004a17.023 17.023 0 0 0 5.82-1.04l16.042-5.837c.208-.071.417-.148.622-.227 8.794-3.396 13.168-13.275 9.774-22.069zM904.168 183.365c-5.904-7.347-16.645-8.516-23.993-2.611l-13.074 10.975a17.056 17.056 0 0 0-6.095 13.074c.002 9.426 7.643 17.064 17.07 17.064a17.057 17.057 0 0 0 10.957-3.994l13.072-10.973c6.885-6.025 7.795-16.406 2.063-23.536zM841.185 120.286c-7.093-6.206-17.876-5.489-24.084 1.604l-10.973 13.073a17.075 17.075 0 0 0-3.995 10.976c.002 9.425 7.643 17.067 17.068 17.064a17.064 17.064 0 0 0 13.074-6.11l10.973-13.073c5.733-7.13 4.822-17.513-2.063-23.535zM686.911 30.461c-8.916-3.053-18.62 1.702-21.672 10.62l-5.837 16.043a17.09 17.09 0 0 0-1.028 5.841c.002 9.425 7.645 17.064 17.072 17.062a17.066 17.066 0 0 0 16.042-11.247l5.819-16.026c.08-.205.155-.412.227-.621 3.052-8.917-1.704-18.622-10.622-21.673zM600.911 7.775c-9.285-1.636-18.136 4.565-19.772 13.85l-2.97 16.813c-1.629 9.284 4.573 18.131 13.859 19.761a17.069 17.069 0 0 0 19.764-13.841l2.97-16.811c1.637-9.284-4.566-18.136-13.85-19.772zM313.425 133.957l-34.132-59.119c-4.723-8.055-15.044-10.82-23.161-6.206-8.194 4.659-11.059 15.078-6.4 23.272l34.134 59.119a17.06 17.06 0 0 0 23.313 6.246c8.163-4.713 10.959-15.151 6.246-23.313zM151.008 283.888l-59.119-34.134c-8.117-4.613-18.436-1.849-23.16 6.206-4.766 8.132-2.039 18.587 6.093 23.353l59.119 34.134a17.067 17.067 0 0 0 23.313-6.246c4.713-8.161 1.916-18.6-6.246-23.312zM157.329 716.643c-4.768-8.13-15.223-10.856-23.356-6.089l-59.119 34.134a17.065 17.065 0 0 0-8.533 14.779c0 9.426 7.64 17.068 17.067 17.068a16.934 16.934 0 0 0 8.533-2.288l59.119-34.134.198-.115c8.132-4.767 10.859-15.223 6.091-23.355zM307.173 866.575c-8.194-4.659-18.613-1.794-23.272 6.4l-34.134 59.12a17.085 17.085 0 0 0-2.286 8.516c-.011 9.426 7.621 17.077 17.05 17.084a17.062 17.062 0 0 0 14.797-8.532l34.132-59.12c.038-.064.075-.13.113-.197 4.659-8.192 1.792-18.611-6.4-23.27zM774.227 932.095l-34.134-59.12c-4.723-8.053-15.04-10.818-23.155-6.203-8.194 4.657-11.061 15.077-6.404 23.27l34.134 59.118a17.062 17.062 0 0 0 23.313 6.246c8.163-4.712 10.959-15.15 6.246-23.312zM949.145 744.688l-59.118-34.134c-8.117-4.613-18.434-1.849-23.155 6.204-4.769 8.13-2.043 18.587 6.087 23.356l59.12 34.132a16.94 16.94 0 0 0 8.534 2.288c6.096 0 11.73-3.253 14.779-8.534 4.714-8.163 1.916-18.6-6.246-23.312zM955.386 256.154c-4.659-8.194-15.078-11.059-23.272-6.4l-59.118 34.134a17.064 17.064 0 0 0-8.534 14.779c0 9.424 7.64 17.066 17.066 17.066 2.995 0 5.939-.788 8.534-2.286l59.12-34.134c8.055-4.723 10.82-15.042 6.204-23.159zM768.061 68.75c-8.132-4.768-18.589-2.042-23.356 6.089l-34.134 59.119a17.085 17.085 0 0 0-2.286 8.516c-.011 9.425 7.623 17.075 17.05 17.084a17.065 17.065 0 0 0 14.797-8.533l34.132-59.119c4.615-8.117 1.851-18.434-6.203-23.155zM119.467 494.934h-102.4C7.642 494.934 0 502.576 0 512s7.642 17.066 17.067 17.066h102.4c9.425 0 17.067-7.642 17.067-17.066s-7.642-17.066-17.067-17.066zM512.003 887.465c-9.424 0-17.066 7.642-17.066 17.068v102.4c0 9.424 7.642 17.066 17.066 17.066 9.426 0 17.068-7.642 17.068-17.066v-102.4c0-9.426-7.642-17.068-17.068-17.068zM1006.934 494.934H887.466c-9.424 0-17.066 7.642-17.066 17.066s7.642 17.066 17.066 17.066h119.468c9.424 0 17.066-7.642 17.066-17.066s-7.642-17.066-17.066-17.066zM754.844 270.011c-6.665-6.661-17.468-6.661-24.132 0L546.648 454.075a67.12 67.12 0 0 0-34.134-8.858 67.876 67.876 0 0 0-32.068 8.909l-87.57-87.568c-6.663-6.693-17.49-6.716-24.183-.051s-6.716 17.492-.051 24.183l86.87 86.87c-20.076 31.982-10.421 74.181 21.559 94.256 31.982 20.074 74.181 10.421 94.256-21.563a68.365 68.365 0 0 0 0-72.693l183.517-183.415c6.663-6.665 6.663-17.468 0-24.133zM539.06 537.218c-12.842 13.798-34.443 14.574-48.241 1.73-.34-.318-.675-.642-1.002-.973-13.528-13.129-13.851-34.739-.724-48.267a34.131 34.131 0 0 1 23.951-10.357 33.084 33.084 0 0 1 24.287 9.626c13.798 12.842 14.572 34.443 1.73 48.241z" />
                                                        </svg>
                                                    </span>
                                                    <div className="d-inline-block ml-4">
                                                        <span className="contact-label d-block">Timing</span>
                                                        <span className="px-0 my-0">All Days - 6am - 12am</span>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-3">
                                                    <span className="w-40-px">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                            viewBox="0 0 1024 1024" className="img-fluid">
                                                            <path fill="#e31019"
                                                                d="m831.019 891.87-38.234-114.721a115.61 115.61 0 0 0-89.005-77.179l-110.378-20.086v-8.554c19.21-11.149 35.923-26.064 49.235-43.718h33.348c27.317 0 49.549-22.232 49.549-49.549V379.869c0-118.387-96.324-214.709-214.711-214.709s-214.709 96.322-214.709 214.709v115.614c0 31.842 22.643 58.483 52.668 64.693 9.266 47.468 38.929 87.635 79.46 111.154v8.554L317.848 699.97c-41.537 7.562-75.643 37.128-88.99 77.179l-6.606 19.835-56.254-56.252c-6.441-6.442-6.441-16.931 0-23.371l65.239-65.222-122.451-122.451-73.728 73.728C13.224 625.251 1.2 654.285 1.2 685.17s12.024 59.904 33.858 81.739l223.217 223.215c21.833 21.835 50.869 33.875 81.754 33.875s59.904-12.04 81.225-33.378l80.452-73.713-25.088-25.038H831.02zM692.498 578.064c0 9.116-7.414 16.515-16.515 16.515h-13.892a163.964 163.964 0 0 0 10.769-34.402c7.068-1.471 13.576-4.277 19.637-7.813v25.7zm-16.515-54.141v-56.88c9.826 5.73 16.515 16.269 16.515 28.441s-6.689 22.709-16.515 28.439zm-330.323 0c-9.828-5.73-16.517-16.266-16.517-28.439s6.689-22.711 16.517-28.441v56.88zm0-111.021v18.861a65.53 65.53 0 0 0-16.517 6.839V379.87c0-100.171 81.508-181.677 181.677-181.677 100.171 0 181.677 81.506 181.677 181.677v58.732c-5.12-2.989-10.637-5.318-16.515-6.839v-18.861h-16.517c-48.838 0-94.753-19.027-129.305-53.562l-19.341-19.341-19.341 19.341c-34.55 34.535-80.467 53.562-129.305 53.562h-16.515zm33.032 115.614v-83.208c49.599-3.734 95.842-24.197 132.129-58.699 36.287 34.502 82.532 54.982 132.129 58.699v83.208c0 24.079-6.573 46.607-17.87 66.063H510.821v33.034h87.105c-23.286 20.495-53.725 33.032-87.105 33.032-72.852 0-132.129-59.277-132.129-132.129zm181.677 157.548v.776l-49.549 49.549-49.549-49.549v-.776c15.658 4.922 32.289 7.612 49.549 7.612s33.892-2.691 49.549-7.612zM260.171 787.588c9.53-28.607 33.892-49.729 63.571-55.148l115.448-20.975 71.63 71.63 71.615-71.615 115.431 20.977c29.679 5.416 54.041 26.524 63.571 55.146l23.766 71.236H443.584l-64.329-64.331-71.482 64.66c-6.227 6.259-17.112 6.259-23.354 0l-36.071-36.071 11.824-35.509zM108.769 576.395l75.743 75.743-17.936 17.937-75.743-75.743 17.937-17.937zm289.61 390.408c-15.591 15.558-36.335 24.164-58.383 24.164-22.051 0-42.794-8.606-58.403-24.197L58.378 743.571c-15.591-15.591-24.18-36.335-24.18-58.383 0-22.066 8.588-42.81 24.18-58.401l9.084-9.085 75.743 75.743-.595.595c-19.307 19.323-19.307 50.753 0 70.079l118.437 118.438c9.364 9.347 21.802 14.517 35.047 14.517 13.247 0 25.683-5.153 34.437-13.939l1.238-1.107 76.09 76.09-9.48 8.687zm33.857-31.049-75.924-75.924 21.818-19.722 75.793 75.793-21.687 19.853zM973.272.001H742.046c-27.319 0-49.549 22.231-49.549 49.548v132.129c0 27.318 22.23 49.548 49.549 49.548h44.115l-17.079 99.609 159.38-99.609h44.81c27.317 0 49.549-22.231 49.549-49.548V49.549c0-27.318-22.232-49.548-49.549-49.548zm16.515 181.677c0 9.1-7.414 16.516-16.515 16.516h-54.289l-104.895 65.552 11.249-65.552h-83.29c-9.101 0-16.517-7.416-16.517-16.516V49.549c0-9.1 7.416-16.516 16.517-16.516h231.226c9.101 0 16.515 7.416 16.515 16.516v132.129z" />
                                                            <path fill="#e31019"
                                                                d="M956.755 66.065H758.561v33.032h198.194V66.065zM890.69 132.129H758.561v33.032H890.69v-33.032zM956.753 132.129h-33.032v33.032h33.032v-33.032zM510.816 49.554c-215.8 0-401.689 149.273-450.015 357.491l-31.298-52.174-28.325 16.994L59.232 468.6l96.735-58.054-16.995-28.326-44.759 26.857C141.02 218.596 312.308 82.585 510.816 82.585c43.387 0 86.197 6.441 127.24 19.159l9.778-31.546c-44.213-13.708-90.31-20.645-137.018-20.645zM1014.785 365.704 918.05 307.65l-58.037 96.751 28.326 16.996 28.903-48.178c15.21 44.511 22.99 91.071 22.99 138.785 0 98.223-34.023 194.246-95.777 270.371l25.65 20.809c66.525-81.985 103.158-185.409 103.158-291.18 0-50.522-8.142-99.855-24.014-147.092l48.542 29.119 16.994-28.326z" />
                                                        </svg>
                                                    </span>
                                                    <div className="d-inline-block ml-4">
                                                        <span className="contact-label d-block">
                                                            Call us now
                                                        </span>
                                                        <span>
                                                            <a href="tel:012 44 55 0000">012 44 55 0000</a>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="d-flex">
                                                    <span className="w-40-px">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                            viewBox="0 0 1024 1024" className="img-fluid">
                                                            <path fill="#e31019"
                                                                d="M26.021 808.301a15.381 15.381 0 0 0 2.176 1.735c18.919 19.433 45.075 30.422 72.409 30.417h599.375c27.3.006 53.435-10.951 72.354-30.345a14.707 14.707 0 0 0 5.008-5.487c15.043-17.765 23.283-40.174 23.258-63.316v-70.722h24.321c17.586-.027 33.131-11.249 38.46-27.752h43.421c33.419-.041 60.499-26.73 60.54-59.655v-17.468h3.903c29.128-.033 52.734-23.285 52.753-51.981v-49.633c-.019-28.703-23.625-51.955-52.753-51.988h-3.903v-58.685c.041-72.016-46.032-136.214-114.953-160.186-68.915-23.966-145.675-2.487-191.513 53.598H100.606c-50.551.073-93.229 37.061-99.756 86.462a14.694 14.694 0 0 0-.676 7.013A99.156 99.156 0 0 0 0 345.967v395.351c-.027 23.115 8.194 45.51 23.224 63.275a14.249 14.249 0 0 0 2.798 3.708zm809.264-177.457c-.008 5.634-4.641 10.205-10.371 10.205h-39.658c-5.717 0-10.364-4.571-10.364-10.205v-5.555c0-5.64 4.647-10.211 10.364-10.219h39.658c5.717.008 10.364 4.579 10.371 10.219v5.555zm158.742-166.75v49.633c-.019 12.388-10.209 22.441-22.789 22.449h-29.087v-94.538h29.087c12.58.008 22.77 10.06 22.789 22.457zM794.95 213.084c78.614.086 142.334 62.866 142.415 140.337v58.685h-10.203c-8.275 0-14.983 6.61-14.983 14.769v124.07c0 8.153 6.708 14.763 14.983 14.763h10.203v17.468c-.027 16.631-13.698 30.102-30.567 30.121h-43.435c-5.315-16.512-20.868-27.733-38.448-27.758h-39.658c-22.259.025-40.301 17.81-40.328 39.751v5.555c.027 16.359 10.215 31.037 25.687 36.993v73.481a68.343 68.343 0 0 1-8.656 33.332L581.875 594.1c-3.742-3.831-9.286-5.389-14.508-4.077-5.228 1.306-9.332 5.292-10.758 10.418-1.42 5.126.068 10.607 3.889 14.361L742.27 797.033c-12.203 9.031-27.045 13.907-42.297 13.894H100.599c-15.29.006-30.179-4.888-42.384-13.959l180.774-182.193a14.614 14.614 0 0 0-.247-20.886c-5.918-5.692-15.397-5.593-21.189.238L38.554 774.546a68.257 68.257 0 0 1-8.582-33.228V370.012l310.945 259.447c34.302 28.782 84.739 28.761 119.016-.052l111.272-92.987c8.835 17.903 27.26 29.269 47.458 29.288h44.071c8.273 0 14.981-6.61 14.981-14.763v-124.07c0-8.159-6.708-14.769-14.981-14.769h-10.203v-58.685c.087-77.478 63.799-140.251 142.421-140.337zM647.749 441.638v94.538h-29.087c-12.58-.008-22.775-10.06-22.789-22.449v-49.633c.014-12.396 10.209-22.449 22.789-22.457h29.087zM100.606 276.366h540.796a166.716 166.716 0 0 0-18.845 77.055v58.685h-3.895c-29.128.025-52.726 23.285-52.761 51.988v38.035L440.552 606.892c-23.123 19.427-57.139 19.441-80.276.033L31.324 332.45c6.587-32.575 35.582-56.038 69.282-56.084z" />
                                                        </svg>{" "}
                                                    </span>
                                                    <div className="d-inline-block ml-4">
                                                        <span className="contact-label d-block">Mail us</span>
                                                        <span>
                                                            <a href="mailto:customercare@flebo.in">
                                                                customercare@flebo.in
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="controlled-mobile-nav-tabpane-account"
                                    aria-labelledby="controlled-mobile-nav-tab-account" role="tabpanel" aria-hidden="true"
                                    className="fade font-size-14 Admin-Navbar tab-pane">
                                    <p className="font-size-14 text-black mt-3">
                                        Please click to <a href="/">Login/Signup</a> to get access.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Sidenav-social-icon px-0 text-center col-lg-12">
                            <div className="mx-0 row">
                                <div className="border py-3 border-right-0 col">
                                    <a href="https://www.facebook.com/Flebo-106073985346129/?modal=admin_todo_tour&notif_id=1645431497830241&notif_t=page_invite&ref=notif"
                                        target="_blank">
                                        <i className="fa w-15-px" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#e31019"
                                                    d="M674.537 170.027h93.485V7.211C751.894 4.992 696.425 0 631.829 0 497.045 0 404.714 84.779 404.714 240.597V384H255.978v182.016h148.736V1024h182.357V566.059h142.717l22.656-182.016H587.028V258.645c.043-52.608 14.208-88.618 87.508-88.618z" />
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                                <div className="border py-3 border-right-0 col">
                                    <a href="https://twitter.com/InFlebo" target="_blank">
                                        <i className="fa w-15-px" aria-hidden="true">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="img-fluid"
                                                width={1024} height={1024} viewBox="0 0 1024 1024">
                                                <g id="twitterIcon" />
                                                <path fill="#e31019"
                                                    d="M1097.143 149.139c-43.52 19.090-89.893 31.744-138.24 37.888 49.737-29.696 87.698-76.361 105.545-132.608-46.373 27.648-97.573 47.177-152.137 58.075-44.032-46.885-106.789-75.922-175.25-75.922-132.827 0-239.762 107.813-239.762 239.982 0 19.017 1.609 37.303 5.559 54.711-199.461-9.728-375.954-105.326-494.519-250.953-20.699 35.913-32.841 77.019-32.841 121.271 0 83.090 42.789 156.745 106.569 199.387-38.546-0.731-76.361-11.922-108.398-29.55 0 0.731 0 1.682 0 2.633 0 116.59 83.163 213.431 192.219 235.739-19.529 5.339-40.814 7.899-62.903 7.899-15.36 0-30.866-0.878-45.422-4.096 31.086 95.013 119.296 164.864 224.183 167.131-81.627 63.854-185.271 102.327-297.472 102.327-19.675 0-38.546-0.878-57.417-3.291 106.277 68.535 232.229 107.666 368.055 107.666 441.49 0 682.862-365.714 682.862-682.715 0-10.606-0.366-20.846-0.878-31.013 47.616-33.792 87.625-75.995 120.247-124.562z" />
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                                <div className="border py-3 border-right-0 col">
                                    <a href="https://www.youtube.com/channel/UCexu9kkuSxz9dY-HW8l07iA" target="_blank">
                                        <i className="fa w-15-px" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#e31019"
                                                    d="M1013.6 307.3s-10-70.6-40.8-101.6c-39-40.8-82.6-41-102.6-43.4C727 151.9 512 151.9 512 151.9h-.4s-215 0-358.2 10.4c-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6S0 390.1 0 473.1v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-.2-82.8-10.4-165.8-10.4-165.8zM406 644.9V357.1l276.6 144.4L406 644.9z" />
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                                <div className="border py-3 border-right-0 col">
                                    <a href="https://www.linkedin.com/company/flebo-in" target="_blank">
                                        <i className="fa w-15-px" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#e31019"
                                                    d="M1023.741 1024v-.045h.256V648.403c0-183.721-39.552-325.247-254.336-325.247-103.258 0-172.547 56.661-200.835 110.379h-2.987v-93.227H362.19v683.647h212.054V685.44c0-89.131 16.896-175.318 127.276-175.318 108.755 0 110.381 101.718 110.381 181.033V1024h211.84zM16.909 340.351h212.309V1024H16.909V340.351zM122.968 0C55.086 0 .003 55.083.003 122.965s55.083 124.118 122.965 124.118c67.883 0 122.966-56.235 122.966-124.118C245.891 55.083 190.808 0 122.968 0z" />
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                                <div className="border py-3 col">
                                    <a href="https://instagram.com/flebo.in?utm_medium=copy_link" target="_blank">
                                        <i className="fa w-15-px" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#e31019"
                                                    d="M1021.297 301.056c-2.4-54.409-11.194-91.814-23.802-124.227-12.998-34.405-33.005-65.208-59.213-90.815-25.606-26.005-56.614-46.212-90.618-59.011C815.062 14.399 777.853 5.6 723.446 3.202 668.63.6 651.228-.002 512.199-.002 373.172-.002 355.77.6 301.158 2.999c-54.409 2.399-91.815 11.205-124.22 23.802-34.413 13.003-65.216 33.006-90.822 59.215-26.005 25.607-46.204 56.612-59.011 90.62-12.604 32.608-21.403 69.811-23.801 124.22C.702 355.671.1 373.073.1 512.1c0 139.03.602 156.431 3.001 211.043C5.5 777.549 14.306 814.957 26.91 847.367c13.002 34.406 33.202 65.21 59.207 90.816 25.606 26.003 56.612 46.214 90.619 59.014 32.608 12.602 69.811 21.402 124.227 23.802 54.605 2.406 72.014 3.002 211.041 3.002s156.428-.595 211.039-3.002c54.413-2.4 91.814-11.2 124.224-23.802 68.813-26.611 123.226-81.018 149.83-149.83 12.595-32.608 21.402-69.818 23.802-124.224 2.4-54.611 3.002-72.013 3.002-211.043 0-139.027-.205-156.429-2.605-211.041zm-92.211 418.083c-2.202 50.01-10.605 77.011-17.606 95.014-17.203 44.614-52.608 80.019-97.222 97.222-18.003 7.002-45.203 15.405-95.014 17.6-54.01 2.406-70.208 3.002-206.839 3.002-136.628 0-153.03-.595-206.845-3.002-50.01-2.195-77.014-10.598-95.018-17.6-22.2-8.205-42.406-21.203-58.808-38.208-17.003-16.608-30.006-36.608-38.211-58.81-7.001-18.003-15.401-45.21-17.597-95.021-2.407-54.01-3.001-70.214-3.001-206.842s.594-153.03 3.001-206.837c2.196-50.01 10.596-77.015 17.597-95.019 8.205-22.207 21.208-42.406 38.414-58.816 16.596-17.004 36.601-30.006 58.808-38.203 18.003-7.002 45.212-15.402 95.018-17.605 54.01-2.399 70.216-3 206.836-3 136.833 0 153.031.602 206.842 3 50.01 2.204 77.018 10.604 95.021 17.605 22.202 8.197 42.406 21.199 58.81 38.203 17.005 16.605 30.003 36.609 38.208 58.816 7.002 18.004 15.405 45.204 17.606 95.019 2.4 54.01 3.002 70.209 3.002 206.837s-.602 152.634-3.002 206.644z" />
                                                <path fill="#e31019"
                                                    d="M512.184 249.044c-145.224 0-263.052 117.82-263.052 263.052s117.828 263.05 263.052 263.05c145.235 0 263.052-117.818 263.052-263.05S657.418 249.044 512.184 249.044zm0 433.686c-94.214 0-170.635-76.413-170.635-170.634s76.421-170.635 170.635-170.635c94.221 0 170.636 76.413 170.636 170.635S606.405 682.73 512.184 682.73zM847.057 238.644c0 33.913-27.501 61.411-61.421 61.411-33.914 0-61.408-27.498-61.408-61.411 0-33.921 27.494-61.411 61.408-61.411 33.92 0 61.421 27.49 61.421 61.411z" />
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header