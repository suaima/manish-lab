import React from 'react'
import HeaderInner from '../sections/HeaderInner'
import Footer from '../sections/Footer'

const ContactUs = () => {
  return (
    <>
        <HeaderInner />
        <section id="Contact-Us" className="row my-4 records-listing">
  <div className="container">
    <div className="justify-content-center px-4 row">
      <div className="col-lg-10 col-md-12 col-sm-12">
        <div className="border rounded-5 overflow-hidden row">
          <div className="px-lg-5 px-md-5 py-lg-5 py-md-5 order-lg-2 col-lg-8 col-md-12 col-sm-12">
            <div className="px-lg-5 px-md-5 row">
              <div className="Contact-Form col-lg-12 col-md-12 col-sm-12">
                <h3 className="font-size-28 font-bold mt-0">
                  How Can we help you?
                </h3>
                <p className="font-size-16 font-regular">
                  You can reach us anytime{" "}
                  <a
                    href="mailto:customercare@flebo.in"
                    className="font-semilight"
                  >
                    customercare@flebo.in
                  </a>{" "}
                  with your grievances.
                </p>
                <form autoComplete="off" className="">
                  <div className="pt-4 mt-3">
                    <div className="form-group sp-formField w-100 SearchBar form-group mb-5 pb-3">
                      <select
                        name="requesting"
                        autoComplete="off"
                        className="null form-control text-black preffered_visit_citywise form-control"
                      >
                        <option />
                        <option value="Booking Related Query">
                          Booking Related Query
                        </option>
                        <option value="Payment Related Query">
                          Payment Related Query
                        </option>
                        <option value="Other Query">Other Query</option>
                      </select>
                      <span className="label font-size-18 font-regular family-roboto">
                        Reason
                      </span>
                    </div>
                    <div className="form-group sp-formField mb-5 d-flex flex-column position-relative pb-3">
                      <input
                        name="name"
                        autoComplete="off"
                        type="text"
                        className="null form-control sp-formField py-4 w-100 form-control"
                      />
                      <span className="label font-size-18 font-regular family-roboto">
                        Name<sup className="sp-red-color">*</sup>
                      </span>
                    </div>
                    <div className="form-group sp-formField mb-5 d-flex flex-column position-relative pb-3">
                      <input
                        min={10}
                        maxLength={10}
                        inputMode="numeric"
                        name="mobile"
                        autoComplete="off"
                        type="text"
                        className="null form-control sp-formField py-4 w-100 form-control"
                      />
                      <span className="label font-size-18 font-regular family-roboto">
                        Phone<sup className="sp-red-color">*</sup>
                      </span>
                    </div>
                    <div className="form-group sp-formField mb-5 d-flex flex-column position-relative pb-3">
                      <input
                        name="email"
                        autoComplete="off"
                        type="email"
                        className="null form-control sp-formField py-4 w-100 form-control"
                      />
                      <span className="label font-size-18 font-regular family-roboto">
                        Email
                      </span>
                    </div>
                    <div className="form-group sp-formField mb-5 d-flex flex-column position-relative pb-3">
                      <span className="label font-size-18 font-regular text-black">
                        Message
                      </span>
                      <textarea
                        name="message"
                        autoComplete="off"
                        className="px-2 py-2 outline-none border"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-red btn-radius w-100 mb-4 font-size-18 btn-more px-5 py-4 mt-3"
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="Contact-sidebar px-5 py-5 col-lg-4 col-md-12 col-sm-12">
            <div className="mb-5">
              <h3 className="text-white mt-0 mb-4">Get In Touch</h3>
              <p>
                Your one-stop solution for convenient booking, painless sample
                collection and timely reporting of all medical tests. Your
                diagnosis is our priority, always. Taking a step towards healthy
                living? We are here for you!
              </p>
            </div>
            <div className="contact-details">
              <div className="d-flex mb-5">
                <div className="col-1 pl-0 mr-4">
                  <span className="w-20-px d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      viewBox="0 0 1024 1024"
                      className="img-fluid"
                    >
                      <path
                        fill="#ffffff"
                        d="M597.582 622.808c-25.478 17.309-55.07 26.458-85.58 26.458s-60.101-9.149-85.577-26.458L6.818 337.728A152.69 152.69 0 0 1 0 332.802v467.136C0 853.496 42.65 896 94.266 896h835.47c52.556 0 94.262-43.464 94.262-96.062V332.8a149.44 149.44 0 0 1-6.83 4.937L597.58 622.809z"
                      />
                      <path
                        fill="#ffffff"
                        d="m40.101 295.722 419.606 277.331c15.884 10.499 34.089 15.747 52.291 15.747 18.206 0 36.413-5.25 52.296-15.747L983.9 295.722c25.114-16.586 40.1-44.344 40.1-74.303 0-51.513-42.274-93.42-94.234-93.42H94.235c-51.96.002-94.234 41.909-94.234 93.47 0 29.909 14.992 57.668 40.1 74.253z"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <span className="contact-label d-block">Reach out to us</span>
                  <p className="mb-2">
                    Flebo.in is your one-stop solution for all tests medical
                  </p>
                  <a
                    href="mailto:customercare@flebo.in"
                    className="font-semilight"
                  >
                    customercare@flebo.in
                  </a>
                </div>
              </div>
              <div className="d-flex mb-5">
                <div className="col-1 pl-0 mr-4">
                  <span className="w-20-px d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      viewBox="0 0 1024 1024"
                      className="img-fluid"
                    >
                      <path
                        fill="#ffffff"
                        d="M512 0C300.224 0 128 172.224 128 384c0 266.176 346.624 615.872 361.344 630.656 6.272 6.208 14.464 9.344 22.656 9.344s16.384-3.136 22.656-9.344C549.376 999.872 896 650.176 896 384 896 172.224 723.776 0 512 0zm0 945.728C435.584 863.936 192 587.328 192 384c0-176.448 143.552-320 320-320s320 143.552 320 320c0 203.136-243.584 479.936-320 561.728z"
                      />
                      <path
                        fill="#ffffff"
                        d="M512 192c-105.856 0-192 86.144-192 192s86.144 192 192 192 192-86.144 192-192-86.144-192-192-192zm0 320c-70.592 0-128-57.408-128-128s57.408-128 128-128 128 57.408 128 128-57.408 128-128 128z"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <span className="contact-label d-block">Office</span>
                  <p className="mb-2">Come say hello our office HQ</p>
                  <p className="mb-2 font-semilight">
                    320, Udyog Vihar, Phase IV, Gurugram - 122016, Haryana,
                    India
                  </p>
                </div>
              </div>
              <div className="d-flex mb-5">
                <div className="col-1 pl-0 mr-4">
                  <span className="w-20-px d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1024}
                      height={1024}
                      viewBox="0 0 1024 1024"
                      className="img-fluid"
                    >
                      <path
                        fill="#ffffff"
                        d="M941.838 672.142c-62.694 0-124.256-9.805-182.586-29.082-28.582-9.752-63.725-.806-81.171 17.107l-115.136 86.918c-133.528-71.277-215.779-153.501-286.083-286.026l84.36-112.138c21.917-21.888 29.779-53.862 20.36-83.862-19.36-58.64-29.195-120.168-29.195-182.888C352.39 36.861 315.529 0 270.222 0H82.168C36.862 0 0 36.861 0 82.168 0 601.502 422.501 1024 941.837 1024c45.306 0 82.163-36.864 82.163-82.17V754.304c0-45.306-36.864-82.163-82.163-82.163z"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <span className="contact-label d-block">Phone</span>
                  <p className="mb-2">All Days - 6am - 12am</p>
                  <a href="tel:+911244550000" className="font-semilight">
                    012 44 55 0000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <Footer  />
    </>

  )
}

export default ContactUs