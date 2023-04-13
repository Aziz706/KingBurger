import React from "react";
import { NavLink } from "react-router-dom";
import "./Slider.css";

const colors = [
  {
    image:
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1remk0MnJlYy5qcGc.jpg?s=JH9OUCUeND3kJgug_ijkZYTcpdnLgXwbfaHWMaNGWfA",

    text: "BEST Burgers in Galaxy",
    price: 15,
    text2: "any beef burger",
    title: "We are commited to your satisfaction with every order. Get started today!",
    colors: '#f5f5f5'
  },
  {
    // image: "https://o.remove.bg/downloads/93678602-2741-4f96-b162-d1f115d74a6c/Spicy-Thai-Shrimp7.28.21-removebg-preview.png",
    image: "img/top-burger.png",

    text: "Only Fresh Burgers",
    price: 15,
    text2: "Taste Burger Of the Day",
    title: "We are commited to your satisfaction with every order. Get started today!",
    colors: '#f5f5f5'
  },
  {
    image:
    "img/thirdburger.png",
      text: "Only Fresh Burgers",
      price: "free",
      text2: "With any beef burger",
      title: "We are commited to your satisfaction with every order. Get started today!",
      colors: '#ffffff'
  },
];


const delay = 3500;
export const Slider = () => {
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
        {colors.map((image, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundImage: `url(${image.image})` }}
            style={{ backgroundColor: `${image.colors}` }}
          >
            <div className="flex">
              <div className="innerFlex">
                <h1><strong>{image.text}</strong></h1>
                <p>
                  <h2>{image.price === 15 ? <span>$</span> : ''}{image.price}</h2>
                  <span>{image.text2}</span>
                </p>
                <h6>{image.title}</h6>
                <NavLink className={"btn btn-danger rounded-0 w-25"}>SHOP NOW</NavLink>
              </div>

              <div className="image">
                <img src={image.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
