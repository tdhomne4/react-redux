import React from "react";
import { useState } from "react";

const AddItemForm = ({ handleGetData }) => {
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    handleGetData(userData);
  };
  return (
    <>
      <div className="container">
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your email:
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="text"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your number:
          <input
            type="text"
            name="number"
            value={userData.number}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your address:
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};
export default AddItemForm;
