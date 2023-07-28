import React from "react";
import { useState } from "react";
import AddItemForm from "./AddItemForm/AddItemForm";

const Task3 = ({ submit }) => {
  const handleGetData = (data) => {
    submit(data);
    console.log(data);
  };
  return (
    <div>
      {/*get data from child component */}
      <AddItemForm handleGetData={handleGetData} />
    </div>
  );
};

export default Task3;
