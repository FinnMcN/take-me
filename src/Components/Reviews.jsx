import React from "react";
import Rating from "./Rating";

function Reviews() {
    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews__top">
                    <div className="reviews__top--count">Reviews (256)</div>
                    <div className="reviews__top--btns">
                        <div className="form__select">
                            <select data-placeholder="Sort">
                                <option>Sort</option>
                            </select>
                        </div>
                        <button className="button">
                            <span>Post A Review</span>
                        </button>
                    </div>
                </div>
                <div className="posted__reviews">
                    <div className="review">
                        <div className="review__left">
                            <img className="avatar" src="./img/avatar1.png" alt="avatar" />
                            <div className="info">
                                <div className="username">Anna Marksson</div>
                                <div className="place">Visited Las Vegas</div>
                                <Rating size={"small__star"} />
                            </div>
                        </div>
                        <div className="review__right">
                            <div className="review__right--name">We had a lovely time</div>
                            <div className="review__right--date">02.17.2017</div>
                            <div className="review__right--text">
                                “I don’t know where to start. It was simply amazing! From the time
                                we got there to the staff at our hotel, to our Uber driver, to the
                                meals at our restaurant, i can’t wait until we visit Las Vegas
                                again!”
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review__left">
                            <img className="avatar" src="./img/avatar2.png" alt="avatar" />
                            <div className="info">
                                <div className="username">Edward Signim</div>
                                <div className="place">Visited Rome</div>
                                <Rating size={"small__star"} />
                            </div>
                        </div>
                        <div className="review__right">
                            <div className="review__right--name">Magical Rome!</div>
                            <div className="review__right--date">02.16.2017</div>
                            <div className="review__right--text">
                                “Everybody knows how much history this city has, but we were not
                                prepared by just how much it is! At every single corner you can find
                                a piece of history that is there for thousands of years. If you
                                didn’t visit, what you are waiting for?”
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review__left">
                            <img className="avatar" src="./img/avatar3.png" alt="avatar" />
                            <div className="info">
                                <div className="username">Jenna Miles</div>
                                <div className="place">Visited Belgrade</div>
                                <Rating size={"small__star"} />
                            </div>
                        </div>
                        <div className="review__right">
                            <div className="review__right--name">Where Sava meets Danube</div>
                            <div className="review__right--date">02.15.2017</div>
                            <div className="review__right--text">
                                “This city is nothing what i expected. Such a lively place, full of
                                color, wonderful people and fantastic food. Service is lovely and my
                                tour guide showed me much more than it was planned, simply because
                                he is amazing at his job! I can’t wait to go back!”
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review__left">
                            <img className="avatar" src="./img/avatar4.png" alt="avatar" />
                            <div className="info">
                                <div className="username">Jonathan Bright</div>
                                <div className="place">Visited Tahiti</div>
                                <Rating size={"small__star"} />
                            </div>
                        </div>
                        <div className="review__right">
                            <div className="review__right--name">White sand, blue skies</div>
                            <div className="review__right--date">02.14.2017</div>
                            <div className="review__right--text">
                                “When we got there it was raining, but after it stopped, it was
                                lovely! Temperature is pleasant and i loved their free wifi zones.
                                If you have, bring your camera because you are going to need it, a
                                lot.”
                            </div>
                        </div>
                    </div>
                </div>
                <div className="load__btn">
                    <button className="button">Load More</button>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
