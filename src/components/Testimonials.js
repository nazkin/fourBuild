import React, {useState} from 'react'
import './styles/testimonials.css'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
const Testimonials = () => {
    const [slider, setSlider] = useState('slide1');

    const sliderHandler = (e) => {  
        setSlider(e.target.value);
    }
    const autoSliderHandler = () => {
        const sliders = ['slide1', 'slide2', 'slide3', 'slide4'];
        if(slider === sliders[sliders.length - 1]){
            setSlider(sliders[0]);
            return;
        }
        sliders.forEach((slide, index)=> {
            if(slide === slider){
                setSlider(sliders[index + 1]);
                return
            }
            
        });

    }
    return (
        <div onClick={autoSliderHandler} class="slider">
            <input type="radio" name="slider" value="slide1" onChange={sliderHandler} checked={slider === 'slide1'} className="slider__nav" />
            <input type="radio" name="slider" value="slide2" onChange={sliderHandler} checked={slider === 'slide2'} className="slider__nav" />
            <input type="radio" name="slider" value="slide3" onChange={sliderHandler} checked={slider === 'slide3'} className="slider__nav" />
            <input type="radio" name="slider" value="slide4" onChange={sliderHandler} checked={slider === 'slide4'} className="slider__nav" />
            <div className="slider__inner">
                <div className="slider__contents">
                    <FormatQuoteIcon fontSize="large" color="action" />
                    <h2 className="slider__caption">Testimonial One</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className="slider__contents">
                    <FormatQuoteIcon fontSize="large" color="action" />
                    <h2 className="slider__caption">Testimonial Two</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className="slider__contents">
                    <FormatQuoteIcon fontSize="large" color="action" />
                    <h2 className="slider__caption">Testimonial Three</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className="slider__contents">
                    <FormatQuoteIcon fontSize="large" color="action" />
                    <h2 className="slider__caption">Testimonial Four</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
            </div>
        </div>

    )
}
export default Testimonials