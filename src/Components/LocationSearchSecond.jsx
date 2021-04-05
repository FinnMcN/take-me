import React from "react";

function LocationSearchSecond() {
    return (
        <section className="location__search-2">
            <div className="container">
                <h1>Find Your Dream Vacation Location</h1>
                <p>
                    Search hundreds of locations from around the world and find your perfect
                    vacation location.
                </p>
                <div className="form__block">
                    <form action="">
                        <input type="text" placeholder="Country or ZIP code" />
                        <div className="form__select">
                            <select data-placeholder="Transportation">
                                <option defaultValue>Transportation</option>
                                <option>value 1</option>
                                <option>value 2</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Number of people" />
                        <button className="button button--search">
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LocationSearchSecond;
