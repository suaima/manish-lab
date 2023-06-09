import React from 'react'

const Subscribe = () => {
    return (
        <>
            <section id="Subscribe" className="row py-4 bg-black mt-auto mx-0 z-index-0">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="my-2 align-items-center col-lg-6 col-md-6 col-sm-12">
                                <div className="d-flex">
                                    <div className="pl-0 pr-lg-5 w-90-px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024}
                                            viewBox="0 0 1024 1024" className="img-fluid">
                                            <path fill="#FFFFFF"
                                                d="M904 120h-60.001V0H180v120h-60v183.594l-120 135V1024h1024V438.594l-120-135V120zM294.543 721.337 60 927.655V516.113l234.543 205.224zM512 609.957l402.476 354.044H109.524L512 609.957zm217.457 111.38 234.544-205.224v411.542L729.457 721.337zM240 60h544v60H240V60zm603.999 120v361.389L684.023 681.368 512 530.045 339.977 681.367 180 541.39V180.001h663.999zM120 488.889l-47.49-41.554L120 393.906v94.983zm831.49-41.555L904 488.888v-94.983l47.49 53.429z" />
                                            <path fill="#FFFFFF"
                                                d="M240 240h544v59.999H240V240zM240 360h544v60.001H240V360zM240 480h182v59.999H240V480z" />
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
                            <div
                                className="my-4 pt-3 pt-lg-1 pt-sm-1  search-form align-items-center col-lg-6 col-md-6 col-sm-12">
                                <form autoComplete="off" className="row mx-sm-4 mx-md-0">
                                    <div className="col-12 px-0 py-1 col-lg-8 input_field bg-white btn-radius pr-lg-4">
                                        <input name="email" placeholder="Enter your email" type="text"
                                            className=" null form-control shadow-none ml-lg-2 my-2 my-lg-0 py-3 font-size-14 border-0 bg-white btn-radius form-control" />
                                    </div>
                                    <div className="col-12 px-0 col-lg-4 pl-lg-3 mt-3 mt-lg-0">
                                        <button className="btn btn-red btn-radius px-2 py-3 fullHeight w-100" type="submit">
                                            <span className="px-0">Subscribe Now</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe