import React, { useState } from "react";
const Task1 = () => {
  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');
  // const [age,setAge] = useState('');
  // const[number,setNumber] = useState('');
  // const [address,setAddress] = useState('');
  const [displayMsg, setDisplaymsg] = useState(false);
  const [formData, setFormdata] = useState({}); //object
  const [todo, setTodo] = useState([]); //array
  const [todoItem, setTodoItem] = useState("");

  const handleChange = (e) => {
    // const user = {name,email,age,number,address};

    setFormdata({ ...formData, [e.target.name]: e.target.value });
    // setName('');
    // setEmail('');
    // setAge('');
    // setNumber('');
    // setAddress('');
  };
  const submitForm = () => {
    setDisplaymsg(true);
    console.log(formData);
  };
  // console.log('user: ',displayValue['name']);
  const handleChangeItem = (e) => {
    setTodoItem(e.target.value);
  };

  const handleSubmitItem = () => {
    setTodo([...todo, todoItem]);
    setTodoItem("");
    console.log(todo);
  };

  return (
    <div>
      {/***************Task1***************************************************/}

      <div className="container">
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your number:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <button onClick={submitForm}>Submit</button>
      </div>

      <div className="container">
        <div className="displayList">
          {displayMsg ? (
            <>
              <ul>
                <li>{formData["name"]}</li>
                <li>{formData["email"]}</li>
                <li>{formData["age"]}</li>
                <li>{formData["number"]}</li>
                <li>{formData["address"]}</li>
              </ul>
            </>
          ) : null}
        </div>

        {/* Task New */}
        <h3>Add Todo</h3>
        <input
          type="text"
          value={todoItem}
          onChange={handleChangeItem}
          placeholder="Enter your items"
        />
        <button onClick={handleSubmitItem}>Add</button>

        <div>
          {todo.map((val, i) => {
            return <p key={i}> {val} </p>;
          })}
        </div>
      </div>

      {/***************Task2***************************************************/}
    </div>
  );
};

export default Task1;
