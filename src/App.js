import "./App.css";
import Task1 from "./containers/Task1";
import Task2 from "./containers/Task2";
import Task3 from "./containers/Task3";
import Task4 from "./containers/Task4";
function App() {
  const data = [
    {
      name: "test1",
      age: 21,
      email: "test1@gmail.com",
      number: "3544",
      address: "indore",
    },
    {
      name: "test2",
      age: 23,
      email: "test2@gmail.com",
      number: "3544ds",
      address: "Nagpur",
    },
  ];
  const handleData = (getData) => {
    console.log(getData);
  };
  return (
    <div className="App">
      <Task1 />
      <Task2 />
      <Task3 submit={handleData} />
      <Task4 />
    </div>
  );
}

export default App;
