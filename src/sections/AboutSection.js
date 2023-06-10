import React from 'react'

const AboutSection = () => {
    return (
        <div id="about-section" className="pt-5 row" style={{}}>
            <div className="my-3 container">
                <div className="justify-content-end row">
                    <div className="text-center col-lg-6 col-12">
                        <img loading="lazy" src="https://img.flebo.in/assets/images/about-phlebotomist-01.png"
                            alt="About Us" className="img-fluid w-75" />
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
    )
}

export default AboutSection