import React from "react";

function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="subscribe__text">
                    <h1 className="subscribe-title">Subscribe to our newsletter</h1>
                    <p className="subscribe-desc">
                        And receive all the latest news, discounts and updates about the most
                        visited locations from around the globe, daily.
                    </p>
                </div>
                <button className="button">
                    <span>Subscribe</span>
                </button>
            </div>
        </section>
    );
}

export default Subscribe;
