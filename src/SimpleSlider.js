import React, { Component } from "react";
import Slider from "react-slick";
import avocado from './img/avocado.png'


export default class LazyLoad extends Component {
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplaySpeed: 4000,
            cssEase: "ease-in-out",
            pauseOnHover: true,
            arrows: false,
            dots: false,
            autoplay: true,

        };

        return (
            <div>

                <Slider {...settings} className="slideshow-container">

                    <div className='slide-container '>
                        <div className='slide'>
                            <div className='slide-title' >Broccoli and Noodle Supreme 2</div>
                            <div className='slide-info' >
                                <div className='slide-info-item' >⌛25 min'</div>
                                <div className='slide-info-item' >✔balanced</div>
                            </div>
                            <img src='https://www.edamam.com/web-img/f22/f22699a5d7e8d6d1e03b667091ac37d2.jpg' className='slide-img' alt='' />
                        </div>
                    </div>

                    <div className='slide-container'>
                        <div className='slide'>
                            <div className='slide-title' >Garlic beef</div>
                            <div className='slide-info' >
                                <div className='slide-info-item' >✔High-Protein</div>
                                <div className='slide-info-item' >✔Low-Carb</div>
                            </div>
                            <img
                                src='https://www.edamam.com/web-img/517/5170ac6de7b61cf82710b9ad257a2e34.jpg'
                                className='slide-img'
                                alt='' />
                        </div>
                    </div>

                    <div className='slide-container'>
                        <div className='slide'>
                            <div className='slide-title' >Avocado-and-Onion Salad</div>
                            <div className='slide-info' >
                                <div className='slide-info-item' >⌛10 min'</div>
                                <div className='slide-info-item' >✔Low-Carb</div>
                            </div>
                            <img
                                src='https://www.edamam.com/web-img/1be/1be326c870165065532a9f49f3c28aab.jpg'
                                className='slide-img'
                                alt='' />
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}

