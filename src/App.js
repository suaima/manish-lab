import './App.css';

function App() {
  return (
    <div className="fullHeight d-flex flex-column container-fluid">
      <header
        id="header"
        className="row position-relative z-index-3 h-100-vh flex-shrink-0 "
      >
        <div id="book-a-slot" className="py-2 top-bar col-lg-12">
          <div className="px-md-5 row">
            <div className="my-1 my-lg-0 lg-screen-max-width container-fluid">
              <div className="justify-content-end flex-row flex-sm-auto justify-content-space-between row">
                <div className="align-self-center col-lg-6 col-8">
                  <div className="row">
                    <div className="col-auto col">
                      <a
                        href="tel:+911244550000"
                        className="mr-2 d-flex text-nowrap font-semiBold"
                      >
                        {" "}
                        <span className="mr-2"> Call to Book</span>{" "}
                        <span className="mr-2 w-12-px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={1024}
                            height={1024}
                            viewBox="0 0 1024 1024"
                            className="img-fluid"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M941.838 672.142c-62.694 0-124.256-9.805-182.586-29.082-28.582-9.752-63.725-.806-81.171 17.107l-115.136 86.918c-133.528-71.277-215.779-153.501-286.083-286.026l84.36-112.138c21.917-21.888 29.779-53.862 20.36-83.862-19.36-58.64-29.195-120.168-29.195-182.888C352.39 36.861 315.529 0 270.222 0H82.168C36.862 0 0 36.861 0 82.168 0 601.502 422.501 1024 941.837 1024c45.306 0 82.163-36.864 82.163-82.17V754.304c0-45.306-36.864-82.163-82.163-82.163z"
                            />
                          </svg>{" "}
                        </span>{" "}
                        <span>012 44 55 0000</span>
                      </a>
                    </div>
                    <div className="col-auto border-left d-flex hidden-xs hidden-sm col">
                      <div className="mr-2 w-15-px">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={1024}
                          height={1024}
                          viewBox="0 0 1024 1024"
                          className="img-fluid"
                        >
                          <path
                            fill="#FFFFFF"
                            d="M597.582 622.808c-25.478 17.309-55.07 26.458-85.58 26.458s-60.101-9.149-85.577-26.458L6.818 337.728A152.69 152.69 0 0 1 0 332.802v467.136C0 853.496 42.65 896 94.266 896h835.47c52.556 0 94.262-43.464 94.262-96.062V332.8a149.44 149.44 0 0 1-6.83 4.937L597.58 622.809z"
                          />
                          <path
                            fill="#FFFFFF"
                            d="m40.101 295.722 419.606 277.331c15.884 10.499 34.089 15.747 52.291 15.747 18.206 0 36.413-5.25 52.296-15.747L983.9 295.722c25.114-16.586 40.1-44.344 40.1-74.303 0-51.513-42.274-93.42-94.234-93.42H94.235c-51.96.002-94.234 41.909-94.234 93.47 0 29.909 14.992 57.668 40.1 74.253z"
                          />
                        </svg>{" "}
                      </div>
                      <a href="mailto:customercare@flebo.in">
                        customercare@flebo.in
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg-top-bar col-lg-6 col-4">
                  <div className="justify-content-end flex-row flex-sm-auto justify-content-space-between flex-nowrap row">
                    <div className="col-auto align-self-center col">
                      <a href="/">
                        <span className="selected-city mr-2">Select Location</span>
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="col-auto align-self-center border-left border-right sm-icons hidden-xs hidden-sm col">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a
                            href="https://www.facebook.com/Flebo-106073985346129/?modal=admin_todo_tour&notif_id=1645431497830241&notif_t=page_invite&ref=notif"
                            rel="noreferrer"
                            target="_blank"
                            className="d-block w-15-px"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={1024}
                              height={1024}
                              className="img-fluid"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="#FFFFFF"
                                d="M674.537 170.027h93.485V7.211C751.894 4.992 696.425 0 631.829 0 497.045 0 404.714 84.779 404.714 240.597V384H255.978v182.016h148.736V1024h182.357V566.059h142.717l22.656-182.016H587.028V258.645c.043-52.608 14.208-88.618 87.508-88.618z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/InFlebo"
                            rel="noreferrer"
                            target="_blank"
                            className="d-block w-15-px"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="img-fluid"
                              width={1024}
                              height={1024}
                              viewBox="0 0 1024 1024"
                            >
                              <g id="twitterIcon" />
                              <path
                                fill="#FFFFFF"
                                d="M1097.143 149.139c-43.52 19.090-89.893 31.744-138.24 37.888 49.737-29.696 87.698-76.361 105.545-132.608-46.373 27.648-97.573 47.177-152.137 58.075-44.032-46.885-106.789-75.922-175.25-75.922-132.827 0-239.762 107.813-239.762 239.982 0 19.017 1.609 37.303 5.559 54.711-199.461-9.728-375.954-105.326-494.519-250.953-20.699 35.913-32.841 77.019-32.841 121.271 0 83.090 42.789 156.745 106.569 199.387-38.546-0.731-76.361-11.922-108.398-29.55 0 0.731 0 1.682 0 2.633 0 116.59 83.163 213.431 192.219 235.739-19.529 5.339-40.814 7.899-62.903 7.899-15.36 0-30.866-0.878-45.422-4.096 31.086 95.013 119.296 164.864 224.183 167.131-81.627 63.854-185.271 102.327-297.472 102.327-19.675 0-38.546-0.878-57.417-3.291 106.277 68.535 232.229 107.666 368.055 107.666 441.49 0 682.862-365.714 682.862-682.715 0-10.606-0.366-20.846-0.878-31.013 47.616-33.792 87.625-75.995 120.247-124.562z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/channel/UCexu9kkuSxz9dY-HW8l07iA"
                            rel="noreferrer"
                            target="_blank"
                            className="d-block w-15-px"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={1024}
                              height={1024}
                              className="img-fluid"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="#FFFFFF"
                                d="M1013.6 307.3s-10-70.6-40.8-101.6c-39-40.8-82.6-41-102.6-43.4C727 151.9 512 151.9 512 151.9h-.4s-215 0-358.2 10.4c-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6S0 390.1 0 473.1v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-.2-82.8-10.4-165.8-10.4-165.8zM406 644.9V357.1l276.6 144.4L406 644.9z"
                              />
                            </svg>{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://instagram.com/flebo.in?utm_medium=copy_link"
                            rel="noreferrer"
                            target="_blank"
                            className="d-block w-15-px"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={1024}
                              height={1024}
                              className="img-fluid"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="#FFFFFF"
                                d="M1021.297 301.056c-2.4-54.409-11.194-91.814-23.802-124.227-12.998-34.405-33.005-65.208-59.213-90.815-25.606-26.005-56.614-46.212-90.618-59.011C815.062 14.399 777.853 5.6 723.446 3.202 668.63.6 651.228-.002 512.199-.002 373.172-.002 355.77.6 301.158 2.999c-54.409 2.399-91.815 11.205-124.22 23.802-34.413 13.003-65.216 33.006-90.822 59.215-26.005 25.607-46.204 56.612-59.011 90.62-12.604 32.608-21.403 69.811-23.801 124.22C.702 355.671.1 373.073.1 512.1c0 139.03.602 156.431 3.001 211.043C5.5 777.549 14.306 814.957 26.91 847.367c13.002 34.406 33.202 65.21 59.207 90.816 25.606 26.003 56.612 46.214 90.619 59.014 32.608 12.602 69.811 21.402 124.227 23.802 54.605 2.406 72.014 3.002 211.041 3.002s156.428-.595 211.039-3.002c54.413-2.4 91.814-11.2 124.224-23.802 68.813-26.611 123.226-81.018 149.83-149.83 12.595-32.608 21.402-69.818 23.802-124.224 2.4-54.611 3.002-72.013 3.002-211.043 0-139.027-.205-156.429-2.605-211.041zm-92.211 418.083c-2.202 50.01-10.605 77.011-17.606 95.014-17.203 44.614-52.608 80.019-97.222 97.222-18.003 7.002-45.203 15.405-95.014 17.6-54.01 2.406-70.208 3.002-206.839 3.002-136.628 0-153.03-.595-206.845-3.002-50.01-2.195-77.014-10.598-95.018-17.6-22.2-8.205-42.406-21.203-58.808-38.208-17.003-16.608-30.006-36.608-38.211-58.81-7.001-18.003-15.401-45.21-17.597-95.021-2.407-54.01-3.001-70.214-3.001-206.842s.594-153.03 3.001-206.837c2.196-50.01 10.596-77.015 17.597-95.019 8.205-22.207 21.208-42.406 38.414-58.816 16.596-17.004 36.601-30.006 58.808-38.203 18.003-7.002 45.212-15.402 95.018-17.605 54.01-2.399 70.216-3 206.836-3 136.833 0 153.031.602 206.842 3 50.01 2.204 77.018 10.604 95.021 17.605 22.202 8.197 42.406 21.199 58.81 38.203 17.005 16.605 30.003 36.609 38.208 58.816 7.002 18.004 15.405 45.204 17.606 95.019 2.4 54.01 3.002 70.209 3.002 206.837s-.602 152.634-3.002 206.644z"
                              />
                              <path
                                fill="#FFFFFF"
                                d="M512.184 249.044c-145.224 0-263.052 117.82-263.052 263.052s117.828 263.05 263.052 263.05c145.235 0 263.052-117.818 263.052-263.05S657.418 249.044 512.184 249.044zm0 433.686c-94.214 0-170.635-76.413-170.635-170.634s76.421-170.635 170.635-170.635c94.221 0 170.636 76.413 170.636 170.635S606.405 682.73 512.184 682.73zM847.057 238.644c0 33.913-27.501 61.411-61.421 61.411-33.914 0-61.408-27.498-61.408-61.411 0-33.921 27.494-61.411 61.408-61.411 33.92 0 61.421 27.49 61.421 61.411z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/flebo-in"
                            rel="noreferrer"
                            target="_blank"
                            className="d-block w-15-px"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={1024}
                              height={1024}
                              className="img-fluid"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="#FFFFFF"
                                d="M1023.741 1024v-.045h.256V648.403c0-183.721-39.552-325.247-254.336-325.247-103.258 0-172.547 56.661-200.835 110.379h-2.987v-93.227H362.19v683.647h212.054V685.44c0-89.131 16.896-175.318 127.276-175.318 108.755 0 110.381 101.718 110.381 181.033V1024h211.84zM16.909 340.351h212.309V1024H16.909V340.351zM122.968 0C55.086 0 .003 55.083.003 122.965s55.083 124.118 122.965 124.118c67.883 0 122.966-56.235 122.966-124.118C245.891 55.083 190.808 0 122.968 0z"
                              />
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
                    <button
                      aria-label="Menu Button"
                      type="button"
                      className="navbar-toggle x collapsed btn btn-outline-danger my-0"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <a
                    className="position-relative d-inline-block flebo-logo"
                    href="/"
                  >
                    <img
                      loading="lazy"
                      src="https://img.flebo.in/assets/flebo-dark-logo-n.svg"
                      alt="Flebo.in"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div id="main-nav" className="d-flex justify-content-end col">
                  <ul className="align-self-center nav">
                    <li className="nav-item d-flex flex-row align-item-center hidden-xs hidden-sm hidden">
                      <div className="w-25-px mr-2 align-self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={512}
                          height={512}
                          className="img-fluid"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#e31019"
                            d="M416.755.662c40.927.107 60.339 19.148 60.531 59.424.188 40.411.252 80.824-.026 121.236-.264 37.565-20.724 61.088-57.998 56.696-52.431-6.167-86.727 12.088-115.464 56.006-28.005 42.791-67.409 42.625-95.767-.217-28.848-43.578-63.063-62.156-115.558-55.806-36.994 4.473-57.487-19.361-57.722-56.977-.255-41.123-.289-82.245.013-123.368.272-36.458 20.31-56.73 56.56-56.938 55.3-.315 272.26-.192 325.432-.055zM274.072 204.918c48.486 0 95.805-.442 143.103.217 19.289.268 26.651-7.772 26.311-26.72-.698-38.952-.681-77.938-.005-116.89.324-18.612-6.243-27.154-25.885-27.065-107.688.468-215.377.4-323.062.051-17.676-.059-26.201 6.303-25.954 24.809.536 40.374.558 80.773-.008 121.147-.269 18.702 8.589 25.102 26.111 24.605 21.945-.621 44.072-1.69 65.813.519 10.547 1.072 22.8 6.887 30.035 14.565 17.433 18.493 31.372 40.284 48.869 58.7 5.456 5.737 22.038 9.827 26.243 6.205 14.296-12.308 25.341-28.392 39.603-45.392-13.509-.595-21.851-.962-31.172-1.366-.005-10.649-.005-20.379-.005-33.385zM42.906 377.913c-13.121-46.094-6.934-73.036 20.596-92.647 23.732-16.906 56.142-16.612 79.543.716 26.861 19.897 33.117 48.405 19.156 91.481 37.47 27.175 45.328 66.77 42.957 110.689-.856 15.889-7.184 23.344-23.268 23.281-52.478-.217-104.965-.289-157.442.047-17.255.106-23.273-7.767-24.119-24.604-2.175-43.302 5.861-82.041 42.579-108.961zm132.752 98.588c-6.358-20.357-9.734-38.356-17.561-54.142-7.44-14.998-19.451-24.89-39.68-15.935-8.793 3.894-22.178 4.035-30.908.128-20.085-8.997-32.406.43-39.816 15.488-7.938 16.131-11.261 34.529-17.369 54.461h145.334zm-72.299-101.508c18.425-.336 33.644-16.096 33.296-34.483-.349-18.48-16.037-33.623-34.475-33.279-18.535.349-33.606 15.952-33.266 34.457.332 18.471 16.025 33.644 34.445 33.304zM468.671 377.461c37.45 27.243 45.345 66.826 42.932 110.761-.873 15.93-7.308 23.277-23.341 23.209-52.478-.226-104.964-.293-157.442.038-17.297.106-23.2-7.89-24.043-24.677-2.183-43.306 5.908-82.024 42.608-108.918-13.211-45.885-6.95-73.06 20.634-92.661 23.757-16.876 56.159-16.548 79.538.805 26.796 19.91 33.006 48.286 19.114 91.443zm11.798 99.075c-4.141-17.616-5.589-33.321-11.555-47.073-10.176-23.438-20.966-26.822-45.988-22.08-9.444 1.792-20.949 2.958-29.111-.8-20.029-9.227-32.376.49-39.752 15.556-7.895 16.131-11.185 34.513-17.241 54.397h143.649zM443.096 340.39c-.417-18.476-16.161-33.568-34.594-33.159-18.531.417-33.551 16.079-33.147 34.577.4 18.471 16.152 33.594 34.564 33.185s33.589-16.233 33.176-34.603z"
                          />
                          <path
                            fill="#e31019"
                            d="M134.131 103.635h39.846v32.211h-39.846v-32.21zM276.435 104.287v31.393h-39.974v-31.393h39.974zM337.791 135.718V104.24h40.348v31.478h-40.348z"
                          />
                        </svg>
                      </div>
                      <a
                        href="/public/forum/"
                        className="nav-link mt-1 align-self-center"
                      >
                        Discussion Board
                      </a>
                    </li>
                    <li className="nav-item align-item-center" />
                    <li className="nav-item d-flex flex-row align-item-center hidden-xs hidden-sm">
                      <div className="w-25-px mr-1 align-self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={512}
                          height={512}
                          className="img-fluid"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#e31019"
                            d="m473.489 138.918-.015-.399a533.034 533.034 0 0 1-.461-15.91c-.418-28.231-22.86-51.582-51.094-53.16-58.867-3.285-104.406-22.48-143.316-60.406l-.332-.316c-12.692-11.636-31.836-11.636-44.531 0l-.332.316c-38.91 37.925-84.449 57.121-143.316 60.41-28.23 1.574-50.675 24.925-51.093 53.16a530.026 530.026 0 0 1-.461 15.906l-.023.926c-1.145 60.027-2.566 134.734 22.425 202.542 13.742 37.289 34.554 69.703 61.855 96.347 31.094 30.344 71.82 54.433 121.046 71.597a37.383 37.383 0 0 0 4.961 1.351c2.391.476 4.797.715 7.203.715s4.817-.238 7.203-.715a37.46 37.46 0 0 0 4.981-1.36c49.168-17.195 89.851-41.297 120.918-71.637 27.289-26.652 48.101-59.074 61.856-96.371 25.086-68.012 23.668-142.859 22.527-203zm-50.715 192.606c-26.36 71.469-80.168 120.55-164.5 150.043a7.764 7.764 0 0 1-.953.258 6.746 6.746 0 0 1-2.641-.004 7.65 7.65 0 0 1-.946-.254c-84.421-29.438-138.265-78.492-164.605-149.964-23.035-62.504-21.731-131.082-20.578-191.582l.008-.336c.234-5.199.391-10.644.477-16.629.188-12.535 10.172-22.906 22.731-23.605 33.313-1.859 62.578-8.297 89.469-19.68 26.856-11.367 50.707-27.391 72.91-48.984 1.129-.953 2.594-.957 3.719 0 22.207 21.593 46.058 37.617 72.91 48.984 26.89 11.383 56.156 17.82 89.472 19.68 12.558.699 22.543 11.07 22.726 23.609.09 6.016.246 11.461.481 16.625 1.149 60.57 2.422 129.203-20.68 191.839z"
                          />
                          <path
                            fill="#e31019"
                            d="M255.998 128.411c-70.359 0-127.597 57.242-127.597 127.598 0 70.359 57.238 127.601 127.597 127.601 70.356 0 127.598-57.242 127.598-127.601 0-70.356-57.242-127.597-127.597-127.597zm0 225.152c-53.793 0-97.555-43.762-97.555-97.555s43.762-97.555 97.555-97.555c53.789 0 97.55 43.762 97.55 97.555s-43.762 97.555-97.55 97.555z"
                          />
                          <path
                            fill="#e31019"
                            d="m292.67 216.395-59.266 59.266-16.086-16.086c-5.867-5.867-15.379-5.867-21.246 0-5.863 5.867-5.863 15.379 0 21.242l26.711 26.711c2.934 2.933 6.778 4.399 10.621 4.399s7.688-1.465 10.621-4.399l69.891-69.891c5.863-5.867 5.863-15.379 0-21.242-5.867-5.871-15.379-5.871-21.246 0z"
                          />
                        </svg>
                      </div>
                      <a
                        className="nav-link mt-1 align-self-center"
                        href="/#our-promise"
                      >
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
            <img
              loading="lazy"
              src="https://img.flebo.in/assets/images/flebo-pathology-2050.png"
              alt="Special offer on Pathology 20% OFF for First Time User + 50% Cashback in your wallet"
              className="img-fluid"
            />
          </div>
          <div className="fullHeight header-center mt-4 mt-lg-0 row">
            <div className="text-center text-lg-right text-grey mb-4 mb-lg-0 px-lg-5 position-lg-absolute col-lg-12">
              <span className="border rounded-5 px-3 py-2 bg-white mr-lg-4">
                4.9{" "}
                <span className="l-height-20 position-relative top--3 btn-disabled">
                  <span
                    style={{
                      display: "inline-block",
                      direction: "ltr",
                      touchAction: "none"
                    }}
                  >
                    <span
                      className="react-simple-star-rating"
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                        verticalAlign: "middle",
                        userSelect: "none"
                      }}
                    >
                      <span
                        className="empty-icons"
                        style={{
                          display: "inline-block",
                          color: "rgb(204, 204, 204)"
                        }}
                      >
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                      </span>
                      <span
                        className="filled-icons"
                        title="5 out of 5"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          color: "rgb(255, 188, 11)",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          display: "inline-block",
                          width: "98%"
                        }}
                      >
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
                        </svg>
                        <svg
                          fill="currentColor"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          className="star-svg"
                        >
                          <path
                            fill="currentColor"
                            stroke="none"
                            strokeMiterlimit={10}
                            strokeWidth={0}
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                          />
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
                  <div className="text-center mb-4 d-flex justify-content-center align-items-center flex-column col-lg-12">
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
                                  <div className="d-flex px-0 bg-white rounded-5 overflow-hidden col">
                                    <div className="align-self-center w-30-px ml-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={1024}
                                        height={1024}
                                        viewBox="0 0 1024 1024"
                                        className="img-fluid"
                                      >
                                        <path
                                          fill="#e31019"
                                          d="M512 0C300.224 0 128 172.224 128 384c0 266.176 346.624 615.872 361.344 630.656 6.272 6.208 14.464 9.344 22.656 9.344s16.384-3.136 22.656-9.344C549.376 999.872 896 650.176 896 384 896 172.224 723.776 0 512 0zm0 945.728C435.584 863.936 192 587.328 192 384c0-176.448 143.552-320 320-320s320 143.552 320 320c0 203.136-243.584 479.936-320 561.728z"
                                        />
                                        <path
                                          fill="#e31019"
                                          d="M512 192c-105.856 0-192 86.144-192 192s86.144 192 192 192 192-86.144 192-192-86.144-192-192-192zm0 320c-70.592 0-128-57.408-128-128s57.408-128 128-128 128 57.408 128 128-57.408 128-128 128z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="position-absolute right-0 mr-3 top-bottom-0 d-flex" />
                                    <input
                                      autoComplete="off"
                                      pattern="[6-9]{1}[0-9]{9}"
                                      inputMode="numeric"
                                      min={6}
                                      maxLength={6}
                                      name="pincode"
                                      placeholder="Pincode"
                                      type="text"
                                      id="pincode"
                                      className="form-control flex-grow-1 border-0 py-4 align-self-center form-control"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-lg-3 col-xl-2 order-lg-2 col">
                                <div className="row">
                                  <div className="d-flex pl-2 pr-2 bg-white rounded-5 col">
                                    <select className="border-0 w-100 bg-transparent position-relative z-index-1">
                                      <option value="pathology_radiology">
                                        All
                                      </option>
                                      <option value="radiology">Radiology</option>
                                      <option value="pathology">Pathology</option>
                                    </select>
                                    <i
                                      className="fa fa-angle-down pl-2 position-absolute top-0 right-0 mr-3 font-size-16 bottom-0 z-index-0 text-grey d-flex align-items-center"
                                      aria-hidden="true"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 col-lg-6 col-xl-8 mt-md-2-px mt-xs-2-px order-lg-1 col">
                                <div className="search-test row">
                                  <div className="d-flex px-0 bg-white rounded-5 overflow-hidden col">
                                    <div className="align-self-center w-20-px ml-3">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={1024}
                                        height={1024}
                                        viewBox="0 0 1024 1024"
                                        className="img-fluid"
                                      >
                                        <path
                                          fill="#e31019"
                                          d="M450.949 0C202.304 0 .001 202.302.001 450.948c0 248.66 202.302 450.948 450.948 450.948 248.66 0 450.948-202.288 450.948-450.948C901.897 202.303 699.609 0 450.949 0zm0 818.648c-202.746 0-367.696-164.952-367.696-367.696 0-202.747 164.95-367.699 367.696-367.699 202.745 0 367.696 164.95 367.696 367.696 0 202.745-164.952 367.7-367.696 367.7z"
                                        />
                                        <path
                                          fill="#e31019"
                                          d="M1011.804 952.945 773.146 714.287c-16.263-16.263-42.598-16.263-58.858 0-16.263 16.249-16.263 42.613 0 58.862l238.654 238.654c8.13 8.13 18.776 12.197 29.433 12.197 10.639 0 21.296-4.067 29.429-12.197 16.26-16.249 16.26-42.609 0-58.858z"
                                        />
                                      </svg>
                                    </div>
                                    <input
                                      autoComplete="off"
                                      name="txtsearch"
                                      placeholder="Book a Pathology or Radiology Test"
                                      type="text"
                                      id="txtsearch"
                                      className="form-control flex-grow-1 py-4 border-0 form-control"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" Uploads align-self-center mb-4 mb-lg-0 overflow-hidden">
                      <span className="mx-4 text-black font-semilight font-size-18 d-sm-block d-md-inline-block">
                        or
                      </span>
                      <div className="file-input">
                        <input
                          type="file"
                          id="prescription"
                          name="upload-precription"
                          accept="image/*,capture=camera"
                          style={{ display: "none" }}
                        />
                        <button className="upload-file">Upload a file</button>
                        <label className="input-label cursor-pointer">
                          <span className="w-40-px d-inline-block m-auto cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={998}
                              height={1024}
                              className="img-fluid"
                              viewBox="0 0 998 1024"
                            >
                              <path
                                fill="#e31019"
                                d="M319.478 6.256c-8.116-8.332-21.277-8.334-29.396-.004L61.431 240.918l29.393 30.166 193.167-198.25v97.834c0 35.346-27.919 64-62.359 64h-62.359v42.665h62.359c57.372-.068 103.862-47.785 103.93-106.665V21.334c0-5.656-2.187-11.08-6.084-15.078z"
                              />
                              <path
                                fill="#e31019"
                                d="M803.722 597.333V106.666C803.654 47.786 757.162.07 699.791 0h-394.94c-5.513.002-10.798 2.25-14.695 6.25L61.505 240.918c-3.897 4-6.09 9.426-6.09 15.082v661.333c.068 58.88 46.561 106.596 103.931 106.667h540.445c57.37-.071 103.862-47.787 103.931-106.667V896H762.15v21.333c0 35.346-27.921 64-62.359 64H159.346c-34.44 0-62.359-28.654-62.359-64V264.832L313.456 42.665h386.335c34.441 0 62.359 28.654 62.359 64V597.33l41.572.003z"
                              />
                              <path
                                fill="#e31019"
                                d="M575.036 511.997c-11.479 0-20.787 9.552-20.787 21.333v64h41.572v-42.664h41.572v-42.669h-62.356zM387.939 725.333h-41.572v-42.664c0-11.784-9.305-21.336-20.787-21.336h-83.145c-11.48 0-20.787 9.552-20.787 21.336v42.664h-41.572c-11.48 0-20.787 9.552-20.787 21.336V832c0 11.784 9.307 21.333 20.787 21.333h41.572V896c0 11.784 9.307 21.333 20.787 21.333h83.145c11.482 0 20.787-9.549 20.787-21.333v-42.667h41.572c11.482 0 20.787-9.549 20.787-21.333v-85.333c-.003-11.781-9.305-21.333-20.787-21.333zm-20.788 85.334h-41.572c-11.479 0-20.786 9.552-20.786 21.333v42.667h-41.572V832c0-11.781-9.307-21.333-20.787-21.333h-41.572V768h41.572c11.48 0 20.787-9.552 20.787-21.333V704h41.572v42.667c0 11.781 9.307 21.333 20.786 21.333h41.572v42.667z"
                              />
                              <path
                                fill="#e31019"
                                d="M159.289 511.997h415.724v42.667H159.289v-42.667zM159.289 405.333h540.445V448H159.289v-42.667zM387.939 298.669h311.795v42.664H387.939v-42.664zM471.082 191.999h228.649v42.666H471.082v-42.666zM387.939 191.999h41.611v42.708h-41.611v-42.708zM673.829 841.232c-1.967-.685-6.155-1.027-12.564-1.027h-52.308c-4.445 0-7.992-.683-10.642-2.051-2.649-1.455-3.975-4.059-3.975-7.822 0-2.733.643-4.915 1.925-6.538 3.248.856 6.367 1.281 9.358 1.281 2.993 0 5.343-.299 7.052-.898 1.709-.683 3.206-1.835 4.487-3.461 2.563-3.419 3.847-9.103 3.847-17.051V672.512c-.257-5.984-2.224-9.786-5.897-11.411-1.113-.512-2.652-.982-4.616-1.41-1.88-.428-3.763-.856-5.643-1.281-1.793-.515-3.332-1.111-4.613-1.796-2.565-1.368-3.847-3.161-3.847-5.385 0-4.017.683-6.879 2.051-8.588 1.967.683 6.197 1.024 12.692 1.024h16.668l50.512-1.41c26.325 0 46.025 4.703 59.103 14.102 13.076 9.318 19.614 22.481 19.614 39.49 0 12.734-4.143 24.442-12.435 35.126-9.232 11.881-21.966 19.915-38.206 24.103 4.445 3.077 9.486 8.717 15.129 16.922l13.59 19.873c12.734 18.548 23.289 27.821 31.665 27.821 3.164 0 5.556-.299 7.181-.898l3.203-1.284c.685-.255 1.455-.383 2.308-.383.856 0 1.754.683 2.694 2.051.94 1.281 1.41 2.778 1.41 4.487s-.727 3.76-2.179 6.155c-1.455 2.308-3.505 4.401-6.155 6.283-5.984 4.359-12.522 6.538-19.616 6.538s-12.947-1.197-17.563-3.589c-4.529-2.395-8.72-5.514-12.564-9.36-3.763-3.931-7.223-8.376-10.384-13.333a242.836 242.836 0 0 1-8.72-15.258l-7.564-15.255c-5.383-11.112-9.699-18.248-12.947-21.409-3.164-3.248-6.068-4.873-8.72-4.873h-12.947c-2.137 0-3.206-1.539-3.206-4.616 0-4.272 1.625-7.606 4.873-9.998 1.111-.769 4.443-1.197 9.998-1.284 5.556-.171 11.794-1.365 18.718-3.589 7.008-2.221 12.779-5.257 17.308-9.103 8.804-7.606 13.204-18.29 13.204-32.051 0-11.537-3.847-20.981-11.537-28.333-8.72-8.289-20.855-12.519-36.412-12.692-10.256 0-17.093 1.539-20.512 4.616-3.419 2.907-5.215 8.42-5.385 16.539v130.899c0 6.751 1.88 11.025 5.643 12.818 1.195.515 2.778.985 4.742 1.41 1.967.428 3.847.898 5.643 1.413 1.88.425 3.461.982 4.742 1.665 2.565 1.368 3.847 3.206 3.847 5.514 0 3.931-.683 6.753-2.051 8.462zm124.487-13.079c0-3.161 1.452-7.094 4.359-11.794 2.907-4.787 6.795-10.043 11.666-15.77 4.96-5.811 10.77-12.052 17.437-18.718l21.026-21.409-26.283-38.463c-6.325-9.486-12.222-14.228-17.692-14.228-2.308 0-4.317.383-6.026 1.153-1.625.683-2.949 1.027-3.975 1.027-.94 0-1.709-.215-2.308-.643a5.793 5.793 0 0 1-1.539-1.665c-1.709-2.565-1.494-5.427.643-8.591 2.221-3.161 4.613-5.769 7.179-7.819 6.239-4.873 13.162-7.307 20.769-7.307 5.044 0 8.762.725 11.154 2.179 4.275 2.479 8.034 6.667 11.282 12.564l27.181 50.641c11.366-11.624 19.957-22.436 25.768-32.437 1.967-3.847 2.949-7.092 2.949-9.744 0-4.529-4.359-7.307-13.076-8.331-.769-1.284-1.155-2.652-1.155-4.104s.811-2.862 2.437-4.23c1.709-1.455 3.802-2.649 6.281-3.589 4.96-1.967 10.513-2.949 16.668-2.949s11.025 1.41 14.617 4.23c3.673 2.736 5.511 5.855 5.511 9.358 0 3.419-.769 6.837-2.308 10.258-1.539 3.419-3.631 7.05-6.281 10.896s-5.685 7.819-9.103 11.923a281.923 281.923 0 0 1-10.77 12.18c-10.169 10.513-17.563 17.82-22.179 21.921l27.307 39.358c3.421 4.787 6.496 8.678 9.232 11.668 2.82 2.907 5.598 4.359 8.334 4.359s4.957-.341 6.667-1.027c3.76-1.539 6.155-1.581 7.179-.126 1.796 2.649 1.754 5.598-.126 8.846-1.883 3.161-3.975 5.769-6.283 7.819-5.469 4.703-11.411 7.052-17.82 7.052-12.734 0-21.795-5.427-27.181-16.282l-27.947-50.257c-14.958 15.982-24.403 29.061-28.333 39.23a14.188 14.188 0 0 0-1.155 5.643c0 1.88 1.239 3.503 3.718 4.871 2.565 1.284 5.685 2.137 9.36 2.565.853.853 1.281 2.137 1.281 3.847s-.769 3.203-2.308 4.487c-1.539 1.281-3.505 2.35-5.897 3.203-7.693 2.736-15.94 3.419-24.744 2.053-10.342-1.625-15.512-6.241-15.512-13.848z"
                              />
                            </svg>
                          </span>
                          <span className="text-primary-color cursor-pointer pl-3 text-left">
                            Upload
                            <br />
                            Prescription
                            <i
                              className="fa fa-angle-right ml-2"
                              aria-hidden="true"
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="d-flex justify-content-center flex-wrap tests-packages-by-featured-list col">
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Bone
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Diabetes
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Gastro
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Gynae
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Heart
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Kidney
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Liver
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Prostate
                          </span>
                        </label>
                        <label className="font-size-14 font-semiBold mt-2 mb-0 rounded-5 px-2 py-1 mx-1 d-flex mb-0 flex-row cursor-pointer custom_checkbox test-group-tags  form-label">
                          <span className="w-15-px mr-2">
                            <label className="form-label">
                              <input
                                name="organ_checkbox"
                                type="checkbox"
                                className="form-control"
                              />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span className="align-self-center text-capitalize text-black">
                            Thyroid
                          </span>
                        </label>
                        <div className="mx-1 health-packages-dd mt-2">
                          <div className="dropdown">
                            <button
                              aria-haspopup="true"
                              aria-expanded="false"
                              id="healthPackages"
                              type="button"
                              className="font-size-14 font-semiBold rounded-5 py-1  dropdown-toggle btn btn-primary"
                            >
                              Health Packages{" "}
                              <i
                                className="fa fa-angle-down font-size-16"
                                aria-hidden="true"
                              />
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
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={1024}
                                    height={1024}
                                    className="img-fluid"
                                    viewBox="0 0 1024 1024"
                                  >
                                    <path
                                      fill="#FFFFFF"
                                      d="M217.831 22.578c-92.32-52.956-167.166-9.574-167.166 96.819V904.53c0 106.496 74.846 149.821 167.166 96.916l686.243-393.554c92.349-52.977 92.349-138.803 0-191.764L217.831 22.578z"
                                    />
                                  </svg>
                                </span>
                              </span>
                              <img
                                loading="lazy"
                                src="https://img.flebo.in/assets/images/yt-self-reliant-india-05-min.jpg"
                                alt="आत्मनिर्भर भारत (Self-Reliant India)"
                                className="w-100 rounded-5 img-thumbnail"
                              />
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
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={1024}
                                    height={1024}
                                    className="img-fluid"
                                    viewBox="0 0 1024 1024"
                                  >
                                    <path
                                      fill="#FFFFFF"
                                      d="M217.831 22.578c-92.32-52.956-167.166-9.574-167.166 96.819V904.53c0 106.496 74.846 149.821 167.166 96.916l686.243-393.554c92.349-52.977 92.349-138.803 0-191.764L217.831 22.578z"
                                    />
                                  </svg>
                                </span>
                              </span>
                              <img
                                loading="lazy"
                                src="https://img.flebo.in/assets/images/yt-painless-thumbnail-05-min.jpg"
                                alt="A Painless Experience"
                                className="w-100 rounded-5 img-thumbnail"
                              />
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
                        <p className="font-size-16 l-height-20 text-black font-bold m-0 position-relative">
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
                              <div
                                className="owl-stage"
                                style={{
                                  transform: "translate3d(-3628px, 0px, 0px)",
                                  transition: "all 3s ease 0s",
                                  width: 6649
                                }}
                              >
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/max-lab-by-max-hospital"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/wB7HisxyjOmF7BCMI2kg4O4PdMlj4Rk6OUuPlH52.png"
                                        alt="Max Lab by Max Hospital"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/metropolis">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/q5GFEdJAXBup2szgUzLGXL72f2k6lRwtbPPKr9uU.png"
                                        alt="Metropolis"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/mirage-lab">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/1KV7xxbh1bbJdEoJIXHGDpXUheUiZXM9IX3IBqFz.jpg"
                                        alt="Mirage Lab"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/molecular-quest-healthcare-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/gs0wN9xS0jP9i4erqsLLilRwEmKnMR4DHtXn4otQ.jpg"
                                        alt="Molecular Quest Healthcare Pvt, Ltd."
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/niramaya-pathlabs-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/L8uN18yBcML1OZukcoDJ0vFUXBKaduisdaZlDp6D.jpg"
                                        alt="NirAmaya Pathlabs Pvt. Ltd."
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/orange-health-rapidx-lab"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/QWXpQ8MIri8mr3vMJjFpGPtR5F23DvP2EHv4w0H8.png"
                                        alt="Orange Health (Rapidx Lab)"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/pathkind-lab">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/kcP7Qw9KJKgMTo6xoliadIvEDXaCx1mxGQZEi9Gr.png"
                                        alt="Pathkind Lab"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/pro-labs">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/tSSvTHWSsBuv41oAxWRxTOsQLzogc4aBgnm35Szd.jpg"
                                        alt="PRO LAB'S"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/prognosis-laboratories"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/EdsztJCkkP03f0sFmrFWRwYbLScHCRhQuiZGpZoz.png"
                                        alt="Prognosis Laboratories"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/thyrocare">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/IXNgIhrh0oUN7dKeihIU4u432fblTUPWiXSqttLa.jpg"
                                        alt="Thyrocare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/accuprobe-healthcare"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/HXTNvyL4CyglXjwcm1CHUFYdwZ1EPEc3dpZyl9eS.jpg"
                                        alt="Accuprobe Healthcare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/augmentum-diagnostics"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/mxaBqQaqkd9jNLtMkqKxKc0k7sjKSPXacBMnffuy.jpg"
                                        alt="Augmentum Diagnostics"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/city-x-ray-scan-clinic-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/65nxF6E0y5YRvbVvOIRSSyU8xsNfRqMJ2MbUbcYA.jpg"
                                        alt="City X-Ray & Scan Clinic Pvt Ltd"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/crl-diagnostics">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/0HdmCUsqVBRZurxU88Hhnar5pkLLijlceSeagSOU.png"
                                        alt="CRL Diagnostics"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/d-diagnocare">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/kzcGFGPQXUCL9HsKqvXxeAxdDZp0wEm4OIF4mV5U.png"
                                        alt="D+ Diagnocare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/dgd-dr-gargs-diagnostics"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/BkkU083mQMmkcAt0NlFO6F3V9epMGEGNjtqe7jTE.jpg"
                                        alt="D.G.D. (Dr. Garg's Diagnostics)"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/dr-dodas-diagnostics-and-healthcare"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/bqbXfqkq4GcESsM7IHWjPEjoqO5iFc7oNOmF9m3g.jpg"
                                        alt="Dr Doda's Diagnostics and Healthcare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/dr-lal-path-lab">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/ZrUffXIPw1wfxntnO3DpEu4tLrqr1q2sfLN6PgBm.jpg"
                                        alt="Dr Lal Path Lab"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/labcorp-diagnostics-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/7hqaHwOJTv6tFnnn6DqQao1qkS3MC9l9LMgxTzdv.png"
                                        alt="Labcorp Diagnostics Pvt. Ltd."
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/lifeline-laboratory"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/nkD9PEIJJw5fd0Y8qlpv1MfuRwSj84qXUi8nzbav.jpg"
                                        alt="Lifeline Laboratory"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/max-lab-by-max-hospital"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/wB7HisxyjOmF7BCMI2kg4O4PdMlj4Rk6OUuPlH52.png"
                                        alt="Max Lab by Max Hospital"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/metropolis">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/q5GFEdJAXBup2szgUzLGXL72f2k6lRwtbPPKr9uU.png"
                                        alt="Metropolis"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/mirage-lab">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/1KV7xxbh1bbJdEoJIXHGDpXUheUiZXM9IX3IBqFz.jpg"
                                        alt="Mirage Lab"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/molecular-quest-healthcare-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/gs0wN9xS0jP9i4erqsLLilRwEmKnMR4DHtXn4otQ.jpg"
                                        alt="Molecular Quest Healthcare Pvt, Ltd."
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/niramaya-pathlabs-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/L8uN18yBcML1OZukcoDJ0vFUXBKaduisdaZlDp6D.jpg"
                                        alt="NirAmaya Pathlabs Pvt. Ltd."
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/orange-health-rapidx-lab"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/QWXpQ8MIri8mr3vMJjFpGPtR5F23DvP2EHv4w0H8.png"
                                        alt="Orange Health (Rapidx Lab)"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/pathkind-lab">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/kcP7Qw9KJKgMTo6xoliadIvEDXaCx1mxGQZEi9Gr.png"
                                        alt="Pathkind Lab"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/pro-labs">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/tSSvTHWSsBuv41oAxWRxTOsQLzogc4aBgnm35Szd.jpg"
                                        alt="PRO LAB'S"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/prognosis-laboratories"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/EdsztJCkkP03f0sFmrFWRwYbLScHCRhQuiZGpZoz.png"
                                        alt="Prognosis Laboratories"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item active"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/thyrocare">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/IXNgIhrh0oUN7dKeihIU4u432fblTUPWiXSqttLa.jpg"
                                        alt="Thyrocare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/accuprobe-healthcare"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/HXTNvyL4CyglXjwcm1CHUFYdwZ1EPEc3dpZyl9eS.jpg"
                                        alt="Accuprobe Healthcare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/augmentum-diagnostics"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/mxaBqQaqkd9jNLtMkqKxKc0k7sjKSPXacBMnffuy.jpg"
                                        alt="Augmentum Diagnostics"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/city-x-ray-scan-clinic-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/65nxF6E0y5YRvbVvOIRSSyU8xsNfRqMJ2MbUbcYA.jpg"
                                        alt="City X-Ray & Scan Clinic Pvt Ltd"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/crl-diagnostics">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/0HdmCUsqVBRZurxU88Hhnar5pkLLijlceSeagSOU.png"
                                        alt="CRL Diagnostics"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/d-diagnocare">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/kzcGFGPQXUCL9HsKqvXxeAxdDZp0wEm4OIF4mV5U.png"
                                        alt="D+ Diagnocare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/dgd-dr-gargs-diagnostics"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/BkkU083mQMmkcAt0NlFO6F3V9epMGEGNjtqe7jTE.jpg"
                                        alt="D.G.D. (Dr. Garg's Diagnostics)"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/dr-dodas-diagnostics-and-healthcare"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/bqbXfqkq4GcESsM7IHWjPEjoqO5iFc7oNOmF9m3g.jpg"
                                        alt="Dr Doda's Diagnostics and Healthcare"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a target="_blank" href="/labs/dr-lal-path-lab">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/ZrUffXIPw1wfxntnO3DpEu4tLrqr1q2sfLN6PgBm.jpg"
                                        alt="Dr Lal Path Lab"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/labcorp-diagnostics-pvt-ltd"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/7hqaHwOJTv6tFnnn6DqQao1qkS3MC9l9LMgxTzdv.png"
                                        alt="Labcorp Diagnostics Pvt. Ltd."
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="owl-item cloned"
                                  style={{ width: "auto", marginRight: 30 }}
                                >
                                  <div className="item">
                                    <a
                                      target="_blank"
                                      href="/labs/lifeline-laboratory"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.flebo.in/lab_logo/nkD9PEIJJw5fd0Y8qlpv1MfuRwSj84qXUi8nzbav.jpg"
                                        alt="Lifeline Laboratory"
                                        className="img-fluid"
                                        style={{ opacity: 1 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="owl-nav disabled">
                              <button
                                type="button"
                                role="presentation"
                                className="owl-prev"
                              >
                                <span aria-label="Previous">‹</span>
                              </button>
                              <button
                                type="button"
                                role="presentation"
                                className="owl-next"
                              >
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
        <nav
          id="mob-slideNav"
          className=" hidden-md hidden-lg py-0 navbar navbar-expand navbar-light"
        >
          <div className="fullHeight justify-content-between flex-nowrap flex-column row">
            <div className="col-lg-12">
              <button
                type="button"
                className="collapsed navbar-toggle x mt-4 ml-2 bg-white border-0 btn btn-outline-light"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <nav className="mt-4 navbar-nav nav-tabs" role="tablist">
                <a
                  id="controlled-mobile-nav-tab-general"
                  href="#"
                  role="tab"
                  data-rb-event-key="general"
                  aria-controls="controlled-mobile-nav-tabpane-general"
                  aria-selected="true"
                  className="nav-item nav-link active"
                >
                  Navigation
                </a>
                <a
                  id="controlled-mobile-nav-tab-account"
                  href="#"
                  role="tab"
                  data-rb-event-key="account"
                  aria-controls="controlled-mobile-nav-tabpane-account"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  My Account
                </a>
              </nav>
              <div className="tab-content">
                <div
                  id="controlled-mobile-nav-tabpane-general"
                  aria-labelledby="controlled-mobile-nav-tab-general"
                  role="tabpanel"
                  aria-hidden="false"
                  className="fade font-size-14 red_scrollbar pr-3 fullHeight tab-pane active show"
                >
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
                        <span className="mx-4 text-black font-semilight font-size-18 d-sm-block d-md-inline-block">
                          or
                        </span>
                        <div className="file-input">
                          <input
                            type="file"
                            id="prescription"
                            name="upload-precription"
                            accept="image/*,capture=camera"
                            style={{ display: "none" }}
                          />
                          <button className="upload-file">Upload a file</button>
                          <label className="input-label cursor-pointer">
                            <span className="w-40-px d-inline-block m-auto cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={998}
                                height={1024}
                                className="img-fluid"
                                viewBox="0 0 998 1024"
                              >
                                <path
                                  fill="#e31019"
                                  d="M319.478 6.256c-8.116-8.332-21.277-8.334-29.396-.004L61.431 240.918l29.393 30.166 193.167-198.25v97.834c0 35.346-27.919 64-62.359 64h-62.359v42.665h62.359c57.372-.068 103.862-47.785 103.93-106.665V21.334c0-5.656-2.187-11.08-6.084-15.078z"
                                />
                                <path
                                  fill="#e31019"
                                  d="M803.722 597.333V106.666C803.654 47.786 757.162.07 699.791 0h-394.94c-5.513.002-10.798 2.25-14.695 6.25L61.505 240.918c-3.897 4-6.09 9.426-6.09 15.082v661.333c.068 58.88 46.561 106.596 103.931 106.667h540.445c57.37-.071 103.862-47.787 103.931-106.667V896H762.15v21.333c0 35.346-27.921 64-62.359 64H159.346c-34.44 0-62.359-28.654-62.359-64V264.832L313.456 42.665h386.335c34.441 0 62.359 28.654 62.359 64V597.33l41.572.003z"
                                />
                                <path
                                  fill="#e31019"
                                  d="M575.036 511.997c-11.479 0-20.787 9.552-20.787 21.333v64h41.572v-42.664h41.572v-42.669h-62.356zM387.939 725.333h-41.572v-42.664c0-11.784-9.305-21.336-20.787-21.336h-83.145c-11.48 0-20.787 9.552-20.787 21.336v42.664h-41.572c-11.48 0-20.787 9.552-20.787 21.336V832c0 11.784 9.307 21.333 20.787 21.333h41.572V896c0 11.784 9.307 21.333 20.787 21.333h83.145c11.482 0 20.787-9.549 20.787-21.333v-42.667h41.572c11.482 0 20.787-9.549 20.787-21.333v-85.333c-.003-11.781-9.305-21.333-20.787-21.333zm-20.788 85.334h-41.572c-11.479 0-20.786 9.552-20.786 21.333v42.667h-41.572V832c0-11.781-9.307-21.333-20.787-21.333h-41.572V768h41.572c11.48 0 20.787-9.552 20.787-21.333V704h41.572v42.667c0 11.781 9.307 21.333 20.786 21.333h41.572v42.667z"
                                />
                                <path
                                  fill="#e31019"
                                  d="M159.289 511.997h415.724v42.667H159.289v-42.667zM159.289 405.333h540.445V448H159.289v-42.667zM387.939 298.669h311.795v42.664H387.939v-42.664zM471.082 191.999h228.649v42.666H471.082v-42.666zM387.939 191.999h41.611v42.708h-41.611v-42.708zM673.829 841.232c-1.967-.685-6.155-1.027-12.564-1.027h-52.308c-4.445 0-7.992-.683-10.642-2.051-2.649-1.455-3.975-4.059-3.975-7.822 0-2.733.643-4.915 1.925-6.538 3.248.856 6.367 1.281 9.358 1.281 2.993 0 5.343-.299 7.052-.898 1.709-.683 3.206-1.835 4.487-3.461 2.563-3.419 3.847-9.103 3.847-17.051V672.512c-.257-5.984-2.224-9.786-5.897-11.411-1.113-.512-2.652-.982-4.616-1.41-1.88-.428-3.763-.856-5.643-1.281-1.793-.515-3.332-1.111-4.613-1.796-2.565-1.368-3.847-3.161-3.847-5.385 0-4.017.683-6.879 2.051-8.588 1.967.683 6.197 1.024 12.692 1.024h16.668l50.512-1.41c26.325 0 46.025 4.703 59.103 14.102 13.076 9.318 19.614 22.481 19.614 39.49 0 12.734-4.143 24.442-12.435 35.126-9.232 11.881-21.966 19.915-38.206 24.103 4.445 3.077 9.486 8.717 15.129 16.922l13.59 19.873c12.734 18.548 23.289 27.821 31.665 27.821 3.164 0 5.556-.299 7.181-.898l3.203-1.284c.685-.255 1.455-.383 2.308-.383.856 0 1.754.683 2.694 2.051.94 1.281 1.41 2.778 1.41 4.487s-.727 3.76-2.179 6.155c-1.455 2.308-3.505 4.401-6.155 6.283-5.984 4.359-12.522 6.538-19.616 6.538s-12.947-1.197-17.563-3.589c-4.529-2.395-8.72-5.514-12.564-9.36-3.763-3.931-7.223-8.376-10.384-13.333a242.836 242.836 0 0 1-8.72-15.258l-7.564-15.255c-5.383-11.112-9.699-18.248-12.947-21.409-3.164-3.248-6.068-4.873-8.72-4.873h-12.947c-2.137 0-3.206-1.539-3.206-4.616 0-4.272 1.625-7.606 4.873-9.998 1.111-.769 4.443-1.197 9.998-1.284 5.556-.171 11.794-1.365 18.718-3.589 7.008-2.221 12.779-5.257 17.308-9.103 8.804-7.606 13.204-18.29 13.204-32.051 0-11.537-3.847-20.981-11.537-28.333-8.72-8.289-20.855-12.519-36.412-12.692-10.256 0-17.093 1.539-20.512 4.616-3.419 2.907-5.215 8.42-5.385 16.539v130.899c0 6.751 1.88 11.025 5.643 12.818 1.195.515 2.778.985 4.742 1.41 1.967.428 3.847.898 5.643 1.413 1.88.425 3.461.982 4.742 1.665 2.565 1.368 3.847 3.206 3.847 5.514 0 3.931-.683 6.753-2.051 8.462zm124.487-13.079c0-3.161 1.452-7.094 4.359-11.794 2.907-4.787 6.795-10.043 11.666-15.77 4.96-5.811 10.77-12.052 17.437-18.718l21.026-21.409-26.283-38.463c-6.325-9.486-12.222-14.228-17.692-14.228-2.308 0-4.317.383-6.026 1.153-1.625.683-2.949 1.027-3.975 1.027-.94 0-1.709-.215-2.308-.643a5.793 5.793 0 0 1-1.539-1.665c-1.709-2.565-1.494-5.427.643-8.591 2.221-3.161 4.613-5.769 7.179-7.819 6.239-4.873 13.162-7.307 20.769-7.307 5.044 0 8.762.725 11.154 2.179 4.275 2.479 8.034 6.667 11.282 12.564l27.181 50.641c11.366-11.624 19.957-22.436 25.768-32.437 1.967-3.847 2.949-7.092 2.949-9.744 0-4.529-4.359-7.307-13.076-8.331-.769-1.284-1.155-2.652-1.155-4.104s.811-2.862 2.437-4.23c1.709-1.455 3.802-2.649 6.281-3.589 4.96-1.967 10.513-2.949 16.668-2.949s11.025 1.41 14.617 4.23c3.673 2.736 5.511 5.855 5.511 9.358 0 3.419-.769 6.837-2.308 10.258-1.539 3.419-3.631 7.05-6.281 10.896s-5.685 7.819-9.103 11.923a281.923 281.923 0 0 1-10.77 12.18c-10.169 10.513-17.563 17.82-22.179 21.921l27.307 39.358c3.421 4.787 6.496 8.678 9.232 11.668 2.82 2.907 5.598 4.359 8.334 4.359s4.957-.341 6.667-1.027c3.76-1.539 6.155-1.581 7.179-.126 1.796 2.649 1.754 5.598-.126 8.846-1.883 3.161-3.975 5.769-6.283 7.819-5.469 4.703-11.411 7.052-17.82 7.052-12.734 0-21.795-5.427-27.181-16.282l-27.947-50.257c-14.958 15.982-24.403 29.061-28.333 39.23a14.188 14.188 0 0 0-1.155 5.643c0 1.88 1.239 3.503 3.718 4.871 2.565 1.284 5.685 2.137 9.36 2.565.853.853 1.281 2.137 1.281 3.847s-.769 3.203-2.308 4.487c-1.539 1.281-3.505 2.35-5.897 3.203-7.693 2.736-15.94 3.419-24.744 2.053-10.342-1.625-15.512-6.241-15.512-13.848z"
                                />
                              </svg>
                            </span>
                            <span className="text-primary-color cursor-pointer pl-3 text-left">
                              Upload
                              <br />
                              Prescription
                              <i
                                className="fa fa-angle-right ml-2"
                                aria-hidden="true"
                              />
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={1024}
                              height={1024}
                              className="img-fluid"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="#e31019"
                                d="M512.003.001c-9.424 0-17.066 7.642-17.066 17.067v102.4c0 9.425 7.642 17.067 17.066 17.067 9.426 0 17.068-7.642 17.068-17.067v-102.4c0-9.425-7.642-17.067-17.068-17.067zM445.834 38.435l-2.97-16.811c-1.637-9.284-10.487-15.486-19.772-13.85s-15.486 10.487-13.85 19.772l2.97 16.811a17.068 17.068 0 0 0 19.764 13.841h.004c9.284-1.632 15.488-10.479 13.855-19.763zM364.591 57.123l-5.837-16.043a17.871 17.871 0 0 0-.227-.623c-3.396-8.794-13.275-13.169-22.069-9.773s-13.169 13.276-9.772 22.069l5.819 16.026a17.07 17.07 0 0 0 21.884 10.219c8.858-3.223 13.425-13.018 10.202-21.875zM217.876 134.964l-10.975-13.073c-6.023-6.884-16.404-7.795-23.534-2.063-7.347 5.905-8.517 16.646-2.612 23.994l10.974 13.073a17.065 17.065 0 0 0 13.072 6.11c4.016 0 7.903-1.414 10.977-3.996 7.219-6.061 8.157-16.826 2.097-24.045zM156.894 191.729l-13.073-10.974c-7.13-5.73-17.51-4.821-23.535 2.063-6.208 7.094-5.489 17.875 1.604 24.083l13.073 10.973a17.06 17.06 0 0 0 10.957 3.994 17.07 17.07 0 0 0 13.075-6.095c6.061-7.221 5.118-17.986-2.101-24.044zM68.781 332.511l-16.026-5.82a18.444 18.444 0 0 0-.623-.227c-8.917-3.052-18.622 1.704-21.673 10.622-3.053 8.918 1.705 18.622 10.622 21.672l16.043 5.837a16.923 16.923 0 0 0 5.82 1.04 17.068 17.068 0 0 0 16.122-11.291c3.189-8.867-1.414-18.644-10.285-21.833zM44.353 412.211l-16.811-2.97c-9.284-1.637-18.135 4.566-19.772 13.85s4.565 18.136 13.85 19.772l16.811 2.97c.981.168 1.973.254 2.97.256a17.068 17.068 0 0 0 16.819-14.124c1.626-9.284-4.582-18.128-13.867-19.754zM58.205 592.016c-1.636-9.284-10.487-15.484-19.772-13.85l-16.811 2.97c-8.162 1.43-14.116 8.517-14.123 16.803-.004 9.426 7.631 17.072 17.058 17.075a18.006 18.006 0 0 0 2.987-.256l16.811-2.97c9.284-1.637 15.486-10.487 13.85-19.772zM78.998 669.619c-3.219-8.859-13.011-13.435-21.871-10.214l-16.043 5.837a17.068 17.068 0 0 0-11.245 16.057c.008 9.426 7.654 17.061 17.082 17.051a17.079 17.079 0 0 0 5.837-1.04l16.026-5.82c8.86-3.218 13.434-13.01 10.214-21.87zM159.046 807.695c-6.206-7.093-16.99-7.812-24.083-1.605l-13.073 10.975a17.06 17.06 0 0 0-6.095 13.076c.002 9.424 7.644 17.064 17.069 17.064a17.066 17.066 0 0 0 10.957-3.994l13.073-10.973c.186-.15.367-.302.546-.459 7.093-6.206 7.812-16.987 1.606-24.084zM215.751 864.493c-7.347-5.904-18.088-4.736-23.993 2.611l-10.974 13.074a17.057 17.057 0 0 0-3.981 10.944c-.006 9.424 7.628 17.073 17.054 17.079 5.043 0 9.83-2.229 13.072-6.093l10.973-13.072c.159-.179.311-.364.459-.549 5.906-7.345 4.736-18.088-2.611-23.995zM354.378 945.007c-8.859-3.22-18.651 1.353-21.87 10.214l-5.82 16.026a17.075 17.075 0 0 0-1.028 5.84c.002 9.424 7.645 17.064 17.07 17.062a17.067 17.067 0 0 0 16.026-11.229l5.837-16.044c3.22-8.859-1.353-18.651-10.214-21.87zM431.983 965.794c-9.284-1.637-18.136 4.564-19.772 13.85l-2.97 16.812c-1.629 9.284 4.575 18.13 13.859 19.761.978.183 1.973.272 2.97.272a17.065 17.065 0 0 0 16.794-14.113l2.97-16.812c1.637-9.284-4.566-18.134-13.85-19.771zM614.754 996.453l-2.97-16.81c-1.637-9.285-10.487-15.486-19.772-13.85s-15.486 10.487-13.85 19.771l2.97 16.812a17.066 17.066 0 0 0 16.794 14.113c.997 0 1.991-.09 2.97-.272h.002c9.285-1.633 15.488-10.48 13.857-19.763zM697.31 971.247l-5.82-16.026c-3.218-8.861-13.01-13.435-21.872-10.214-8.859 3.218-13.433 13.01-10.214 21.87l5.837 16.044a17.066 17.066 0 0 0 21.867 10.201c8.858-3.224 13.425-13.018 10.202-21.875zM843.207 880.178l-10.973-13.072c-.15-.187-.3-.368-.459-.547-6.206-7.093-16.989-7.812-24.082-1.605-7.093 6.204-7.813 16.989-1.605 24.082l10.975 13.072a16.94 16.94 0 0 0 13.072 6.093 17.06 17.06 0 0 0 10.944-3.981c7.228-6.051 8.181-16.816 2.128-24.042zM902.107 817.067l-13.072-10.975c-.179-.155-.36-.309-.547-.457-7.347-5.906-18.088-4.736-23.993 2.609-5.906 7.347-4.736 18.09 2.611 23.995l13.072 10.973a17.062 17.062 0 0 0 10.957 3.994c5.045 0 9.832-2.231 13.076-6.095 6.058-7.221 5.115-17.986-2.105-24.044zM982.915 665.242l-16.042-5.837c-8.859-3.22-18.651 1.355-21.872 10.214s1.355 18.651 10.214 21.87l16.026 5.82a17.023 17.023 0 0 0 5.837 1.04 17.067 17.067 0 0 0 16.059-11.244c3.215-8.859-1.36-18.65-10.222-21.864zM1002.379 581.136l-16.812-2.97c-9.284-1.635-18.136 4.566-19.771 13.85-1.637 9.285 4.564 18.136 13.85 19.772l16.81 2.97c.986.168 1.986.254 2.986.256a17.068 17.068 0 0 0 16.803-14.122c1.626-9.285-4.582-18.13-13.866-19.756zM1016.221 423.091c-1.637-9.284-10.487-15.486-19.772-13.85l-16.81 2.97a17.069 17.069 0 0 0-14.122 16.819c.004 9.424 7.647 17.062 17.075 17.059a17.822 17.822 0 0 0 2.97-.256l16.81-2.97c9.284-1.637 15.486-10.489 13.85-19.772zM993.313 336.463c-3.394-8.794-13.275-13.169-22.069-9.772l-16.026 5.819a17.068 17.068 0 0 0-11.291 16.123c.035 9.424 7.704 17.039 17.128 17.004a17.023 17.023 0 0 0 5.82-1.04l16.042-5.837c.208-.071.417-.148.622-.227 8.794-3.396 13.168-13.275 9.774-22.069zM904.168 183.365c-5.904-7.347-16.645-8.516-23.993-2.611l-13.074 10.975a17.056 17.056 0 0 0-6.095 13.074c.002 9.426 7.643 17.064 17.07 17.064a17.057 17.057 0 0 0 10.957-3.994l13.072-10.973c6.885-6.025 7.795-16.406 2.063-23.536zM841.185 120.286c-7.093-6.206-17.876-5.489-24.084 1.604l-10.973 13.073a17.075 17.075 0 0 0-3.995 10.976c.002 9.425 7.643 17.067 17.068 17.064a17.064 17.064 0 0 0 13.074-6.11l10.973-13.073c5.733-7.13 4.822-17.513-2.063-23.535zM686.911 30.461c-8.916-3.053-18.62 1.702-21.672 10.62l-5.837 16.043a17.09 17.09 0 0 0-1.028 5.841c.002 9.425 7.645 17.064 17.072 17.062a17.066 17.066 0 0 0 16.042-11.247l5.819-16.026c.08-.205.155-.412.227-.621 3.052-8.917-1.704-18.622-10.622-21.673zM600.911 7.775c-9.285-1.636-18.136 4.565-19.772 13.85l-2.97 16.813c-1.629 9.284 4.573 18.131 13.859 19.761a17.069 17.069 0 0 0 19.764-13.841l2.97-16.811c1.637-9.284-4.566-18.136-13.85-19.772zM313.425 133.957l-34.132-59.119c-4.723-8.055-15.044-10.82-23.161-6.206-8.194 4.659-11.059 15.078-6.4 23.272l34.134 59.119a17.06 17.06 0 0 0 23.313 6.246c8.163-4.713 10.959-15.151 6.246-23.313zM151.008 283.888l-59.119-34.134c-8.117-4.613-18.436-1.849-23.16 6.206-4.766 8.132-2.039 18.587 6.093 23.353l59.119 34.134a17.067 17.067 0 0 0 23.313-6.246c4.713-8.161 1.916-18.6-6.246-23.312zM157.329 716.643c-4.768-8.13-15.223-10.856-23.356-6.089l-59.119 34.134a17.065 17.065 0 0 0-8.533 14.779c0 9.426 7.64 17.068 17.067 17.068a16.934 16.934 0 0 0 8.533-2.288l59.119-34.134.198-.115c8.132-4.767 10.859-15.223 6.091-23.355zM307.173 866.575c-8.194-4.659-18.613-1.794-23.272 6.4l-34.134 59.12a17.085 17.085 0 0 0-2.286 8.516c-.011 9.426 7.621 17.077 17.05 17.084a17.062 17.062 0 0 0 14.797-8.532l34.132-59.12c.038-.064.075-.13.113-.197 4.659-8.192 1.792-18.611-6.4-23.27zM774.227 932.095l-34.134-59.12c-4.723-8.053-15.04-10.818-23.155-6.203-8.194 4.657-11.061 15.077-6.404 23.27l34.134 59.118a17.062 17.062 0 0 0 23.313 6.246c8.163-4.712 10.959-15.15 6.246-23.312zM949.145 744.688l-59.118-34.134c-8.117-4.613-18.434-1.849-23.155 6.204-4.769 8.13-2.043 18.587 6.087 23.356l59.12 34.132a16.94 16.94 0 0 0 8.534 2.288c6.096 0 11.73-3.253 14.779-8.534 4.714-8.163 1.916-18.6-6.246-23.312zM955.386 256.154c-4.659-8.194-15.078-11.059-23.272-6.4l-59.118 34.134a17.064 17.064 0 0 0-8.534 14.779c0 9.424 7.64 17.066 17.066 17.066 2.995 0 5.939-.788 8.534-2.286l59.12-34.134c8.055-4.723 10.82-15.042 6.204-23.159zM768.061 68.75c-8.132-4.768-18.589-2.042-23.356 6.089l-34.134 59.119a17.085 17.085 0 0 0-2.286 8.516c-.011 9.425 7.623 17.075 17.05 17.084a17.065 17.065 0 0 0 14.797-8.533l34.132-59.119c4.615-8.117 1.851-18.434-6.203-23.155zM119.467 494.934h-102.4C7.642 494.934 0 502.576 0 512s7.642 17.066 17.067 17.066h102.4c9.425 0 17.067-7.642 17.067-17.066s-7.642-17.066-17.067-17.066zM512.003 887.465c-9.424 0-17.066 7.642-17.066 17.068v102.4c0 9.424 7.642 17.066 17.066 17.066 9.426 0 17.068-7.642 17.068-17.066v-102.4c0-9.426-7.642-17.068-17.068-17.068zM1006.934 494.934H887.466c-9.424 0-17.066 7.642-17.066 17.066s7.642 17.066 17.066 17.066h119.468c9.424 0 17.066-7.642 17.066-17.066s-7.642-17.066-17.066-17.066zM754.844 270.011c-6.665-6.661-17.468-6.661-24.132 0L546.648 454.075a67.12 67.12 0 0 0-34.134-8.858 67.876 67.876 0 0 0-32.068 8.909l-87.57-87.568c-6.663-6.693-17.49-6.716-24.183-.051s-6.716 17.492-.051 24.183l86.87 86.87c-20.076 31.982-10.421 74.181 21.559 94.256 31.982 20.074 74.181 10.421 94.256-21.563a68.365 68.365 0 0 0 0-72.693l183.517-183.415c6.663-6.665 6.663-17.468 0-24.133zM539.06 537.218c-12.842 13.798-34.443 14.574-48.241 1.73-.34-.318-.675-.642-1.002-.973-13.528-13.129-13.851-34.739-.724-48.267a34.131 34.131 0 0 1 23.951-10.357 33.084 33.084 0 0 1 24.287 9.626c13.798 12.842 14.572 34.443 1.73 48.241z"
                              />
                            </svg>
                          </span>
                          <div className="d-inline-block ml-4">
                            <span className="contact-label d-block">Timing</span>
                            <span className="px-0 my-0">All Days - 6am - 12am</span>
                          </div>
                        </li>
                        <li className="d-flex mb-3">
                          <span className="w-40-px">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={1024}
                              height={1024}
                              viewBox="0 0 1024 1024"
                              className="img-fluid"
                            >
                              <path
                                fill="#e31019"
                                d="m831.019 891.87-38.234-114.721a115.61 115.61 0 0 0-89.005-77.179l-110.378-20.086v-8.554c19.21-11.149 35.923-26.064 49.235-43.718h33.348c27.317 0 49.549-22.232 49.549-49.549V379.869c0-118.387-96.324-214.709-214.711-214.709s-214.709 96.322-214.709 214.709v115.614c0 31.842 22.643 58.483 52.668 64.693 9.266 47.468 38.929 87.635 79.46 111.154v8.554L317.848 699.97c-41.537 7.562-75.643 37.128-88.99 77.179l-6.606 19.835-56.254-56.252c-6.441-6.442-6.441-16.931 0-23.371l65.239-65.222-122.451-122.451-73.728 73.728C13.224 625.251 1.2 654.285 1.2 685.17s12.024 59.904 33.858 81.739l223.217 223.215c21.833 21.835 50.869 33.875 81.754 33.875s59.904-12.04 81.225-33.378l80.452-73.713-25.088-25.038H831.02zM692.498 578.064c0 9.116-7.414 16.515-16.515 16.515h-13.892a163.964 163.964 0 0 0 10.769-34.402c7.068-1.471 13.576-4.277 19.637-7.813v25.7zm-16.515-54.141v-56.88c9.826 5.73 16.515 16.269 16.515 28.441s-6.689 22.709-16.515 28.439zm-330.323 0c-9.828-5.73-16.517-16.266-16.517-28.439s6.689-22.711 16.517-28.441v56.88zm0-111.021v18.861a65.53 65.53 0 0 0-16.517 6.839V379.87c0-100.171 81.508-181.677 181.677-181.677 100.171 0 181.677 81.506 181.677 181.677v58.732c-5.12-2.989-10.637-5.318-16.515-6.839v-18.861h-16.517c-48.838 0-94.753-19.027-129.305-53.562l-19.341-19.341-19.341 19.341c-34.55 34.535-80.467 53.562-129.305 53.562h-16.515zm33.032 115.614v-83.208c49.599-3.734 95.842-24.197 132.129-58.699 36.287 34.502 82.532 54.982 132.129 58.699v83.208c0 24.079-6.573 46.607-17.87 66.063H510.821v33.034h87.105c-23.286 20.495-53.725 33.032-87.105 33.032-72.852 0-132.129-59.277-132.129-132.129zm181.677 157.548v.776l-49.549 49.549-49.549-49.549v-.776c15.658 4.922 32.289 7.612 49.549 7.612s33.892-2.691 49.549-7.612zM260.171 787.588c9.53-28.607 33.892-49.729 63.571-55.148l115.448-20.975 71.63 71.63 71.615-71.615 115.431 20.977c29.679 5.416 54.041 26.524 63.571 55.146l23.766 71.236H443.584l-64.329-64.331-71.482 64.66c-6.227 6.259-17.112 6.259-23.354 0l-36.071-36.071 11.824-35.509zM108.769 576.395l75.743 75.743-17.936 17.937-75.743-75.743 17.937-17.937zm289.61 390.408c-15.591 15.558-36.335 24.164-58.383 24.164-22.051 0-42.794-8.606-58.403-24.197L58.378 743.571c-15.591-15.591-24.18-36.335-24.18-58.383 0-22.066 8.588-42.81 24.18-58.401l9.084-9.085 75.743 75.743-.595.595c-19.307 19.323-19.307 50.753 0 70.079l118.437 118.438c9.364 9.347 21.802 14.517 35.047 14.517 13.247 0 25.683-5.153 34.437-13.939l1.238-1.107 76.09 76.09-9.48 8.687zm33.857-31.049-75.924-75.924 21.818-19.722 75.793 75.793-21.687 19.853zM973.272.001H742.046c-27.319 0-49.549 22.231-49.549 49.548v132.129c0 27.318 22.23 49.548 49.549 49.548h44.115l-17.079 99.609 159.38-99.609h44.81c27.317 0 49.549-22.231 49.549-49.548V49.549c0-27.318-22.232-49.548-49.549-49.548zm16.515 181.677c0 9.1-7.414 16.516-16.515 16.516h-54.289l-104.895 65.552 11.249-65.552h-83.29c-9.101 0-16.517-7.416-16.517-16.516V49.549c0-9.1 7.416-16.516 16.517-16.516h231.226c9.101 0 16.515 7.416 16.515 16.516v132.129z"
                              />
                              <path
                                fill="#e31019"
                                d="M956.755 66.065H758.561v33.032h198.194V66.065zM890.69 132.129H758.561v33.032H890.69v-33.032zM956.753 132.129h-33.032v33.032h33.032v-33.032zM510.816 49.554c-215.8 0-401.689 149.273-450.015 357.491l-31.298-52.174-28.325 16.994L59.232 468.6l96.735-58.054-16.995-28.326-44.759 26.857C141.02 218.596 312.308 82.585 510.816 82.585c43.387 0 86.197 6.441 127.24 19.159l9.778-31.546c-44.213-13.708-90.31-20.645-137.018-20.645zM1014.785 365.704 918.05 307.65l-58.037 96.751 28.326 16.996 28.903-48.178c15.21 44.511 22.99 91.071 22.99 138.785 0 98.223-34.023 194.246-95.777 270.371l25.65 20.809c66.525-81.985 103.158-185.409 103.158-291.18 0-50.522-8.142-99.855-24.014-147.092l48.542 29.119 16.994-28.326z"
                              />
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={1024}
                              height={1024}
                              viewBox="0 0 1024 1024"
                              className="img-fluid"
                            >
                              <path
                                fill="#e31019"
                                d="M26.021 808.301a15.381 15.381 0 0 0 2.176 1.735c18.919 19.433 45.075 30.422 72.409 30.417h599.375c27.3.006 53.435-10.951 72.354-30.345a14.707 14.707 0 0 0 5.008-5.487c15.043-17.765 23.283-40.174 23.258-63.316v-70.722h24.321c17.586-.027 33.131-11.249 38.46-27.752h43.421c33.419-.041 60.499-26.73 60.54-59.655v-17.468h3.903c29.128-.033 52.734-23.285 52.753-51.981v-49.633c-.019-28.703-23.625-51.955-52.753-51.988h-3.903v-58.685c.041-72.016-46.032-136.214-114.953-160.186-68.915-23.966-145.675-2.487-191.513 53.598H100.606c-50.551.073-93.229 37.061-99.756 86.462a14.694 14.694 0 0 0-.676 7.013A99.156 99.156 0 0 0 0 345.967v395.351c-.027 23.115 8.194 45.51 23.224 63.275a14.249 14.249 0 0 0 2.798 3.708zm809.264-177.457c-.008 5.634-4.641 10.205-10.371 10.205h-39.658c-5.717 0-10.364-4.571-10.364-10.205v-5.555c0-5.64 4.647-10.211 10.364-10.219h39.658c5.717.008 10.364 4.579 10.371 10.219v5.555zm158.742-166.75v49.633c-.019 12.388-10.209 22.441-22.789 22.449h-29.087v-94.538h29.087c12.58.008 22.77 10.06 22.789 22.457zM794.95 213.084c78.614.086 142.334 62.866 142.415 140.337v58.685h-10.203c-8.275 0-14.983 6.61-14.983 14.769v124.07c0 8.153 6.708 14.763 14.983 14.763h10.203v17.468c-.027 16.631-13.698 30.102-30.567 30.121h-43.435c-5.315-16.512-20.868-27.733-38.448-27.758h-39.658c-22.259.025-40.301 17.81-40.328 39.751v5.555c.027 16.359 10.215 31.037 25.687 36.993v73.481a68.343 68.343 0 0 1-8.656 33.332L581.875 594.1c-3.742-3.831-9.286-5.389-14.508-4.077-5.228 1.306-9.332 5.292-10.758 10.418-1.42 5.126.068 10.607 3.889 14.361L742.27 797.033c-12.203 9.031-27.045 13.907-42.297 13.894H100.599c-15.29.006-30.179-4.888-42.384-13.959l180.774-182.193a14.614 14.614 0 0 0-.247-20.886c-5.918-5.692-15.397-5.593-21.189.238L38.554 774.546a68.257 68.257 0 0 1-8.582-33.228V370.012l310.945 259.447c34.302 28.782 84.739 28.761 119.016-.052l111.272-92.987c8.835 17.903 27.26 29.269 47.458 29.288h44.071c8.273 0 14.981-6.61 14.981-14.763v-124.07c0-8.159-6.708-14.769-14.981-14.769h-10.203v-58.685c.087-77.478 63.799-140.251 142.421-140.337zM647.749 441.638v94.538h-29.087c-12.58-.008-22.775-10.06-22.789-22.449v-49.633c.014-12.396 10.209-22.449 22.789-22.457h29.087zM100.606 276.366h540.796a166.716 166.716 0 0 0-18.845 77.055v58.685h-3.895c-29.128.025-52.726 23.285-52.761 51.988v38.035L440.552 606.892c-23.123 19.427-57.139 19.441-80.276.033L31.324 332.45c6.587-32.575 35.582-56.038 69.282-56.084z"
                              />
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
                <div
                  id="controlled-mobile-nav-tabpane-account"
                  aria-labelledby="controlled-mobile-nav-tab-account"
                  role="tabpanel"
                  aria-hidden="true"
                  className="fade font-size-14 Admin-Navbar tab-pane"
                >
                  <p className="font-size-14 text-black mt-3">
                    Please click to <a href="/">Login/Signup</a> to get access.
                  </p>
                </div>
              </div>
            </div>
            <div className="Sidenav-social-icon px-0 text-center col-lg-12">
              <div className="mx-0 row">
                <div className="border py-3 border-right-0 col">
                  <a
                    href="https://www.facebook.com/Flebo-106073985346129/?modal=admin_todo_tour&notif_id=1645431497830241&notif_t=page_invite&ref=notif"
                    target="_blank"
                  >
                    <i className="fa w-15-px" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#e31019"
                          d="M674.537 170.027h93.485V7.211C751.894 4.992 696.425 0 631.829 0 497.045 0 404.714 84.779 404.714 240.597V384H255.978v182.016h148.736V1024h182.357V566.059h142.717l22.656-182.016H587.028V258.645c.043-52.608 14.208-88.618 87.508-88.618z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
                <div className="border py-3 border-right-0 col">
                  <a href="https://twitter.com/InFlebo" target="_blank">
                    <i className="fa w-15-px" aria-hidden="true">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="img-fluid"
                        width={1024}
                        height={1024}
                        viewBox="0 0 1024 1024"
                      >
                        <g id="twitterIcon" />
                        <path
                          fill="#e31019"
                          d="M1097.143 149.139c-43.52 19.090-89.893 31.744-138.24 37.888 49.737-29.696 87.698-76.361 105.545-132.608-46.373 27.648-97.573 47.177-152.137 58.075-44.032-46.885-106.789-75.922-175.25-75.922-132.827 0-239.762 107.813-239.762 239.982 0 19.017 1.609 37.303 5.559 54.711-199.461-9.728-375.954-105.326-494.519-250.953-20.699 35.913-32.841 77.019-32.841 121.271 0 83.090 42.789 156.745 106.569 199.387-38.546-0.731-76.361-11.922-108.398-29.55 0 0.731 0 1.682 0 2.633 0 116.59 83.163 213.431 192.219 235.739-19.529 5.339-40.814 7.899-62.903 7.899-15.36 0-30.866-0.878-45.422-4.096 31.086 95.013 119.296 164.864 224.183 167.131-81.627 63.854-185.271 102.327-297.472 102.327-19.675 0-38.546-0.878-57.417-3.291 106.277 68.535 232.229 107.666 368.055 107.666 441.49 0 682.862-365.714 682.862-682.715 0-10.606-0.366-20.846-0.878-31.013 47.616-33.792 87.625-75.995 120.247-124.562z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
                <div className="border py-3 border-right-0 col">
                  <a
                    href="https://www.youtube.com/channel/UCexu9kkuSxz9dY-HW8l07iA"
                    target="_blank"
                  >
                    <i className="fa w-15-px" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#e31019"
                          d="M1013.6 307.3s-10-70.6-40.8-101.6c-39-40.8-82.6-41-102.6-43.4C727 151.9 512 151.9 512 151.9h-.4s-215 0-358.2 10.4c-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6S0 390.1 0 473.1v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-.2-82.8-10.4-165.8-10.4-165.8zM406 644.9V357.1l276.6 144.4L406 644.9z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
                <div className="border py-3 border-right-0 col">
                  <a
                    href="https://www.linkedin.com/company/flebo-in"
                    target="_blank"
                  >
                    <i className="fa w-15-px" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#e31019"
                          d="M1023.741 1024v-.045h.256V648.403c0-183.721-39.552-325.247-254.336-325.247-103.258 0-172.547 56.661-200.835 110.379h-2.987v-93.227H362.19v683.647h212.054V685.44c0-89.131 16.896-175.318 127.276-175.318 108.755 0 110.381 101.718 110.381 181.033V1024h211.84zM16.909 340.351h212.309V1024H16.909V340.351zM122.968 0C55.086 0 .003 55.083.003 122.965s55.083 124.118 122.965 124.118c67.883 0 122.966-56.235 122.966-124.118C245.891 55.083 190.808 0 122.968 0z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
                <div className="border py-3 col">
                  <a
                    href="https://instagram.com/flebo.in?utm_medium=copy_link"
                    target="_blank"
                  >
                    <i className="fa w-15-px" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#e31019"
                          d="M1021.297 301.056c-2.4-54.409-11.194-91.814-23.802-124.227-12.998-34.405-33.005-65.208-59.213-90.815-25.606-26.005-56.614-46.212-90.618-59.011C815.062 14.399 777.853 5.6 723.446 3.202 668.63.6 651.228-.002 512.199-.002 373.172-.002 355.77.6 301.158 2.999c-54.409 2.399-91.815 11.205-124.22 23.802-34.413 13.003-65.216 33.006-90.822 59.215-26.005 25.607-46.204 56.612-59.011 90.62-12.604 32.608-21.403 69.811-23.801 124.22C.702 355.671.1 373.073.1 512.1c0 139.03.602 156.431 3.001 211.043C5.5 777.549 14.306 814.957 26.91 847.367c13.002 34.406 33.202 65.21 59.207 90.816 25.606 26.003 56.612 46.214 90.619 59.014 32.608 12.602 69.811 21.402 124.227 23.802 54.605 2.406 72.014 3.002 211.041 3.002s156.428-.595 211.039-3.002c54.413-2.4 91.814-11.2 124.224-23.802 68.813-26.611 123.226-81.018 149.83-149.83 12.595-32.608 21.402-69.818 23.802-124.224 2.4-54.611 3.002-72.013 3.002-211.043 0-139.027-.205-156.429-2.605-211.041zm-92.211 418.083c-2.202 50.01-10.605 77.011-17.606 95.014-17.203 44.614-52.608 80.019-97.222 97.222-18.003 7.002-45.203 15.405-95.014 17.6-54.01 2.406-70.208 3.002-206.839 3.002-136.628 0-153.03-.595-206.845-3.002-50.01-2.195-77.014-10.598-95.018-17.6-22.2-8.205-42.406-21.203-58.808-38.208-17.003-16.608-30.006-36.608-38.211-58.81-7.001-18.003-15.401-45.21-17.597-95.021-2.407-54.01-3.001-70.214-3.001-206.842s.594-153.03 3.001-206.837c2.196-50.01 10.596-77.015 17.597-95.019 8.205-22.207 21.208-42.406 38.414-58.816 16.596-17.004 36.601-30.006 58.808-38.203 18.003-7.002 45.212-15.402 95.018-17.605 54.01-2.399 70.216-3 206.836-3 136.833 0 153.031.602 206.842 3 50.01 2.204 77.018 10.604 95.021 17.605 22.202 8.197 42.406 21.199 58.81 38.203 17.005 16.605 30.003 36.609 38.208 58.816 7.002 18.004 15.405 45.204 17.606 95.019 2.4 54.01 3.002 70.209 3.002 206.837s-.602 152.634-3.002 206.644z"
                        />
                        <path
                          fill="#e31019"
                          d="M512.184 249.044c-145.224 0-263.052 117.82-263.052 263.052s117.828 263.05 263.052 263.05c145.235 0 263.052-117.818 263.052-263.05S657.418 249.044 512.184 249.044zm0 433.686c-94.214 0-170.635-76.413-170.635-170.634s76.421-170.635 170.635-170.635c94.221 0 170.636 76.413 170.636 170.635S606.405 682.73 512.184 682.73zM847.057 238.644c0 33.913-27.501 61.411-61.421 61.411-33.914 0-61.408-27.498-61.408-61.411 0-33.921 27.494-61.411 61.408-61.411 33.92 0 61.421 27.49 61.421 61.411z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div id="our-promise" className="py-3 row" style={{}}>
        <div className="container">
          <div className="mt-5 mb-4 row">
            <div className="col-12 col-md-6 col-lg-4 col">
              <div className="row">
                <div className="text-center col-3">
                  <span className="w-60-px d-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={512}
                      height={512}
                      className="img-fluid"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#FFFFFF"
                        d="m110.021 265.541-77.775-77.774C11.472 166.993.03 139.372.03 109.992.03 49.343 49.372.001 110.021.001c60.65 0 109.991 49.342 109.991 109.991 0 29.381-11.44 57.001-32.216 77.775zm0-235.545c-44.109 0-79.995 35.886-79.995 79.995 0 21.368 8.321 41.456 23.43 56.565l56.565 56.565 56.566-56.565c15.109-15.109 23.43-35.198 23.43-56.566 0-44.109-35.886-79.995-79.996-79.995z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M110.021 159.988c-27.567 0-49.996-22.428-49.996-49.996s22.428-49.996 49.996-49.996 49.996 22.429 49.996 49.996-22.428 49.996-49.996 49.996zm0-69.995c-11.028 0-19.999 8.972-19.999 19.999s8.972 19.999 19.999 19.999 19.999-8.972 19.999-19.999-8.972-19.999-19.999-19.999zM431.974 512l-56.567-56.565c-15.107-15.109-23.428-35.198-23.428-56.565 0-44.108 35.885-79.995 79.995-79.995s79.995 35.885 79.995 79.995c0 21.366-8.32 41.455-23.429 56.565zm-35.354-77.776 35.355 35.354 35.354-35.354c9.443-9.444 14.644-22 14.644-35.355 0-27.569-22.43-49.998-49.998-49.998s-49.998 22.43-49.998 49.998c0 13.356 5.202 25.912 14.644 35.355zM358.988 511.939H191.555c-53.227 0-96.531-43.304-96.531-96.531s43.304-96.533 96.531-96.533h55.657c16.417 0 29.773-13.356 29.773-29.772s-13.356-29.772-29.773-29.772h-58.195v-29.996h58.195c32.957 0 59.769 26.812 59.769 59.769s-26.812 59.769-59.769 59.769h-55.657c-36.688 0-66.535 29.848-66.535 66.535s29.846 66.536 66.535 66.536h167.434v29.997z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-9">
                  <h2 className="font-size-20">
                    Your Test, Your Lab, Your Place, Your Time{" "}
                    <sup className="font-size-10 poistion-relative top--10">TM</sup>
                  </h2>
                  <p>
                    Book a home collection for any test from a lab of your choice in
                    the comfort of your home or office, and at a time of your
                    choosing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col">
              <div className="row">
                <div className="text-center col-3">
                  <span className="w-60-px d-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      viewBox="0 0 1024 1024"
                      className="img-fluid"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M782.029 502.908h71.431c16.15 0 29.286-13.139 29.286-29.286v-71.428c0-16.148-13.136-29.286-29.286-29.286h-71.431c-16.143 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.144 29.286 29.286 29.286zm.717-100h69.998v70h-69.998v-70zm-.717 290h71.431c16.15 0 29.286-13.138 29.286-29.286v-71.428c0-16.148-13.136-29.286-29.286-29.286h-71.431c-16.143 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.144 29.286 29.286 29.286zm.717-100h69.998v70.001h-69.998v-70.001zm-204.547-90h71.428c16.148 0 29.286-13.139 29.286-29.286v-71.428c0-16.148-13.138-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.714-100h70.001v70h-70.001v-70zM241.964 744.002h-71.428c-16.148 0-29.286 13.136-29.286 29.286v71.424c0 16.15 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.136 29.286-29.286v-71.424c0-16.15-13.138-29.286-29.286-29.286zm-.715 100.001h-70v-70.005h70v70.005zm.715-471.095h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.139 29.286-29.286v-71.428c0-16.15-13.138-29.286-29.286-29.286zm-.715 100h-70v-70h70v70zm336.95 215.546h71.428c16.148 0 29.286-13.138 29.286-29.286V587.74c0-16.148-13.138-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.714-100h70.001v70h-70.001v-70zM897.646 68.548h-64.132V45.614C833.514 20.462 813.049 0 787.895 0h-6.883C755.858 0 735.4 20.462 735.4 45.614v22.934H288.597V45.614C288.597 20.462 268.135 0 242.983 0h-6.888c-25.152 0-45.614 20.462-45.614 45.614v22.934h-64.13c-41.41 0-75.1 33.69-75.1 75.1v805.351c0 41.355 33.644 75.001 75 75.001h771.497c41.355 0 75.001-33.646 75.001-75.001V143.648c-.007-41.41-33.697-75.1-75.103-75.1zM765.397 45.614c0-8.61 7.007-15.614 15.616-15.614h6.89c8.609 0 15.609 7.004 15.609 15.614v22.934h-38.115V45.614zm-544.914 0c0-8.61 7.004-15.614 15.615-15.614h6.888c8.61 0 15.614 7.004 15.614 15.614v22.934h-38.114V45.614h-.002zm722.263 903.385c0 24.817-20.187 44.997-44.997 44.997H126.25c-24.814 0-45-20.18-45-44.997v-.095c12.568 9.472 28.19 15.097 45.102 15.097h608.165c20.063 0 38.919-7.812 53.109-22.001l155.121-155.121V949zm-170.43-34.114a64.082 64.082 0 0 0 1.814-15.126V799.626c0-18.878 15.36-34.238 34.245-34.238H908.5c5.208 0 10.269-.644 15.126-1.821L772.315 914.885zm170.43-631.977H303.597c-8.284 0-15 6.716-15 15s6.716 15 15 15h639.149v388.236c0 18.882-15.36 34.242-34.245 34.242H808.376c-35.423 0-64.241 28.826-64.241 64.241V899.76c0 18.878-15.364 34.245-34.245 34.245H126.352c-24.868 0-45.1-20.239-45.1-45.107v-575.99h162.346c8.283 0 14.999-6.716 14.999-15s-6.716-15-14.999-15H81.249v-139.26c0-24.868 20.232-45.1 45.101-45.1h64.132v44.104c0 25.152 20.462 45.614 45.614 45.614 8.284 0 15-6.716 15-15s-6.716-15-15-15c-8.61 0-15.614-7.003-15.614-15.614V98.548h514.919v44.104c0 25.152 20.458 45.614 45.612 45.614 8.28 0 15.002-6.716 15.002-15s-6.722-15-15.002-15c-8.609 0-15.616-7.003-15.616-15.614V98.548h132.25c24.869 0 45.1 20.232 45.1 45.1v139.26zM241.964 558.454h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.138 29.286-29.286V587.74c0-16.15-13.138-29.286-29.286-29.286zm-.715 100h-70v-70h70v70zm133.119-155.546h71.428c16.148 0 29.286-13.139 29.286-29.286v-71.428c0-16.148-13.139-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.713-100h70v70h-70v-70zm203.814 441.095c-.372-7.958-6.938-14.292-14.984-14.292-8.284 0-15 6.722-15 15.002 0 16.15 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.136 29.286-29.286v-71.424c0-16.15-13.138-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.136-29.286 29.286v20.597c0 8.287 6.716 15.002 15 15.002s15-6.715 15-15.002v-19.888h70v70.005h-70.016zM374.368 688.454h71.428c16.148 0 29.286-13.138 29.286-29.286V587.74c0-16.148-13.139-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.713-100h70v70h-70v-70zm-.713 285.545h71.428c16.148 0 29.286-13.136 29.286-29.286v-71.424c0-16.15-13.139-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.136-29.286 29.286v71.424c0 16.15 13.138 29.286 29.286 29.286zm.713-100.001h70v70.005h-70v-70.005z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-9">
                  <h2 className="font-size-20">Easily Access Your Reports</h2>
                  <p>
                    Access all your lab reports forever, irrespective of the lab in
                    which test was done, by logging into flebo.in using your mobile
                    no. and OTP
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col">
              <div className="row">
                <div className="text-center col-3">
                  <span className="w-60-px d-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      className="img-fluid"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="#FFFFFF"
                        d="m970.83 831.696 50.256-82.611A20 20 0 0 0 1004 718.689H888.438v-56.475c0-11.046-8.957-19.999-20-19.999h-14.641c28.467-54.642 43.383-115.412 43.383-177.719 0-212.388-172.791-385.179-385.179-385.179s-385.18 172.794-385.18 385.181c0 62.307 14.918 123.076 43.384 177.719h-14.642c-11.044 0-20 8.953-20 20v56.474H20.001a19.998 19.998 0 0 0-17.086 30.396l50.256 82.611-50.256 82.589a20 20 0 0 0 17.086 30.396H238.26c11.046 0 20-8.955 20-20v-61.957h164.492c11.044 0 20-8.955 20-20s-8.957-20-20-20H175.565V682.218h672.874v140.508H598.67c-11.044 0-20 8.955-20 20s8.957 20 20 20h167.069v61.957c0 11.046 8.957 20 20 20h218.26a20 20 0 0 0 17.086-30.396l-50.256-82.591zM166.821 464.498c0-190.333 154.847-345.179 345.18-345.179 190.331 0 345.178 154.846 345.178 345.179 0 62.971-16.981 124.177-49.213 177.719h-51.939C794.115 590.58 814.7 528.353 814.7 463c0-166.91-135.793-302.7-302.7-302.7-166.909 0-302.7 135.792-302.7 302.7 0 65.353 20.584 127.58 58.673 179.217h-51.941c-32.23-53.542-49.213-114.746-49.213-177.719zm153.096 177.718c-45.6-48.78-70.617-112.101-70.617-179.217 0-144.855 117.847-262.7 262.7-262.7s262.699 117.845 262.699 262.7c0 67.116-25.013 130.437-70.615 179.217H319.917zM218.261 862.724v41.957H55.583l38.084-62.587a20.007 20.007 0 0 0 0-20.792l-38.09-62.612h79.984v84.035c0 11.046 8.956 20 20 20h62.7zm712.073-20.63 38.084 62.587H805.74v-41.957h62.7c11.044 0 20-8.955 20-20v-84.035h79.983l-38.089 62.612a20.007 20.007 0 0 0 0 20.792z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M523.099 826.101c-7.39-4.924-17.428-4.308-24.16 1.487-5.985 5.149-8.388 13.635-6.002 21.156 2.553 8.052 10.117 13.768 18.574 13.967 8.497.2 16.352-5.161 19.27-13.143 3.104-8.496-.073-18.487-7.682-23.467zM589.55 330.468 472.244 447.776l-38.893-38.897c-23.392-23.393-61.459-23.393-84.854 0-23.395 23.395-23.395 61.46-.002 84.852l77.467 77.471c12.762 12.759 29.52 19.137 46.281 19.137 16.758 0 33.524-6.38 46.283-19.137l155.878-155.88c23.129-23.129 23.127-61.727-.002-84.854-23.397-23.397-61.462-23.393-84.854 0zm56.571 56.567-155.88 155.88c-9.923 9.924-26.071 9.924-35.992 0l-77.469-77.471c-7.798-7.796-7.796-20.485.003-28.283 7.796-7.799 20.485-7.799 28.283 0l53.038 53.036c7.811 7.811 20.471 7.811 28.286 0l131.449-131.449c7.799-7.799 20.487-7.796 28.286 0 7.7 7.711 7.702 20.581-.005 28.286z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-9">
                  <h2 className="font-size-20">
                    Highest Quality Equipment and Process
                  </h2>
                  <p>
                    We use only{" "}
                    <span title="Food and Drug Administration, USA">FDA</span>{" "}
                    approved, state of the art{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Vacutainer"
                      className="text-white"
                      target="_black"
                    >
                      <u>Vacutainer</u>
                    </a>{" "}
                    from{" "}
                    <a
                      href="https://www.bd.com/en-us"
                      className="text-white"
                      target="_black"
                    >
                      <u>BD</u>
                    </a>{" "}
                    for a comfortable experience. Our specially designed backpacks
                    with cold gel ensure well preserved samples
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col">
              <div className="row">
                <div className="text-center col-3">
                  <span className="w-60-px d-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={512}
                      height={512}
                      className="img-fluid"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M494.5 34.936h-477c-9.649 0-17.5 7.851-17.5 17.5v61.595c0 9.697 15 9.697 15 0V52.436c0-1.378 1.121-2.5 2.5-2.5h477c1.379 0 2.5 1.122 2.5 2.5v365.739c0 1.378-1.121 2.5-2.5 2.5h-96.112v-15.606h75.434a7.5 7.5 0 0 0 7.5-7.5V319.03c0-9.697-15-9.697-15 0v71.039h-67.934v-33.277l.721.063c6.226.547 13.97 1.228 19.335-4.147 5.359-5.369 4.681-13.121 4.136-19.35-.587-6.685.045-8.515 5.183-12.786 13.229-11 13.475-22.778 0-33.98-5.138-4.274-5.767-6.102-5.183-12.788 1.468-16.777-6.368-24.999-23.471-23.496-6.675.586-8.486-.048-12.742-5.187-10.983-13.26-22.769-13.505-33.956 0-4.256 5.138-6.066 5.775-12.741 5.187-16.789-1.475-24.97 6.405-23.472 23.496.584 6.687-.045 8.514-5.183 12.788-13.229 10.999-13.474 22.779 0 33.98 5.138 4.274 5.767 6.102 5.183 12.788-1.575 17.969 7.007 24.917 24.19 23.433v33.278H45.679V80.541h420.643V279.03c0 9.697 15 9.697 15 0V73.041a7.5 7.5 0 0 0-7.5-7.5H38.179a7.5 7.5 0 0 0-7.5 7.5v324.528a7.5 7.5 0 0 0 7.5 7.5h302.209v15.606H17.5a2.503 2.503 0 0 1-2.5-2.5V152.03c0-9.697-15-9.697-15 0v266.145c0 9.649 7.851 17.5 17.5 17.5h322.888v33.95c1.068 6.164 4.623 8.431 10.663 6.8l18.337-8.529 18.337 8.529c4.537 2.11 10.663-1.225 10.663-6.8v-33.95H494.5c9.649 0 17.5-7.851 17.5-17.5V52.436c0-9.65-7.851-17.5-17.5-17.5zM338.355 341.911c-7.508.661-7.872.259-7.216-7.245 1.008-11.517-1.641-18.237-10.536-25.631-6.086-5.061-6.085-5.85 0-10.911 8.895-7.394 11.545-14.114 10.536-25.63-.656-7.505-.292-7.903 7.216-7.246 11.518 1.015 18.229-1.654 25.606-10.561 5.041-6.084 5.812-6.084 10.853 0 7.379 8.907 14.088 11.572 25.606 10.561 7.509-.661 7.872-.259 7.216 7.245-1.008 11.517 1.641 18.236 10.536 25.63 6.085 5.061 6.088 5.852-.001 10.912-8.895 7.395-11.545 14.112-10.536 25.629.659 7.504.293 7.907-7.214 7.247-4.711-.414-10.055-.884-14.759 1.07-4.553 1.891-7.754 5.754-10.849 9.491-1.458 1.76-4.119 4.973-5.427 5.548-1.307-.575-3.968-3.788-5.426-5.548-3.095-3.736-6.295-7.6-10.849-9.491-4.854-1.48-9.773-1.837-14.756-1.07zm34.196 110.914a7.499 7.499 0 0 0-6.326 0l-10.837 5.041v-92.349c3.559 3.913 7.95 7.546 14 7.546s10.441-3.632 14-7.545v92.348z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M97.263 143.321H355.81c9.697 0 9.697-15 0-15H97.263c-9.698 0-9.698 15 0 15zM422.237 181.439a7.5 7.5 0 0 0-7.5-7.5H97.263c-9.697 0-9.697 15 0 15h317.475a7.5 7.5 0 0 0 7.499-7.5zM285.137 227.056a7.5 7.5 0 0 0-7.5-7.5H97.263c-9.697 0-9.697 15 0 15h180.374a7.5 7.5 0 0 0 7.5-7.5zM186.651 331.598c-4.089.007-8.179.012-12.268.015-7.867.006-12.198-2.091-13.805-10.433-1.467-7.615-12.451-6.645-14.464 0-.891 2.943-5.391 11.368-9.322 10.679-2.083-.365-2.993-3.578-3.763-5.242-1.499-3.239-2.591-6.672-3.526-10.112-3.948-14.534-4.736-29.709-7.206-44.517-1.432-8.587-14.521-6.159-14.732 1.994-.672 25.971-4.918 51.586-14.164 75.929-3.431 9.033 11.064 12.939 14.464 3.988 3.565-9.386 6.395-18.997 8.591-28.751 1.178 3.554 2.583 7.04 4.298 10.431 4.38 8.656 13.313 13.777 22.871 9.927 3.411-1.374 6.523-3.776 9.172-6.699 7.096 8.183 17.653 7.812 27.502 7.8 14.847-.019 29.694-.054 44.542-.095 9.651-.027 9.669-15.027 0-15-12.73.036-25.46.065-38.19.086zM369.388 332.874c16.153 0 29.295-13.141 29.295-29.294s-13.142-29.294-29.295-29.294c-16.152 0-29.294 13.142-29.294 29.294s13.141 29.294 29.294 29.294zm0-43.588c7.882 0 14.295 6.413 14.295 14.294s-6.413 14.294-14.295 14.294-14.294-6.412-14.294-14.294 6.412-14.294 14.294-14.294z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-9">
                  <h2 className="font-size-20">Certified Phlebotomists</h2>
                  <p>
                    We believe in our phlebotomists, and so should you! Flebo.in
                    assures professional and qualified phlebotomists for a painless
                    phlebotomy experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col">
              <div className="row">
                <div className="text-center col-3">
                  <span className="w-60-px d-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      viewBox="0 0 1024 1024"
                      className="img-fluid"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M511.991 570.378c-32.178 0-58.358-26.19-58.358-58.383 0-32.19 26.18-58.38 58.358-58.38s58.358 26.19 58.358 58.38c0 32.195-26.18 58.383-58.358 58.383zm0-86.533c-15.511 0-28.131 12.628-28.131 28.15s12.62 28.153 28.131 28.153c15.51 0 28.13-12.628 28.13-28.153 0-15.522-12.62-28.15-28.13-28.15zM793.59 947.193c-20.48-20.48-25.6-145.064-25.6-204.8-.212-20.478 136.441-8.528 204.8 0v102.4c0 61.44-17.064 110.936-25.6 128-102.4 76.8-128 0-153.6-25.6zM436.872 885.782c27.851 0 50.51-22.645 50.51-50.476 0-27.86-22.658-50.527-50.51-50.527-27.82 0-50.454 22.667-50.454 50.527 0 27.831 22.634 50.476 50.454 50.476zm0-70.773c11.182 0 20.283 9.106 20.283 20.297 0 11.162-9.1 20.246-20.283 20.246-11.151 0-20.225-9.077-20.225-20.246 0-11.191 9.074-20.297 20.225-20.297z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M986.79 451.714H791.484c-7.219-46.902-25.797-91.312-54.221-129.48 0-.342.029-.678.029-1.02 0-48.73-27.647-91.097-68.057-112.3 9.04-21.3 7.028-45.9-5.554-65.516l20.596-20.646c10.887-10.852 16.888-25.344 16.903-40.804.012-15.488-5.985-30.022-16.882-40.926l-24.116-24.128C649.292 5.998 634.782 0 619.318 0h-.052c-15.457.014-29.942 6.02-40.764 16.884l-20.66 20.63c-11.22-7.194-24.294-11.066-37.994-11.066-18.866 0-36.569 7.312-49.838 20.59l-73.026 73.064c-5.903 5.904-5.898 15.474.006 21.374 5.904 5.902 15.472 5.898 21.376-.004l73.026-73.064c7.56-7.566 17.666-11.732 28.456-11.732s20.898 4.166 28.458 11.732l84.482 84.526.004.004c12.13 12.142 14.98 30.244 8.11 45.222a126.383 126.383 0 0 0-30.302-3.69c-69.857 0-126.689 56.858-126.689 126.746a126.46 126.46 0 0 0 4.441 33.2l-61.818 61.902c-7.56 7.564-17.678 11.73-28.486 11.73s-20.924-4.166-28.482-11.726l-84.43-84.53c-15.556-15.566-15.44-40.71.28-57.256l84.138-88.766c5.742-6.058 5.488-15.626-.572-21.368-6.061-5.74-15.626-5.488-21.369.572l-84.127 88.754c-23.434 24.666-26.486 60.678-9.253 87.588l-20.666 20.676c-22.476 22.488-22.484 59.136.014 81.726l24.14 24.094c10.85 10.894 25.336 16.9 40.794 16.912h.05c15.466 0 29.975-5.998 40.876-16.904l20.57-20.618c11.228 7.2 24.316 11.076 38.034 11.076 18.886 0 36.596-7.312 49.872-20.594l53.03-53.102c21.938 37.85 62.856 63.382 109.65 63.382 17.948 0 35.022-3.776 50.506-10.538 7.042 18.802 10.614 38.612 10.614 59.09 0 51.872-24.192 101.274-64.946 133.136H303.945c-8.348 0-15.114 6.768-15.114 15.114s6.766 15.114 15.114 15.114h346.748c10.078 0 18.278 8.231 18.278 18.352v28.022c0 10.088-8.202 18.294-18.278 18.294H80.285c-10.108 0-18.336-8.208-18.336-18.294v-28.022c0-10.12 8.226-18.352 18.336-18.352h153.672c8.349 0 15.114-6.768 15.114-15.114s-6.766-15.114-15.114-15.114H80.285c-26.778 0-48.564 21.794-48.564 48.582v28.022c0 26.753 21.784 48.527 48.564 48.527h28.244v21.27c0 28.431 23.122 51.566 51.54 51.566h139.476v88.218H60.123c-29.81 0-54.062 24.261-54.062 54.089v33.69c0 11.242 9.144 20.385 20.384 20.385h638.107c11.24 0 20.382-9.143 20.382-20.385v-33.697c0-29.82-24.251-54.082-54.061-54.082h-56.768V754.776h76.584c24.392 0 44.626-18.103 48.001-41.586 22.968-20.759 42.298-44.67 57.453-71.022V903.27c0 66.567 54.133 120.73 120.671 120.73s120.671-54.162 120.671-120.73V556.284c11.915-4.381 20.451-15.811 20.451-29.226v-44.126c0-17.214-13.97-31.218-31.152-31.218zm-668.735-5.254c-5.178 5.181-12.096 8.034-19.486 8.034h-.024c-7.37-.007-14.258-2.854-19.434-8.049l-24.138-24.094c-10.732-10.774-10.74-28.266-.02-38.992l19.49-19.5 63.044 63.12-19.432 19.48zM160.07 797.381c-11.753 0-21.315-9.567-21.315-21.328v-21.277h160.791v42.606H160.07zm494.641 172.537v23.852H36.292v-23.852c0-13.151 10.692-23.852 23.834-23.852H630.88c13.142 0 23.834 10.701 23.834 23.852zm-110.828-54.082H329.771V754.775h214.11v161.061h.001zm99.586-794.98L580.377 57.73l19.514-19.486c5.142-5.162 12.032-8.008 19.402-8.016h.026c7.386 0 14.307 2.852 19.486 8.034l24.114 24.128c5.186 5.19 8.04 12.126 8.034 19.532-.006 7.378-2.852 14.276-8.046 19.452l-19.438 19.482zm-32.868 296.876c-53.186 0-96.459-43.298-96.459-96.518s43.274-96.516 96.459-96.516c53.187 0 96.46 43.298 96.46 96.516s-43.272 96.518-96.46 96.518zm145.547 138.552v6.736c-10.496 40.158-30.179 76.744-57.569 107.484-3.698-23.077-23.678-40.774-47.728-40.85 32.483-36.236 51.098-83.736 51.098-133.14 0-25.946-4.872-50.996-14.468-74.653 18.855-14.452 33.56-34.063 41.955-56.724a260.262 260.262 0 0 1 31.531 87.154c-14.373 2.766-25.264 15.446-25.264 30.642v44.126c-.007 13.414 8.528 24.846 20.443 29.224zm211.12 346.986c0 49.898-40.58 90.5-90.448 90.5s-90.448-40.602-90.448-90.5v-18.008h32.541c8.353 0 15.119-6.766 15.119-15.111 0-8.353-6.766-15.119-15.119-15.119h-32.541V812.77h32.541c8.353 0 15.119-6.766 15.119-15.111 0-8.353-6.766-15.119-15.119-15.119h-32.541v-42.32h12.668c31.978 0 43.491 4.454 56.832 9.611 16.991 6.568 36.25 14.007 90.946 14.234l20.451.066v139.14zm0-169.377-20.341-.066c-49.108-.197-64.892-6.3-80.165-12.197-14.804-5.723-30.113-11.638-67.723-11.638h-12.668V558.218h180.89v175.675h.007zm20.443-206.835c0 .478-.446.932-.922.932H766.848c-.475 0-.922-.453-.922-.932v-44.126c0-.566.483-.988.922-.988h219.941c.432 0 .922.422.922.988v44.126z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-9">
                  <h2 className="font-size-20">Verified Labs</h2>
                  <p>
                    Our verified and certified empaneled labs are now in your
                    neighborhood, sanitized, and ready to provide you with accurate
                    and fast results
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col">
              <div className="row">
                <div className="text-center col-3">
                  <span className="w-60-px d-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      className="img-fluid"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M874.827 26.483c-17.137-7.894-37.332-4.824-51.354 7.802l-66.545 58.926-90.541-80.99c-18.19-16.295-45.728-16.295-63.918 0l-90.467 80.914-90.488-80.914c-18.194-16.295-45.735-16.295-63.931 0l-90.565 80.99-66.61-58.923c-19.655-17.47-49.753-15.698-67.223 3.956a47.61 47.61 0 0 0-12.025 31.96v883.594c-.157 26.331 21.067 47.806 47.402 47.96a47.662 47.662 0 0 0 31.965-12.047l66.549-58.924 90.541 80.991c18.19 16.296 45.729 16.296 63.918 0l90.467-80.925 90.481 80.918c18.194 16.289 45.735 16.289 63.93 0l90.566-80.991 66.611 58.924c19.653 17.474 49.744 15.711 67.218-3.942a47.553 47.553 0 0 0 12.032-31.978V70.204c.241-18.864-10.781-36.056-28.014-43.722zM788.649 894.86c-18.191-16.113-45.575-16.04-63.68.176l-90.538 80.984-90.469-80.911c-18.192-16.296-45.733-16.296-63.925 0l-90.478 80.911-90.577-80.984c-18.036-16.216-45.371-16.289-63.496-.176l-66.369 58.909V825.952l-.239-755.736 66.477 58.911c18.192 16.116 45.575 16.044 63.68-.17l90.538-80.988 90.47 80.914c18.192 16.295 45.733 16.295 63.925 0l90.479-80.914 90.576 80.988c18.038 16.212 45.371 16.286 63.496.173l66.37-58.926v607.393l.241 276.179-66.48-58.917z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M739.299 488.027H284.706c-13.243 0-23.978 10.735-23.978 23.978s10.735 23.978 23.978 23.978h454.593c13.239 0 23.976-10.735 23.976-23.978s-10.737-23.978-23.976-23.978zM523.495 344.159H284.708c-13.243 0-23.978 10.734-23.978 23.978s10.735 23.978 23.978 23.978h238.787c13.243 0 23.978-10.734 23.978-23.978s-10.737-23.978-23.978-23.978zM739.299 631.897H284.706c-13.243 0-23.978 10.734-23.978 23.978s10.735 23.978 23.978 23.978h454.593c13.239 0 23.976-10.734 23.976-23.978s-10.737-23.978-23.976-23.978z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-9">
                  <h2 className="font-size-20">On Time Reports</h2>
                  <p>
                    Reports delivered as per promised time. Your money back if
                    reports are delayed without adequate reason
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="how-we-work" className="row" style={{}}>
        <div className="mt-5 container">
          <div className="justify-content-center pb-5 row">
            <div className="col-12 text-center pb-0 col-lg-7">
              <h2 className="mt-4 mb-5 mb-sm-3">Flebo.in at Work</h2>
              <p>We take care of everything so that you don't have to worry</p>
            </div>
          </div>
          <div className="mt-5 justify-content-center row">
            <div className="Process-bottom text-center mb-5 col-lg-4 col-md-12 col-sm-12">
              <div className="Process-icon-card mb-5 pb-4">
                <div className="Icon d-flex justify-content-center">
                  <span className="w-60-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      viewBox="0 0 1024 1024"
                      className="img-fluid"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M782.029 502.908h71.431c16.15 0 29.286-13.139 29.286-29.286v-71.428c0-16.148-13.136-29.286-29.286-29.286h-71.431c-16.143 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.144 29.286 29.286 29.286zm.717-100h69.998v70h-69.998v-70zm-.717 290h71.431c16.15 0 29.286-13.138 29.286-29.286v-71.428c0-16.148-13.136-29.286-29.286-29.286h-71.431c-16.143 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.144 29.286 29.286 29.286zm.717-100h69.998v70.001h-69.998v-70.001zm-204.547-90h71.428c16.148 0 29.286-13.139 29.286-29.286v-71.428c0-16.148-13.138-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.714-100h70.001v70h-70.001v-70zM241.964 744.002h-71.428c-16.148 0-29.286 13.136-29.286 29.286v71.424c0 16.15 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.136 29.286-29.286v-71.424c0-16.15-13.138-29.286-29.286-29.286zm-.715 100.001h-70v-70.005h70v70.005zm.715-471.095h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.139 29.286-29.286v-71.428c0-16.15-13.138-29.286-29.286-29.286zm-.715 100h-70v-70h70v70zm336.95 215.546h71.428c16.148 0 29.286-13.138 29.286-29.286V587.74c0-16.148-13.138-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.714-100h70.001v70h-70.001v-70zM897.646 68.548h-64.132V45.614C833.514 20.462 813.049 0 787.895 0h-6.883C755.858 0 735.4 20.462 735.4 45.614v22.934H288.597V45.614C288.597 20.462 268.135 0 242.983 0h-6.888c-25.152 0-45.614 20.462-45.614 45.614v22.934h-64.13c-41.41 0-75.1 33.69-75.1 75.1v805.351c0 41.355 33.644 75.001 75 75.001h771.497c41.355 0 75.001-33.646 75.001-75.001V143.648c-.007-41.41-33.697-75.1-75.103-75.1zM765.397 45.614c0-8.61 7.007-15.614 15.616-15.614h6.89c8.609 0 15.609 7.004 15.609 15.614v22.934h-38.115V45.614zm-544.914 0c0-8.61 7.004-15.614 15.615-15.614h6.888c8.61 0 15.614 7.004 15.614 15.614v22.934h-38.114V45.614h-.002zm722.263 903.385c0 24.817-20.187 44.997-44.997 44.997H126.25c-24.814 0-45-20.18-45-44.997v-.095c12.568 9.472 28.19 15.097 45.102 15.097h608.165c20.063 0 38.919-7.812 53.109-22.001l155.121-155.121V949zm-170.43-34.114a64.082 64.082 0 0 0 1.814-15.126V799.626c0-18.878 15.36-34.238 34.245-34.238H908.5c5.208 0 10.269-.644 15.126-1.821L772.315 914.885zm170.43-631.977H303.597c-8.284 0-15 6.716-15 15s6.716 15 15 15h639.149v388.236c0 18.882-15.36 34.242-34.245 34.242H808.376c-35.423 0-64.241 28.826-64.241 64.241V899.76c0 18.878-15.364 34.245-34.245 34.245H126.352c-24.868 0-45.1-20.239-45.1-45.107v-575.99h162.346c8.283 0 14.999-6.716 14.999-15s-6.716-15-14.999-15H81.249v-139.26c0-24.868 20.232-45.1 45.101-45.1h64.132v44.104c0 25.152 20.462 45.614 45.614 45.614 8.284 0 15-6.716 15-15s-6.716-15-15-15c-8.61 0-15.614-7.003-15.614-15.614V98.548h514.919v44.104c0 25.152 20.458 45.614 45.612 45.614 8.28 0 15.002-6.716 15.002-15s-6.722-15-15.002-15c-8.609 0-15.616-7.003-15.616-15.614V98.548h132.25c24.869 0 45.1 20.232 45.1 45.1v139.26zM241.964 558.454h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.138 29.286-29.286V587.74c0-16.15-13.138-29.286-29.286-29.286zm-.715 100h-70v-70h70v70zm133.119-155.546h71.428c16.148 0 29.286-13.139 29.286-29.286v-71.428c0-16.148-13.139-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.713-100h70v70h-70v-70zm203.814 441.095c-.372-7.958-6.938-14.292-14.984-14.292-8.284 0-15 6.722-15 15.002 0 16.15 13.138 29.286 29.286 29.286h71.428c16.148 0 29.286-13.136 29.286-29.286v-71.424c0-16.15-13.138-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.136-29.286 29.286v20.597c0 8.287 6.716 15.002 15 15.002s15-6.715 15-15.002v-19.888h70v70.005h-70.016zM374.368 688.454h71.428c16.148 0 29.286-13.138 29.286-29.286V587.74c0-16.148-13.139-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.138-29.286 29.286v71.428c0 16.148 13.138 29.286 29.286 29.286zm.713-100h70v70h-70v-70zm-.713 285.545h71.428c16.148 0 29.286-13.136 29.286-29.286v-71.424c0-16.15-13.139-29.286-29.286-29.286h-71.428c-16.148 0-29.286 13.136-29.286 29.286v71.424c0 16.15 13.138 29.286 29.286 29.286zm.713-100.001h70v70.005h-70v-70.005z"
                      />
                    </svg>
                  </span>
                  <span className="Process-no bg-black text-white rounded-circle">
                    01
                  </span>
                </div>
              </div>
              <h2 className="font-size-20">Quick Booking</h2>
              <p>Book a hassle-free, quality-assured home collection at Flebo.in</p>
            </div>
            <div className="Process-top text-center mb-5 col-lg-4 col-md-12 col-sm-12">
              <div className="Process-icon-card mb-5 pb-4">
                <div className="Icon d-flex justify-content-center">
                  <span className="w-55-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      className="img-fluid"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M649.339 292.734c-41.19 0-79.617 12.067-111.928 32.851V146.982h29.46c11.046 0 19.999-8.954 19.999-20V20c0-11.046-8.953-20-19.999-20H187.193c-11.046 0-20.001 8.954-20.001 20v106.982c0 11.046 8.955 20 20.001 20h29.46v718.316c0 87.507 71.946 158.702 160.378 158.702s160.378-71.195 160.378-158.702V674.824c32.312 20.784 70.738 32.851 111.928 32.851 114.4 0 207.471-93.071 207.471-207.47S763.74 292.734 649.34 292.734zm-392.686 8.094H497.41v45.733H256.653v-45.733zM207.192 40.001h339.679v66.982H207.192V40.001zM497.41 146.983v113.846H256.653V146.983H497.41zm0 718.316c0 65.453-54.002 118.702-120.378 118.702s-120.378-53.248-120.378-118.702v-60.843h108.692c11.046 0 20.001-8.955 20.001-20.001v-51.838c0-11.046-8.955-19.999-20.001-19.999s-20.001 8.953-20.001 19.999v31.839h-88.692V485.929h88.692v65.864c0 11.046 8.955 20.001 20.001 20.001s20.001-8.955 20.001-20.001v-85.865c0-11.046-8.955-19.999-20.001-19.999H256.654v-59.368h219.182c-21.467 32.664-33.966 71.722-33.966 113.646 0 54.466 21.096 104.096 55.548 141.15-.003.129-.006.26-.006.389v223.553h-.003zm151.929-197.623c-92.344 0-167.47-75.129-167.47-167.47 0-92.344 75.127-167.47 167.47-167.47s167.47 75.127 167.47 167.47c0 92.344-75.126 167.47-167.47 167.47z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M663.418 377.354c-7.708-7.312-19.79-7.322-27.51-.019-8.553 8.093-83.555 80.97-83.555 147.098 0 53.655 43.649 97.304 97.301 97.304 53.655 0 97.305-43.649 97.305-97.304 0-65.929-74.989-138.967-83.541-147.079zm-13.765 204.383c-31.596 0-57.301-25.705-57.301-57.304 0-33.816 33.989-78.379 57.288-103.893 23.31 25.567 57.317 70.187 57.317 103.893 0 31.599-25.705 57.304-57.304 57.304zM383.82 634.181c-3.268-7.846-11.406-12.91-19.898-12.295-8.312.601-15.492 6.466-17.792 14.464s.769 16.909 7.566 21.741c6.741 4.791 15.853 4.927 22.745.371 7.886-5.215 10.949-15.572 7.38-24.281z"
                      />
                    </svg>
                  </span>
                  <span className="Process-no bg-black text-white rounded-circle">
                    02
                  </span>
                </div>
              </div>
              <h2 className="font-size-20">On-Time Sample Collection</h2>
              <p>
                A vaccinated, qualified and skilled phlebotomist will collect your
                sample within the time slot booked using the best quality equipment.
                Guaranteed!
              </p>
            </div>
            <div className="Process text-center mb-5 col-lg-4 col-md-12 col-sm-12">
              <div className="Process-icon-card mb-5 pb-4">
                <div className="Icon d-flex justify-content-center">
                  <span className="w-60-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={512}
                      height={512}
                      className="img-fluid"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M314.62 167.823c0-4.142-3.043-7.5-6.795-7.5H118.997c-3.752 0-6.795 3.358-6.795 7.5s3.042 7.5 6.795 7.5h7.73v24.564c0 12.976 9.564 23.532 21.32 23.532s21.32-10.557 21.32-23.532v-24.564h138.458c3.753 0 6.795-3.358 6.795-7.5zm-158.844 32.064c0 4.705-3.468 8.532-7.73 8.532s-7.73-3.828-7.73-8.532v-24.564h15.46v24.564zM215.894 391.758h16.032c8.557 0 15.517-6.961 15.517-15.517V343.66h32.581c8.556 0 15.516-6.96 15.516-15.516v-16.033c0-8.555-6.96-15.516-15.516-15.516h-32.581v-32.58c0-8.557-6.96-15.517-15.517-15.517h-16.032c-8.556 0-15.516 6.96-15.516 15.517v32.58h-32.581c-8.556 0-15.516 6.961-15.516 15.516v16.033c0 8.556 6.96 15.516 15.516 15.516h32.581v32.581c0 8.556 6.96 15.517 15.516 15.517zm-48.096-63.097a.516.516 0 0 1-.516-.517v-16.031c0-.285.231-.516.516-.516h40.081a7.5 7.5 0 0 0 7.5-7.5v-40.082c0-.285.231-.516.516-.516h16.032c.285 0 .517.23.517.516v40.082a7.5 7.5 0 0 0 7.5 7.5h40.081c.285 0 .516.23.516.516v16.031c0 .285-.23.517-.516.517h-40.081a7.5 7.5 0 0 0-7.5 7.5v40.081a.517.517 0 0 1-.517.517h-16.032a.516.516 0 0 1-.516-.517v-40.081a7.5 7.5 0 0 0-7.5-7.5h-40.081zM383.529 92.943l-2.374 8.857-6.485-11.232a8.18 8.18 0 0 0-14.168 8.179l6.487 11.236-8.86-2.375a8.18 8.18 0 0 0-4.235 15.801l24.665 6.609 5.048 8.743a28.629 28.629 0 0 0-6.644 11.472h-10.079l-18.053-18.051a8.178 8.178 0 0 0-11.567 0 8.178 8.178 0 0 0 0 11.566l6.484 6.487h-12.971c-4.517 0-8.181 3.663-8.181 8.18s3.664 8.179 8.181 8.179h12.971l-6.485 6.486c-5.169 5.167-1.438 13.963 5.784 13.963 2.093 0 4.186-.8 5.783-2.397l18.053-18.053h10.078a28.637 28.637 0 0 0 6.643 11.473l-5.046 8.742-24.664 6.608a8.178 8.178 0 0 0-5.783 10.019 8.176 8.176 0 0 0 10.018 5.784l8.86-2.374-6.488 11.235c-3.161 5.479.847 12.271 7.078 12.271a8.175 8.175 0 0 0 7.091-4.092l6.485-11.232 2.374 8.857a8.183 8.183 0 0 0 7.896 6.065c5.38 0 9.298-5.106 7.906-10.299l-6.606-24.66 5.04-8.731a28.417 28.417 0 0 0 13.259 0l5.042 8.731-6.606 24.661c-1.395 5.194 2.53 10.298 7.906 10.298a8.187 8.187 0 0 0 7.896-6.064l2.373-8.858 6.484 11.232a8.179 8.179 0 0 0 7.092 4.092c6.225 0 10.242-6.785 7.078-12.271l-6.487-11.235 8.86 2.375a8.181 8.181 0 0 0 4.235-15.802l-24.663-6.608-5.048-8.743a28.637 28.637 0 0 0 6.643-11.473h10.079l18.054 18.054a8.156 8.156 0 0 0 5.783 2.395c7.221 0 10.952-8.796 5.784-13.963l-6.486-6.486h12.971a8.18 8.18 0 1 0 0-16.359H465.04l6.486-6.486a8.18 8.18 0 0 0-11.567-11.568l-18.054 18.054h-10.079a28.6 28.6 0 0 0-6.644-11.472l5.048-8.743 24.664-6.609a8.18 8.18 0 1 0-4.235-15.801l-8.86 2.374 6.487-11.235a8.18 8.18 0 0 0-14.169-8.178l-6.484 11.233-2.374-8.858a8.18 8.18 0 1 0-15.802 4.233l6.607 24.659-5.042 8.731a28.457 28.457 0 0 0-13.259 0l-5.04-8.731 6.606-24.659a8.179 8.179 0 1 0-15.8-4.236zm20.865 53.203c6.766 0 12.27 5.504 12.27 12.27 0 6.765-5.504 12.27-12.27 12.27s-12.27-5.504-12.27-12.27c.001-6.767 5.505-12.27 12.27-12.27z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M404.949 118.949c.608 0 1.221.017 1.833.044v-1.009l-1.833-6.84-2.059 7.682.099.17a41.51 41.51 0 0 1 1.96-.047zM407.813 158.414v3.82a3.425 3.425 0 0 0 0-3.82zM407.296 376.759h-.516V244.104a18.97 18.97 0 0 1-1.832-1.79c-3.37 3.826-8.067 6.075-13.166 6.351v128.093h-.516c-8.557 0-15.517 6.96-15.517 15.516v32.064c0 8.556 6.96 15.516 15.517 15.516h.516v17.064h-16.548c-9.125 0-16.548-7.423-16.548-16.548V248.226c-4.365-1.418-8.094-4.399-10.497-8.56-2.554-4.424-3.205-9.484-1.955-14.23a18.967 18.967 0 0 1-2.548-1.021v215.958c0 17.396 14.151 31.548 31.548 31.548h16.548v.516c0 13.546-11.021 24.564-24.564 24.564H62.603c-13.545 0-24.564-11.021-24.564-24.564v-.516h16.548c17.396 0 31.548-14.152 31.548-31.548V127.742c0-9.125 7.424-16.548 16.549-16.548h224.451c2.065 0 4.036.397 5.861 1.092.069-1.291.264-2.593.611-3.89a18.929 18.929 0 0 1 6.103-9.58 31.366 31.366 0 0 0-12.575-2.622H102.684c-17.396 0-31.549 14.152-31.549 31.548v312.629c0 9.125-7.423 16.548-16.548 16.548H38.039v-17.063h.516c8.556 0 15.516-6.961 15.516-15.517v-32.063c0-8.557-6.96-15.517-15.516-15.517H22.523c-8.556 0-15.516 6.96-15.516 15.517v32.063c0 8.556 6.96 15.517 15.516 15.517h.516v32.58c0 21.816 17.749 39.564 39.564 39.564h304.613c21.816 0 39.564-17.749 39.564-39.564v-32.58h.516c8.557 0 15.517-6.961 15.517-15.517v-32.063c-.001-8.557-6.961-15.517-15.517-15.517zM22.523 424.855a.516.516 0 0 1-.516-.517v-32.063c0-.285.231-.517.516-.517h16.032c.285 0 .516.231.516.517v32.063a.517.517 0 0 1-.516.517H22.523zm385.29-.517a.516.516 0 0 1-.517.516h-16.031a.516.516 0 0 1-.517-.516v-32.064c0-.285.231-.516.517-.516h7.957c.021 0 .039.003.059.003.019 0 .038-.003.058-.003h7.958c.285 0 .517.232.517.516v32.064z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M22.523 183.339h.516v168.854a7.5 7.5 0 0 0 15 0V183.339h.516c8.556 0 15.516-6.96 15.516-15.516v-32.064c0-8.556-6.96-15.517-15.516-15.517h-.516v-8.532c0-26.805 21.808-48.613 48.613-48.613h256.517c11.392 0 21.872 3.949 30.168 10.536a19.062 19.062 0 0 1 4.561 3.295 18.918 18.918 0 0 1 12.838-5.001c.708 0 1.415.048 2.119.127-11.667-14.587-29.599-23.958-49.687-23.958h-40.597v-.516c0-26.235-21.345-47.58-47.58-47.58H174.83c-26.236 0-47.581 21.345-47.581 47.581v.516H86.652c-35.076 0-63.613 28.537-63.613 63.613v8.532h-.516c-8.556 0-15.516 6.961-15.516 15.517v32.064c0 8.556 6.96 15.516 15.516 15.516zM142.25 47.581C142.25 29.616 156.866 15 174.831 15h80.161c17.965 0 32.581 14.616 32.581 32.581v.516H142.25v-.516zM22.008 135.758c0-.285.231-.517.516-.517h16.032a.518.518 0 0 1 .516.517v32.064a.516.516 0 0 1-.516.516H22.524a.516.516 0 0 1-.516-.516v-32.064zM402.889 201.822l2.06 7.684 1.831-6.837v-1.014a40.132 40.132 0 0 1-3.792-.003l-.099.17zM480.459 328.276l-33.585.13s.265 70.218.291 78.345c.038 8.127-.987 27.039 16.896 26.969 17.876-.059 16.73-16.948 16.686-27.1-.036-10.135-.288-78.344-.288-78.344z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="m494.69 280.05 10.303-.038-.071-18.395-84.663.313.064 18.398 11.311-.042c.084 22.408.404 109.953.458 121.375l-.002 2.109c-.029 10.351-.089 27.665 10.231 37.979 5.27 5.264 12.499 7.922 21.476 7.885 8.922-.029 16.065-2.477 21.226-7.267 10.398-9.654 10.245-26.189 10.147-38.255l-.48-124.062zm-15.639 155.888c-3.544 3.291-8.55 4.896-15.286 4.921-6.648.022-11.635-1.716-15.247-5.324-7.726-7.723-7.682-22.756-7.658-31.736l.008-2.164c-.054-11.438-.375-99.003-.457-121.38l45.503-.168.455 121.38.024 2.725c.083 10.433.215 24.728-7.342 31.746z"
                      />
                    </svg>
                  </span>
                  <span className="Process-no bg-black text-white rounded-circle">
                    03
                  </span>
                </div>
              </div>
              <h2 className="font-size-20">Cold Chain Logistics</h2>
              <p>
                Medical samples can get spoilt in the heat. Our specially designed
                bags with cold gel preserve your test sample during transportation
              </p>
            </div>
            <div className="Process-top text-center mb-5 col-lg-4 col-md-12 col-sm-12">
              <div className="Process-icon-card mb-5 pb-4">
                <div className="Icon d-flex justify-content-center">
                  <span className="w-60-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={512}
                      height={512}
                      className="img-fluid"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M325.952 404.313c-27.805-30.712-25.045-86.003 16.16-123.308s96.498-34.572 124.3-3.861c27.809 30.712 25.045 86.003-16.159 123.308-41.205 37.305-96.497 34.572-124.302 3.861zm-20.197 18.286c39.962 44.139 112.842 43.267 162.783-1.95 49.942-45.216 58.035-117.651 18.075-161.79-39.962-44.138-112.844-43.267-162.786 1.95s-58.034 117.651-18.072 161.79zM45.587 404.313c-27.805-30.712-25.045-86.003 16.16-123.308s96.498-34.572 124.303-3.861c27.805 30.712 25.045 86.003-16.16 123.308s-96.498 34.572-124.303 3.861zM25.39 422.599c39.962 44.139 112.842 43.267 162.784-1.95 49.943-45.216 58.034-117.651 18.072-161.79s-112.843-43.267-162.785 1.95c-49.943 45.216-58.033 117.651-18.072 161.79z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M247.433 313.027c2.376-10.726 4.553-21.503 7.202-32.163 1.695-6.822.423-12.519-4.524-17.467-15.698-15.698-31.337-31.456-47.081-47.109-14.189-14.107-14.286-33.702-.155-47.811 15.71-15.686 31.383-31.411 47.076-47.115 13.58-13.593 32.755-13.65 46.431-.018a13907.677 13907.677 0 0 1 59.926 60.063c2.166 2.187 4.363 3.226 7.416 3.199 13.296-.119 26.594-.115 39.893-.09 2.251.004 4.558.084 6.743.565 6.115 1.341 10.095 6.955 9.579 13.164-.549 6.62-5.364 11.698-12.194 11.782-17.822.218-35.654.292-53.468-.157-3.259-.083-7.103-2.225-9.558-4.58-12.033-11.557-23.781-23.418-35.411-35.382-2.909-2.99-4.546-3.297-7.634-.058-9.946 10.436-20.18 20.607-30.505 30.671-7.615 7.423-19.4 4.203-21.649-5.763-1.126-4.99.683-9.093 4.256-12.632 10.141-10.053 20.112-20.281 30.385-30.197 2.873-2.774 2.891-4.613-.022-7.072-2.045-1.727-3.765-3.831-5.738-5.65-4.078-3.757-6.575-3.805-10.563.144-11.553 11.441-23.012 22.982-34.507 34.482-4.099 4.102-8.23 8.172-12.282 12.317-4.535 4.638-4.629 7.657-.024 12.291 15.042 15.138 30.043 30.319 45.33 45.208 8.601 8.377 14.113 18.235 14.467 30.142.171 5.747-2.137 11.567-3.341 17.351-1.517 7.298-3.054 14.593-4.583 21.889h-25.465zM157.591 171.805c-7.624 0-17.089.169-26.546-.047-9.843-.224-13.669-5.436-11.358-15.125 1.547-6.489 4.953-11.995 9.695-16.613a9202.176 9202.176 0 0 1 42.951-41.569c13.494-12.969 30.058-15.2 47.684-13.162 5.311.614 10.643 1.54 15.785 2.972 3.302.918 6.556 2.635 9.329 4.677 4.179 3.075 4.202 6.15.579 9.912-12.246 12.725-24.477 25.47-36.844 38.077-7.416 7.559-14.91 15.06-22.674 22.257-7.468 6.919-15.746 12.26-28.601 8.624zm30.157-52.083c-1.478-4.2 2.649-10.744-5.417-11.445-5.072-.443-5.315-.061-7.73 10.849-4.216.98-11.051-2.412-11.208 6.09-.148 8.041 6.46 5.565 10.769 6.626 1.304 4.252-2.41 10.869 5.738 11.542 8.915.738 5.677-6.739 7.071-10.781 11.197-1.13 11.435-1.264 11.54-6.309.101-4.856.004-4.915-10.763-6.571zM338.926 56.86c20.174.03 36.582 16.592 36.508 36.85-.072 19.865-16.693 36.519-36.494 36.564-20.3.046-36.925-16.596-36.927-36.959-.003-20.094 16.596-36.484 36.913-36.455zm17.171 36.781c.022-9.608-7.976-17.585-17.527-17.484-9.406.102-17.185 7.975-17.212 17.421-.026 9.222 8.084 17.328 17.338 17.328 9.325 0 17.38-7.993 17.401-17.266z"
                      />
                    </svg>
                  </span>
                  <span className="Process-no bg-black text-white rounded-circle">
                    04
                  </span>
                </div>
              </div>
              <h2 className="font-size-20">Peer to Peer Delivery</h2>
              <p>
                Our state of the art IT platform guides our phlebotomists to the
                designated labs, ensuring timely delivery of samples
              </p>
            </div>
            <div className="Process-bottom text-center mb-5 col-lg-4 col-md-12 col-sm-12">
              <div className="Process-icon-card mb-5 pb-4">
                <span className="Icon d-flex justify-content-center">
                  <div className="w-60-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={512}
                      height={512}
                      className="img-fluid"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#FFFFFF"
                        d="m170.958 151.353 83.081 77.146a8.416 8.416 0 0 0 11.454 0l83.08-77.146a44.057 44.057 0 0 0 13.89-27.242 44.064 44.064 0 0 0-7.182-29.723 52.89 52.89 0 0 0-41.722-23.508 52.905 52.905 0 0 0-43.602 19.806l-10.195 12.742-10.192-12.743a52.9 52.9 0 0 0-67.276-13.044 52.9 52.9 0 0 0-18.048 16.746 44.065 44.065 0 0 0 6.712 56.965zm88.809 59.493-60.296-55.988 14.447.141a8.416 8.416 0 0 0 7.984-5.755l3.525-10.573 24.002 30.005a8.414 8.414 0 0 0 6.418 3.157h.154a8.42 8.42 0 0 0 6.375-2.923l23.771-27.583 15.162 11.882a8.339 8.339 0 0 0 5.274 1.788l13.466-.133-60.285 55.981zm-81.509-107.121a36.073 36.073 0 0 1 28.443-16.026 36.055 36.055 0 0 1 29.725 13.501l16.768 20.961a8.426 8.426 0 0 0 6.572 3.159 8.413 8.413 0 0 0 6.572-3.159l16.767-20.961a36.058 36.058 0 0 1 29.726-13.501 36.056 36.056 0 0 1 28.444 16.026 27.273 27.273 0 0 1-3.007 34.127l-28.899.284-19.161-15.017a8.42 8.42 0 0 0-11.568 1.13l-22.399 25.987-27.335-34.166a8.426 8.426 0 0 0-8.049-3.029 8.416 8.416 0 0 0-6.507 5.624l-6.479 19.435-26.618-.262c-4.321-4.488-6.976-10.322-7.52-16.529s1.052-12.413 4.524-17.586zM138.167 281.25h42.083a8.42 8.42 0 0 0 8.417-8.418v-16.833h-16.833v8.417h-25.25v-25.25h-16.833v33.667a8.417 8.417 0 0 0 8.417 8.418zM180.25 373.833h-42.083a8.418 8.418 0 0 0-8.417 8.418v42.083a8.415 8.415 0 0 0 8.417 8.418h42.083a8.416 8.416 0 0 0 8.417-8.418v-42.083a8.42 8.42 0 0 0-8.417-8.418zm-8.416 42.083h-25.25v-25.25h25.25v25.25z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M202.695 199.224a8.42 8.42 0 0 0-11.888.664l-27.109 30.334-10.546-13.151a8.422 8.422 0 0 0-11.833-1.3 8.419 8.419 0 0 0-1.301 11.832l16.763 20.905a8.418 8.418 0 0 0 6.341 3.149h.226c1.185 0 2.357-.25 3.439-.736s2.048-1.192 2.838-2.077l33.737-37.739a8.416 8.416 0 0 0-.667-11.88zM171.834 340.166h-25.25v-25.25h-16.833v33.667a8.417 8.417 0 0 0 8.417 8.416h42.083a8.418 8.418 0 0 0 8.417-8.416V331.75h-16.834v8.416z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M202.695 274.974a8.417 8.417 0 0 0-11.888.664l-27.109 30.334-10.546-13.151a8.417 8.417 0 1 0-13.134 10.531l16.763 20.906a8.425 8.425 0 0 0 6.341 3.147h.226a8.404 8.404 0 0 0 6.277-2.813l33.737-37.74a8.415 8.415 0 0 0-.667-11.881zM239.168 256h42.083v16.833h-42.083V256zM298.084 256h67.334v16.833h-67.334V256zM239.168 298.084h75.75v16.833h-75.75v-16.833zM340.168 298.084h25.25v16.833h-25.25v-16.833zM239.168 365.416h126.25v16.833h-126.25v-16.833zM239.168 399.083h42.083v16.833h-42.083v-16.833zM298.084 399.083h33.667v16.833h-33.667v-16.833zM239.168 331.75h50.5v16.833h-50.5V331.75zM424.335 483.25a33.668 33.668 0 0 0 23.807-57.473 33.66 33.66 0 0 0-36.69-7.298 33.668 33.668 0 0 0-20.783 31.104 33.702 33.702 0 0 0 33.667 33.667zm0-50.5a16.839 16.839 0 0 1 15.552 10.392 16.83 16.83 0 0 1-12.268 22.952 16.83 16.83 0 0 1-17.281-7.159 16.83 16.83 0 0 1-2.837-9.352 16.852 16.852 0 0 1 16.834-16.832z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M45.584 373.833h16.834v117.833a8.415 8.415 0 0 0 8.416 8.418h323.19a58.862 58.862 0 0 0 56.022 2.517 58.874 58.874 0 0 0 32.716-45.547 33.717 33.717 0 0 0 25.739-32.72v-33.666c-.01-8.926-3.56-17.484-9.872-23.795s-14.87-9.862-23.795-9.873h-25.25V37.167a8.42 8.42 0 0 0-8.418-8.416h-126.25V11.917a8.417 8.417 0 0 0-8.418-8.417h-101a8.417 8.417 0 0 0-8.417 8.417v16.834H70.831a8.417 8.417 0 0 0-8.416 8.416v252.5H45.581a42.088 42.088 0 0 0-42.084 42.084 42.083 42.083 0 0 0 42.084 42.082zm404 0h25.25a16.852 16.852 0 0 1 16.832 16.834v33.666c-.003 3.127-.877 6.19-2.523 8.846s-4 4.803-6.797 6.199a59.087 59.087 0 0 0-32.764-43.015v-22.529zm-33.666-328.25h16.834v345.695a58.257 58.257 0 0 0-16.834 0V45.583zm8.416 361.917a42.08 42.08 0 0 1 38.88 25.978 42.093 42.093 0 0 1 2.396 24.315 42.09 42.09 0 0 1-33.065 33.065 42.084 42.084 0 0 1-50.294-41.276 42.13 42.13 0 0 1 42.083-42.083zM213.917 20.333h84.167v16.833h-84.167V20.333zm-100.999 25.25h84.167A8.417 8.417 0 0 0 205.502 54h100.999a8.417 8.417 0 0 0 8.418-8.417h84.167v350.779a58.98 58.98 0 0 0-33.667 53.22h-252.5v-404zm-33.667 0h16.834V458a8.415 8.415 0 0 0 8.417 8.418h263.379a58.734 58.734 0 0 0 8.146 16.833H79.251V45.585zM45.584 306.5h16.834V357H45.584a25.247 25.247 0 0 1-25.25-25.25 25.245 25.245 0 0 1 25.25-25.25z"
                      />
                    </svg>
                  </div>
                  <span className="Process-no bg-black text-white rounded-circle">
                    05
                  </span>
                </span>
              </div>
              <h2 className="font-size-20">On-Time Reports</h2>
              <p>
                Our verified labs understand your anxiety and ensure reporting as
                per promised commitment. Or your money back!
              </p>
            </div>
            <div className="Process text-center mb-5 col-lg-4 col-md-12 col-sm-12">
              <div className="Process-icon-card mb-5 pb-4">
                <span className="Icon d-flex justify-content-center">
                  <div className="w-55-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      viewBox="0 0 1024 1024"
                      className="img-fluid"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M938.664 102.397h-34.128c-9.428 0-17.072 7.641-17.072 17.067v68.266c0 47.129-38.203 85.334-85.328 85.334-47.133 0-85.336-38.205-85.336-85.334v-68.266c0-9.426-7.641-17.067-17.066-17.067H614.4c-9.426 0-17.066 7.641-17.066 17.067v68.266c0 47.129-38.205 85.334-85.334 85.334s-85.334-38.205-85.334-85.334v-68.266c0-9.426-7.641-17.067-17.066-17.067h-85.334c-9.425 0-17.066 7.641-17.066 17.067v68.266c0 47.129-38.205 85.334-85.334 85.334s-85.333-38.205-85.333-85.334v-68.266c0-9.426-7.641-17.067-17.067-17.067H85.333c-47.105.056-85.277 38.229-85.334 85.334v750.933c.056 47.104 38.228 85.277 85.334 85.336h853.33c47.104-.059 85.277-38.232 85.336-85.336V187.731c-.059-47.105-38.232-85.277-85.336-85.334zM85.335 136.531h17.066v51.2c0 65.98 53.487 119.467 119.466 119.467s119.467-53.487 119.467-119.467v-51.2h51.2v51.2c0 65.98 53.486 119.467 119.466 119.467s119.466-53.487 119.466-119.467v-51.2h51.2v51.2c0 65.98 53.487 119.467 119.469 119.467 65.975 0 119.464-53.487 119.464-119.467v-51.2h17.064c28.277 0 51.2 22.923 51.2 51.2v187.734H34.133V187.731c0-28.277 22.923-51.2 51.2-51.2zm853.329 853.332H768v-85.328c0-9.428-7.643-17.072-17.064-17.072-9.428 0-17.072 7.643-17.072 17.072v85.328H290.133v-85.328c0-9.428-7.641-17.072-17.067-17.072S256 895.106 256 904.535v85.328H85.334c-28.277 0-51.2-22.923-51.2-51.2v-68.264h221.867c9.426 0 17.066-7.643 17.066-17.064 0-9.428-7.641-17.072-17.066-17.072H34.134V716.798h221.867v17.065c0 9.428 7.641 17.072 17.066 17.072s17.067-7.643 17.067-17.072v-17.065c9.425 0 17.066-7.641 17.066-17.067s-7.641-17.066-17.066-17.066v-17.067c0-9.425-7.641-17.066-17.067-17.066s-17.066 7.641-17.066 17.066v17.067H34.134V563.198h221.867c9.426 0 17.066-7.641 17.066-17.066s-7.641-17.067-17.066-17.067H34.134V409.599h221.867v85.333c0 9.426 7.641 17.067 17.066 17.067s17.067-7.641 17.067-17.067v-85.333h204.8c0 9.425 7.641 17.066 17.066 17.066s17.066-7.641 17.066-17.066h204.798v85.333c0 9.426 7.643 17.067 17.072 17.067 9.421 0 17.064-7.641 17.064-17.067v-85.333h221.864v119.466H768c-9.428 0-17.064 7.641-17.064 17.067s7.636 17.066 17.064 17.066h221.864v119.467H768v-17.067c0-9.425-7.643-17.066-17.064-17.066-9.428 0-17.072 7.641-17.072 17.066v17.067c-9.423 0-17.064 7.641-17.064 17.066s7.641 17.067 17.064 17.067v17.065c0 9.428 7.643 17.072 17.072 17.072 9.421 0 17.064-7.643 17.064-17.072v-17.065h221.864v119.465H768c-9.428 0-17.064 7.643-17.064 17.072 0 9.421 7.636 17.064 17.064 17.064h221.864v68.264c0 28.277-22.923 51.2-51.2 51.2z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M221.843 238.933c28.277 0 51.2-22.923 51.2-51.2V51.2c0-28.277-22.923-51.2-51.2-51.2s-51.199 22.923-51.199 51.2v136.533c0 28.277 22.923 51.2 51.199 51.2zM204.777 51.2c0-9.426 7.641-17.067 17.066-17.067S238.91 41.774 238.91 51.2v136.533c0 9.425-7.641 17.066-17.067 17.066s-17.066-7.641-17.066-17.066V51.2zM511.987 238.933c28.277 0 51.201-22.923 51.201-51.2V51.2c0-28.277-22.924-51.2-51.201-51.2s-51.201 22.923-51.201 51.2v136.533c0 28.277 22.924 51.2 51.201 51.2zM494.92 51.2c0-9.426 7.641-17.067 17.067-17.067s17.066 7.641 17.066 17.067v136.533c0 9.425-7.641 17.066-17.066 17.066s-17.067-7.641-17.067-17.066V51.2zM802.128 238.933c28.277 0 51.2-22.923 51.2-51.2V51.2c0-28.277-22.923-51.2-51.2-51.2s-51.2 22.923-51.2 51.2v136.533a51.223 51.223 0 0 0 14.994 36.204 51.201 51.201 0 0 0 36.206 14.996zM785.064 51.2c0-9.426 7.636-17.067 17.064-17.067s17.064 7.641 17.064 17.067v136.533c0 9.425-7.636 17.066-17.064 17.066s-17.064-7.641-17.064-17.066V51.2zM680.346 727.198l.444-2.304a154.432 154.432 0 0 0-.444-52.617l38.605-49.05a33.996 33.996 0 0 0 2.73-38.178l-5.512-9.54a33.844 33.844 0 0 0-34.424-16.726l-62.054 8.755a166.453 166.453 0 0 0-47.258-27.222l-23.227-58.027a33.997 33.997 0 0 0-31.693-21.487h-11.026a34.017 34.017 0 0 0-31.71 21.453l-23.398 58.027a166.82 166.82 0 0 0-47.087 27.495l-62.037-8.943a33.996 33.996 0 0 0-34.406 16.708l-5.53 9.558a33.996 33.996 0 0 0 2.73 38.178l38.486 49.29a166.557 166.557 0 0 0 .119 54.614l-38.605 49.053c-8.67 10.957-9.747 26.112-2.714 38.195l5.495 9.501a33.885 33.885 0 0 0 34.441 16.742l62.038-8.755a166.364 166.364 0 0 0 47.258 27.224l23.227 58.024c5.138 13.005 17.712 21.541 31.693 21.504h11.026a34.005 34.005 0 0 0 31.71-21.453l23.398-58.024a166.674 166.674 0 0 0 47.087-27.494l62.037 8.945a33.919 33.919 0 0 0 34.424-16.713l5.512-9.552a34 34 0 0 0-2.73-38.181l-38.605-49zm6.246 79.72-61.952-8.945a34.15 34.15 0 0 0-26.47 7.526c-31.42 25.702-48.384 18.556-57.344 40.96l-23.313 58.083h-11.026L483.26 846.51a34.307 34.307 0 0 0-19.712-19.149c-35.84-13.648-37.957-29.711-59.443-29.711-3.277 0 1.075-.497-66.714 9.267l-5.513-9.523 38.622-49.086a34.552 34.552 0 0 0 6.742-26.759c-6.4-39.902 8.311-51.201-6.826-70.384l-38.554-49.05 5.546-9.558 62.038 8.943a34.395 34.395 0 0 0 26.47-7.526c31.419-25.703 48.384-18.552 57.344-40.961l23.227-58.078h11.026l23.227 58.027a34.304 34.304 0 0 0 19.712 19.149c36.506 13.91 40.431 32.837 64.12 29.372l62.02-8.942 5.53 9.54-38.622 49.084a34.546 34.546 0 0 0-6.742 26.744c6.519 40.738-8.243 51.201 6.826 70.385l38.605 49.05-5.598 9.574z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M511.971 597.332c-56.553 0-102.399 45.847-102.399 102.401s45.846 102.401 102.399 102.401c56.554 0 102.4-45.846 102.4-102.401-.056-56.531-45.869-102.345-102.4-102.401zm0 170.667c-37.702 0-68.266-30.566-68.266-68.266 0-37.704 30.564-68.268 68.266-68.268s68.266 30.564 68.266 68.268c0 37.699-30.563 68.266-68.266 68.266z"
                      />
                    </svg>
                  </div>
                  <span className="Process-no bg-black text-white rounded-circle">
                    06
                  </span>
                </span>
              </div>
              <h2 className="font-size-20">Easy Access to Reports</h2>
              <p>
                Access all your reports, from any lab, on Flebo.in forever at
                anytime and from anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="press_coverage_sec" className="bg-exlight-grey row">
        <div className="my-5 container">
          <div className="row">
            <div className="text-left pb-0 col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="text-uppercase small-heading mb-0">Media</h5>
                  <h2 className="mt-4 mb-5 mb-sm-3 w-100 font-semiBold">
                    Press Coverage
                  </h2>
                </div>
                <a
                  href="/health/press-coverages/"
                  target="_blank"
                  className="font-size-18 font-bold align-self-center"
                >
                  View All
                </a>
              </div>
              <div className="slider-items mt-4">
                {" "}
                <div className="owl-carousel owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: 2220
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{ width: 340, marginRight: 30 }}
                      >
                        <div className="fullHeight pl-1">
                          <div className="bg-white rounded-5 border p-3 fullHeight justify-content-between flex-nowrap flex-column d-flex">
                            <p className="font-size-18 font-semiBold text-black">
                              <a
                                href="https://www.linkedin.com/posts/yourstory-com_taking-pain-out-of-prevention-less-painful-activity-6998985701857918976-XePE?utm_source=share&utm_medium=member_android"
                                target="_blank"
                                rel="noindex nofollow"
                                className="font-size-18 font-semiBold text-black red-hover mb-0"
                              >
                                Taking pain out of prevention
                              </a>
                            </p>
                            <div className="d-flex align-items-end">
                              <span className="w-100 text-left font-size-12 font-semilight">
                                November 18, 2022
                              </span>
                              <span className="w-100 text-right font-size-12 font-semilight">
                                Linkedin
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: 340, marginRight: 30 }}
                      >
                        <div className="fullHeight pl-1">
                          <div className="bg-white rounded-5 border p-3 fullHeight justify-content-between flex-nowrap flex-column d-flex">
                            <p className="font-size-18 font-semiBold text-black">
                              <a
                                href="https://inc42.com/startups/30-startups-to-watch-startups-that-caught-our-eye-in-october-2022/"
                                target="_blank"
                                rel="noindex nofollow"
                                className="font-size-18 font-semiBold text-black red-hover mb-0"
                              >
                                30 Startups To Watch: Startups That Caught Our Eye
                                In October 2022
                              </a>
                            </p>
                            <div className="d-flex align-items-end">
                              <span className="w-100 text-left font-size-12 font-semilight">
                                November 5, 2022
                              </span>
                              <span className="w-100 text-right font-size-12 font-semilight">
                                inc42
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: 340, marginRight: 30 }}
                      >
                        <div className="fullHeight pl-1">
                          <div className="bg-white rounded-5 border p-3 fullHeight justify-content-between flex-nowrap flex-column d-flex">
                            <p className="font-size-18 font-semiBold text-black">
                              <a
                                href="https://www.financialexpress.com/lifestyle/health/helping-consumers-test-the-worth-of-diagnostic-offerings/2647540/"
                                target="_blank"
                                rel="noindex nofollow"
                                className="font-size-18 font-semiBold text-black red-hover mb-0"
                              >
                                FLEBO.IN: Helping consumers test the worth of
                                diagnostic offerings
                              </a>
                            </p>
                            <div className="d-flex align-items-end">
                              <span className="w-100 text-left font-size-12 font-semilight">
                                August 29, 2022
                              </span>
                              <span className="w-100 text-right font-size-12 font-semilight">
                                FINANCIAL EXPRESS
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: 340, marginRight: 30 }}
                      >
                        <div className="fullHeight pl-1">
                          <div className="bg-white rounded-5 border p-3 fullHeight justify-content-between flex-nowrap flex-column d-flex">
                            <p className="font-size-18 font-semiBold text-black">
                              <a
                                href="https://timesapplaud.com/spicejets-md-ajay-singh-backs-healthcare-startup-flebo/"
                                target="_blank"
                                rel="noindex nofollow"
                                className="font-size-18 font-semiBold text-black red-hover mb-0"
                              >
                                SpiceJet’s MD Ajay Singh backs healthcare startup
                                Flebo
                              </a>
                            </p>
                            <div className="d-flex align-items-end">
                              <span className="w-100 text-left font-size-12 font-semilight">
                                April 19, 2022
                              </span>
                              <span className="w-100 text-right font-size-12 font-semilight">
                                Times Applaud
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: 340, marginRight: 30 }}
                      >
                        <div className="fullHeight pl-1">
                          <div className="bg-white rounded-5 border p-3 fullHeight justify-content-between flex-nowrap flex-column d-flex">
                            <p className="font-size-18 font-semiBold text-black">
                              <a
                                href="https://economictimes.indiatimes.com/tech/funding/spicejet-promoter-ajay-singh-invests-in-healthcare-startup-flebo/articleshow/90915764.cms?from=mdr"
                                target="_blank"
                                rel="noindex nofollow"
                                className="font-size-18 font-semiBold text-black red-hover mb-0"
                              >
                                SpiceJet promoter Ajay Singh invests in healthcare
                                startup Flebo
                              </a>
                            </p>
                            <div className="d-flex align-items-end">
                              <span className="w-100 text-left font-size-12 font-semilight">
                                April 18, 2022
                              </span>
                              <span className="w-100 text-right font-size-12 font-semilight">
                                The Economic Times
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: 340, marginRight: 30 }}
                      >
                        <div className="fullHeight pl-1">
                          <div className="bg-white rounded-5 border p-3 fullHeight justify-content-between flex-nowrap flex-column d-flex">
                            <p className="font-size-18 font-semiBold text-black">
                              <a
                                href="https://www.business-standard.com/article/companies/spicejet-s-ajay-singh-starts-healthcare-and-diagnostics-platform-flebo-122041800726_1.html"
                                target="_blank"
                                rel="noindex nofollow"
                                className="font-size-18 font-semiBold text-black red-hover mb-0"
                              >
                                SpiceJet's Ajay Singh starts healthcare and
                                diagnostics platform Flebo
                              </a>
                            </p>
                            <div className="d-flex align-items-end">
                              <span className="w-100 text-left font-size-12 font-semilight">
                                April 18, 2022
                              </span>
                              <span className="w-100 text-right font-size-12 font-semilight">
                                Business Standard
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev disabled"
                    >
                      <span aria-label="Previous">‹</span>
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                      <span aria-label="Next">›</span>
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-section" className="pt-5 row" style={{}}>
        <div className="my-3 container">
          <div className="justify-content-end row">
            <div className="text-center col-lg-6 col-12">
              <img
                loading="lazy"
                src="https://img.flebo.in/assets/images/about-phlebotomist-01.png"
                alt="About Us"
                className="img-fluid w-75"
              />
            </div>
            <div className="z-index-1 col-lg-6 col-12">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-uppercase small-heading mb-0 mt-3">
                    About Us
                  </h2>
                  <h2 className="mt-4 mb-5">
                    Customer Centric Committed Phlebotomist Team
                  </h2>
                  <p>
                    Flebo.in is the first-of-its-kind disruptively innovative idea
                    in the field of Phlebotomy. The ethos of Flebo.in is an
                    amalgamation of the science of phlebotomy &amp; the art of
                    customer service.
                  </p>
                  <p>
                    Flebo.in software is optimized for customer satisfaction and
                    ensures on time home collection. Guaranteed. We enable you to
                    book your test from the choice of your lab, at your preferred
                    place and on a chosen date and time.
                  </p>
                  <p>Our services are just a call or click away!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-exlight-grey row" style={{}}>
        <div className="mb-5 container">
          <div className="row">
            <div className="text-center mt-5 mb-4 col-lg-12">
              <h2 className="mt-4 mb-3">What Our Customers Say</h2>
              <div className="mb-5">
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="owl-carousel owl-theme owl-loaded owl-drag"
                id="Testimonials"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 2960
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "463.333px", marginRight: 30 }}
                    >
                      <div className="item">
                        <img
                          loading="lazy"
                          src="https://img.flebo.in/assets/images/icon-quote-left.png"
                          alt="quote"
                          className="quote-icon"
                        />
                        <div className="row">
                          <div className="text-center col-auto pr-0 col">
                            <img
                              loading="lazy"
                              src="https://img.flebo.in/assets/images/male-avatar-user.jpg"
                              alt="Sahnawaz khan"
                              className="user-img"
                            />
                          </div>
                          <div className="col-auto col">
                            <span className="user-name d-block mb-2">
                              Sahnawaz khan
                            </span>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-block my-4 pt-2">
                              <span className="border-top d-block" />
                            </div>
                            <p>
                              Everything was so perfect, I do not see the need of
                              any further improvement. Thank you Flebo.in
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "463.333px", marginRight: 30 }}
                    >
                      <div className="item">
                        <img
                          loading="lazy"
                          src="https://img.flebo.in/assets/images/icon-quote-left.png"
                          alt="quote"
                          className="quote-icon"
                        />
                        <div className="row">
                          <div className="text-center col-auto pr-0 col">
                            <img
                              loading="lazy"
                              src="https://img.flebo.in/assets/images/male-avatar-user.jpg"
                              alt="Hariom Kaushik"
                              className="user-img"
                            />
                          </div>
                          <div className="col-auto col">
                            <span className="user-name d-block mb-2">
                              Hariom Kaushik
                            </span>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-block my-4 pt-2">
                              <span className="border-top d-block" />
                            </div>
                            <p>
                              Flebo Kuhi Tara was properly dressed, well mannered
                              and professional. I wish her good luck. Continue the
                              good service.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "463.333px", marginRight: 30 }}
                    >
                      <div className="item">
                        <img
                          loading="lazy"
                          src="https://img.flebo.in/assets/images/icon-quote-left.png"
                          alt="quote"
                          className="quote-icon"
                        />
                        <div className="row">
                          <div className="text-center col-auto pr-0 col">
                            <img
                              loading="lazy"
                              src="https://img.flebo.in/assets/images/female-avatar-user.jpg"
                              alt="Neelam Seth"
                              className="user-img"
                            />
                          </div>
                          <div className="col-auto col">
                            <span className="user-name d-block mb-2">
                              Neelam Seth
                            </span>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-block my-4 pt-2">
                              <span className="border-top d-block" />
                            </div>
                            <p>
                              I am very impressed with the services. Flebo Joginder
                              was very nice and courteous. He did his task
                              efficiently and arrived perfectly on time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "463.333px", marginRight: 30 }}
                    >
                      <div className="item">
                        <img
                          loading="lazy"
                          src="https://img.flebo.in/assets/images/icon-quote-left.png"
                          alt="quote"
                          className="quote-icon"
                        />
                        <div className="row">
                          <div className="text-center col-auto pr-0 col">
                            <img
                              loading="lazy"
                              src="https://img.flebo.in/assets/images/male-avatar-user.jpg"
                              alt="Vijendra"
                              className="user-img"
                            />
                          </div>
                          <div className="col-auto col">
                            <span className="user-name d-block mb-2">Vijendra</span>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-block my-4 pt-2">
                              <span className="border-top d-block" />
                            </div>
                            <p>
                              After so many blood tests, this was probably the best
                              and perfect prick during my blood collection. Flebo
                              Mukesh collected my blood painlessly in a single shot.
                              Thank you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "463.333px", marginRight: 30 }}
                    >
                      <div className="item">
                        <img
                          loading="lazy"
                          src="https://img.flebo.in/assets/images/icon-quote-left.png"
                          alt="quote"
                          className="quote-icon"
                        />
                        <div className="row">
                          <div className="text-center col-auto pr-0 col">
                            <img
                              loading="lazy"
                              src="https://img.flebo.in/assets/images/male-avatar-user.jpg"
                              alt="Zober Alam Khan"
                              className="user-img"
                            />
                          </div>
                          <div className="col-auto col">
                            <span className="user-name d-block mb-2">
                              Zober Alam Khan
                            </span>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-block my-4 pt-2">
                              <span className="border-top d-block" />
                            </div>
                            <p>
                              I am glad to choose your services. Flebo Sourabh was
                              well behaved, good in communication and technically
                              sound. Thank you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "463.333px", marginRight: 30 }}
                    >
                      <div className="item">
                        <img
                          loading="lazy"
                          src="https://img.flebo.in/assets/images/icon-quote-left.png"
                          alt="quote"
                          className="quote-icon"
                        />
                        <div className="row">
                          <div className="text-center col-auto pr-0 col">
                            <img
                              loading="lazy"
                              src="https://img.flebo.in/assets/images/male-avatar-user.jpg"
                              alt="Sahnawaz khan"
                              className="user-img"
                            />
                          </div>
                          <div className="col-auto col">
                            <span className="user-name d-block mb-2">
                              Sahnawaz khan
                            </span>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-block my-4 pt-2">
                              <span className="border-top d-block" />
                            </div>
                            <p>
                              Everything was so perfect, I do not see the need of
                              any further improvement. Thank you Flebo.in
                            </p>
                          </div>
                        </div>
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
                <div className="owl-dots">
                  <button role="button" className="owl-dot active">
                    <span />
                  </button>
                  <button role="button" className="owl-dot">
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="information-about-tests" className="row" style={{}}>
        <div className="my-5 container">
          <div className="justify-content-center row">
            <div className="text-center pb-0 col-lg-12">
              <h2 className="text-uppercase small-heading mb-0">
                Information about Tests
              </h2>
              <h2 className="mt-4 mb-5 mb-sm-3">
                Important Organs and Their Tests
              </h2>
              <p>Some Tips</p>
            </div>
          </div>
          <nav
            className="mb-3 border-0 justify-content-center pb-5 nav nav-tabs"
            role="tablist"
          >
            <a
              id="uncontrolled-tab-example-tab-testsForVitals"
              href="#"
              role="tab"
              data-rb-event-key="testsForVitals"
              aria-controls="uncontrolled-tab-example-tabpane-testsForVitals"
              aria-selected="true"
              className="nav-item nav-link active"
            >
              Tests for Vitals
            </a>
            <a
              id="uncontrolled-tab-example-tab-wellnessTests"
              href="#"
              role="tab"
              data-rb-event-key="wellnessTests"
              aria-controls="uncontrolled-tab-example-tabpane-wellnessTests"
              aria-selected="false"
              className="nav-item nav-link"
            >
              Wellness Tests
            </a>
          </nav>
          <div className="tab-content">
            <div
              id="uncontrolled-tab-example-tabpane-testsForVitals"
              aria-labelledby="uncontrolled-tab-example-tab-testsForVitals"
              role="tabpanel"
              aria-hidden="false"
              className="fade tab-pane active show"
            >
              <div className="mt-5 row">
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M512 184.787c0 15.351-2.404 30.554-7.214 45.229-23.731 106.68-228.811 236.582-237.522 242.026-1.816 1.156-3.89 1.705-5.954 1.705-2.078 0-4.142-.546-5.969-1.705-4.16-2.602-102.517-64.757-172.274-138.4-4.228-4.479-4.052-11.586.448-15.799 4.501-4.221 11.571-4.045 15.824.456 58.228 61.498 139.484 116.284 161.973 130.996C295.25 427.089 463.375 313.189 483.24 224.12c4.329-13.473 6.382-26.322 6.382-39.307 0-45.183-24.606-86.847-64.212-108.798-18.315-10.053-39.031-15.397-59.923-15.397-37.064 0-71.899 16.359-95.59 44.934-2.142 2.555-5.279 4.052-8.61 4.052-3.309 0-6.489-1.454-8.607-4.052-23.745-28.555-58.616-44.934-95.669-44.934-20.859 0-41.586 5.323-59.959 15.397-39.587 21.904-64.186 63.612-64.186 108.772 0 12.96 2.068 25.809 6.141 38.245 2.613 11.636 7.824 23.537 14.873 35.991h74.906l23.975-40.136a11.135 11.135 0 0 1 9.396-5.43c3.464-.448 7.476 1.834 9.594 5.103l39.228 60.414 43.707-118.133a11.181 11.181 0 0 1 10.48-7.322h.022c4.67 0 8.865 2.907 10.48 7.3l36.604 98.2h64.8c6.188 0 11.187 5.024 11.187 11.19a11.166 11.166 0 0 1-11.187 11.187h-72.603a11.239 11.239 0 0 1-10.512-7.253l-28.726-77.254-40.954 110.825a11.118 11.118 0 0 1-9.267 7.214c-.427.046-.829.086-1.234.086-3.757 0-7.311-1.923-9.396-5.115l-41.601-64.075-18.02 30.159c-2.013 3.366-5.66 5.462-9.594 5.462H11.189c-6.176.003-11.191-5.021-11.191-11.187 0-6.205 5.014-11.187 11.191-11.187H28.42c-5.082-10.447-8.861-20.554-10.971-30.105-4.511-13.606-6.959-28.827-6.959-44.16 0-53.3 29.035-102.484 75.757-128.383 21.7-11.909 46.144-18.171 70.761-18.171 39.447 0 76.773 15.713 104.254 43.503 27.471-27.79 64.753-43.502 104.201-43.502 24.675 0 49.062 6.263 70.765 18.171C483.043 82.29 512 131.507 512 184.786z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h2 className="font-semiBold mt-0 font-size-20">
                          <a
                            target="_blank"
                            href="/health/delhi/heart-tests-in-delhi/"
                          >
                            Heart
                          </a>
                        </h2>
                        <p>
                          The heart is a muscular organ that is situated at the
                          centre of the chest, slightly tilted towards the left.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M42.748 511.999c-.307 0-.614 0-.93-.009-12.817-.214-23.338-16.486-25.011-38.69-.964-12.68-3.447-24.968-6.075-37.99-2.347-11.622-4.77-23.646-5.999-35.925-5.385-53.913-8.26-117.647 11.281-181.62a303.157 303.157 0 0 1 3.524-10.811c8.021-23.184 16.938-40.788 28.074-55.398 28.85-37.87 78.736-54.459 152.505-50.55 25.881 1.357 67.139 6.989 91.962 12.57 22.98 5.154 46.813 6.989 70.843 5.436 35.174-2.278 75.356-12.373 97.714-24.55 13.082-7.117 28.654-5.18 39.663 4.966 10.76 9.915 13.917 24.917 8.029 38.22-7.834 17.707-24.49 39.287-49.526 64.135-6.971 6.929-16.085 16.127-24.721 25.779-23.039 25.77-106.648 114.149-215.207 169.409-21.837 11.11-43.818 18.764-65.347 22.733-22.186 4.087-52.283 16.666-69.733 53.307-.512 1.067-.904 2.646-1.442 4.471-3.02 10.351-10.078 34.517-39.602 34.517zM32.338 222.75c-18.662 61.089-15.837 122.716-10.616 174.938 1.143 11.435 3.482 23.031 5.743 34.252 2.611 12.954 5.316 26.342 6.357 40.08 1.092 14.43 6.587 22.169 8.696 22.971 15.633-.034 19.728-9.54 23.457-22.306.785-2.697 1.468-5.026 2.415-7.023 21.623-45.422 60.688-58.811 82.047-62.753 19.908-3.678 40.337-10.794 60.705-21.154 105.923-53.913 187.687-140.362 210.232-165.569 8.935-9.984 18.278-19.413 25.421-26.504 23.517-23.347 38.971-43.178 45.942-58.93 3.498-7.901.231-14.874-3.985-18.764-4.42-4.07-11.972-6.869-19.942-2.526-28.518 15.522-73.172 24.541-104.779 26.59-25.659 1.638-51.123-.307-75.681-5.82-24.055-5.401-64.033-10.863-89.12-12.177-68.675-3.626-112.519 10.342-138.032 43.852-10.001 13.124-18.108 29.218-25.514 50.636a250.032 250.032 0 0 0-3.345 10.206z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M59.03 426.659a8.526 8.526 0 0 1-8.371-6.885c-.145-.743-.426-1.979-.802-3.635-3.9-17.416-15.77-70.408-7.731-110.607.922-4.616 5.427-7.62 10.044-6.69a8.522 8.522 0 0 1 6.69 10.043c-4.428 22.127-2.688 52.957 5.145 91.749 29.994-28.023 64.195-37 78.685-39.671 17.058-3.149 35.148-11.648 49.006-18.688 4.198-2.142 9.335-.469 11.477 3.738 2.133 4.199.461 9.336-3.738 11.477-14.882 7.577-34.423 16.716-53.648 20.267-14.592 2.688-51.626 12.561-80.281 45.951a8.6 8.6 0 0 1-6.477 2.952zM59.03 247.462a8.427 8.427 0 0 1-2.791-.478c-4.455-1.536-6.818-6.4-5.273-10.854 6.34-18.321 22.118-47.606 30.583-58.726 17.032-22.365 46.933-32.341 96.946-32.341 4.71 0 8.533 3.823 8.533 8.533s-3.823 8.533-8.533 8.533c-44.16 0-69.87 7.901-83.37 25.617-7.561 9.933-22.28 37.333-28.032 53.972-1.22 3.532-4.531 5.743-8.064 5.743zM272.359 93.865a8.536 8.536 0 0 1-8.533-8.533c0-23.526-19.14-42.666-42.666-42.666-4.71 0-8.533-3.823-8.533-8.533s3.823-8.533 8.533-8.533c32.938 0 59.733 26.794 59.733 59.733a8.536 8.536 0 0 1-8.533 8.533zM306.492 93.865c-4.711 0-8.533-3.823-8.533-8.533s3.823-8.533 8.533-8.533c23.526 0 42.666-19.14 42.666-42.666 0-4.71 3.823-8.533 8.533-8.533s8.533 3.823 8.533 8.533c0 32.938-26.803 59.733-59.733 59.733zM306.483 341.327a8.507 8.507 0 0 1-5.666-2.151 8.534 8.534 0 0 1-.709-12.049c62.591-70.416 18.509-131.718 16.606-134.295-2.799-3.78-2.022-9.122 1.75-11.929a8.52 8.52 0 0 1 11.921 1.715c.555.734 54.553 74.785-17.519 155.858a8.542 8.542 0 0 1-6.383 2.85z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M306.492 133.468c-.443 0-.879-.034-1.322-.102-5.632-.887-11.255-1.886-16.836-3.14-5.163-1.161-11.153-2.313-17.468-3.43a8.53 8.53 0 0 1-7.04-8.397V25.6c0-14.114 11.486-25.599 25.599-25.599s25.599 11.486 25.599 25.599v99.335a8.541 8.541 0 0 1-2.986 6.485 8.557 8.557 0 0 1-5.546 2.048zm-14.413-19.891c1.954.435 3.916.845 5.88 1.229V25.6c0-4.702-3.823-8.533-8.533-8.533s-8.533 3.831-8.533 8.533v85.682c3.985.751 7.757 1.519 11.187 2.296zM246.76 511.99c-14.114 0-25.6-11.486-25.6-25.599V381.509a8.512 8.512 0 0 1 4.438-7.483c11.067-6.05 22.391-12.748 33.655-19.891 2.628-1.673 5.956-1.775 8.687-.273s4.42 4.369 4.42 7.475V486.39c0 14.114-11.486 25.599-25.6 25.599zm-8.534-125.446v99.847c0 4.702 3.823 8.533 8.533 8.533s8.533-3.832 8.533-8.533V376.637a618.844 618.844 0 0 1-17.066 9.907zM118.122 124.644a8.54 8.54 0 0 1-7.023-3.686c-8.021-11.622-21.103-18.559-35.003-18.559h-8.533c-14.114 0-25.599-11.486-25.599-25.599S53.45 51.201 67.563 51.201h8.533c36.761 0 70.322 21.709 85.494 55.312a8.542 8.542 0 0 1-7.049 12.015c-12.364 1.058-23.859 3.02-34.167 5.82a8.51 8.51 0 0 1-2.253.299zM67.563 68.266c-4.71 0-8.533 3.832-8.533 8.533s3.823 8.533 8.533 8.533h8.533c17.501 0 34.056 7.808 45.371 21.128 5.965-1.416 12.237-2.585 18.756-3.498-14.054-21.392-38.118-34.696-64.127-34.696zM400.356 401.059h-17.067c-40.046 0-75.707-25.48-88.719-63.41a8.53 8.53 0 0 1 3.029-9.651 779.085 779.085 0 0 0 29.371-22.63 8.55 8.55 0 0 1 8.678-1.229 8.516 8.516 0 0 1 5.18 7.074c2.057 22.041 20.309 38.656 42.461 38.656h17.067c14.114 0 25.599 11.486 25.599 25.599s-11.486 25.591-25.599 25.591zm-87.413-63.188c12.117 27.818 39.654 46.122 70.347 46.122h17.067c4.711 0 8.533-3.832 8.533-8.533s-3.823-8.533-8.533-8.533H383.29c-25.975 0-48.127-16.324-56.327-39.756a780.9 780.9 0 0 1-14.02 10.7z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h2 className="font-semiBold mt-0 font-size-20">
                          <a
                            target="_blank"
                            href="/health/delhi/liver-tests-in-delhi/"
                          >
                            Liver
                          </a>
                        </h2>
                        <p>
                          The liver is one of the essential body organs as it holds
                          up to 13% of the overall blood supply of the body at any
                          given time of the day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M15.761 443.771a7.497 7.497 0 0 0 5.238-9.223c-9.922-36.039-7.64-91.066 6.973-168.226 9.601-50.699 25.07-94.566 45.981-130.387 15.028-25.742 32.461-46.793 51.82-62.574 12.321-10.047 29.769-10.211 42.434-.394 9.488 7.352 14.363 18.918 13.035 30.933-2.726 24.738-1.582 60.8 18.481 94.777a375.948 375.948 0 0 1-9.149 10.836l-.024.028c-7.332 8.429-15.117 16.414-23.016 24.313-1.934 1.934-24.847 23.961-25.414 23.395-5.465-5.531-11.847-12.571-18.144-20.836.09-7.125.785-28.41 5.688-42.574a7.497 7.497 0 0 0-4.636-9.539 7.497 7.497 0 0 0-9.539 4.633c-2.805 8.097-4.406 17.832-5.32 26.554-5.215-9.316-9.68-19.504-12.567-30.332-1.07-4-5.18-6.383-9.18-5.313a7.5 7.5 0 0 0-5.317 9.179c3.805 14.274 10.023 27.465 17.133 39.175-9.797-.961-22.086-.711-33.32 3.762a7.496 7.496 0 0 0-4.191 9.742c1.5 3.778 5.968 5.699 9.742 4.196 14.871-5.922 33.398-2.012 39.578-.418 6.43 8.446 12.918 15.679 18.563 21.461a146.6 146.6 0 0 0-8.313 7.375c-10.883 10.43-20.453 22.793-28.644 36.992-10.5-8.785-23.766-22.32-28.871-37.879a7.5 7.5 0 0 0-14.253 4.68c2.148 6.543 5.352 12.699 9.168 18.414-6.477.918-14.285 2.75-21.941 6.356a7.493 7.493 0 0 0-3.593 9.976c1.734 3.692 6.289 5.332 9.98 3.594 10.516-4.945 21.742-5.719 26.894-5.789 5.063 5.383 10.422 10.149 15.504 14.223a227.79 227.79 0 0 0-8.972 21.461c-3.66 10.164-6.5 20.113-8.707 29.469a119.058 119.058 0 0 0-7.761-2.051c-2.133-3.801-5.984-11.723-6.847-20.719-.395-4.121-4.054-7.149-8.18-6.75a7.501 7.501 0 0 0-6.754 8.18c.605 6.324 2.277 12.133 4.133 16.938-5.153-.152-10.359.207-15.425 1.328a7.502 7.502 0 0 0 3.242 14.648c11.371-2.519 24.23-.058 34.524 3.172a297.607 297.607 0 0 0-3.504 25.285c-1.035 10.953 7.188 21.265 18.238 22.14 9.715.769 19.097-6.188 21.129-15.735a240.113 240.113 0 0 1 2.367-10c7.977 7.129 16.93 17.098 20.613 28.313 1.269 3.875 5.597 6.058 9.465 4.789a7.5 7.5 0 0 0 4.785-9.469c-1.617-4.922-3.934-9.582-6.691-13.953 5.071-.851 10.906-2.379 16.641-5.078 3.75-1.762 5.356-6.231 3.594-9.981a7.503 7.503 0 0 0-9.981-3.594c-8.168 3.848-16.898 4.578-21.273 4.68-4.106-4.32-8.422-8.156-12.528-11.453 6.492-19.785 17.386-44.933 35.102-67.543a145.102 145.102 0 0 0 8.063 11.113c-1.039 8.481-2.899 30.918 3.571 48.86 1.383 3.836 5.774 5.89 9.601 4.512 3.894-1.406 5.918-5.703 4.512-9.598-3.262-9.051-3.906-19.957-3.715-28.742 5.5 5.078 11.715 9.942 18.734 14.277 3.418 2.11 8.153 1.074 10.324-2.445a7.496 7.496 0 0 0-2.446-10.32c-18.449-11.39-30.781-27.031-38.418-39.543 3.188-3.371 6.535-6.652 10.09-9.797 19.078-16.879 34.898-28.149 47.609-37.207 1.191-.848 2.351-1.676 3.496-2.496 3.938 18.992 8.813 50.567 8.813 107.117 0 53.203-7.054 83.969-22.867 99.757-17.472 17.449-47.367 17.402-88.738 17.344-30.5 0-62.738-4.008-80.558-31.953a7.5 7.5 0 1 0-12.648 8.067c16.683 26.16 44.675 38.879 85.574 38.879 4.953 0 9.906.015 14.859.015 41.246 0 71.43-1.086 92.113-21.735 18.856-18.832 27.269-52.871 27.269-110.375 0-65.25-6.391-98.289-10.597-116.933 8.149-6.469 14.446-12.726 18.8-20.535 1.711-3.063 4.875-4.965 8.258-4.965h1.055c3.387 0 6.551 1.903 8.258 4.965 4.356 7.809 10.652 14.066 18.8 20.535-4.203 18.644-10.594 51.683-10.594 116.933 0 57.504 8.41 91.543 27.269 110.375 20.68 20.652 50.86 21.735 92.109 21.735 4.953 0 9.906-.015 14.86-.015 36.484 0 62.519-10.015 79.585-30.621 14.726-17.774 22.824-43.305 24.754-78.055 1.938-34.75-2.262-78.773-12.832-134.578-10.11-53.387-26.601-99.57-49.012-137.269a7.5 7.5 0 0 0-10.281-2.614 7.502 7.502 0 0 0-2.617 10.281c21.519 36.191 37.387 80.734 47.172 132.391 19.953 105.355 17.175 168.995-8.735 200.277-18.61 22.461-48.496 25.152-75.664 25.195-41.371.058-71.269.106-88.742-17.344-15.813-15.789-22.863-46.555-22.863-99.757 0-56.55 4.875-88.125 8.813-107.117 1.144.82 2.305 1.649 3.496 2.496 16.406 11.692 32.507 23.848 47.606 37.207a156.564 156.564 0 0 1 10.09 9.797c-7.633 12.508-19.965 28.152-38.418 39.543a7.5 7.5 0 0 0-2.442 10.32c2.144 3.476 6.848 4.59 10.32 2.445 7.027-4.336 13.242-9.207 18.75-14.289.192 8.769-.453 19.668-3.726 28.75-1.726 4.789 1.973 10.047 7.055 10.047a7.508 7.508 0 0 0 7.058-4.957c6.465-17.942 4.61-40.379 3.57-48.859a145.742 145.742 0 0 0 8.058-11.113c17.719 22.61 28.613 47.757 35.106 67.543-4.106 3.297-8.422 7.133-12.527 11.453-4.375-.101-13.101-.832-21.274-4.68a7.505 7.505 0 0 0-9.981 3.594c-1.762 3.75-.156 8.219 3.594 9.981 5.735 2.699 11.574 4.226 16.64 5.078-2.758 4.371-5.074 9.031-6.692 13.953a7.5 7.5 0 0 0 4.785 9.469c3.808 1.25 8.176-.86 9.465-4.789 3.683-11.215 12.637-21.183 20.613-28.313a238.52 238.52 0 0 1 2.367 10c0 .012.004.019.008.031 2.031 9.488 11.445 16.465 21.121 15.703 11.578-.914 19.242-11.902 18.152-22.992a298.634 298.634 0 0 0-3.418-24.433c10.289-3.231 23.152-5.692 34.524-3.172a7.501 7.501 0 0 0 8.942-5.703c.899-4.043-1.656-8.047-5.699-8.945-5.067-1.121-10.274-1.481-15.425-1.328 1.856-4.805 3.527-10.613 4.133-16.938a7.502 7.502 0 0 0-6.754-8.18c-4.129-.399-7.785 2.629-8.18 6.75-.863 9.015-4.707 16.914-6.848 20.719a120.889 120.889 0 0 0-7.762 2.047c-2.207-9.351-5.047-19.305-8.707-29.465-.683-1.899-9.235-21.254-8.973-21.461 5.086-4.078 10.445-8.848 15.512-14.231 5.121.051 16.277.808 26.887 5.797 3.625 1.707 8.219.152 9.981-3.594s.156-8.215-3.594-9.981c-7.656-3.601-15.465-5.433-21.942-6.351 3.817-5.715 7.019-11.871 9.164-18.414a7.498 7.498 0 0 0-4.785-9.465 7.498 7.498 0 0 0-9.465 4.785c-5.11 15.558-18.371 29.094-28.875 37.882-10.215-17.715-22.578-32.563-36.957-44.371 5.649-5.781 12.14-13.019 18.57-21.469 6.172-1.609 24.613-5.531 39.574.426 3.797 1.512 8.231-.394 9.742-4.196a7.5 7.5 0 0 0-4.195-9.742c-11.235-4.472-23.519-4.722-33.317-3.762 7.11-11.707 13.324-24.903 17.133-39.175a7.5 7.5 0 0 0-5.317-9.179 7.503 7.503 0 0 0-9.18 5.316c-2.887 10.824-7.351 21.016-12.567 30.328-.914-8.722-2.515-18.457-5.32-26.554a7.501 7.501 0 1 0-14.176 4.91c4.902 14.164 5.594 35.445 5.688 42.57-6.297 8.266-12.68 15.304-18.149 20.84-.168-.149-.344-.297-.512-.442-14.496-12.531-27.601-26.188-41.121-39.711-6.238-6.778-11.531-12.961-15.965-18.418 20.063-33.984 21.207-70.043 18.476-94.781-1.324-12.016 3.551-23.582 13.039-30.933 12.664-9.816 30.11-9.653 42.433.394 12.449 10.148 24.277 22.699 35.16 37.305a7.495 7.495 0 0 0 10.492 1.531 7.496 7.496 0 0 0 1.535-10.496c-11.617-15.59-24.305-29.039-37.707-39.968-17.765-14.48-42.89-14.738-61.106-.625-13.649 10.578-20.66 27.191-18.758 44.438 2.332 21.136 1.582 51.32-13.543 80.207-.57-.781-1.121-1.543-1.629-2.258-4.195-5.899-6.414-12.821-6.414-20.019V25.827c0-11.371-9.254-20.625-20.625-20.625h-35.211c-11.371 0-20.625 9.254-20.625 20.625v137.648c0 7.199-2.219 14.121-6.414 20.019-.508.715-1.059 1.476-1.629 2.258-15.121-28.887-15.875-59.07-13.543-80.207 1.903-17.246-5.109-33.859-18.758-44.438-18.215-14.113-43.339-13.855-61.102.625C95.539 78.654 76.938 101.072 61 128.373c-21.777 37.3-37.847 82.773-47.766 135.156-15.055 79.46-17.242 136.707-6.699 175.003a7.497 7.497 0 0 0 9.223 5.238zM223.549 192.19c6.016-8.449 9.191-18.379 9.191-28.715V25.827a5.628 5.628 0 0 1 5.625-5.621h35.211a5.629 5.629 0 0 1 5.625 5.621v137.648c0 10.336 3.176 20.266 9.188 28.715 12.688 17.832 27.363 34.25 42.824 49.707 15.64 15.64 33.461 28.894 49.234 44.402 41.425 40.738 51.726 104.097 54.262 130.804l.012.144c.258 2.723-1.664 5.551-4.492 5.777-.051.004-.101-.004-.152 0-2.418.117-4.61-1.527-5.113-3.899-1.594-7.496-3.301-15.226-5.883-22.453-10.582-29.219-22.305-56.774-42.332-81-19.05-23.043-43.597-40.598-67.774-57.824-10.981-7.828-24.36-15.816-31.121-27.934-9.265-16.617-34.488-16.644-43.769-.004-6.774 12.144-20.097 20.078-31.121 27.938-12.996 9.258-29.168 20.785-48.84 38.188-27.57 24.39-46.429 57.379-58.402 91.871-3.543 10.207-6.492 20.649-8.742 31.219-.516 2.422-2.778 4.098-5.269 3.899-2.836-.226-4.75-3.063-4.492-5.777.989-10.485 3.183-26.692 8.008-44.976 5.953-22.558 14.859-44.589 28.011-63.949 7.406-10.902 16.3-21.11 26.98-29.867 14.019-11.492 27.528-23.621 40.367-36.418 15.528-15.472 30.246-31.972 42.965-49.847z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h2 className="font-semiBold mt-0 font-size-20">
                          <a
                            target="_blank"
                            href="/health/delhi/lung-tests-in-delhi/"
                          >
                            Lungs
                          </a>
                        </h2>
                        <p>
                          The primary organ of the respiratory system, the human
                          lungs are located near the backbone, on either side of the
                          heart.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M387.143 407.2c-41.6 0-67.031-32.68-68.127-87.567-.52-26.4 3.952-74.552 39.776-101.007l9.496 12.864c-30.024 22.168-33.736 64.511-33.272 87.808.432 21.664 6.4 71.887 52.135 71.887h.544c23.591-1.596 44.267-12.874 58.288-29.852l.112-.14c44.728-49.712 51.647-112.887 49.599-157.135-2.144-45.983-13.688-83.567-34.304-111.712-24.464-33.384-63.087-52.08-98.536-47.696-7.688.952-26.512 4.736-35.016 19.2-3.033 6.103-4.808 13.291-4.808 20.894 0 3.958.481 7.804 1.388 11.483l-.068-.328c4.79 24.82 18.83 45.716 38.315 59.376l.3.2-9.096 13.176c-23.183-16.252-39.635-40.743-45.144-69.14l-.111-.692c-1.055-4.284-1.661-9.203-1.661-14.263 0-10.536 2.625-20.459 7.255-29.151l-.163.335c10.442-15.324 27.316-25.598 46.649-26.925l.19-.011c41.096-5.088 85.599 16.128 113.392 54.112 22.512 30.728 35.088 71.248 37.384 120.431 2.2 47.2-5.32 114.823-53.68 168.575-17.032 20.351-41.893 33.662-69.889 35.268l-.262.012z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M256 503.999h-16V221.162c0-.322.02-.639.06-.951l-.004.037c.064-.504 6.776-50.808 71.999-50.808 12.8 0 19.344-7.112 19.344-21.144h16c0 22.912-13.544 37.144-35.344 37.144-48.327 0-55.327 32.12-56.039 36.344z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M296 472h-16V243.026c0-19.533 15.835-35.368 35.368-35.368h.118-.006c22.128 0 35.352 15.464 35.352 41.36h-16c0-17.064-6.336-25.36-19.352-25.36-10.769.044-19.483 8.785-19.483 19.56l.003.354v-.018zM124.857 483.999h-.688c-28.26-1.63-53.118-14.944-70.026-35.142l-.126-.154C5.658 394.951-1.863 327.359.338 280.128c2.296-49.184 14.864-89.728 37.384-120.431 27.824-37.984 72.311-59.2 113.391-54.112 19.529 1.346 36.404 11.632 46.702 26.755l.137.213c4.469 8.359 7.093 18.284 7.093 28.821 0 5.061-.606 9.981-1.748 14.691l.087-.424c-5.624 29.085-22.076 53.572-44.904 69.59l-.351.233-9.096-13.176c19.784-13.858 33.824-34.751 38.521-58.978l.095-.589c.839-3.351 1.32-7.198 1.32-11.157a47.628 47.628 0 0 0-4.933-21.178l.125.28c-8.504-14.464-27.328-18.248-35.016-19.2-35.392-4.408-74.072 14.312-98.519 47.687-20.616 28.144-32.16 65.728-34.304 111.712-2.064 44.248 4.856 107.423 49.6 157.135 14.132 17.12 34.809 28.401 58.145 29.986l.254.014h.544c45.751 0 51.703-50.224 52.136-71.887.464-23.28-3.248-65.639-33.272-87.824l9.496-12.864c35.824 26.456 40.296 74.639 39.776 101.007-1.112 54.887-26.56 87.567-68.144 87.567z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M256 280h-16c0-13.92-25.064-16-40-16a36.3 36.3 0 0 1-.597.005c-20.934 0-37.904-16.97-37.904-37.904 0-.347.005-.694.014-1.04l-.001.051h16c-.01.244-.015.532-.015.82 0 12.19 9.882 22.072 22.072 22.072.151 0 .303-.001.454-.005H200c46.28 0 55.999 17.4 55.999 32zM232 503.999h-16V319.928c0-10.745-8.71-19.456-19.456-19.456h-.025.001c-13.024 0-19.352 8.296-19.352 25.36h-16c0-25.896 13.224-41.36 35.352-41.36h.201c19.417 0 35.171 15.687 35.279 35.078v.01zM369.736 273.2c-8.724-13.196-13.918-29.391-13.918-46.798 0-17.577 5.296-33.917 14.377-47.512l-.196.311 13.2 9c-7.077 10.781-11.287 23.994-11.287 38.191 0 14.066 4.134 27.168 11.253 38.155l-.166-.274zM136.056 361.92l-12.704-9.72c10.261-13.304 16.446-30.211 16.446-48.56 0-17.027-5.325-32.811-14.4-45.776l.171.257 13.16-9.112c10.685 15.249 17.075 34.189 17.075 54.621 0 22.028-7.427 42.322-19.913 58.513l.166-.224zM38.401 335.136c-2.096-11.214-3.294-24.117-3.294-37.3 0-44.585 13.712-85.968 37.148-120.161l-.47.726 13.216 9.024c-21.221 30.923-33.89 69.161-33.89 110.356 0 12.193 1.11 24.127 3.234 35.705l-.184-1.207zM469.063 249.665l-15.752-2.808c2.151-11.674 3.382-25.109 3.382-38.831 0-33.05-7.137-64.433-19.954-92.692l.573 1.411 14.592-6.544c13.131 28.778 20.786 62.417 20.786 97.846 0 14.707-1.319 29.105-3.845 43.084l.219-1.465zM283.712 150.401a41.778 41.778 0 0 1-20.885-5.078l.22.109c-15.296-8.528-23.048-27.032-23.048-54.928V8h16v82.504c0 21.664 4.984 35.448 14.824 40.944 15.296 8.56 41.464-3.552 50.248-8.944l8.4 13.6c-13.084 8.035-28.716 13.21-45.466 14.281l-.294.015z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M205.768 205.361a25.557 25.557 0 0 1-18.16-8.269l-.017-.018 11.312-11.312c1.669 2.219 4.298 3.639 7.257 3.639a9.035 9.035 0 0 0 6.774-3.046l.008-.01c6.768-5.441 11.064-13.719 11.064-23 0-.233-.002-.466-.008-.698v.035-18.68c0-19.712 24.744-36.8 27.56-38.656l8.888 13.312c-6.672 4.464-20.448 16.544-20.448 25.344v18.68c.003.191.005.417.005.643 0 14.499-6.786 27.413-17.356 35.74l-.097.073a27.817 27.817 0 0 1-16.742 6.223l-.042.001zM280 487.999h16v16h-16v-16zM293.976 146.297c-12.636-10.084-20.947-25.126-21.969-42.135L272 104V8.001h16V104c1.075 12.318 7.232 23.014 16.337 30.105l.096.071z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h2 className="font-semiBold mt-0 font-size-20">
                          <a
                            target="_blank"
                            href="/health/delhi/kidney-tests-in-delhi/"
                          >
                            Kidney
                          </a>
                        </h2>
                        <p>
                          The kidney is a vital organ of our body that is
                          responsible for removing waste.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            viewBox="0 0 512 512"
                            className="img-fluid"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M281.171 322.065H256c-18.243 0-33.032-14.789-33.032-33.032 0-3.749-6.375-17.02-30.274-42.942a41.177 41.177 0 0 1-11.017-28.077v-9.679c.012-15.865 8.954-29.638 22.071-36.566l.226-.108c15-8.516 32.798-13.88 51.769-14.748l.257-.01c57.732 0 90.839 21.075 90.839 57.806 0 35.41-32.339 80.302-46.245 97.957-4.539 5.745-11.505 9.397-19.325 9.397h-.103.005zM256 173.419c-16.427.886-31.588 5.552-44.868 13.136l.497-.262c-8.03 4.222-13.417 12.5-13.436 22.038v9.681c0 6.524 2.512 12.46 6.621 16.895l-.015-.016c34.684 37.624 34.684 50.052 34.684 54.14 0 9.122 7.394 16.516 16.516 16.516h25.226a8.153 8.153 0 0 0 6.39-3.08l.013-.017c10.009-12.726 42.694-56.642 42.694-87.742 0-37.269-51.976-41.291-74.322-41.291zM181.48 16.698l-16.516-.363c.132-5.599.198-11.074.198-16.334h16.516c0 5.385-.066 10.975-.198 16.698z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M156.904 297.291c-18.243 0-33.032-14.789-33.032-33.032v-13.378c-10.023-11.969-16.212-27.447-16.515-44.363l-.001-.065a36.938 36.938 0 0 1 13.559-26.769l.067-.053c22.251-20.987 36.925-49.796 39.608-82.011l.031-.463c1.817-23.66 3.113-45.337 3.857-64.413l16.516.644c-.751 19.316-2.056 41.199-3.889 65.057-3.061 36.901-19.624 69.437-44.672 93.077l-.07.065c-4.681 3.468-7.853 8.742-8.481 14.774l-.007.091c.378 13.702 5.669 26.101 14.166 35.561l-.046-.051a8.315 8.315 0 0 1 2.395 5.777v16.538c0 8.851 6.963 16.077 15.71 16.497l.037.002c1.305-1.503 6.607-9.472 8.498-42.24.829-13.327 11.84-23.822 25.303-23.825v16.516h-.018a8.82 8.82 0 0 0-8.8 8.232l-.001.026c-2.353 39.978-9.827 57.806-24.213 57.806z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M156.904 297.291v-16.516c12.569 0 47.707-3.856 59.202-21.099l13.742 9.166c-18.754 28.127-70.739 28.449-72.944 28.449zM330.322 305.548c-.567.026-1.231.041-1.899.041a43.649 43.649 0 0 1-28.766-10.764l.053.045 11.562-11.776c4.772 3.73 10.86 5.981 17.471 5.981.556 0 1.108-.016 1.656-.048l-.076.003c7.043-.188 13.729-1.461 19.98-3.659l-.458.14c-9.942-11.346-21.661-21.257-27.78-21.257v-16.516c19.646 0 43.346 30.266 47.897 36.335a8.205 8.205 0 0 1 1.676 4.988 8.257 8.257 0 0 1-4.544 7.377l-.048.022c-10.728 5.248-23.279 8.541-36.54 9.078l-.183.005z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M371.613 289.033h-16.516c.179-20.309 7.788-38.807 20.236-52.941l-.077.089c7.689-7.616 12.549-18.075 12.873-29.668l.002-.06c-.296-22.933-14.894-42.381-35.268-49.858l-.373-.119C321.547 146.17 289.035 41.433 289.035.002h16.516c0 42.678 34.123 134.797 52.158 140.816 27.296 9.945 46.517 35.492 46.938 65.585v.05c-.246 15.578-6.497 29.65-16.532 40.044l.017-.017a75.576 75.576 0 0 0-8.952 12.825l-.197.388c-4.231 8.564-6.899 18.588-7.361 29.185l-.005.156zM214.709 512h-16.516c0-26.64-25.146-66.428-45.353-98.411-18.498-29.275-28.969-46.427-28.969-58.492-.002-.257-.003-.56-.003-.865 0-15.289 3.067-29.863 8.618-43.138l-.274.738c.587-12.723 11.044-22.815 23.858-22.815.293 0 .585.005.875.015l-.042-.001c13.797.663 26.791 2.589 39.328 5.675l-1.399-.291c1.559.353 3.349.556 5.186.556 5.099 0 9.833-1.559 13.752-4.228l-.085.055 12.957-8.638 9.166 13.741-12.965 8.638c-6.433 4.338-14.358 6.925-22.889 6.925-3.03 0-5.986-.327-8.831-.947l.273.05c-10.069-2.512-21.874-4.303-33.971-4.997l-.523-.024a7.589 7.589 0 0 0-8.254 8.39l-.003-.034a8.81 8.81 0 0 1-.891 3.645l.023-.053c-4.677 10.752-7.398 23.277-7.398 36.438 0 .409.002.816.007 1.223v-.062c0 7.87 14.038 30.084 26.426 49.673 22.446 35.534 47.897 75.851 47.897 107.231z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M206.452 338.58c-25.547-1.06-49.383-7.345-70.808-17.806l1.053.464 7.382-14.782c18.223 8.858 39.513 14.497 61.995 15.594l.378.014c.651.031 1.414.048 2.181.048 10.129 0 19.553-3.019 27.421-8.207l-.188.116c7.917-5.31 17.661-8.474 28.144-8.474h.26-.014v16.516l-.26-.001a34.49 34.49 0 0 0-19.982 6.341l.108-.073c-10.025 6.452-22.267 10.288-35.404 10.288-.798 0-1.593-.014-2.385-.043l.114.003zM313.807 512h-16.516c0-54.866 42.43-113.962 60.68-136.877a24.389 24.389 0 0 0 5.385-15.337v-.086.005-4.608h16.516v4.608a41.195 41.195 0 0 1-9.056 25.789l.063-.082c-17.161 21.521-57.072 76.94-57.072 126.588zM379.871 338.58h-16.516v-7.125c0-8.561-4.342-16.108-10.945-20.558l-.089-.057-10.067-6.714 9.166-13.741 10.058 6.705c11.151 7.5 18.39 20.07 18.39 34.332v.067-.003z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M272.516 503.742H256V454.168c0-.404.03-.802.087-1.19l-.005.044c.264-1.858 6.805-46.031 31.166-75.206 7.524-8.87 18.678-14.461 31.137-14.461l.325.001h52.901v16.516h-52.918a26.69 26.69 0 0 0-.298-.002c-7.381 0-13.993 3.293-18.445 8.491l-.027.033c-20.043 24.014-26.582 61.514-27.409 66.428zM165.161 512h-16.516c-.281-42.014-13.276-80.938-35.324-113.18l.45.697c-4.008-5.38-6.417-12.159-6.417-19.499l.001-.155v.007c0-9.233 0-23.123 11.198-31.141l7.738-7.729 11.677 11.677-8.258 8.258a7.948 7.948 0 0 1-1.227 1.014l-.029.018c-3.898 2.593-4.583 7.837-4.583 17.904v.053c0 3.861 1.314 7.416 3.521 10.24l-.028-.036c23.405 34.178 37.488 76.351 37.797 121.795v.078zM173.419 437.678h16.516V512h-16.516v-74.322z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M231.226 470.709c-30.877 0-45.543-49.036-49.3-64.058-1.715-11.377-9.011-20.732-18.961-25.3l-.206-.084c-14.645-5.206-26.436-15.388-33.59-28.468l-.16-.32c-1.639-3.123-3.234-6.854-4.546-10.716l-.169-.573 15.69-5.219c1.18 3.535 2.448 6.508 3.921 9.358l-.172-.365c5.508 9.712 14.195 17.079 24.62 20.769l.32.099c15.191 6.558 26.262 20.117 29.23 36.498l.045.3c5.202 20.736 18.325 51.563 33.28 51.563z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h2 className="font-semiBold mt-0 font-size-20">
                          <a
                            target="_blank"
                            href="/health/delhi/bone-tests-in-delhi/"
                          >
                            Bones
                          </a>
                        </h2>
                        <p>
                          The human body consists of 206 bones that make the entire
                          skeleton system, including 80 of the axial bones and 126
                          of the appendicular bones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M312.491 384h-.938c-23.274-.363-42.582-13.803-49.642-33.45-1.259-3.498-4.842-3.776-5.909-3.776s-4.65.277-5.91 3.776c-7.232 20.118-25.984 32.96-47.04 32.96h-3.477c-26.09 0-48.448-17.877-53.184-42.496L140.823 312c-2.752-14.442-9.558-27.99-19.669-39.147l-8.406-9.301c-17.664-19.541-27.413-44.523-27.413-70.336v-24.939c0-16.554 6.763-32.107 19.05-43.755 24.17-22.976 66.218-23.061 90.432-.085l11.008 10.453c26.389 25.024 74.006 25.024 100.352 0l11.008-10.432c12.118-11.478 28.224-17.792 45.418-17.792 35.328 0 64.064 27.562 64.064 61.419v39.702c0 16.49-6.208 32.427-17.493 44.886l-18.219 20.118c-10.176 11.221-17.002 24.832-19.755 39.382l-5.526 29.226c-4.736 24.81-27.008 42.603-53.184 42.603zm-56.49-58.582c11.861 0 22.058 7.019 25.962 17.877 4.075 11.37 15.445 19.136 28.288 19.328h.704c17.472 0 30.954-10.538 33.728-25.238l5.526-29.226c3.498-18.411 12.096-35.584 24.896-49.728l18.219-20.118c7.744-8.49 12.01-19.328 12.01-30.528v-39.702c0-22.102-19.178-40.085-42.731-40.085-11.69 0-22.613 4.245-30.72 11.947l-11.029 10.432c-17.344 16.448-40.384 25.536-64.853 25.536-24.448 0-47.488-9.066-64.875-25.536l-11.008-10.453c-16.149-15.36-44.97-15.21-61.056.064-8 7.573-12.395 17.621-12.395 28.288v24.939c0 20.501 7.787 40.406 21.91 56.022l8.427 9.301c12.736 14.08 21.312 31.168 24.81 49.43l5.568 29.014c2.794 14.592 16.341 25.195 32.214 25.195h3.456c12.075 0 22.762-7.168 26.602-17.834 4.267-11.904 14.464-18.923 26.347-18.923z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M320.001 144h-21.334V42.71c-22.486 13.27-62.848 13.27-85.334 0V144h-21.334V10.667c0-5.888 4.779-10.666 10.666-10.666s10.666 4.779 10.666 10.666c0 10.069 18.24 21.334 42.666 21.334s42.666-11.264 42.666-21.334c0-5.888 4.779-10.666 10.666-10.666s10.666 4.779 10.666 10.666z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M256.001 117.334c-35.882 0-64-18.73-64-42.666h21.334c0 10.07 18.24 21.334 42.666 21.334s42.666-11.264 42.666-21.334h21.334c0 23.936-28.118 42.666-64 42.666zM256.001 448c-35.882 0-64-18.731-64-42.666h21.334c0 10.07 18.24 21.334 42.666 21.334s42.666-11.264 42.666-21.334h21.334c0 23.936-28.118 42.666-64 42.666z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M256.001 512c-35.882 0-64-18.731-64-42.666v-96h21.334v96c0 10.07 18.24 21.334 42.666 21.334s42.666-11.264 42.666-21.334v-96h21.334v96c0 23.936-28.118 42.666-64 42.666zM224.001 298.666c-5.888 0-10.667-4.779-10.667-10.666s-4.779-10.666-10.666-10.666-10.666-4.779-10.666-10.666 4.779-10.666 10.666-10.666c17.642 0 32 14.358 32 32 0 5.888-4.779 10.666-10.666 10.666zM288.001 298.666c-5.888 0-10.666-4.779-10.666-10.666 0-17.642 14.358-32 32-32 5.888 0 10.666 4.779 10.666 10.666s-4.779 10.666-10.666 10.666-10.666 4.779-10.666 10.666-4.779 10.666-10.666 10.666zM181.334 213.333c-17.642 0-32-14.357-32-32 0-5.888 4.779-10.667 10.666-10.667s10.666 4.779 10.666 10.666 4.779 10.666 10.666 10.666 10.666 4.779 10.666 10.666-4.779 10.666-10.666 10.666zM330.668 213.333c-5.888 0-10.666-4.779-10.666-10.667S324.781 192 330.668 192s10.666-4.779 10.666-10.666 4.779-10.666 10.666-10.666 10.666 4.779 10.666 10.666c0 17.642-14.358 32-32 32z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h2 className="font-semiBold mt-0 font-size-20">
                          <a
                            target="_blank"
                            href="/health/delhi/thyroid-tests-in-delhi/"
                          >
                            Thyroid
                          </a>
                        </h2>
                        <p>
                          The thyroid is an endocrine gland that is situated at the
                          front of the neck in human beings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="uncontrolled-tab-example-tabpane-wellnessTests"
              aria-labelledby="uncontrolled-tab-example-tab-wellnessTests"
              role="tabpanel"
              aria-hidden="true"
              className="fade tab-pane"
            >
              <div className="mt-5 row">
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="col-12 p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="m134.738 347.269-5.227 15.658c13.056 4.352 23.461 14.757 27.813 27.813l15.657-5.228c-5.97-17.953-20.282-32.264-38.243-38.243zM445.935 115.614h-33.032V82.582c0-9.109-7.408-16.516-16.516-16.516h-16.516c-9.108 0-16.516 7.407-16.516 16.516v33.032h-33.032c-9.108 0-16.516 7.407-16.516 16.516v16.516c0 9.108 7.408 16.516 16.516 16.516h33.033v33.032c0 9.108 7.408 16.516 16.516 16.516h16.516c9.108 0 16.516-7.407 16.516-16.516v-33.032h33.032c9.108 0 16.516-7.407 16.516-16.516V132.13c0-9.108-7.408-16.516-16.516-16.516zm0 33.031h-49.548v49.548h-16.516v-49.548h-49.548v-16.516h49.548V82.581h16.516v49.548l49.548.025z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M388.128 16.517c-56.75 0-104.589 38.4-119.189 90.549C241.588 66.271 193.485 0 181.676 0c-14.402 0-79.6 94.687-96.76 121.476C46.177 181.95-.002 267.264-.002 330.322-.002 430.5 81.497 512 181.676 512s181.678-81.499 181.678-181.678c0-20.563-5.038-44.981-14.856-72.679 12.462 4.22 25.757 6.615 39.63 6.615 68.303 0 123.871-55.569 123.871-123.871S456.43 16.516 388.128 16.516zM132.129 487.87v-85.719l-1.387-2.081c-9.893-14.856-15.129-32.132-15.129-49.969v-21.298a24.57 24.57 0 0 0 8.258-4.922c4.393 3.964 10.149 6.442 16.516 6.442s12.123-2.486 16.516-6.442c4.393 3.964 10.149 6.442 16.516 6.442 13.659 0 24.774-11.115 24.774-24.774v-9.877c4.253 2.99 9.076 5.244 14.411 6.317l5.393 1.082a158 158 0 0 0-17.226 46.575l-2.419 12.098 16.194 3.245 2.419-12.098c3.659-18.308 10.777-35.469 21.132-51.01l6.838-10.257-29.085-5.822c-10.24-2.065-17.655-11.107-17.655-21.546h49.548c9.108 0 16.516 7.408 16.516 16.516v62.307c0 11.198-3.856 22.197-10.859 30.943l-22.173 27.723v86.115c-15.649 4.938-32.289 7.622-49.548 7.622s-33.9-2.684-49.548-7.614zm82.58-240.127h-16.516v-90.839c0-4.55 3.7-8.258 8.258-8.258s8.258 3.708 8.258 8.258zm-33.032 57.806c0 4.558-3.7 8.258-8.258 8.258s-8.258-3.7-8.258-8.258v-66.065c0-4.55 3.7-8.258 8.258-8.258s8.258 3.708 8.258 8.258zm-33.033 0c0 4.558-3.7 8.258-8.258 8.258s-8.258-3.7-8.258-8.258v-66.065c0-4.55 3.7-8.258 8.258-8.258s8.258 3.708 8.258 8.258zm-33.032 0c0 4.558-3.7 8.258-8.258 8.258s-8.258-3.7-8.258-8.258v-49.548c0-4.55 3.7-8.258 8.258-8.258s8.258 3.708 8.258 8.258zm231.226 24.774c0 67.584-40.836 125.729-99.097 151.279v-74.058l18.556-23.197c9.332-11.668 14.476-26.327 14.476-41.265v-62.307c0-18.217-14.815-33.032-33.032-33.032h-16.516v-90.838c0-13.659-11.115-24.774-24.774-24.774s-24.774 11.115-24.774 24.774v59.219a24.794 24.794 0 0 0-8.258-1.412c-6.367 0-12.123 2.486-16.516 6.441-4.393-3.964-10.149-6.441-16.516-6.441-11.421 0-20.959 7.804-23.817 18.333-2.858-1.148-5.954-1.817-9.216-1.817-13.659 0-24.774 11.115-24.774 24.774v49.548c0 10.752 6.928 19.836 16.516 23.255v21.298c0 20.257 5.698 39.911 16.516 56.989v74.512c-58.261-25.55-99.097-83.695-99.097-151.279 0-104.596 138.496-283.788 165.161-311.428 11.941 12.37 47.054 55.577 83.068 111.856-.248 3.196-.487 6.383-.487 9.637 0 46.188 25.452 86.478 63.034 107.776 12.94 32.264 19.547 59.921 19.547 82.159zm41.29-82.58c-59.194 0-107.355-48.161-107.355-107.355S328.934 33.033 388.128 33.033s107.355 48.161 107.355 107.355-48.161 107.355-107.355 107.355z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="font-semiBold mt-0">
                          <a
                            target="_blank"
                            href="/health/delhi/diabetes-tests-in-delhi/"
                          >
                            Diabetes Test
                          </a>
                        </h4>
                        <p>
                          Diabetes is the clinical term for a high level of blood
                          sugar or glucose. In simpler words, the amount of sugar in
                          the blood crosses the normal level of 90-125mg/dL.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="col-12 p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M403.335 430.94c-17.067-19.591-34.901-42.129-53.005-66.988a7.515 7.515 0 0 0-12.149 8.849c17.148 23.546 34.075 45.059 50.373 64.026l-30.215 54.594c-30.832-36.424-64.385-82.671-93.516-128.957 10.574-17.121 20.863-34.725 30.505-52.408a1280.599 1280.599 0 0 0 25.327 38.054c5.47 8.112 18.013-.631 12.36-8.552a1260.927 1260.927 0 0 1-29.553-44.742c26.322-50.413 46.527-100.512 52.142-140.895 8.458-60.829-5.967-108.659-40.615-134.679-.03-.023-.064-.038-.094-.06C298.15 6.634 277.789 0 256 0c-21.787 0-42.147 6.633-58.89 19.178-.032.023-.067.039-.098.063-34.648 26.02-49.073 73.85-40.615 134.679a7.515 7.515 0 1 0 14.888-2.07c-6.355-45.707 1.027-82.943 20.85-107.218-.485 12.761.266 26.36 2.252 40.646 5.174 37.217 23.531 86.582 53.121 142.94a1050.036 1050.036 0 0 1-17.689 31.569 1121.15 1121.15 0 0 1-12.084 20.234c-19.085-37.465-32.696-70.954-40.47-99.662a7.511 7.511 0 0 0-9.218-5.289 7.516 7.516 0 0 0-5.29 9.218c8.6 31.761 23.996 68.965 45.739 110.609-31.2 49.424-67.065 98.431-99.831 136.043a7.515 7.515 0 0 0-.909 8.575l37.989 68.642c2.327 4.488 9.016 5.207 12.242 1.297 13.386-15.366 27.381-32.701 41.596-51.522a7.515 7.515 0 0 0-11.994-9.058c-11.538 15.277-22.919 29.548-33.928 42.547l-30.215-54.596c40.231-46.835 84.584-109.777 119.359-169.474 29.656-50.91 66.709-123.823 74.808-182.075 1.986-14.286 2.737-27.885 2.252-40.646 19.823 24.275 27.205 61.511 20.85 107.218-10.673 76.76-76.953 191.327-135.423 272.947a7.516 7.516 0 0 0 12.219 8.753c12.665-17.679 25.691-36.902 38.46-56.971 30.861 48.392 66.2 96.326 98.04 132.875 3.227 3.91 9.915 3.19 12.242-1.297l37.989-68.642a7.511 7.511 0 0 0-.907-8.575zM303.503 29.499c1.829 13.408 1.95 28.156.378 43.98-14.655-6.289-30.998-9.587-47.881-9.587-16.884 0-33.227 3.297-47.881 9.587-1.572-15.825-1.452-30.572.378-43.98 13.661-9.473 30.015-14.469 47.502-14.469s33.841 4.996 47.504 14.469zM210.19 89.051c13.73-6.633 29.45-10.128 45.81-10.128 16.362 0 32.084 3.497 45.816 10.131-4.345 25.354-16.174 64.979-45.791 122.922-24.498-48.037-40.216-90.176-45.835-122.924z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="font-semiBold mt-0">
                          <a
                            target="_blank"
                            href="/health/delhi/hiv-test-in-delhi/"
                          >
                            HIV Test
                          </a>
                        </h4>
                        <p>
                          Human immunodeficiency virus, also known as HIV, damages
                          our immune system’s ability to combat infections.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="col-12 p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M421 286c0-53.706-26.204-104.083-70.14-135.005a123.715 123.715 0 0 0-11.783-9.656C352.332 131.888 361 116.401 361 98.918c0-20.162-11.301-38.839-28.789-47.583-1.458-.877-34.214-15.552-65.605-46.942A15.003 15.003 0 0 0 256 0H136c-8.284 0-15 6.716-15 15v179.708a45.037 45.037 0 0 0 19.189 36.862 45.193 45.193 0 0 0 4.053 2.521c-5.318 15.35-13.155 29.853-21.36 45.01C107.208 308.055 91 337.996 91 377c0 26.388 8.196 46.369 16.122 65.692C114.259 460.091 121 476.525 121 497c0 8.284 6.716 15 15 15h210c8.284 0 15-6.716 15-15 0-24.812-6.563-48.465-19.111-69.315C389.298 398.489 421 345.901 421 286zM211 30h38.887c32.881 31.427 62.581 44.409 68.906 48.167C325.98 81.761 331 90.294 331 98.918c0 12.176-9.906 22.082-22.082 22.082H293.7c-23.888-5.31-47.707-3.295-69.081 4.484L211 130.44zm-60 0h30v121.863c0 10.393 10.349 17.657 20.13 14.095l33.75-12.284c24.945-9.078 51.911-7.191 74.836 4.688L171.13 208.803c-4.663 1.697-9.668 1.038-13.734-1.809-4.065-2.846-6.396-7.325-6.396-12.287zm105 392c-8.284 0-15 6.716-15 15s6.716 15 15 15c20.735 0 40.584-3.879 58.882-10.935 7.907 12.488 13.006 26.333 15.071 40.935H150.098c-2.34-19.293-8.867-35.205-15.22-50.692C127.741 413.909 121 397.475 121 377c0-31.405 13.729-56.768 28.265-83.619 9.267-17.119 18.786-34.739 24.957-54.439a44.864 44.864 0 0 0 7.17-1.948l157.695-57.396C371.727 205.125 391 244.342 391 286c0 74.991-60.561 136-135 136z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="font-semiBold mt-0">
                          <a
                            target="_blank"
                            href="/health/delhi/pregnancy-tests-in-delhi/"
                          >
                            Pregnancy Test
                          </a>
                        </h4>
                        <p>
                          The pregnancy stage for any female is when one of the eggs
                          is fertilized to form a new cell, with the interaction of
                          the sperm from the male semen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="col-12 p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M324.673 512h-87.775a7.314 7.314 0 0 1-7.315-7.315V396.794c.002-.11.005-.24.005-.369 0-5.941-3.422-11.082-8.401-13.562l-.088-.039c-20.988-9.201-35.382-29.794-35.382-53.75 0-28.351 20.162-51.994 46.931-57.37l.374-.063c3.321-.659 7.138-1.037 11.044-1.037 9.052 0 17.63 2.027 25.305 5.652l-.361-.154c3.449 1.662 7.499 2.634 11.776 2.634s8.327-.971 11.942-2.705l-.166.072c7.321-3.468 15.906-5.493 24.962-5.493 3.899 0 7.711.375 11.401 1.091l-.375-.061c24.441 4.564 43.324 23.817 47.281 48.086l.046.338c.445 2.709.699 5.833.699 9.015 0 23.951-14.389 44.541-34.995 53.597l-.375.147c-5.464 2.366-9.216 7.712-9.216 13.934v.039-.002 107.891a7.315 7.315 0 0 1-7.315 7.315zm-80.462-14.63h73.147V396.794a27.95 27.95 0 0 1-.008-.675c0-11.873 7.072-22.094 17.233-26.68l.185-.075c15.979-6.798 26.979-22.364 26.979-40.5 0-2.332-.182-4.621-.533-6.854l.032.248c-2.823-18.402-16.744-32.89-34.609-36.525l-.283-.048c-2.532-.512-5.442-.805-8.421-.805a44.307 44.307 0 0 0-18.915 4.211l.272-.115c-5.272 2.529-11.461 4.005-17.994 4.005s-12.723-1.477-18.25-4.115l.256.11c-5.31-2.447-11.522-3.874-18.067-3.874-24.338 0-44.068 19.73-44.068 44.068 0 17.793 10.545 33.123 25.726 40.081l.275.113c10.149 4.739 17.055 14.859 17.055 26.592 0 .295-.004.589-.013.88l.001-.043zM187.231 258.913c-32.258-.079-58.38-26.248-58.38-58.517 0-14.797 5.492-28.31 14.548-38.614l-.056.065a14.974 14.974 0 0 0 3.311-9.424c0-2.486-.602-4.832-1.668-6.898l.04.084-46.667-97.431a7.207 7.207 0 0 1-.707-3.136 7.315 7.315 0 0 1 4.102-6.573l.043-.019L181.015.707A7.209 7.209 0 0 1 184.152 0a7.317 7.317 0 0 1 6.573 4.101l.019.043 46.155 97.431c2.282 5.29 7.452 8.925 13.471 8.925l.218-.001h-.011a56.91 56.91 0 0 1 2.434-.05c26.364 0 48.655 17.434 55.975 41.403l.109.415c1.541 4.993 2.428 10.732 2.428 16.679 0 32.143-25.916 58.233-57.992 58.514h-.027c-8.546.067-16.168 3.961-21.25 10.049l-.036.044c-7.737 9.379-18.198 16.257-30.167 19.438l-.409.092c-4.274 1.161-9.183 1.829-14.245 1.829h-.173.009zM114.668 48.471l43.303 90.848c1.96 3.823 3.109 8.339 3.109 13.125a29.145 29.145 0 0 1-7.091 19.097l.031-.038a43.703 43.703 0 0 0-11.626 29.755c0 24.239 19.649 43.888 43.888 43.888 14.011 0 26.488-6.565 34.523-16.786l.071-.095c7.859-9.334 19.495-15.269 32.522-15.434h.028c9.728-.116 18.682-3.337 25.941-8.716l-.12.085c10.922-8.078 17.926-20.914 17.926-35.386 0-4.386-.644-8.621-1.841-12.617l.08.311c-5.553-18.315-22.286-31.417-42.079-31.417-.637 0-1.269.013-1.899.04l.09-.003c-.15.002-.328.004-.506.004-11.879 0-22.125-6.992-26.847-17.085l-.077-.182-43.376-90.848zM327.865 189.673l58.511-46.213 9.07 11.484-58.511 46.213zM352.263 216.81l51.191-14.931 4.096 14.044-51.191 14.931zM357.067 266.279l3.058-14.308 54.225 11.588-3.058 14.308z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="font-semiBold mt-0">
                          <a
                            target="_blank"
                            href="/health/delhi/arthritis-tests-in-delhi/"
                          >
                            Arthritis Test
                          </a>
                        </h4>
                        <p>
                          Arthritis, in layman's terms, is referred to as 'joint
                          pain'. Arthritis is in fact tenderness and swelling of one
                          or more joints that cause acute pain.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="col-12 p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M232.501 176.213c0-14.892-12.114-27-27-27-14.888 0-27 12.108-27 27 0 14.884 12.112 27 27 27 14.886 0 27-12.116 27-27zm-39 0c0-6.618 5.382-12 12-12 6.62 0 12 5.382 12 12 0 6.612-5.38 12-12 12-6.618 0-12-5.388-12-12zM304.933 240.671c0 14.89 12.112 27 27 27 14.882 0 27-12.11 27-27 0-14.888-12.118-27-27-27-14.888 0-27 12.112-27 27zm27-12c6.614 0 12 5.38 12 12 0 6.614-5.386 12-12 12-6.62 0-12-5.386-12-12 0-6.62 5.38-12 12-12zM167.246 314.784c0 21.098 17.162 38.26 38.256 38.26s38.256-17.162 38.256-38.26c0-21.094-17.162-38.252-38.256-38.252s-38.256 17.158-38.256 38.252zm38.255-23.251c12.824 0 23.256 10.432 23.256 23.252 0 12.826-10.432 23.26-23.256 23.26-12.826 0-23.256-10.434-23.256-23.26 0-12.822 10.43-23.252 23.256-23.252z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M485 229c-12.23 0-22.174 8.326-25.48 19.5h-32.86c-4.238-14.004-12.446-20.688-14.158-28.224-2.252-9.902 5.292-25.966-1.066-39.14-6.39-13.254-23.842-17.55-29.952-25.202-1.964-2.459-3.344-6.164-4.685-10.128l57.794-57.792c4.84 2.91 10.12 4.968 15.912 4.968 8.414 0 16.318-3.276 22.268-9.226 12.276-12.274 12.276-32.254 0-44.532-12.304-12.302-32.224-12.304-44.53 0-10.4 10.398-11.444 26.07-4.232 38.157l-53.192 53.192c-4.618-8.884-10.464-13.778-23.746-15.698a7.503 7.503 0 0 0-8.498 6.348 7.504 7.504 0 0 0 6.356 8.498c10.644 1.54 12.23 4.484 16.588 17.834 5.482 16.79 8.6 20.646 23.65 29.638 14.512 8.676 15.15 10.318 12.97 26.688-2.37 17.792-1.114 22.588 8.33 36.893 9.35 14.186 9.35 16.268 0 30.446-9.476 14.368-10.688 19.172-8.33 36.9 2.184 16.398 1.512 18.028-12.978 26.688-15.04 8.986-18.16 12.842-23.642 29.64-5.21 15.956-6.62 17.012-23.196 18.55-17.642 1.632-22.09 3.836-34.112 16.406-11.712 12.244-13.478 12.504-28.842 6.768-6.176-2.302-12.556-4.68-19.368-4.68-13.39 0-26.928 9.926-35.058 8.08-4.374-.992-8.634-5.45-13.148-10.168-11.99-12.536-16.41-14.766-34.114-16.41-16.582-1.534-17.992-2.596-23.198-18.552-5.488-16.794-8.602-20.648-23.648-29.638-14.51-8.674-15.152-10.31-12.974-26.686 2.36-17.708 1.152-22.526-8.328-36.898-9.35-14.178-9.35-16.266 0-30.448 9.478-14.364 10.69-19.174 8.328-36.898-2.178-16.374-1.536-18.014 12.978-26.686 5.546-3.314 11.282-6.74 15.404-11.904 4.142-5.19 6.226-11.566 8.24-17.736 2.01-6.15 3.906-11.96 7.326-14.69 3.381-2.704 9.446-3.264 15.872-3.859 17.662-1.638 22.1-3.844 34.114-16.406 11.688-12.222 13.438-12.518 28.84-6.77 16.77 6.258 21.958 6.258 38.733 0 18.906-7.054 17.592-3.934 33.224 11.232 2.968 2.88 7.718 2.814 10.6-.162a7.495 7.495 0 0 0-.16-10.608c-1.31-1.266-2.602-2.626-3.984-4.064-16.268-17-24.238-18.166-44.925-10.448-2.288.85-4.488 1.636-6.622 2.296V52.481c11.17-3.31 19.498-13.25 19.498-25.482 0-14.888-12.114-27-27-27-14.888 0-27 12.112-27 27 0 12.232 8.326 22.172 19.5 25.482v41.588c-2.13-.66-4.33-1.446-6.624-2.296-20.682-7.718-28.656-6.554-44.924 10.45-3.678 3.846-7.152 7.478-10.602 9.146-3.576 1.725-8.666 2.194-14.056 2.694-15.088 1.4-24.28 3.358-31.112 16.51l-41.95-41.95c7.864-12.8 6.844-29.548-4.232-40.628-12.956-12.96-34.044-12.96-47.004 0-26.836 26.84 5.898 72.568 40.628 51.236l46.576 46.573c-3.544 10.478-4.88 11.83-16.06 18.508-19.878 11.88-23.12 19.222-20.146 41.546.718 5.392 1.397 10.49.502 14.416-1.712 7.536-9.92 14.218-14.156 28.224H52.481c-3.31-11.174-13.25-19.5-25.482-19.5-14.888 0-27 12.112-27 27 0 14.886 12.112 27 27 27 12.232 0 22.172-8.328 25.482-19.5h32.858c4.237 14.006 12.444 20.684 14.16 28.222 2.25 9.9-5.294 25.972 1.062 39.14 6.394 13.258 23.844 17.55 29.958 25.202 1.962 2.462 3.339 6.168 4.68 10.13l-28.414 28.412c-10.236-5.56-23.16-4.421-31.804 4.23-17.02 17.024-4.8 46.076 19.092 46.076a26.59 26.59 0 0 0 23.32-39.698l23.79-23.79c11.13 21.422 33.46 13.56 45.166 19.208 8.85 4.27 16.76 20.274 31.272 23.57 10.814 2.461 21.21-3.27 30.878-6.27v41.588c-11.174 3.306-19.5 13.25-19.5 25.48 0 14.886 12.112 27 27 27 14.886 0 27-12.114 27-27 0-12.23-8.328-22.174-19.5-25.48V417.93c9.81 3.038 20.082 8.728 30.882 6.27 14.474-3.29 22.488-19.332 31.268-23.57 11.85-5.72 33.974 2.332 45.17-19.208l7.874 7.882a7.512 7.512 0 0 0 10.612 0 7.508 7.508 0 0 0 0-10.612l-12.506-12.504c3.546-10.488 4.89-11.83 16.06-18.506 19.874-11.878 23.122-19.222 20.146-41.544-1.866-14.014-1.482-15.344 5.98-26.658 3.134-4.748 5.914-10.17 7.67-15.982h32.858c3.312 11.172 13.256 19.5 25.486 19.5 14.886 0 27-12.114 27-27 0-14.888-12.114-27-27-27zM450.507 45.003c14.656 0 21.978 17.834 11.664 28.15-6.448 6.442-16.876 6.444-23.324 0-10.32-10.32-2.99-28.15 11.66-28.15zM244.001 27.001c0-6.618 5.382-12 12-12 6.62 0 12 5.382 12 12 0 6.62-5.38 12-12 12-6.618 0-12-5.38-12-12zM58.608 84.395c-7.112-7.11-7.112-18.68 0-25.794 7.108-7.106 18.678-7.106 25.788 0 7.112 7.114 7.112 18.684 0 25.794-7.11 7.112-18.68 7.108-25.788 0zM27.002 268c-6.618 0-12-5.38-12-12 0-6.618 5.382-12 12-12 6.62 0 12 5.382 12 12 0 6.62-5.38 12-12 12zm75.559 158.412c-4.684 4.682-12.296 4.682-16.974 0-7.566-7.566-2.134-20.478 8.484-20.478 10.614 0 16.062 12.906 8.49 20.478zM268.001 485c0 6.62-5.38 12-12 12-6.618 0-12-5.38-12-12 0-6.618 5.382-12 12-12 6.62 0 12 5.382 12 12zM485 268c-6.618 0-12-5.38-12-12 0-6.618 5.382-12 12-12 6.62 0 12 5.382 12 12 0 6.62-5.38 12-12 12zM423.735 413.126l-12.802-12.806a7.512 7.512 0 0 0-10.612 0 7.505 7.505 0 0 0 0 10.612l12.806 12.802c-7.624 12.54-6.6 28.89 4.23 39.717 12.738 12.738 33.358 12.742 46.096 0 12.738-12.738 12.738-33.356 0-46.096-10.828-10.83-27.176-11.854-39.717-4.23zm29.112 39.72c-6.876 6.876-18.002 6.876-24.882 0-6.858-6.86-6.858-18.022 0-24.882 6.86-6.858 18.02-6.858 24.882 0 6.876 6.876 6.878 18.006 0 24.882z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="font-semiBold mt-0">
                          <a
                            target="_blank"
                            href="/health/delhi/allergy-tests-in-delhi/"
                          >
                            Allergy Test
                          </a>
                        </h4>
                        <p>
                          Allergies or allergic disease indicate various conditions
                          which may affect a person with weak immunity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card my-5 pt-5 col-xl-4 col-md-6">
                  <div className="rounded-5 mx-0 fullHeight row">
                    <div className="col-12 p-5 col">
                      <div className="service-card-icon rounded-5 d-flex col">
                        <div className="px-2 align-self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={512}
                            height={512}
                            className="img-fluid"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M435.252 314.267a7.498 7.498 0 0 0-10.245 2.745l-45.991 79.66a47.297 47.297 0 0 0-18.806-3.882c-26.236 0-47.581 21.344-47.581 47.581 0 26.236 21.345 47.581 47.581 47.581s47.581-21.345 47.581-47.581c0-14.176-6.239-26.916-16.107-35.64l46.314-80.218a7.5 7.5 0 0 0-2.746-10.246zm-75.043 158.685c-17.965 0-32.581-14.616-32.581-32.581s14.616-32.581 32.581-32.581 32.581 14.615 32.581 32.581c.001 17.965-14.615 32.581-32.581 32.581zM288.064 432.87h-89.29c-3.608-22.685-23.3-40.081-46.984-40.081-26.236 0-47.581 21.344-47.581 47.581 0 26.236 21.345 47.581 47.581 47.581 23.684 0 43.376-17.396 46.984-40.081h89.29a7.5 7.5 0 0 0 0-15zm-136.273 40.082c-17.965 0-32.581-14.616-32.581-32.581s14.616-32.581 32.581-32.581 32.581 14.615 32.581 32.581c-.001 17.965-14.617 32.581-32.581 32.581zM106.797 381.315a7.497 7.497 0 0 0 10.245 2.745 7.5 7.5 0 0 0 2.745-10.245l-45.357-78.56c12.507-8.582 20.731-22.974 20.731-39.255 0-26.236-21.345-47.581-47.581-47.581S0 229.764 0 256s21.345 47.581 47.581 47.581c4.596 0 9.037-.668 13.245-1.89zM15 256c0-17.965 14.616-32.581 32.581-32.581s32.58 14.616 32.58 32.581-14.616 32.581-32.581 32.581S15 273.965 15 256zM76.791 197.657a7.497 7.497 0 0 0 10.245-2.745l45.949-79.585a47.297 47.297 0 0 0 18.806 3.882c26.236 0 47.581-21.344 47.581-47.581s-21.345-47.581-47.581-47.581-47.581 21.345-47.581 47.581c0 14.176 6.239 26.916 16.107 35.64l-46.271 80.144a7.498 7.498 0 0 0 2.745 10.245zm75-158.61c17.965 0 32.581 14.616 32.581 32.581s-14.616 32.581-32.581 32.581-32.581-14.615-32.581-32.581 14.615-32.581 32.581-32.581zM223.936 79.129h89.29c3.608 22.685 23.3 40.081 46.984 40.081 26.236 0 47.581-21.344 47.581-47.581s-21.345-47.581-47.581-47.581c-23.684 0-43.376 17.396-46.984 40.081h-89.29a7.5 7.5 0 0 0 0 15zm136.273-40.082c17.965 0 32.581 14.616 32.581 32.581s-14.616 32.581-32.581 32.581-32.581-14.615-32.581-32.581 14.617-32.581 32.581-32.581zM464.419 208.418c-4.597 0-9.038.668-13.246 1.89l-45.788-79.309a7.5 7.5 0 0 0-12.99 7.5l45.175 78.246c-12.507 8.582-20.731 22.974-20.731 39.254 0 26.236 21.345 47.581 47.581 47.581S512 282.235 512 255.999s-21.345-47.581-47.581-47.581zm0 80.162c-17.965 0-32.581-14.615-32.581-32.581s14.616-32.581 32.581-32.581S497 238.034 497 255.999s-14.616 32.581-32.581 32.581z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="font-semiBold mt-0">
                          <a
                            target="_blank"
                            href="/health/delhi/hormone-tests-in-delhi/"
                          >
                            Hormone Test
                          </a>
                        </h4>
                        <p>
                          Hormone tests are executed to confirm various ailments
                          caused by a hormonal disorder (overproduction or
                          underproduction of hormones) within a human body.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="row mt-auto flex-column">
        <section
          id="Subscribe"
          className="row py-4 bg-black mt-auto mx-0 z-index-0"
        >
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="my-2 align-items-center col-lg-6 col-md-6 col-sm-12">
                  <div className="d-flex">
                    <div className="pl-0 pr-lg-5 w-90-px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        viewBox="0 0 1024 1024"
                        className="img-fluid"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M904 120h-60.001V0H180v120h-60v183.594l-120 135V1024h1024V438.594l-120-135V120zM294.543 721.337 60 927.655V516.113l234.543 205.224zM512 609.957l402.476 354.044H109.524L512 609.957zm217.457 111.38 234.544-205.224v411.542L729.457 721.337zM240 60h544v60H240V60zm603.999 120v361.389L684.023 681.368 512 530.045 339.977 681.367 180 541.39V180.001h663.999zM120 488.889l-47.49-41.554L120 393.906v94.983zm831.49-41.555L904 488.888v-94.983l47.49 53.429z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M240 240h544v59.999H240V240zM240 360h544v60.001H240V360zM240 480h182v59.999H240V480z"
                        />
                      </svg>
                    </div>
                    <div className="col pl-lg-0 family-roboto">
                      <h3 className="text-white mt-0">Get to know us better!</h3>
                      <p className="text-white mb-0 l-height-18">
                        Subscribe to our newsletter and stay up to date with
                        Flebo.in's offers, discounts, and latest diagnostics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4 pt-3 pt-lg-1 pt-sm-1  search-form align-items-center col-lg-6 col-md-6 col-sm-12">
                  <form autoComplete="off" className="row mx-sm-4 mx-md-0">
                    <div className="col-12 px-0 py-1 col-lg-8 input_field bg-white btn-radius pr-lg-4">
                      <input
                        name="email"
                        placeholder="Enter your email"
                        type="text"
                        className=" null form-control shadow-none ml-lg-2 my-2 my-lg-0 py-3 font-size-14 border-0 bg-white btn-radius form-control"
                      />
                    </div>
                    <div className="col-12 px-0 col-lg-4 pl-lg-3 mt-3 mt-lg-0">
                      <button
                        className="btn btn-red btn-radius px-2 py-3 fullHeight w-100"
                        type="submit"
                      >
                        <span className="px-0">Subscribe Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="py-5 container">
          <div className="row">
            <div className="col-12 mt-3 col-lg-4">
              <div className="row">
                <div className="logo-text col">
                  <img
                    loading="lazy"
                    src="https://img.flebo.in/assets/flebo-white-logo-new.svg"
                    alt="Flebo.in"
                    className="img-fluid footer-logo"
                  />
                </div>
                <div className="mt-4 pr-5 col-lg-12">
                  <p>
                    Your one-stop solution for convenient booking, painless sample
                    collection and timely reporting of all medical tests. Your
                    diagnosis is our priority, always. Taking a step towards healthy
                    living? We are here for you!
                  </p>
                </div>
              </div>
              <div className="mt-lg-4 pb-4 row">
                <div className="col">
                  <ul className="contact-info">
                    <li className="d-block mb-4">
                      <div className="d-inline-block align-top">
                        <span className="d-block w-55-px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={1024}
                            height={1024}
                            viewBox="0 0 1024 1024"
                            className="img-fluid"
                          >
                            <path
                              fill="#FFFFFF"
                              d="m831.019 891.87-38.234-114.721a115.61 115.61 0 0 0-89.005-77.179l-110.378-20.086v-8.554c19.21-11.149 35.923-26.064 49.235-43.718h33.348c27.317 0 49.549-22.232 49.549-49.549V379.869c0-118.387-96.324-214.709-214.711-214.709s-214.709 96.322-214.709 214.709v115.614c0 31.842 22.643 58.483 52.668 64.693 9.266 47.468 38.929 87.635 79.46 111.154v8.554L317.848 699.97c-41.537 7.562-75.643 37.128-88.99 77.179l-6.606 19.835-56.254-56.252c-6.441-6.442-6.441-16.931 0-23.371l65.239-65.222-122.451-122.451-73.728 73.728C13.224 625.251 1.2 654.285 1.2 685.17s12.024 59.904 33.858 81.739l223.217 223.215c21.833 21.835 50.869 33.875 81.754 33.875s59.904-12.04 81.225-33.378l80.452-73.713-25.088-25.038H831.02zM692.498 578.064c0 9.116-7.414 16.515-16.515 16.515h-13.892a163.964 163.964 0 0 0 10.769-34.402c7.068-1.471 13.576-4.277 19.637-7.813v25.7zm-16.515-54.141v-56.88c9.826 5.73 16.515 16.269 16.515 28.441s-6.689 22.709-16.515 28.439zm-330.323 0c-9.828-5.73-16.517-16.266-16.517-28.439s6.689-22.711 16.517-28.441v56.88zm0-111.021v18.861a65.53 65.53 0 0 0-16.517 6.839V379.87c0-100.171 81.508-181.677 181.677-181.677 100.171 0 181.677 81.506 181.677 181.677v58.732c-5.12-2.989-10.637-5.318-16.515-6.839v-18.861h-16.517c-48.838 0-94.753-19.027-129.305-53.562l-19.341-19.341-19.341 19.341c-34.55 34.535-80.467 53.562-129.305 53.562h-16.515zm33.032 115.614v-83.208c49.599-3.734 95.842-24.197 132.129-58.699 36.287 34.502 82.532 54.982 132.129 58.699v83.208c0 24.079-6.573 46.607-17.87 66.063H510.821v33.034h87.105c-23.286 20.495-53.725 33.032-87.105 33.032-72.852 0-132.129-59.277-132.129-132.129zm181.677 157.548v.776l-49.549 49.549-49.549-49.549v-.776c15.658 4.922 32.289 7.612 49.549 7.612s33.892-2.691 49.549-7.612zM260.171 787.588c9.53-28.607 33.892-49.729 63.571-55.148l115.448-20.975 71.63 71.63 71.615-71.615 115.431 20.977c29.679 5.416 54.041 26.524 63.571 55.146l23.766 71.236H443.584l-64.329-64.331-71.482 64.66c-6.227 6.259-17.112 6.259-23.354 0l-36.071-36.071 11.824-35.509zM108.769 576.395l75.743 75.743-17.936 17.937-75.743-75.743 17.937-17.937zm289.61 390.408c-15.591 15.558-36.335 24.164-58.383 24.164-22.051 0-42.794-8.606-58.403-24.197L58.378 743.571c-15.591-15.591-24.18-36.335-24.18-58.383 0-22.066 8.588-42.81 24.18-58.401l9.084-9.085 75.743 75.743-.595.595c-19.307 19.323-19.307 50.753 0 70.079l118.437 118.438c9.364 9.347 21.802 14.517 35.047 14.517 13.247 0 25.683-5.153 34.437-13.939l1.238-1.107 76.09 76.09-9.48 8.687zm33.857-31.049-75.924-75.924 21.818-19.722 75.793 75.793-21.687 19.853zM973.272.001H742.046c-27.319 0-49.549 22.231-49.549 49.548v132.129c0 27.318 22.23 49.548 49.549 49.548h44.115l-17.079 99.609 159.38-99.609h44.81c27.317 0 49.549-22.231 49.549-49.548V49.549c0-27.318-22.232-49.548-49.549-49.548zm16.515 181.677c0 9.1-7.414 16.516-16.515 16.516h-54.289l-104.895 65.552 11.249-65.552h-83.29c-9.101 0-16.517-7.416-16.517-16.516V49.549c0-9.1 7.416-16.516 16.517-16.516h231.226c9.101 0 16.515 7.416 16.515 16.516v132.129z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M956.755 66.065H758.561v33.032h198.194V66.065zM890.69 132.129H758.561v33.032H890.69v-33.032zM956.753 132.129h-33.032v33.032h33.032v-33.032zM510.816 49.554c-215.8 0-401.689 149.273-450.015 357.491l-31.298-52.174-28.325 16.994L59.232 468.6l96.735-58.054-16.995-28.326-44.759 26.857C141.02 218.596 312.308 82.585 510.816 82.585c43.387 0 86.197 6.441 127.24 19.159l9.778-31.546c-44.213-13.708-90.31-20.645-137.018-20.645zM1014.785 365.704 918.05 307.65l-58.037 96.751 28.326 16.996 28.903-48.178c15.21 44.511 22.99 91.071 22.99 138.785 0 98.223-34.023 194.246-95.777 270.371l25.65 20.809c66.525-81.985 103.158-185.409 103.158-291.18 0-50.522-8.142-99.855-24.014-147.092l48.542 29.119 16.994-28.326z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="d-inline-block align-self-center ml-4">
                        <span className="contact-label d-block">Contact us</span>
                        <a href="tel:+911244550000">012 44 55 0000</a>
                      </div>
                    </li>
                    <li className="d-block">
                      <div className="d-inline-block align-bottom">
                        <span className="d-block w-55-px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={1024}
                            height={1024}
                            viewBox="0 0 1024 1024"
                            className="img-fluid"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M26.021 808.301a15.381 15.381 0 0 0 2.176 1.735c18.919 19.433 45.075 30.422 72.409 30.417h599.375c27.3.006 53.435-10.951 72.354-30.345a14.707 14.707 0 0 0 5.008-5.487c15.043-17.765 23.283-40.174 23.258-63.316v-70.722h24.321c17.586-.027 33.131-11.249 38.46-27.752h43.421c33.419-.041 60.499-26.73 60.54-59.655v-17.468h3.903c29.128-.033 52.734-23.285 52.753-51.981v-49.633c-.019-28.703-23.625-51.955-52.753-51.988h-3.903v-58.685c.041-72.016-46.032-136.214-114.953-160.186-68.915-23.966-145.675-2.487-191.513 53.598H100.606c-50.551.073-93.229 37.061-99.756 86.462a14.694 14.694 0 0 0-.676 7.013A99.156 99.156 0 0 0 0 345.967v395.351c-.027 23.115 8.194 45.51 23.224 63.275a14.249 14.249 0 0 0 2.798 3.708zm809.264-177.457c-.008 5.634-4.641 10.205-10.371 10.205h-39.658c-5.717 0-10.364-4.571-10.364-10.205v-5.555c0-5.64 4.647-10.211 10.364-10.219h39.658c5.717.008 10.364 4.579 10.371 10.219v5.555zm158.742-166.75v49.633c-.019 12.388-10.209 22.441-22.789 22.449h-29.087v-94.538h29.087c12.58.008 22.77 10.06 22.789 22.457zM794.95 213.084c78.614.086 142.334 62.866 142.415 140.337v58.685h-10.203c-8.275 0-14.983 6.61-14.983 14.769v124.07c0 8.153 6.708 14.763 14.983 14.763h10.203v17.468c-.027 16.631-13.698 30.102-30.567 30.121h-43.435c-5.315-16.512-20.868-27.733-38.448-27.758h-39.658c-22.259.025-40.301 17.81-40.328 39.751v5.555c.027 16.359 10.215 31.037 25.687 36.993v73.481a68.343 68.343 0 0 1-8.656 33.332L581.875 594.1c-3.742-3.831-9.286-5.389-14.508-4.077-5.228 1.306-9.332 5.292-10.758 10.418-1.42 5.126.068 10.607 3.889 14.361L742.27 797.033c-12.203 9.031-27.045 13.907-42.297 13.894H100.599c-15.29.006-30.179-4.888-42.384-13.959l180.774-182.193a14.614 14.614 0 0 0-.247-20.886c-5.918-5.692-15.397-5.593-21.189.238L38.554 774.546a68.257 68.257 0 0 1-8.582-33.228V370.012l310.945 259.447c34.302 28.782 84.739 28.761 119.016-.052l111.272-92.987c8.835 17.903 27.26 29.269 47.458 29.288h44.071c8.273 0 14.981-6.61 14.981-14.763v-124.07c0-8.159-6.708-14.769-14.981-14.769h-10.203v-58.685c.087-77.478 63.799-140.251 142.421-140.337zM647.749 441.638v94.538h-29.087c-12.58-.008-22.775-10.06-22.789-22.449v-49.633c.014-12.396 10.209-22.449 22.789-22.457h29.087zM100.606 276.366h540.796a166.716 166.716 0 0 0-18.845 77.055v58.685h-3.895c-29.128.025-52.726 23.285-52.761 51.988v38.035L440.552 606.892c-23.123 19.427-57.139 19.441-80.276.033L31.324 332.45c6.587-32.575 35.582-56.038 69.282-56.084z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="d-inline-block ml-4">
                        <span className="contact-label d-block">
                          Reach out to us
                        </span>
                        <a href="mailto:customercare@flebo.in">
                          customercare@flebo.in
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5 col-lg-3 col-6">
              <div className="row">
                <div className="footer-quick-links col">
                  <h4 className="mt-0 mb-4 font-semiBold">More</h4>
                  <ul className="arrow-icon">
                    <li>
                      <a className="nav-link" href="/#our-promise">
                        Our Promise
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/#how-we-work">
                        Flebo.in at Work
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/#information-about-tests">
                        Information about Tests
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/#about-section">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/health/">
                        Blog
                      </a>
                    </li>
                    <li className="hidden">
                      <a href="/dashboard/forum" className="nav-link">
                        Discussion Board
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/contact">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/press-coverages"
                      >
                        Press Coverages
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/register-lab">
                        Register your lab with us
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/sitemap">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5 col-lg-2 col-6">
              <div className="row">
                <div className="footer-quick-links col">
                  <h4 className="mt-0 mb-4 font-semiBold">Services</h4>
                  <ul className="arrow-icon">
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/delhi/"
                      >
                        Delhi
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/gurgaon/"
                      >
                        Gurgaon
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/noida/"
                      >
                        Noida
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/chennai/"
                      >
                        Chennai
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/bangalore/"
                      >
                        Bangalore
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/hyderabad/"
                      >
                        Hyderabad
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/mumbai/"
                      >
                        Mumbai
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="nav-link"
                        href="/health/kolkata/"
                      >
                        Kolkata
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 col-lg-3">
              <div className="row">
                <div className="col-12 col">
                  <a
                    className="btn-white-holo btn btn-radius px-4 py-4 d-block"
                    href="/#book-a-slot"
                  >
                    <span className="px-3">Book a Home Collection</span>
                  </a>
                </div>
                <div className="col-12 mt-4 hidden col">
                  <a className="btn btn-white-holo px-4 py-4 d-block" href="/">
                    <span className="px-3">Newsletter</span>
                  </a>
                </div>
                <div className="col-12 sm-icons mt-4 justify-content-center d-flex col">
                  <a
                    href="https://www.facebook.com/Flebo-106073985346129/?modal=admin_todo_tour&notif_id=1645431497830241&notif_t=page_invite&ref=notif"
                    rel="noreferrer"
                    target="_blank"
                    className="mr-4"
                    title="Facebook"
                  >
                    <span className="w-25-px d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M674.537 170.027h93.485V7.211C751.894 4.992 696.425 0 631.829 0 497.045 0 404.714 84.779 404.714 240.597V384H255.978v182.016h148.736V1024h182.357V566.059h142.717l22.656-182.016H587.028V258.645c.043-52.608 14.208-88.618 87.508-88.618z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://twitter.com/InFlebo"
                    rel="noreferrer"
                    target="_blank"
                    className="mr-4"
                  >
                    <span className="w-25-px d-block">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="img-fluid"
                        width={1024}
                        height={1024}
                        viewBox="0 0 1024 1024"
                      >
                        <g id="twitterIcon" />
                        <path
                          fill="#FFFFFF"
                          d="M1097.143 149.139c-43.52 19.090-89.893 31.744-138.24 37.888 49.737-29.696 87.698-76.361 105.545-132.608-46.373 27.648-97.573 47.177-152.137 58.075-44.032-46.885-106.789-75.922-175.25-75.922-132.827 0-239.762 107.813-239.762 239.982 0 19.017 1.609 37.303 5.559 54.711-199.461-9.728-375.954-105.326-494.519-250.953-20.699 35.913-32.841 77.019-32.841 121.271 0 83.090 42.789 156.745 106.569 199.387-38.546-0.731-76.361-11.922-108.398-29.55 0 0.731 0 1.682 0 2.633 0 116.59 83.163 213.431 192.219 235.739-19.529 5.339-40.814 7.899-62.903 7.899-15.36 0-30.866-0.878-45.422-4.096 31.086 95.013 119.296 164.864 224.183 167.131-81.627 63.854-185.271 102.327-297.472 102.327-19.675 0-38.546-0.878-57.417-3.291 106.277 68.535 232.229 107.666 368.055 107.666 441.49 0 682.862-365.714 682.862-682.715 0-10.606-0.366-20.846-0.878-31.013 47.616-33.792 87.625-75.995 120.247-124.562z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCexu9kkuSxz9dY-HW8l07iA"
                    rel="noreferrer"
                    target="_blank"
                    className="mr-4"
                    title="Youtube"
                  >
                    <span className="w-25-px d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M1013.6 307.3s-10-70.6-40.8-101.6c-39-40.8-82.6-41-102.6-43.4C727 151.9 512 151.9 512 151.9h-.4s-215 0-358.2 10.4c-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6S0 390.1 0 473.1v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-.2-82.8-10.4-165.8-10.4-165.8zM406 644.9V357.1l276.6 144.4L406 644.9z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/flebo-in"
                    rel="noreferrer"
                    target="_blank"
                    className="mr-4"
                  >
                    <span className="w-25-px d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M1023.741 1024v-.045h.256V648.403c0-183.721-39.552-325.247-254.336-325.247-103.258 0-172.547 56.661-200.835 110.379h-2.987v-93.227H362.19v683.647h212.054V685.44c0-89.131 16.896-175.318 127.276-175.318 108.755 0 110.381 101.718 110.381 181.033V1024h211.84zM16.909 340.351h212.309V1024H16.909V340.351zM122.968 0C55.086 0 .003 55.083.003 122.965s55.083 124.118 122.965 124.118c67.883 0 122.966-56.235 122.966-124.118C245.891 55.083 190.808 0 122.968 0z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://instagram.com/flebo.in?utm_medium=copy_link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="w-25-px d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1024}
                        height={1024}
                        className="img-fluid"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M1021.297 301.056c-2.4-54.409-11.194-91.814-23.802-124.227-12.998-34.405-33.005-65.208-59.213-90.815-25.606-26.005-56.614-46.212-90.618-59.011C815.062 14.399 777.853 5.6 723.446 3.202 668.63.6 651.228-.002 512.199-.002 373.172-.002 355.77.6 301.158 2.999c-54.409 2.399-91.815 11.205-124.22 23.802-34.413 13.003-65.216 33.006-90.822 59.215-26.005 25.607-46.204 56.612-59.011 90.62-12.604 32.608-21.403 69.811-23.801 124.22C.702 355.671.1 373.073.1 512.1c0 139.03.602 156.431 3.001 211.043C5.5 777.549 14.306 814.957 26.91 847.367c13.002 34.406 33.202 65.21 59.207 90.816 25.606 26.003 56.612 46.214 90.619 59.014 32.608 12.602 69.811 21.402 124.227 23.802 54.605 2.406 72.014 3.002 211.041 3.002s156.428-.595 211.039-3.002c54.413-2.4 91.814-11.2 124.224-23.802 68.813-26.611 123.226-81.018 149.83-149.83 12.595-32.608 21.402-69.818 23.802-124.224 2.4-54.611 3.002-72.013 3.002-211.043 0-139.027-.205-156.429-2.605-211.041zm-92.211 418.083c-2.202 50.01-10.605 77.011-17.606 95.014-17.203 44.614-52.608 80.019-97.222 97.222-18.003 7.002-45.203 15.405-95.014 17.6-54.01 2.406-70.208 3.002-206.839 3.002-136.628 0-153.03-.595-206.845-3.002-50.01-2.195-77.014-10.598-95.018-17.6-22.2-8.205-42.406-21.203-58.808-38.208-17.003-16.608-30.006-36.608-38.211-58.81-7.001-18.003-15.401-45.21-17.597-95.021-2.407-54.01-3.001-70.214-3.001-206.842s.594-153.03 3.001-206.837c2.196-50.01 10.596-77.015 17.597-95.019 8.205-22.207 21.208-42.406 38.414-58.816 16.596-17.004 36.601-30.006 58.808-38.203 18.003-7.002 45.212-15.402 95.018-17.605 54.01-2.399 70.216-3 206.836-3 136.833 0 153.031.602 206.842 3 50.01 2.204 77.018 10.604 95.021 17.605 22.202 8.197 42.406 21.199 58.81 38.203 17.005 16.605 30.003 36.609 38.208 58.816 7.002 18.004 15.405 45.204 17.606 95.019 2.4 54.01 3.002 70.209 3.002 206.837s-.602 152.634-3.002 206.644z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M512.184 249.044c-145.224 0-263.052 117.82-263.052 263.052s117.828 263.05 263.052 263.05c145.235 0 263.052-117.818 263.052-263.05S657.418 249.044 512.184 249.044zm0 433.686c-94.214 0-170.635-76.413-170.635-170.634s76.421-170.635 170.635-170.635c94.221 0 170.636 76.413 170.636 170.635S606.405 682.73 512.184 682.73zM847.057 238.644c0 33.913-27.501 61.411-61.421 61.411-33.914 0-61.408-27.498-61.408-61.411 0-33.921 27.494-61.411 61.408-61.411 33.92 0 61.421 27.49 61.421 61.411z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 row">
            <div className="border-top col-lg-12">
              <div id="footer-accordion" className="accordion">
                <div className="border-0 no-bg-color card">
                  <div
                    className="mb-0 px-0 no-bg-color border-bottom-0 card-header"
                    id="headingOne"
                  >
                    <h5
                      className="d-flex cursor-pointer text-white font-semilight justify-content-between align-items-center collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                    >
                      <span className="w-100 font-size-24 font-semiBold">
                        Book home sample collection in Delhi/Gurgaon/Noida
                      </span>
                      <i className="fa fa-angle-down font-size-26 font-semiBold" />
                    </h5>
                  </div>
                  <div className="collapse">
                    <div className="px-0 card-body">
                      <div className="row">
                        <div className="mb-5 col-lg-12">
                          <ul className="footer-nav mb-2">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="/health/delhi/"
                              >
                                Service in Delhi
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/c-reactive-protein-crp-test-in-delhi/"
                                  >
                                    CRP Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/liver-function-lft-test-in-delhi/"
                                  >
                                    LFT Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/d-dimer-test-in-delhi/"
                                  >
                                    D Dimer Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/kidney-function-kft-test-in-delhi/"
                                  >
                                    KFT Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/hiv-test-in-delhi/"
                                  >
                                    HIV Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/vitamin-b-12-test-in-delhi/"
                                  >
                                    Vitamin B12 Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/complete-blood-count-cbc-test-in-delhi/"
                                  >
                                    CBC Test In Delhi
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Health Packages in Delhi</a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/full-body-package-in-delhi/"
                                  >
                                    Full Body Checkup In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/tc-dc-esr-hb-test-package-in-delhi/"
                                  >
                                    TC DC ESR HB Package In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/master-health-checkup-package-in-delhi/"
                                  >
                                    Master Health Checkup In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/women-health-checkup-package-in-delhi/"
                                  >
                                    Women Checkup In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/antenatal-panel-test-in-delhi/"
                                  >
                                    Antenatal Panel Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/fever-panel-test-in-delhi/"
                                  >
                                    Fever Panel Test In Delhi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/delhi/hepatitis-panel-test-in-delhi/"
                                  >
                                    Hepatitis Panel Test In Delhi
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Labs</a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/orange-health-rapidx-lab"
                                  >
                                    Orange Health (Rapidx Lab)
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/thyrocare"
                                  >
                                    Thyrocare
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/redcliffe"
                                  >
                                    Redcliffe Lab
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/mirage-lab"
                                  >
                                    Mirage Lab
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/crl-diagnostics"
                                  >
                                    CRL Diagnostics
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/pathkind-lab"
                                  >
                                    Pathkind Labs
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/metropolis"
                                  >
                                    Metropolis Lab
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/labs/healthians"
                                  >
                                    Healthians
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/health/">Latest Articles</a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/acidity-symptoms-complications-factors-home-remedies/"
                                  >
                                    Acidity Symptoms, Causes &amp; Treatment
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/blood-group-testing-procedure-precautions-how-to-check-blood-group/"
                                  >
                                    Blood Types &amp; Blood Groups
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/how-to-increase-platelet-count-naturally-through-supplements/"
                                  >
                                    How to Increase Platelet Count Naturally
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/phlebotomy-definition-methods-procedures-risks/"
                                  >
                                    Phlebotomy &amp; Phlebotomists
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/thyroid-in-women-symptoms-causes-treatment/"
                                  >
                                    Thyroid Symptoms &amp; Treatments In Women
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/b12-vitamin-foods-12-vitamin-b12-rich-food-for-vegetarians-non-vegetarians/"
                                  >
                                    Vitamin B12 Food Guide
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/how-to-increase-hemoglobin-levels-foods-supplements-more/"
                                  >
                                    Hemoglobin Food Guide
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="/health/gurgaon/"
                              >
                                Service in Gurgaon
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/c-reactive-protein-crp-test-in-gurgaon/"
                                  >
                                    CRP Test In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/liver-function-lft-test-in-gurgaon/"
                                  >
                                    LFT Test In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/kidney-function-kft-test-in-gurgaon/"
                                  >
                                    KFT Test In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/hiv-test-in-gurgaon/"
                                  >
                                    HIV Test In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/vitamin-b-12-test-in-gurgaon/"
                                  >
                                    Vitamin B12 Test In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/complete-blood-count-cbc-test-in-gurgaon/"
                                  >
                                    CBC Test In Gurgaon
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Health Packages in Gurgaon</a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/full-body-package-in-gurgaon/"
                                  >
                                    Full Body Checkup In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/tc-dc-esr-hb-test-package-in-gurgaon/"
                                  >
                                    TC DC ESR HB Package In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/women-health-checkup-package-in-gurgaon/"
                                  >
                                    Women Checkup In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/antenatal-panel-test-in-gurgaon/"
                                  >
                                    Antenatal Panel Test In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/fever-panel-test-in-gurgaon/"
                                  >
                                    Fever Panel Test In Gurgaon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/gurgaon/hepatitis-panel-test-in-gurgaon/"
                                  >
                                    Hepatitis Panel Test In Gurgaon
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Service in Noida</a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/noida/c-reactive-protein-crp-test-in-noida/"
                                  >
                                    CRP test In Noida
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/noida/complete-blood-count-cbc-test-in-noida/"
                                  >
                                    CBC Test In Noida
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Health Packages in Noida</a>
                              <ul className="sub-menu">
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/noida/full-body-package-in-noida/"
                                  >
                                    Full Body Checkup In Noida
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="/health/noida/fever-panel-test-in-noida/"
                                  >
                                    Fever Panel Test In Noida
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pt-5 footer-bottom border-top text-center col">
              <div className="row row">
                <div className=" text-lg-left align-self-center col-lg-5">
                  © Flebo.in 2021-2023. All Rights Reserved
                </div>
                <div className="footer-menu flex-wrap mt-4 mt-lg-0 justify-content-lg-end d-flex justify-content-center col-lg-7">
                  <a
                    className="align-self-center link"
                    href="/cancellation-refund-policy"
                  >
                    Cancellation &amp; Refund Policy
                  </a>
                  <a className="align-self-center link" href="/terms-conditions">
                    Terms &amp; Conditions
                  </a>
                  <a className="align-self-center link" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  <a
                    className="align-self-center scrollTop ml-md-4 mt-4 mt-md-0 py-3 py-md-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="Back to Top"
                    href="/"
                  >
                    <span className="w-15-px d-inline-block">
                      {" "}
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="img-fluid"
                        width={1024}
                        height={1024}
                        viewBox="0 0 1024 1024"
                      >
                        <g id="arrowUpIcon" />
                        <path
                          fill="#FFFFFF"
                          d="M929.435 387.139l-365.715-365.715c-28.562-28.565-74.873-28.565-103.438 0l-365.715 365.715c-28.565 28.565-28.565 74.875 0 103.44 28.565 28.567 74.875 28.567 103.44 0l240.85-240.853v701.131c0 40.395 32.747 73.143 73.143 73.143s73.143-32.747 73.143-73.143v-701.131l240.853 240.853c14.281 14.281 33.001 21.422 51.719 21.422s37.438-7.141 51.719-21.424c28.565-28.565 28.565-74.873 0-103.438z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" feedback cursor-pointer">
          <span className="feedback-btn">
            <span>Feedback</span>
          </span>
        </div>
      </footer>
      <div className="Toastify" />
    </div>

  );
}

export default App;
