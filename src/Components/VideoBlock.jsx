import React from "react";

function VideoBlock() {
    return (
        <div className="video__block">
            <div className="container">
                <h1>See Dubai from the sky</h1>
                <div className="video__container">
                    <iframe
                        src="https://www.youtube.com/embed/IdejM6wCkxA"
                        frameBorder="0"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoBlock;
