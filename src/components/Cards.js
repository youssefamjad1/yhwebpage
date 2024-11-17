import React, { useEffect, useRef, useState } from "react";
import cardsData from "../data/cardsData";
import "../styles/Cards.css";

const Cards = () => {
  const cardsContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const totalCards = cardsData.length;

  const handleArrowClick = (direction) => {
    if (cardsContainerRef.current) {
      const containerWidth = cardsContainerRef.current.offsetWidth;
      const cardWidth = cardsContainerRef.current.firstChild.offsetWidth;

      if (direction === "left") {
        setScrollPosition((prev) => Math.max(prev - cardWidth, 0)); // Scroll left
      } else if (direction === "right") {
        setScrollPosition((prev) => Math.min(prev + cardWidth, cardWidth * totalCards)); // Scroll right
      }
    }
  };

  // Automatically scroll the cards container
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (cardsContainerRef.current) {
        const containerWidth = cardsContainerRef.current.offsetWidth;
        const cardWidth = cardsContainerRef.current.firstChild.offsetWidth;
        const totalScrollWidth = cardWidth * totalCards;

        // Scroll by 1px to the right, creating an automatic scroll effect
        if (scrollPosition < totalScrollWidth) {
          setScrollPosition((prev) => prev + 1); // Update scroll position
        } else {
          // Reset scroll position to simulate infinite loop
          setScrollPosition(0);
        }
      }
    }, 15); // Scroll every 15ms to create a smooth effect

    // Clear the interval when the component is unmounted
    return () => clearInterval(scrollInterval);
  }, [scrollPosition, totalCards]);

  return (
    <div className="cards-wrapper" id="blog">
      <div
        className="arrow-button left"
        onClick={() => handleArrowClick("left")}
      >
        {"<"}
      </div>
      <div
        className="cards-container"
        ref={cardsContainerRef}
        style={{ transform: `translateX(-${scrollPosition}px)` }} // Apply smooth scroll
      >
        {/* Render the cards with duplicates for infinite scrolling */}
        {cardsData.concat(cardsData).map((item, index) => (
          <div className="custom-card" key={`${item.id}-${index}`}>
            <div className="card-header">
              <img src={item.image} alt={item.title} className="card-image" />
              <h3 className="card-title">{item.title}</h3>
            </div>
            <div className="card-body">
              <p className="card-description">{item.description}</p>
            </div>
            <div className="card-footer">
              <span className="card-author">{item.author}</span>
              <span className="card-location">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="arrow-button right"
        onClick={() => handleArrowClick("right")}
      >
        {">"}
      </div>
    </div>
  );
};

export default Cards;
