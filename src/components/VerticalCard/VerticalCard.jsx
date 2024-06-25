import "./VerticalCard.css";

function VerticalCard({ name, description, price, img }) {
  return (
    <>
      <div className="vertical-card">
        <div className="price-container">
          <h4 className="item-price">${price}</h4>
        </div>

        <div className="vertical-card-img-container">
          <img src={img} />
        </div>
        <div className="vertical-card-content">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default VerticalCard;
