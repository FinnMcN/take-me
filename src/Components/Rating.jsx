import React, { useState } from "react";

function Rating({ size }) {
    let [averageToDisplay, setAverage] = useState(0);
    let [counter, setCounter] = useState(0);
    let [currentWidth, setCurrentWidth] = useState(0);
    let average = 0;
    const defaultStarWidth = 18;
    const smallStarWidth = 15;

    const reviewsCount = (prevAverage, reviewMark) => {
        let newAverage = prevAverage * counter + reviewMark;
        setCounter(++counter);
        return newAverage / counter;
    };

    const onClickStar = (element, starSize) => {
        const reviewMark = Number(element.target.className.split(" ")[1]);
        average = reviewsCount(averageToDisplay, reviewMark);
        const intCheck = average % 1 ? 0 : 1;
        let currentStarRate;

        if (starSize === "star") {
            currentStarRate =
                (defaultStarWidth * Math.floor(average * 100)) / 100 +
                4 +
                8 * (Math.floor(average) - intCheck);
        } else if (starSize === "small__star") {
            currentStarRate =
                (smallStarWidth * Math.floor(average * 100)) / 100 + 4 + 2 * Math.floor(average);
        }
        setAverage(average);
        setCurrentWidth(currentStarRate);
    };

    if (size === "star") {
        return (
            <section className="rating">
                <span
                    className="current"
                    style={{
                        width: currentWidth + "px",
                    }}></span>
                <div className="stars">
                    <div className={size + " " + 5} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 4} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 3} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 2} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 1} onClick={(e) => onClickStar(e, size)}></div>
                </div>
                <div className="rating__number">
                    {Math.floor(averageToDisplay * 100) / 100} Rating
                </div>
            </section>
        );
    } else if (size === "small__star") {
        return (
            <section className="rating">
                <span
                    className="current"
                    style={{
                        width: currentWidth + "px",
                    }}></span>
                <div className="stars">
                    <div className={size + " " + 5} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 4} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 3} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 2} onClick={(e) => onClickStar(e, size)}></div>
                    <div className={size + " " + 1} onClick={(e) => onClickStar(e, size)}></div>
                </div>
            </section>
        );
    }
}

export default Rating;
