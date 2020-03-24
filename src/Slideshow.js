import React, { Component } from 'react'
import avocado from './img/avocado.png'
import './frontpage.css'

export default class Slideshow extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
    }

    render() {
        return (

            <div class="slideshow-container">

                <div className='slide-container mySlides'>
                    <div className='slide'>
                        <div className='slide-title' >Broccoli and Noodle Supreme 1</div>
                        <div className='slide-info' >
                            <div className='slide-info-item' >⌛25 min'</div>
                            <div className='slide-info-item' >✔balanced</div>
                        </div>
                        <img src={avocado} className='slide-img' alt='' />
                    </div>
                </div>

                <div className='slide-container mySlides'>
                    <div className='slide'>
                        <div className='slide-title' >Broccoli and Noodle Supreme 2</div>
                        <div className='slide-info' >
                            <div className='slide-info-item' >⌛25 min'</div>
                            <div className='slide-info-item' >✔balanced</div>
                        </div>
                        <img src={avocado} className='slide-img' alt='' />
                    </div>
                </div>

                <div className='slide-container mySlides'>
                    <div className='slide'>
                        <div className='slide-title' >Broccoli and Noodle Supreme 3</div>
                        <div className='slide-info' >
                            <div className='slide-info-item' >⌛25 min'</div>
                            <div className='slide-info-item' >✔balanced</div>
                        </div>
                        <img src={avocado} className='slide-img' alt='' />
                    </div>
                </div>
            </div>

        )
    }
}
