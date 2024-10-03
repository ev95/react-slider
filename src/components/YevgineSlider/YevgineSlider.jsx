import { useState } from 'react';
import styles from './YevgineSlider.module.css';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";



function YevgineSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slides, setSlides] = useState([
        {
            image: 'https://via.placeholder.com/600x300/FF5733/ffffff?text=Slide+1',
            isShown: true
        },
        {
            image: 'https://via.placeholder.com/600x300/FF5733/ffffff?text=Slide+2',
            isShown: false
        },
        {
            image: 'https://via.placeholder.com/600x300/3357FF/ffffff?text=Slide+3',
            isShown: false
        },
        {
            image: 'https://via.placeholder.com/600x300/3357FF/ffffff?text=Slide+4',
            isShown: false
        }
    ])

    function prevSlide() {
        if (activeSlide === 0) {
            setActiveSlide(slides.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    }

    function nextSlide() {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    }

    function autoplay() {
        setInterval(() => {
            nextSlide();
        }, 2000);
    }

    return (
        <>
            <div className={styles.slider}>
                <div className={styles.slides}>
                    <img src={slides[activeSlide].image} alt="Slider Item" />
                </div>
                <div className={styles.dots}>
                    {
                        slides.map((_, index) => (
                            <span key={index} className={`${styles.dot}  ${index === activeSlide && styles.active}`} onClick={() => setActiveSlide(index)}></span>
                        ))
                    }
                </div>
                <FaCirclePlay className={styles.autoplay} onClick={autoplay} />
                <FaAngleLeft className={styles.prev} onClick={prevSlide} />
                <FaAngleRight className={styles.next} onClick={nextSlide} />
            </div>
        </>

    )
}

export default YevgineSlider