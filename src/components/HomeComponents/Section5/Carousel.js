"use client";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import car1 from "../../../../public/images/car1.jpg"
import car2 from "../../../../public/images/car2.jpg"
import car3 from "../../../../public/images/car3.jpg"
import car4 from "../../../../public/images/car4.jpg"
import car5 from "../../../../public/images/car5.jpg"

const useTilt = (animationDuration = "150ms") => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);
    const state = { rect: undefined, mouseX: undefined, mouseY: undefined };
    const el = ref.current;

    const handleEnter = () => {
      el.style.transition = `transform ${animationDuration} ease-out`;
    };

    const handleMove = (e) => {
      e.preventDefault();
      if (!state.rect) state.rect = el.getBoundingClientRect();
      const px = (unify(e).clientX - state.rect.left) / state.rect.width;
      const py = (unify(e).clientY - state.rect.top) / state.rect.height;
      el.style.setProperty("--px", px.toFixed(2));
      el.style.setProperty("--py", py.toFixed(2));
    };

    const handleLeave = () => {
      el.style.setProperty("--px", 0.5);
      el.style.setProperty("--py", 0.5);
      el.style.transition = `transform ${animationDuration} ease-in`;
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchstart", handleEnter);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener("touchend", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchstart", handleEnter);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleLeave);
    };
  }, [animationDuration]);

  return ref;
};


const Slide = ({ image, title, subtitle, description, offset, isPageBackground }) => {
  const ref = useTilt();
  const active = offset === 0;

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active || undefined}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {isPageBackground && (
        <div
          className="slideBackground"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}
      <div
        className="slideContent"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="slideContentInner">
          {title && <h2 className="slideTitle font-bold">{title}</h2>}
          {subtitle && <h3 className="slideSubtitle">— {subtitle}</h3>}
          {description && <p className="slideDescription">{description}</p>}
        </div>
      </div>
    </div>
  );
};


const Carousel = ({ slides, isPageBackground }) => {
  const [slideIndex, setSlideIndex] = useState(2); 

  const handlePrevSlide = () =>
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="slidesWrapper">
      <div className="slides">
        <button className="prevSlideBtn" onClick={handlePrevSlide}>
          <i className="fas fa-chevron-left" />
        </button>

        {slides.map((slide, i) => {
          const offset = i - slideIndex;
          return (
            <Slide
              key={i}
              image={slide.image.src}
              title={""}
              subtitle={""}
              description={""}
              offset={offset}
              isPageBackground={isPageBackground}
            />
          );
        })}

        <button className="nextSlideBtn" onClick={handleNextSlide}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  isPageBackground: PropTypes.bool,
};

// Slide Data
const slidesData = [
  {
    title: "First",
    subtitle: "Slide",
    description: "This is the first slide description.",
    image: car1,
  },
  {
    title: "Second",
    subtitle: "Slide",
    description: "This is the second slide description.",
    image: car2,
  },
  {
    title: "Third",
    subtitle: "Slide",
    description: "This is the third slide description.",
    image: car5,
  },
  {
    title: "Forth",
    subtitle: "Slide",
    description: "This is the third slide description.",
    image:car3,
  },
  {
    title: "Five",
    subtitle: "Slide",
    description: "This is the third slide description.",
    image: car4,
  },
];

// Main App Component
const App = () => <Carousel slides={slidesData} isPageBackground />;

// ✅ Export the App Component - Next.js will automatically render it
export default App;
