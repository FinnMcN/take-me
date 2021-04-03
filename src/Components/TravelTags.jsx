import React, { useState, useEffect } from "react";

function TravelTags() {
    const removeTag = (e) => {
        e.target.parentElement.remove();
    };

    return (
        <div className="travel__tags">
            <div className="container">
                <p>Where do you want to travel today</p>
                <div className="travel__tags--bottom">
                    <div className="tags">
                        <div className="tag">
                            USA
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                        <div className="tag">
                            New York
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                        <div className="tag">
                            City Life
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                        <div className="tag">
                            Cheap
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                        <div className="tag">
                            Australia
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                        <div className="tag">
                            London
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                        <div className="tag">
                            Rest
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                        <div className="tag">
                            Sea
                            <span onClick={(e) => removeTag(e)}></span>
                        </div>
                    </div>
                    <div className="sort">
                        <button>
                            <span>List View</span>
                        </button>
                        <button>
                            <span>Map View</span>
                        </button>
                        <div className="form__select">
                            <select>
                                <option>Sort By</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelTags;
