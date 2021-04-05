import React, { useEffect, useRef, useState } from "react";
import Rating from "./Rating";

function ChooseTrip() {
    const rangeSlider = useRef();
    const priceRange = useRef();

    useEffect(() => {
        window.addEventListener("resize", priceMove);
    });

    const toggleCheckStyle = (e) => {
        if (e.target.classList.contains("cheked")) {
            e.target.classList.remove("cheked");
        } else {
            e.target.classList.add("cheked");
        }
    };

    const priceMove = () => {
        priceRange.current.children[0].style.transform = `translate(${
            (rangeSlider.current.value / rangeSlider.current.max) *
                (rangeSlider.current.offsetWidth - 30) +
            "px"
        }, 0)`;
    };

    const sliderFunctionality = () => {
        priceMove();
        priceRange.current.children[0].innerHTML = rangeSlider.current.value + "$";
        rangeSlider.current.style.background = `linear-gradient(90deg, #3ec6ff ${
            (rangeSlider.current.value / rangeSlider.current.max) * 100
        }%, #f6f6f6 ${(rangeSlider.current.value / rangeSlider.current.max) * 100}%)`;
    };

    return (
        <section className="choose__trip">
            <div className="container">
                <div className="offer__trip">
                    <div className="offer__trip--top">
                        <div className="tour__name">
                            <h5>New York Skyline Tour</h5>
                            <h5>The best of New York</h5>
                        </div>
                        <div>
                            <Rating size={"small__star"} />
                            <div className="review">146 Reviews</div>
                        </div>
                    </div>
                    <div className="photo__description">
                        <img src="./img/NewYorkTower.jpg" alt="Picture" width="100%" />
                        <div className="trip__price">
                            <span>15$</span>
                        </div>
                        <p>
                            Take a look at New York from above, the best way to see this city. You
                            will find all the classNameic buildings, sights and more plus there is a
                            lunch after the tour.
                        </p>
                    </div>
                    <div className="offer__trip--bottom">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="24px">
                                <path
                                    fillRule="evenodd"
                                    fill="rgb(134, 134, 134)"
                                    d="M23.097,18.232 C16.790,15.796 15.699,14.765 15.512,14.485 L15.512,13.758 C16.220,12.965 16.775,11.944 17.129,10.778 C17.584,10.381 17.886,9.830 17.972,9.227 C18.060,8.605 17.920,7.991 17.575,7.472 L17.575,5.136 C17.575,1.869 15.554,-0.004 12.030,-0.004 C8.557,-0.004 6.484,1.918 6.484,5.136 L6.484,7.472 C6.141,7.991 5.999,8.604 6.088,9.224 C6.174,9.828 6.476,10.381 6.930,10.777 C7.285,11.944 7.839,12.965 8.547,13.758 L8.547,14.486 C8.339,14.809 7.185,15.827 0.963,18.232 C0.386,18.456 -0.002,19.020 -0.002,19.635 L-0.002,22.492 C-0.002,23.323 0.676,23.999 1.510,23.999 L22.550,23.999 C23.384,23.999 24.061,23.323 24.061,22.492 L24.061,19.635 C24.061,19.019 23.673,18.454 23.097,18.232 ZM22.642,22.492 C22.642,22.564 22.594,22.613 22.550,22.613 L1.510,22.613 C1.466,22.613 1.417,22.564 1.417,22.492 L1.485,19.519 C8.468,16.822 9.674,15.673 9.936,14.833 C9.956,14.768 9.966,14.700 9.966,14.632 L9.966,13.490 C9.966,13.311 9.895,13.140 9.769,13.010 C9.085,12.310 8.554,11.338 8.235,10.194 C8.193,10.041 8.097,9.906 7.965,9.814 C7.710,9.635 7.538,9.350 7.493,9.034 C7.447,8.708 7.537,8.385 7.749,8.126 C7.849,8.002 7.903,7.850 7.903,7.694 L7.903,5.136 C7.903,2.680 9.330,1.382 12.030,1.382 C14.768,1.382 16.157,2.645 16.157,5.136 L16.157,7.693 C16.157,7.849 16.211,8.001 16.310,8.124 C16.522,8.385 16.614,8.708 16.567,9.036 C16.521,9.352 16.349,9.635 16.094,9.814 C15.963,9.906 15.867,10.042 15.824,10.195 C15.505,11.338 14.975,12.310 14.290,13.010 C14.164,13.140 14.094,13.311 14.094,13.490 L14.094,14.632 C14.094,14.700 14.105,14.768 14.124,14.834 C14.387,15.675 15.594,16.825 22.642,19.635 L22.642,22.492 Z"
                                />
                            </svg>
                            <p>126 spaces left</p>
                        </div>
                        <button className="button">
                            <span>Book Now</span>
                        </button>
                    </div>
                </div>
                <div className="offer__trip">
                    <div className="offer__trip--top">
                        <div className="tour__name">
                            <h5>New York City</h5>
                            <h5>Walking Tour</h5>
                        </div>
                        <div>
                            <Rating size={"small__star"} />
                            <div className="review">292 Reviews</div>
                        </div>
                    </div>
                    <div className="photo__description">
                        <img src="./img/metro.jpg" alt="Picture" width="100%" />
                        <div className="trip__price">
                            <span>19$</span>
                        </div>
                        <p>
                            Take a look at New York from above, the best way to see this city. You
                            will find all the classNameic buildings, sights and more plus there is a
                            lunch after the tour.
                        </p>
                    </div>
                    <div className="offer__trip--bottom">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="24px">
                                <path
                                    fillRule="evenodd"
                                    fill="rgb(134, 134, 134)"
                                    d="M23.097,18.232 C16.790,15.796 15.699,14.765 15.512,14.485 L15.512,13.758 C16.220,12.965 16.775,11.944 17.129,10.778 C17.584,10.381 17.886,9.830 17.972,9.227 C18.060,8.605 17.920,7.991 17.575,7.472 L17.575,5.136 C17.575,1.869 15.554,-0.004 12.030,-0.004 C8.557,-0.004 6.484,1.918 6.484,5.136 L6.484,7.472 C6.141,7.991 5.999,8.604 6.088,9.224 C6.174,9.828 6.476,10.381 6.930,10.777 C7.285,11.944 7.839,12.965 8.547,13.758 L8.547,14.486 C8.339,14.809 7.185,15.827 0.963,18.232 C0.386,18.456 -0.002,19.020 -0.002,19.635 L-0.002,22.492 C-0.002,23.323 0.676,23.999 1.510,23.999 L22.550,23.999 C23.384,23.999 24.061,23.323 24.061,22.492 L24.061,19.635 C24.061,19.019 23.673,18.454 23.097,18.232 ZM22.642,22.492 C22.642,22.564 22.594,22.613 22.550,22.613 L1.510,22.613 C1.466,22.613 1.417,22.564 1.417,22.492 L1.485,19.519 C8.468,16.822 9.674,15.673 9.936,14.833 C9.956,14.768 9.966,14.700 9.966,14.632 L9.966,13.490 C9.966,13.311 9.895,13.140 9.769,13.010 C9.085,12.310 8.554,11.338 8.235,10.194 C8.193,10.041 8.097,9.906 7.965,9.814 C7.710,9.635 7.538,9.350 7.493,9.034 C7.447,8.708 7.537,8.385 7.749,8.126 C7.849,8.002 7.903,7.850 7.903,7.694 L7.903,5.136 C7.903,2.680 9.330,1.382 12.030,1.382 C14.768,1.382 16.157,2.645 16.157,5.136 L16.157,7.693 C16.157,7.849 16.211,8.001 16.310,8.124 C16.522,8.385 16.614,8.708 16.567,9.036 C16.521,9.352 16.349,9.635 16.094,9.814 C15.963,9.906 15.867,10.042 15.824,10.195 C15.505,11.338 14.975,12.310 14.290,13.010 C14.164,13.140 14.094,13.311 14.094,13.490 L14.094,14.632 C14.094,14.700 14.105,14.768 14.124,14.834 C14.387,15.675 15.594,16.825 22.642,19.635 L22.642,22.492 Z"
                                />
                            </svg>
                            <p>243 spaces left</p>
                        </div>
                        <button className="button">
                            <span>Book Now</span>
                        </button>
                    </div>
                </div>
                <div className="offer__trip">
                    <div className="offer__trip--top">
                        <div className="tour__name">
                            <h5>New York Skyline Tour</h5>
                            <h5>The Food Tour</h5>
                        </div>
                        <div>
                            <Rating size={"small__star"} />
                            <div className="review">381 Reviews</div>
                        </div>
                    </div>
                    <div className="photo__description">
                        <img src="./img/bakery.jpg" alt="Picture" width="100%" />
                        <div className="trip__price">
                            <span>25$</span>
                        </div>
                        <p>
                            Learn where are all the best places to eat in this city, how to find
                            your way around thousands of great and tasty restaurants and lear New
                            York trough it’s food.
                        </p>
                    </div>
                    <div className="offer__trip--bottom">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="24px">
                                <path
                                    fillRule="evenodd"
                                    fill="rgb(134, 134, 134)"
                                    d="M23.097,18.232 C16.790,15.796 15.699,14.765 15.512,14.485 L15.512,13.758 C16.220,12.965 16.775,11.944 17.129,10.778 C17.584,10.381 17.886,9.830 17.972,9.227 C18.060,8.605 17.920,7.991 17.575,7.472 L17.575,5.136 C17.575,1.869 15.554,-0.004 12.030,-0.004 C8.557,-0.004 6.484,1.918 6.484,5.136 L6.484,7.472 C6.141,7.991 5.999,8.604 6.088,9.224 C6.174,9.828 6.476,10.381 6.930,10.777 C7.285,11.944 7.839,12.965 8.547,13.758 L8.547,14.486 C8.339,14.809 7.185,15.827 0.963,18.232 C0.386,18.456 -0.002,19.020 -0.002,19.635 L-0.002,22.492 C-0.002,23.323 0.676,23.999 1.510,23.999 L22.550,23.999 C23.384,23.999 24.061,23.323 24.061,22.492 L24.061,19.635 C24.061,19.019 23.673,18.454 23.097,18.232 ZM22.642,22.492 C22.642,22.564 22.594,22.613 22.550,22.613 L1.510,22.613 C1.466,22.613 1.417,22.564 1.417,22.492 L1.485,19.519 C8.468,16.822 9.674,15.673 9.936,14.833 C9.956,14.768 9.966,14.700 9.966,14.632 L9.966,13.490 C9.966,13.311 9.895,13.140 9.769,13.010 C9.085,12.310 8.554,11.338 8.235,10.194 C8.193,10.041 8.097,9.906 7.965,9.814 C7.710,9.635 7.538,9.350 7.493,9.034 C7.447,8.708 7.537,8.385 7.749,8.126 C7.849,8.002 7.903,7.850 7.903,7.694 L7.903,5.136 C7.903,2.680 9.330,1.382 12.030,1.382 C14.768,1.382 16.157,2.645 16.157,5.136 L16.157,7.693 C16.157,7.849 16.211,8.001 16.310,8.124 C16.522,8.385 16.614,8.708 16.567,9.036 C16.521,9.352 16.349,9.635 16.094,9.814 C15.963,9.906 15.867,10.042 15.824,10.195 C15.505,11.338 14.975,12.310 14.290,13.010 C14.164,13.140 14.094,13.311 14.094,13.490 L14.094,14.632 C14.094,14.700 14.105,14.768 14.124,14.834 C14.387,15.675 15.594,16.825 22.642,19.635 L22.642,22.492 Z"
                                />
                            </svg>
                            <p>110 spaces left</p>
                        </div>
                        <button className="button">
                            <span>Book Now</span>
                        </button>
                    </div>
                </div>
                <div className="selects">
                    <div className="form__select">
                        <select>
                            <option value="">Language Spoken</option>
                        </select>
                    </div>

                    <div className="form__select">
                        <select>
                            <option value="">Meal Type</option>
                        </select>
                    </div>
                    <div className="form__select">
                        <select>
                            <option value="">Excursions</option>
                        </select>
                    </div>
                    <div className="form__select">
                        <select>
                            <option value="">Hotel Type</option>
                        </select>
                    </div>
                    <div className="form__select">
                        <select>
                            <option value="">Room Type</option>
                        </select>
                    </div>
                    <div className="form__select">
                        <select>
                            <option value="">Rent A Car</option>
                        </select>
                    </div>
                    <div className="form__select">
                        <select>
                            <option value="">Shuttle Transport</option>
                        </select>
                    </div>
                    <div className="form__select">
                        <select>
                            <option value="">Parking</option>
                        </select>
                    </div>
                </div>
                <div className="trip__options">
                    <div className="trip__options--destinations">
                        <div className="form__select">
                            <select>
                                <option value="">Destinations</option>
                            </select>
                        </div>
                        <div className="trip__countries">
                            <p>Europe</p>
                            <p>Asia</p>
                            <p>Africa</p>
                            <p>North America</p>
                            <p>South America</p>
                        </div>
                    </div>
                    <div className="trip__options--type">
                        <div className="form__select">
                            <select>
                                <option value="">Trip Type</option>
                            </select>
                        </div>
                        <div className="check__items">
                            <div>
                                <span onClick={(e) => toggleCheckStyle(e)}></span>
                                <p>Round Trip</p>
                            </div>
                            <div>
                                <span onClick={(e) => toggleCheckStyle(e)}></span>
                                <p>Round Trip</p>
                            </div>
                        </div>
                    </div>
                    <div className="trip__options--class">
                        <div className="content">
                            <div>
                                <span onClick={(e) => toggleCheckStyle(e)}></span>
                                <p>First class</p>
                            </div>
                            <div>
                                <span onClick={(e) => toggleCheckStyle(e)}></span>
                                <p>Business</p>
                            </div>
                            <div>
                                <span onClick={(e) => toggleCheckStyle(e)}></span>
                                <p>Coach</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trip__options-2">
                    <div className="top">
                        <input type="text" placeholder="Where country you want to go?" />
                        <input type="text" placeholder="Where city you want to go?" />
                    </div>
                    <div className="center">
                        <h5>Price Range</h5>
                        <div className="input_range">
                            <input
                                ref={rangeSlider}
                                className="slider_range"
                                type="range"
                                min="0"
                                max="5000"
                                defaultValue="0"
                                onInput={sliderFunctionality}
                            />
                            <div ref={priceRange} className="range_price">
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div>
                            <span onClick={(e) => toggleCheckStyle(e)}></span>
                            <p>Without Carry On</p>
                        </div>
                        <div>
                            <span onClick={(e) => toggleCheckStyle(e)}></span>
                            <p>With Carry On</p>
                        </div>
                    </div>
                </div>
                <div className="pages__slider">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                </div>
            </div>
        </section>
    );
}

export default ChooseTrip;
