import React, { useState } from "react";

function CheckboxForm() {
  // State to keep track of checkbox values
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the checkbox values
    console.log(checkboxes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkbox_wrapper">
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox1}
            onChange={handleCheckboxChange}
          />
          Fashion
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxes.checkbox2}
            onChange={handleCheckboxChange}
          />
          Clothing
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxes.checkbox3}
            onChange={handleCheckboxChange}
          />
          Real Estate
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox4}
            onChange={handleCheckboxChange}
          />
          Tools
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox5}
            onChange={handleCheckboxChange}
          />
          Home Appliances
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox6}
            onChange={handleCheckboxChange}
          />
          Vehicles
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox7}
            onChange={handleCheckboxChange}
          />
          Furniture
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox7}
            onChange={handleCheckboxChange}
          />
          Services
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox9}
            onChange={handleCheckboxChange}
          />
          Jobs
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox10}
            onChange={handleCheckboxChange}
          />
          Pets
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox11}
            onChange={handleCheckboxChange}
          />
          Toys & Games
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox12}
            onChange={handleCheckboxChange}
          />
          Art & Collectables
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox13}
            onChange={handleCheckboxChange}
          />
          Musical Instruments
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox14}
            onChange={handleCheckboxChange}
          />
          Sporting Goods & Exercise
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox15}
            onChange={handleCheckboxChange}
          />
          Electronics
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox16}
            onChange={handleCheckboxChange}
          />
          Home Renovation Materials
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox17}
            onChange={handleCheckboxChange}
          />
          Home Outdoor & Garden
        </label>
        <br />
        <label>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckboxForm;
