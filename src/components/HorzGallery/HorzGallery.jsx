import { useRef } from "react";
import "./HorzGallery.css";
import VerticalCard from "../VerticalCard/VerticalCard.jsx";

function HorzGallery({ cardData, title }) {
  const horzGalleryRef = useRef(null);

  const scrollLeft = () => {
    horzGalleryRef.current.scrollBy({
      left: -horzGalleryRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    horzGalleryRef.current.scrollBy({
      left: horzGalleryRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="horz-gallery-container">
      <div className="left-gallery-btn" onClick={scrollLeft}>
        <img src="/images/left_arrow.svg" />
      </div>
      <div className="flex-column padding">
        <h2 className="section-title">{title}</h2>
        <div className="horz-gallery" ref={horzGalleryRef}>
          {cardData.map((data) => (
            <VerticalCard
              key={data.id}
              name={data.name}
              price={data.price}
              img={data.image}
              description={data.description}
            />
          ))}
        </div>
      </div>

      <div className="right-gallery-btn" onClick={scrollRight}>
        <img src="/images/right_arrow.svg" />
      </div>
    </div>
  );
}

export default HorzGallery;
