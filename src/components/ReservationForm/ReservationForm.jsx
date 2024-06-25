import { useState } from "react";
import "./ReservationForm.css";
import ReserveImg from "/images/reserve_large_image.png";

const ReservationForm = () => {
  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the reservation data to a server
    console.log("Submitted reservation:", reservation);
    // Send submission validation to user
    alert("Reservation submitted!");
    // Reset the form
    setReservation({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  return (
    <>
      <div
        className={`form-modal ${showModal ? "show-modal" : ""} `}
        onClick={handleCloseModal}
      >
        <form
          className={`reservation-form ${
            showModal ? "show-form" : "remove-form"
          }`}
          onSubmit={handleSubmit}
        >
          <div className="reservation-close-btn" onClick={handleCloseModal}>
            x
          </div>
          <h2 className="">Make A Reservation</h2>
          <div className="input-container">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={reservation.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="###-###-####"
              value={reservation.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={reservation.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label>Time:</label>
            <input
              type="time"
              name="time"
              value={reservation.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label>Number of Guests:</label>
            <input
              type="number"
              name="guests"
              value={reservation.guests}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <button className="btn-primary" type="submit">
            Reserve
          </button>
        </form>
      </div>

      <div className="reservation-banner">
        <div className="reservation-banner-image-container">
          <img src={ReserveImg} />
        </div>
        <div className="reservation-banner-message-container">
          <h1>It's Always Better Together!</h1>
          <p>Request your table for group dining today.</p>
          <button className="btn-primary" onClick={handleShowModal}>
            Reserve Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ReservationForm;
