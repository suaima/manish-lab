import React from 'react'
import Subscribe from './Subscribe';

const Footer = (props) => {
    return (
        <>
            <footer id="footer" className="row mt-auto flex-column">
                {
                    props.subscribeDiv && (<Subscribe />)
                }
                <div className="py-5 container">
                    <div className="row">
                        <div className="col-12 mt-3 col-lg-4">
                            <div className="row">
                                <div className="logo-text col">
                                    <img loading="lazy" src="https://img.flebo.in/assets/flebo-white-logo-new.svg"
                                        alt="Flebo.in" className="img-fluid footer-logo" />
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                        viewBox="0 0 1024 1024" className="img-fluid">
                                                        <path fill="#FFFFFF"
                                                            d="m831.019 891.87-38.234-114.721a115.61 115.61 0 0 0-89.005-77.179l-110.378-20.086v-8.554c19.21-11.149 35.923-26.064 49.235-43.718h33.348c27.317 0 49.549-22.232 49.549-49.549V379.869c0-118.387-96.324-214.709-214.711-214.709s-214.709 96.322-214.709 214.709v115.614c0 31.842 22.643 58.483 52.668 64.693 9.266 47.468 38.929 87.635 79.46 111.154v8.554L317.848 699.97c-41.537 7.562-75.643 37.128-88.99 77.179l-6.606 19.835-56.254-56.252c-6.441-6.442-6.441-16.931 0-23.371l65.239-65.222-122.451-122.451-73.728 73.728C13.224 625.251 1.2 654.285 1.2 685.17s12.024 59.904 33.858 81.739l223.217 223.215c21.833 21.835 50.869 33.875 81.754 33.875s59.904-12.04 81.225-33.378l80.452-73.713-25.088-25.038H831.02zM692.498 578.064c0 9.116-7.414 16.515-16.515 16.515h-13.892a163.964 163.964 0 0 0 10.769-34.402c7.068-1.471 13.576-4.277 19.637-7.813v25.7zm-16.515-54.141v-56.88c9.826 5.73 16.515 16.269 16.515 28.441s-6.689 22.709-16.515 28.439zm-330.323 0c-9.828-5.73-16.517-16.266-16.517-28.439s6.689-22.711 16.517-28.441v56.88zm0-111.021v18.861a65.53 65.53 0 0 0-16.517 6.839V379.87c0-100.171 81.508-181.677 181.677-181.677 100.171 0 181.677 81.506 181.677 181.677v58.732c-5.12-2.989-10.637-5.318-16.515-6.839v-18.861h-16.517c-48.838 0-94.753-19.027-129.305-53.562l-19.341-19.341-19.341 19.341c-34.55 34.535-80.467 53.562-129.305 53.562h-16.515zm33.032 115.614v-83.208c49.599-3.734 95.842-24.197 132.129-58.699 36.287 34.502 82.532 54.982 132.129 58.699v83.208c0 24.079-6.573 46.607-17.87 66.063H510.821v33.034h87.105c-23.286 20.495-53.725 33.032-87.105 33.032-72.852 0-132.129-59.277-132.129-132.129zm181.677 157.548v.776l-49.549 49.549-49.549-49.549v-.776c15.658 4.922 32.289 7.612 49.549 7.612s33.892-2.691 49.549-7.612zM260.171 787.588c9.53-28.607 33.892-49.729 63.571-55.148l115.448-20.975 71.63 71.63 71.615-71.615 115.431 20.977c29.679 5.416 54.041 26.524 63.571 55.146l23.766 71.236H443.584l-64.329-64.331-71.482 64.66c-6.227 6.259-17.112 6.259-23.354 0l-36.071-36.071 11.824-35.509zM108.769 576.395l75.743 75.743-17.936 17.937-75.743-75.743 17.937-17.937zm289.61 390.408c-15.591 15.558-36.335 24.164-58.383 24.164-22.051 0-42.794-8.606-58.403-24.197L58.378 743.571c-15.591-15.591-24.18-36.335-24.18-58.383 0-22.066 8.588-42.81 24.18-58.401l9.084-9.085 75.743 75.743-.595.595c-19.307 19.323-19.307 50.753 0 70.079l118.437 118.438c9.364 9.347 21.802 14.517 35.047 14.517 13.247 0 25.683-5.153 34.437-13.939l1.238-1.107 76.09 76.09-9.48 8.687zm33.857-31.049-75.924-75.924 21.818-19.722 75.793 75.793-21.687 19.853zM973.272.001H742.046c-27.319 0-49.549 22.231-49.549 49.548v132.129c0 27.318 22.23 49.548 49.549 49.548h44.115l-17.079 99.609 159.38-99.609h44.81c27.317 0 49.549-22.231 49.549-49.548V49.549c0-27.318-22.232-49.548-49.549-49.548zm16.515 181.677c0 9.1-7.414 16.516-16.515 16.516h-54.289l-104.895 65.552 11.249-65.552h-83.29c-9.101 0-16.517-7.416-16.517-16.516V49.549c0-9.1 7.416-16.516 16.517-16.516h231.226c9.101 0 16.515 7.416 16.515 16.516v132.129z" />
                                                        <path fill="#FFFFFF"
                                                            d="M956.755 66.065H758.561v33.032h198.194V66.065zM890.69 132.129H758.561v33.032H890.69v-33.032zM956.753 132.129h-33.032v33.032h33.032v-33.032zM510.816 49.554c-215.8 0-401.689 149.273-450.015 357.491l-31.298-52.174-28.325 16.994L59.232 468.6l96.735-58.054-16.995-28.326-44.759 26.857C141.02 218.596 312.308 82.585 510.816 82.585c43.387 0 86.197 6.441 127.24 19.159l9.778-31.546c-44.213-13.708-90.31-20.645-137.018-20.645zM1014.785 365.704 918.05 307.65l-58.037 96.751 28.326 16.996 28.903-48.178c15.21 44.511 22.99 91.071 22.99 138.785 0 98.223-34.023 194.246-95.777 270.371l25.65 20.809c66.525-81.985 103.158-185.409 103.158-291.18 0-50.522-8.142-99.855-24.014-147.092l48.542 29.119 16.994-28.326z" />
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                        viewBox="0 0 1024 1024" className="img-fluid">
                                                        <path fill="#FFFFFF"
                                                            d="M26.021 808.301a15.381 15.381 0 0 0 2.176 1.735c18.919 19.433 45.075 30.422 72.409 30.417h599.375c27.3.006 53.435-10.951 72.354-30.345a14.707 14.707 0 0 0 5.008-5.487c15.043-17.765 23.283-40.174 23.258-63.316v-70.722h24.321c17.586-.027 33.131-11.249 38.46-27.752h43.421c33.419-.041 60.499-26.73 60.54-59.655v-17.468h3.903c29.128-.033 52.734-23.285 52.753-51.981v-49.633c-.019-28.703-23.625-51.955-52.753-51.988h-3.903v-58.685c.041-72.016-46.032-136.214-114.953-160.186-68.915-23.966-145.675-2.487-191.513 53.598H100.606c-50.551.073-93.229 37.061-99.756 86.462a14.694 14.694 0 0 0-.676 7.013A99.156 99.156 0 0 0 0 345.967v395.351c-.027 23.115 8.194 45.51 23.224 63.275a14.249 14.249 0 0 0 2.798 3.708zm809.264-177.457c-.008 5.634-4.641 10.205-10.371 10.205h-39.658c-5.717 0-10.364-4.571-10.364-10.205v-5.555c0-5.64 4.647-10.211 10.364-10.219h39.658c5.717.008 10.364 4.579 10.371 10.219v5.555zm158.742-166.75v49.633c-.019 12.388-10.209 22.441-22.789 22.449h-29.087v-94.538h29.087c12.58.008 22.77 10.06 22.789 22.457zM794.95 213.084c78.614.086 142.334 62.866 142.415 140.337v58.685h-10.203c-8.275 0-14.983 6.61-14.983 14.769v124.07c0 8.153 6.708 14.763 14.983 14.763h10.203v17.468c-.027 16.631-13.698 30.102-30.567 30.121h-43.435c-5.315-16.512-20.868-27.733-38.448-27.758h-39.658c-22.259.025-40.301 17.81-40.328 39.751v5.555c.027 16.359 10.215 31.037 25.687 36.993v73.481a68.343 68.343 0 0 1-8.656 33.332L581.875 594.1c-3.742-3.831-9.286-5.389-14.508-4.077-5.228 1.306-9.332 5.292-10.758 10.418-1.42 5.126.068 10.607 3.889 14.361L742.27 797.033c-12.203 9.031-27.045 13.907-42.297 13.894H100.599c-15.29.006-30.179-4.888-42.384-13.959l180.774-182.193a14.614 14.614 0 0 0-.247-20.886c-5.918-5.692-15.397-5.593-21.189.238L38.554 774.546a68.257 68.257 0 0 1-8.582-33.228V370.012l310.945 259.447c34.302 28.782 84.739 28.761 119.016-.052l111.272-92.987c8.835 17.903 27.26 29.269 47.458 29.288h44.071c8.273 0 14.981-6.61 14.981-14.763v-124.07c0-8.159-6.708-14.769-14.981-14.769h-10.203v-58.685c.087-77.478 63.799-140.251 142.421-140.337zM647.749 441.638v94.538h-29.087c-12.58-.008-22.775-10.06-22.789-22.449v-49.633c.014-12.396 10.209-22.449 22.789-22.457h29.087zM100.606 276.366h540.796a166.716 166.716 0 0 0-18.845 77.055v58.685h-3.895c-29.128.025-52.726 23.285-52.761 51.988v38.035L440.552 606.892c-23.123 19.427-57.139 19.441-80.276.033L31.324 332.45c6.587-32.575 35.582-56.038 69.282-56.084z" />
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
                                            <a rel="noreferrer" target="_blank" className="nav-link"
                                                href="/health/press-coverages">
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
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/delhi/">
                                                Delhi
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/gurgaon/">
                                                Gurgaon
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/noida/">
                                                Noida
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/chennai/">
                                                Chennai
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/bangalore/">
                                                Bangalore
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/hyderabad/">
                                                Hyderabad
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/mumbai/">
                                                Mumbai
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" className="nav-link" href="/health/kolkata/">
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
                                    <a className="btn-white-holo btn btn-radius px-4 py-4 d-block" href="/#book-a-slot">
                                        <span className="px-3">Book a Home Collection</span>
                                    </a>
                                </div>
                                <div className="col-12 mt-4 hidden col">
                                    <a className="btn btn-white-holo px-4 py-4 d-block" href="/">
                                        <span className="px-3">Newsletter</span>
                                    </a>
                                </div>
                                <div className="col-12 sm-icons mt-4 justify-content-center d-flex col">
                                    <a href="https://www.facebook.com/Flebo-106073985346129/?modal=admin_todo_tour&notif_id=1645431497830241&notif_t=page_invite&ref=notif"
                                        rel="noreferrer" target="_blank" className="mr-4" title="Facebook">
                                        <span className="w-25-px d-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#FFFFFF"
                                                    d="M674.537 170.027h93.485V7.211C751.894 4.992 696.425 0 631.829 0 497.045 0 404.714 84.779 404.714 240.597V384H255.978v182.016h148.736V1024h182.357V566.059h142.717l22.656-182.016H587.028V258.645c.043-52.608 14.208-88.618 87.508-88.618z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://twitter.com/InFlebo" rel="noreferrer" target="_blank" className="mr-4">
                                        <span className="w-25-px d-block">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="img-fluid"
                                                width={1024} height={1024} viewBox="0 0 1024 1024">
                                                <g id="twitterIcon" />
                                                <path fill="#FFFFFF"
                                                    d="M1097.143 149.139c-43.52 19.090-89.893 31.744-138.24 37.888 49.737-29.696 87.698-76.361 105.545-132.608-46.373 27.648-97.573 47.177-152.137 58.075-44.032-46.885-106.789-75.922-175.25-75.922-132.827 0-239.762 107.813-239.762 239.982 0 19.017 1.609 37.303 5.559 54.711-199.461-9.728-375.954-105.326-494.519-250.953-20.699 35.913-32.841 77.019-32.841 121.271 0 83.090 42.789 156.745 106.569 199.387-38.546-0.731-76.361-11.922-108.398-29.55 0 0.731 0 1.682 0 2.633 0 116.59 83.163 213.431 192.219 235.739-19.529 5.339-40.814 7.899-62.903 7.899-15.36 0-30.866-0.878-45.422-4.096 31.086 95.013 119.296 164.864 224.183 167.131-81.627 63.854-185.271 102.327-297.472 102.327-19.675 0-38.546-0.878-57.417-3.291 106.277 68.535 232.229 107.666 368.055 107.666 441.49 0 682.862-365.714 682.862-682.715 0-10.606-0.366-20.846-0.878-31.013 47.616-33.792 87.625-75.995 120.247-124.562z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCexu9kkuSxz9dY-HW8l07iA" rel="noreferrer"
                                        target="_blank" className="mr-4" title="Youtube">
                                        <span className="w-25-px d-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#FFFFFF"
                                                    d="M1013.6 307.3s-10-70.6-40.8-101.6c-39-40.8-82.6-41-102.6-43.4C727 151.9 512 151.9 512 151.9h-.4s-215 0-358.2 10.4c-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6S0 390.1 0 473.1v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-.2-82.8-10.4-165.8-10.4-165.8zM406 644.9V357.1l276.6 144.4L406 644.9z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://www.linkedin.com/company/flebo-in" rel="noreferrer" target="_blank"
                                        className="mr-4">
                                        <span className="w-25-px d-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#FFFFFF"
                                                    d="M1023.741 1024v-.045h.256V648.403c0-183.721-39.552-325.247-254.336-325.247-103.258 0-172.547 56.661-200.835 110.379h-2.987v-93.227H362.19v683.647h212.054V685.44c0-89.131 16.896-175.318 127.276-175.318 108.755 0 110.381 101.718 110.381 181.033V1024h211.84zM16.909 340.351h212.309V1024H16.909V340.351zM122.968 0C55.086 0 .003 55.083.003 122.965s55.083 124.118 122.965 124.118c67.883 0 122.966-56.235 122.966-124.118C245.891 55.083 190.808 0 122.968 0z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://instagram.com/flebo.in?utm_medium=copy_link" rel="noreferrer"
                                        target="_blank">
                                        <span className="w-25-px d-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                                className="img-fluid" viewBox="0 0 1024 1024">
                                                <path fill="#FFFFFF"
                                                    d="M1021.297 301.056c-2.4-54.409-11.194-91.814-23.802-124.227-12.998-34.405-33.005-65.208-59.213-90.815-25.606-26.005-56.614-46.212-90.618-59.011C815.062 14.399 777.853 5.6 723.446 3.202 668.63.6 651.228-.002 512.199-.002 373.172-.002 355.77.6 301.158 2.999c-54.409 2.399-91.815 11.205-124.22 23.802-34.413 13.003-65.216 33.006-90.822 59.215-26.005 25.607-46.204 56.612-59.011 90.62-12.604 32.608-21.403 69.811-23.801 124.22C.702 355.671.1 373.073.1 512.1c0 139.03.602 156.431 3.001 211.043C5.5 777.549 14.306 814.957 26.91 847.367c13.002 34.406 33.202 65.21 59.207 90.816 25.606 26.003 56.612 46.214 90.619 59.014 32.608 12.602 69.811 21.402 124.227 23.802 54.605 2.406 72.014 3.002 211.041 3.002s156.428-.595 211.039-3.002c54.413-2.4 91.814-11.2 124.224-23.802 68.813-26.611 123.226-81.018 149.83-149.83 12.595-32.608 21.402-69.818 23.802-124.224 2.4-54.611 3.002-72.013 3.002-211.043 0-139.027-.205-156.429-2.605-211.041zm-92.211 418.083c-2.202 50.01-10.605 77.011-17.606 95.014-17.203 44.614-52.608 80.019-97.222 97.222-18.003 7.002-45.203 15.405-95.014 17.6-54.01 2.406-70.208 3.002-206.839 3.002-136.628 0-153.03-.595-206.845-3.002-50.01-2.195-77.014-10.598-95.018-17.6-22.2-8.205-42.406-21.203-58.808-38.208-17.003-16.608-30.006-36.608-38.211-58.81-7.001-18.003-15.401-45.21-17.597-95.021-2.407-54.01-3.001-70.214-3.001-206.842s.594-153.03 3.001-206.837c2.196-50.01 10.596-77.015 17.597-95.019 8.205-22.207 21.208-42.406 38.414-58.816 16.596-17.004 36.601-30.006 58.808-38.203 18.003-7.002 45.212-15.402 95.018-17.605 54.01-2.399 70.216-3 206.836-3 136.833 0 153.031.602 206.842 3 50.01 2.204 77.018 10.604 95.021 17.605 22.202 8.197 42.406 21.199 58.81 38.203 17.005 16.605 30.003 36.609 38.208 58.816 7.002 18.004 15.405 45.204 17.606 95.019 2.4 54.01 3.002 70.209 3.002 206.837s-.602 152.634-3.002 206.644z" />
                                                <path fill="#FFFFFF"
                                                    d="M512.184 249.044c-145.224 0-263.052 117.82-263.052 263.052s117.828 263.05 263.052 263.05c145.235 0 263.052-117.818 263.052-263.05S657.418 249.044 512.184 249.044zm0 433.686c-94.214 0-170.635-76.413-170.635-170.634s76.421-170.635 170.635-170.635c94.221 0 170.636 76.413 170.636 170.635S606.405 682.73 512.184 682.73zM847.057 238.644c0 33.913-27.501 61.411-61.421 61.411-33.914 0-61.408-27.498-61.408-61.411 0-33.921 27.494-61.411 61.408-61.411 33.92 0 61.421 27.49 61.421 61.411z" />
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
                                    <div className="mb-0 px-0 no-bg-color border-bottom-0 card-header" id="headingOne">
                                        <h5 className="d-flex cursor-pointer text-white font-semilight justify-content-between align-items-center collapsed"
                                            data-toggle="collapse" data-target="#collapseOne" aria-expanded="false">
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
                                                            <a target="_blank" rel="noreferrer" href="/health/delhi/">
                                                                Service in Delhi
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/c-reactive-protein-crp-test-in-delhi/">
                                                                        CRP Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/liver-function-lft-test-in-delhi/">
                                                                        LFT Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/d-dimer-test-in-delhi/">
                                                                        D Dimer Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/kidney-function-kft-test-in-delhi/">
                                                                        KFT Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/hiv-test-in-delhi/">
                                                                        HIV Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/vitamin-b-12-test-in-delhi/">
                                                                        Vitamin B12 Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/complete-blood-count-cbc-test-in-delhi/">
                                                                        CBC Test In Delhi
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">Health Packages in Delhi</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/full-body-package-in-delhi/">
                                                                        Full Body Checkup In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/tc-dc-esr-hb-test-package-in-delhi/">
                                                                        TC DC ESR HB Package In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/master-health-checkup-package-in-delhi/">
                                                                        Master Health Checkup In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/women-health-checkup-package-in-delhi/">
                                                                        Women Checkup In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/antenatal-panel-test-in-delhi/">
                                                                        Antenatal Panel Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/fever-panel-test-in-delhi/">
                                                                        Fever Panel Test In Delhi
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/delhi/hepatitis-panel-test-in-delhi/">
                                                                        Hepatitis Panel Test In Delhi
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">Labs</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/labs/orange-health-rapidx-lab">
                                                                        Orange Health (Rapidx Lab)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer" href="/labs/thyrocare">
                                                                        Thyrocare
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer" href="/labs/redcliffe">
                                                                        Redcliffe Lab
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer" href="/labs/mirage-lab">
                                                                        Mirage Lab
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/labs/crl-diagnostics">
                                                                        CRL Diagnostics
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/labs/pathkind-lab">
                                                                        Pathkind Labs
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer" href="/labs/metropolis">
                                                                        Metropolis Lab
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer" href="/labs/healthians">
                                                                        Healthians
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/health/">Latest Articles</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/acidity-symptoms-complications-factors-home-remedies/">
                                                                        Acidity Symptoms, Causes &amp; Treatment
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/blood-group-testing-procedure-precautions-how-to-check-blood-group/">
                                                                        Blood Types &amp; Blood Groups
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/how-to-increase-platelet-count-naturally-through-supplements/">
                                                                        How to Increase Platelet Count Naturally
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/phlebotomy-definition-methods-procedures-risks/">
                                                                        Phlebotomy &amp; Phlebotomists
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/thyroid-in-women-symptoms-causes-treatment/">
                                                                        Thyroid Symptoms &amp; Treatments In Women
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/b12-vitamin-foods-12-vitamin-b12-rich-food-for-vegetarians-non-vegetarians/">
                                                                        Vitamin B12 Food Guide
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/how-to-increase-hemoglobin-levels-foods-supplements-more/">
                                                                        Hemoglobin Food Guide
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a target="_blank" rel="noreferrer" href="/health/gurgaon/">
                                                                Service in Gurgaon
                                                            </a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/c-reactive-protein-crp-test-in-gurgaon/">
                                                                        CRP Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/liver-function-lft-test-in-gurgaon/">
                                                                        LFT Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/kidney-function-kft-test-in-gurgaon/">
                                                                        KFT Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/hiv-test-in-gurgaon/">
                                                                        HIV Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/vitamin-b-12-test-in-gurgaon/">
                                                                        Vitamin B12 Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/complete-blood-count-cbc-test-in-gurgaon/">
                                                                        CBC Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">Health Packages in Gurgaon</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/full-body-package-in-gurgaon/">
                                                                        Full Body Checkup In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/tc-dc-esr-hb-test-package-in-gurgaon/">
                                                                        TC DC ESR HB Package In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/women-health-checkup-package-in-gurgaon/">
                                                                        Women Checkup In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/antenatal-panel-test-in-gurgaon/">
                                                                        Antenatal Panel Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/fever-panel-test-in-gurgaon/">
                                                                        Fever Panel Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/gurgaon/hepatitis-panel-test-in-gurgaon/">
                                                                        Hepatitis Panel Test In Gurgaon
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">Service in Noida</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/noida/c-reactive-protein-crp-test-in-noida/">
                                                                        CRP test In Noida
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/noida/complete-blood-count-cbc-test-in-noida/">
                                                                        CBC Test In Noida
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="/">Health Packages in Noida</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/noida/full-body-package-in-noida/">
                                                                        Full Body Checkup In Noida
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a target="_blank" rel="noreferrer"
                                                                        href="/health/noida/fever-panel-test-in-noida/">
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
                                <div
                                    className="footer-menu flex-wrap mt-4 mt-lg-0 justify-content-lg-end d-flex justify-content-center col-lg-7">
                                    <a className="align-self-center link" href="/cancellation-refund-policy">
                                        Cancellation &amp; Refund Policy
                                    </a>
                                    <a className="align-self-center link" href="/terms-conditions">
                                        Terms &amp; Conditions
                                    </a>
                                    <a className="align-self-center link" href="/privacy-policy">
                                        Privacy Policy
                                    </a>
                                    <a className="align-self-center scrollTop ml-md-4 mt-4 mt-md-0 py-3 py-md-2"
                                        data-toggle="tooltip" data-placement="top" data-original-title="Back to Top" href="/">
                                        <span className="w-15-px d-inline-block">
                                            {" "}
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="img-fluid"
                                                width={1024} height={1024} viewBox="0 0 1024 1024">
                                                <g id="arrowUpIcon" />
                                                <path fill="#FFFFFF"
                                                    d="M929.435 387.139l-365.715-365.715c-28.562-28.565-74.873-28.565-103.438 0l-365.715 365.715c-28.565 28.565-28.565 74.875 0 103.44 28.565 28.567 74.875 28.567 103.44 0l240.85-240.853v701.131c0 40.395 32.747 73.143 73.143 73.143s73.143-32.747 73.143-73.143v-701.131l240.853 240.853c14.281 14.281 33.001 21.422 51.719 21.422s37.438-7.141 51.719-21.424c28.565-28.565 28.565-74.873 0-103.438z" />
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
        </>
    )
}

export default Footer