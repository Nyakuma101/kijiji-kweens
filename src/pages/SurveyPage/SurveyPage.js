import React, { useState } from "react";
import "./SurveyPage.scss";
import kijijiLogo from "../../assets/images/Kijiji_Logo_2019.svg";
import { Link } from "react-router-dom";

function CheckboxForm() {
  // State to keep track of checkbox values

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(checkboxes);

    alert("Preferences changed!");

    setSubmitted(true);

    window.location.href = "/";
  };

  return (
    <div className="checkbox">
      <div className="checkbox__header">
        <img className="checkbox__logo" src={kijijiLogo} alt="Kijiji Logo" />
        <h1 className="checkbox__title">What are you interested in seeing?</h1>
      </div>
      <form className="checkbox__form" onSubmit={handleSubmit}>
        <div className="checkbox__wrapper">
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />
            Fashion
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />
            Clothing
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
            />
            Real Estate
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox4}
              onChange={handleCheckboxChange}
            />
            Tools
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox5}
              onChange={handleCheckboxChange}
            />
            Home Appliances
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox6}
              onChange={handleCheckboxChange}
            />
            Vehicles
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox7}
              onChange={handleCheckboxChange}
            />
            Furniture
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox7}
              onChange={handleCheckboxChange}
            />
            Services
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox9}
              onChange={handleCheckboxChange}
            />
            Jobs
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox10}
              onChange={handleCheckboxChange}
            />
            Pets
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox11}
              onChange={handleCheckboxChange}
            />
            Toys & Games
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox12}
              onChange={handleCheckboxChange}
            />
            Art & Collectables
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox13}
              onChange={handleCheckboxChange}
            />
            Musical Instruments
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox14}
              onChange={handleCheckboxChange}
            />
            Sporting Goods & Exercise
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox15}
              onChange={handleCheckboxChange}
            />
            Electronics
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox16}
              onChange={handleCheckboxChange}
            />
            Home Renovation Materials
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox17}
              onChange={handleCheckboxChange}
            />
            Home Outdoor & Garden
          </label>
          <br />
          <label className="checkbox__item">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox18}
              onChange={handleCheckboxChange}
            />
            Baby Items
          </label>
        </div>
        <br />
        <div className="checkbox__button-wrapper">
          {/* <Link to={"/"}> */}
          <button className="checkbox__button" type="submit">
            Submit
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

export default CheckboxForm;
