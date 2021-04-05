import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

function SliderBlock(props) {
    const sliderItems = useRef(null);
    let [sliderContent, getSliderContent] = useState();
    const settings = {
        speed: 500,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        draggable: false,
        infinite: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1168,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        getData(props.content);
    }, [props.content]);

    async function getData(url) {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        const content = json.map((content, index) => (
            <section ref={sliderItems} key={index} className="slider__item">
                <img src={content.img} alt="" />
                <div className="photo__content">
                    <div className="photo__content--top">
                        <div className="stars">
                            <div className="small__star"></div>
                            <div className="small__star"></div>
                            <div className="small__star"></div>
                            <div className="small__star"></div>
                            <div className="small__star"></div>
                        </div>
                        <div className="photo__content--rate">126 Visited</div>
                    </div>
                    <div className="photo__content--bottom">
                        <h5>{content.description}</h5>
                        <h1>{content.title}</h1>
                    </div>
                </div>
            </section>
        ));

        getSliderContent(content);
    }

    return (
        <div className="slider__block">
            <div className="container">
                <div className="slider">
                    <Slider {...settings}>{sliderContent}</Slider>
                </div>
            </div>
        </div>
    );
}

export default SliderBlock;
