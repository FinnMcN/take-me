import React, { useState } from "react";

function Footer() {
    const displayLinks = (e) => {
        if (window.innerWidth <= 991) {
            if (e.target.classList.contains("active")) {
                e.target.classList.remove("active");
            } else {
                e.target.classList.add("active");
            }
        }
    };

    return (
        <section className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="links__block">
                        <div className="links__column">
                            <h5 onClick={(e) => displayLinks(e)}>Company</h5>
                            <div className="links">
                                <a href="#">About Us</a>
                                <a href="#">Careers</a>
                                <a href="#">Contact Us</a>
                                <a href="#">Affiliates</a>
                                <a href="#">News</a>
                                <a href="#">Our App</a>
                                <a href="#">Site Map</a>
                            </div>
                        </div>
                        <div className="links__column">
                            <h5 onClick={(e) => displayLinks(e)}>Useful Links</h5>
                            <div className="links">
                                <a href="#">Travel Safe</a>
                                <a href="#">Stay Healthy</a>
                                <a href="#">Flight Monitor</a>
                                <a href="#">Booking List</a>
                                <a href="#">Lost Lugage</a>
                                <a href="#">World Clock</a>
                            </div>
                        </div>
                        <div className="links__column">
                            <h5 onClick={(e) => displayLinks(e)}>For Companies</h5>
                            <div className="links">
                                <a href="#">Advertise With Us</a>
                                <a href="#">How It Works</a>
                                <a href="#">Pricing Models</a>
                                <a href="#">VAT Numbers</a>
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <h5>Stay in Touch</h5>
                        <div className="email__form">
                            <input type="text" placeholder="Your Email" />
                            <button className="button">
                                <span>Subscribe</span>
                            </button>
                        </div>
                        <div className="social__media">
                            <a href="#">
                                <svg
                                    className="twitter"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14px"
                                    height="12px">
                                    <path
                                        fillRule="evenodd"
                                        fill="rgb(134, 134, 134)"
                                        d="M13.999,1.527 C13.478,1.767 12.922,1.925 12.353,1.995 C12.955,1.621 13.403,1.038 13.615,0.352 C13.053,0.697 12.435,0.942 11.792,1.073 C11.251,0.475 10.489,0.136 9.691,0.137 C8.925,0.142 8.191,0.458 7.653,1.014 C7.114,1.570 6.814,2.323 6.819,3.105 C6.819,3.333 6.844,3.560 6.893,3.782 C4.576,3.659 2.421,2.530 0.973,0.681 C0.211,2.035 0.597,3.761 1.862,4.643 C1.405,4.628 0.959,4.501 0.561,4.272 L0.561,4.310 C0.555,5.715 1.518,6.931 2.867,7.220 C2.443,7.339 2.000,7.357 1.570,7.272 C1.938,8.474 3.018,9.303 4.252,9.333 C3.239,10.156 1.982,10.604 0.686,10.603 C0.460,10.681 0.214,10.666 0.000,10.561 C1.309,11.434 2.838,11.898 4.401,11.897 C6.587,11.897 8.681,11.004 10.217,9.418 C11.752,7.831 12.601,5.683 12.574,3.453 C12.574,3.324 12.574,3.196 12.565,3.068 C13.129,2.646 13.615,2.124 13.999,1.527 Z"
                                    />
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    className="instagram"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px">
                                    <path
                                        fillRule="evenodd"
                                        fill="rgb(134, 134, 134)"
                                        d="M14.672,14.732 C13.827,15.573 12.619,15.994 11.291,15.994 L4.710,15.994 C3.381,15.994 2.173,15.573 1.328,14.732 C0.423,13.889 -0.000,12.686 -0.000,11.303 L-0.000,4.686 C-0.000,1.919 1.871,-0.006 4.710,-0.006 L11.351,-0.006 C12.739,-0.006 13.886,0.475 14.732,1.317 C15.577,2.160 16.000,3.302 16.000,4.686 L16.000,11.303 C16.000,12.686 15.517,13.889 14.672,14.732 ZM14.000,4.980 C14.000,4.096 13.723,3.377 13.226,2.824 C12.673,2.271 11.954,1.994 11.014,1.994 L4.931,1.994 C4.046,1.994 3.272,2.271 2.774,2.768 C2.277,3.267 2.000,4.040 2.000,4.925 L2.000,11.008 C2.000,11.893 2.277,12.667 2.830,13.220 C3.383,13.718 4.102,13.994 4.986,13.994 L11.014,13.994 C11.899,13.994 12.673,13.718 13.170,13.220 C13.723,12.723 14.000,11.949 14.000,11.063 L14.000,4.980 ZM12.000,4.994 C11.437,4.994 11.000,4.557 11.000,3.994 C11.000,3.432 11.437,2.995 12.000,2.995 C12.562,2.995 13.000,3.432 13.000,3.994 C13.000,4.557 12.562,4.994 12.000,4.994 ZM7.971,11.994 C5.752,11.994 3.999,10.171 3.999,7.994 C3.999,5.759 5.810,3.994 7.971,3.994 C10.131,3.994 12.000,5.759 12.000,7.994 C12.000,10.229 10.190,11.994 7.971,11.994 ZM8.000,5.995 C6.896,5.995 5.999,6.890 5.999,7.994 C5.999,9.099 6.896,9.995 8.000,9.995 C9.104,9.995 10.000,9.099 10.000,7.994 C10.000,6.890 9.104,5.995 8.000,5.995 Z"
                                    />
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    className="facebook"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8px"
                                    height="15px">
                                    <path
                                        fillRule="evenodd"
                                        fill="rgb(134, 134, 134)"
                                        d="M5.188,14.989 L5.188,8.151 L7.544,8.151 L7.896,5.485 L5.188,5.485 L5.188,3.784 C5.188,3.013 5.408,2.487 6.544,2.487 L7.992,2.486 L7.992,0.103 C7.741,0.070 6.881,-0.002 5.881,-0.002 C3.792,-0.002 2.363,1.240 2.363,3.521 L2.363,5.485 L0.001,5.485 L0.001,8.151 L2.363,8.151 L2.363,14.989 L5.188,14.989 Z"
                                    />
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    className="google"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21px"
                                    height="16px">
                                    <path
                                        fillRule="evenodd"
                                        fill="rgb(134, 134, 134)"
                                        d="M19.462,8.411 L19.462,9.939 L18.143,9.939 L18.143,8.411 L16.605,8.411 L16.605,7.102 L18.143,7.102 L18.143,5.575 L19.462,5.575 L19.462,7.102 L21.000,7.102 L21.000,8.411 L19.462,8.411 ZM8.058,15.995 C3.608,15.995 -0.000,12.413 -0.000,7.995 C-0.000,3.577 3.608,-0.005 8.058,-0.005 C10.254,-0.005 12.244,0.867 13.697,2.281 L11.877,4.245 C10.903,3.268 9.552,2.662 8.058,2.662 C5.091,2.662 2.686,5.049 2.686,7.995 C2.686,10.941 5.091,13.328 8.058,13.328 C10.464,13.328 12.499,11.759 13.184,9.595 L8.595,9.595 L8.595,7.106 L16.116,7.106 L16.116,7.106 L16.116,9.595 C15.370,13.247 11.956,15.995 8.058,15.995 Z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="copyright">© 2017 TakeMe Free UI Kit</div>
                    <div className="policy">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
