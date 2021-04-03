import React from "react";

function ContactUs() {
    return (
        <div className="contact__us">
            <img src="./img/ContactUs.jpg" width="587px" height="670px" />
            <div className="container">
                <div className="contact__us--form">
                    <h1>Contact Us</h1>
                    <form action="" id="">
                        <div className="grid__input-a">
                            <h5>First Name</h5>
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="grid__input-b">
                            <h5>Last Name</h5>
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="grid__input-c">
                            <h5>Email</h5>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="grid__input-d">
                            <h5>Phone</h5>
                            <input type="text" placeholder="Phone" />
                        </div>
                        <div className="grid__input-e">
                            <h5>Messge</h5>
                            <textarea className="message" placeholder="Your message"></textarea>
                        </div>
                    </form>

                    <button className="button" form="">
                        <span>Send</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
