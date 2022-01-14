import React,{ useState, useEffect } from 'react'
import "./RecruitmentCarousel.css";

function RecruitmentCarousel(props) {
    const size = window.innerWidth;
    const {children, show} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    const [touchPosition, setTouchPosition] = useState(null);
    
    const showDisplay = size <= 450 ? 2 : show;

    useEffect(() => {
      setLength(children.length);
    }, [children]);

    const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX;
      setTouchPosition(touchDown);
    };
    const handleTouchMove = (e) => {
      const touchDown = touchPosition;

      if (touchDown === null) {
        return;
      }

      const currentTouch = e.touches[0].clientX;
      const diff = touchDown - currentTouch;

      if (diff > 5) {
        next();
      }

      if (diff < -5) {
        prev();
      }

      setTouchPosition(null);
    };
    
    const next = () => {
      if (currentIndex < length - showDisplay) {
        setCurrentIndex((prevState) => prevState + 1);
      }
    };

    const prev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };
    return (
      <div className="recruitment-carousel-container">
        <div className="recruitment-carousel-wrapper">
          {currentIndex > 0 && (
            <button onClick={prev} className="left-arrow">
              &lt;
            </button>
          )}
          <div
            className="recruitment-carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`recruitment-carousel-content show-${showDisplay}`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / showDisplay)
                }%)`,
              }}
            >
              {children}
            </div>
          </div>
          {currentIndex < length - showDisplay && (
            <button onClick={next} className="right-arrow">
              &gt;
            </button>
          )}
        </div>
      </div>
    );
}

export default RecruitmentCarousel
