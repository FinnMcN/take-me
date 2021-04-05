import React from "react";
import Rating from "./Rating";

function CitiesRate() {
    return (
        <section className="cities__rate">
            <div className="container">
                <div className="overview__block">
                    <img src="./img/Paris.jpg" alt="" />
                    <h1 className="overview__block-title">Magical Paris</h1>
                    <p className="overview__block-desc">
                        City of light, one of the most famous cities in the world is waiting to be
                        explored. Some of the most famous museums, food and landmarks are waiting
                        for you in Paris.
                    </p>
                    <Rating size={"star"} />
                </div>
                <div className="overview__block">
                    <img src="./img/London.jpg" alt="" />
                    <h1 className="overview__block-title">Classic London</h1>
                    <p className="overview__block-desc">
                        City of history, one of the most famous cities in the world is waiting to be
                        explored. Some of the most famous museums, food, pubs and landmarks are
                        waiting for you in London.
                    </p>
                    <Rating size={"star"} />
                </div>
                <div className="overview__block">
                    <img src="./img/NewYork.jpg" alt="" />
                    <h1 className="overview__block-title">Famous New York</h1>
                    <p className="overview__block-desc">
                        City of fashion and yellow cabs, one of the most famous cities in the world
                        is waiting to be explored. Some of the most famous museums, food and
                        landmarks are waiting for you in New York.
                    </p>
                    <Rating size={"star"} />
                </div>
            </div>
        </section>
    );
}

export default CitiesRate;
