import React from "react";
import Slider from "react-slick";

function Sight() {
    const settings = {
        speed: 500,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1168,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="sight" id="sight">
            <div className="container">
                <div className="sight__left_content">
                    <h1>Magical Santorini Greece’s Jewel</h1>
                    <p>
                        Candy-colored houses carved into cliffs, sapphire waters, gleaming white
                        buildings topped with half-spheres the color of a stormy sky.
                    </p>
                    <button className="button">
                        <span>Explore More</span>
                    </button>
                </div>
                <div className="sight__photo_slider">
                    <Slider {...settings}>
                        <div>
                            <img src={"./img/img_for_photoslider1.jpg"} alt="" />
                        </div>
                        <div>
                            <img src={"./img/img_for_photoslider2.jpg"} alt="" />
                        </div>
                        <div>
                            <img src={"./img/img_for_photoslider2.jpg"} alt="" />
                        </div>
                        <div>
                            <img src={"./img/img_for_photoslider2.jpg"} alt="" />
                        </div>
                        <div>
                            <img src={"./img/img_for_photoslider2.jpg"} alt="" />
                        </div>
                        <div>
                            <img src={"./img/img_for_photoslider2.jpg"} alt="" />
                        </div>
                        <div>
                            <img src={"./img/img_for_photoslider2.jpg"} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Sight;
