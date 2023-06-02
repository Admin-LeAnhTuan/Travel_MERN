import React, { useState } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";

import "./booking.css";

const Booking = ({ tours, avgRating }) => {
  const { price, reviews } = tours;

  const Navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    email: "",
    fullname: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handlerChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlerClick = (e) => {
    e.preventDefault();

    Navigate("/thank-you");
  };

  const ServiceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(ServiceFee);

  return (
    <div className="booking">
      <div
        className="booking__top d-flex align-items-center 
      justify-content-between"
      >
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}(
          {reviews.length})
        </span>
      </div>

      {/* ======== Booking Form ====== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handlerClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              required
              onChange={handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handlerChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-content-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handlerChange}
            />
            <input
              type="number"
              placeholder="Guest Size"
              id="guestSize"
              max={10}
              min={1}
              required
              onChange={handlerChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ============================ */}
      {/* ============ Booking Bottom========= */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${ServiceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handlerClick}>
          Book Now
        </Button>
      </div>

      {/* ==================================== */}
    </div>
  );
};

export default Booking;
