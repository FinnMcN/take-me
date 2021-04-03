import React from "react";
import Rating from "./Rating";

function CitiesRate() {
    return (
        <div className="cities__rate">
            <div className="container">
                <div className="overview__block">
                    <img src="./img/Paris.jpg" alt="" />
                    <h1>Magical Paris</h1>
                    <p>
                        City of light, one of the most famous cities in the world is waiting to be
                        explored. Some of the most famous museums, food and landmarks are waiting
                        for you in Paris.
                    </p>
                    <Rating size={"star"} />
                </div>
                <div className="overview__block">
                    <img src="./img/London.jpg" alt="" />
                    <h1>Classic London</h1>
                    <p>
                        City of history, one of the most famous cities in the world is waiting to be
                        explored. Some of the most famous museums, food, pubs and landmarks are
                        waiting for you in London.
                    </p>
                    <Rating size={"star"} />
                </div>
                <div className="overview__block">
                    <img src="./img/NewYork.jpg" alt="" />
                    <h1>Famous New York</h1>
                    <p>
                        City of fashion and yellow cabs, one of the most famous cities in the world
                        is waiting to be explored. Some of the most famous museums, food and
                        landmarks are waiting for you in New York.
                    </p>
                    <Rating size={"star"} />
                </div>
            </div>
        </div>
    );
}

export default CitiesRate;
