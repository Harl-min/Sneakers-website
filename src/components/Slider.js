import React from 'react'
import coupon from "../images/coupon.png"

const colors = ["#0088FE", "#8D00C4", "#FFBB28"];
const delay = 3000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="sales">
        <div>
            <p>Black Friday!!!</p>
            <p>Flash Sale</p>
          </div>
          <div>
            <p>Black Friday!!!</p>
            <p>Flash Sale</p>
          </div>
          <div className="coupon">
            <img src={coupon} alt="coupon" />
          </div>
        </div>

        <div className="promo">
        <div>
            <p>Black Frieeeeeeeeeeeday!!!</p>
            <p>Flash Sale</p>
          </div>
          <div>
            <p>Black Frwqweweweweweweweiday!!!</p>
            <p>Flash Sale</p>
          </div>
          <div className="coupon">
            <img src={coupon} alt="coupon" />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Slideshow;