import React from "react";

function DownloadApp() {
    return (
        <div className="download">
            <div className="container">
                <div className="img__container">
                    <img src="./img/iphone_double_click_to_edit.png" alt="photo" />
                </div>
                <div className="right__content">
                    <h1>Download Our Free App!</h1>
                    <p>
                        Download our free app and stay up to date with all our latest discounts,
                        articles and reviews. Take a look at all the world’s top destinations and
                        decide where to spend your perfect vacation.
                    </p>
                    <button className="button">
                        <span>Download Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DownloadApp;
