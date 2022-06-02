import React, { useState } from "react";
import MatchesTable from "./MatchesTable";

//Sending input information as props from App.js.
//Data must be passed into this component so it knows how to render the user data
// const InputForm = ({ addNewMatch, users, tasks, newMatch }) => {
const InputForm = () => {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [newUser, setNewUser] = useState(false);

  const handleNamesChange = (event) => {
    setName(event.target.value);
    setNewUser(false);
  };
  const handleEmailsChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTasksChange = (event) => {
    setTask(event.target.value);
  };

  // const [message, setMessage] = useState(""); //message for choosing 2 names
  // const [isActive, setIsActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewUser(true);
    let newUser = { user_name: name, email: email, task: task };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newUser),
    }).then(() => {
      console.log("New user added");
    });
  };

  // THIS FORMAT COULD BE USED TO SET USERS AND TASKS IN ONE OBJECT
  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter Name"
          onChange={handleNamesChange}
          value={name}
        ></input>
        <input
          onChange={handleEmailsChange}
          value={email}
          className="mt-2"
          placeholder="Enter Email"
        ></input>
        {/*----------TASK----------*/}
        <select
          className="task-dropdown"
          name="task_id" //targeting the name of it
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          onChange={handleTasksChange}
          value={task} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          // onChange={handleChange} //instead of creating separate function, we are creating an anon function on the jsx
          // onChange={(e) => setSelectTask(e.target.value)}
        >
          <option selected>-Choose An Activity-</option>
          <option value="Chess">Chess</option>
          <option value="Card Games">Card games</option>
          <option value="Gym">Gym</option>
          <option value="Ping Pong">Ping Pong</option>
          <option value="Shopping">Shopping</option>
          <option value="Tennis">Tennis</option>
        </select>
        <div>
          <button
            type="submit"
            className="btn btn-warning btn-lg btn-block"
            // className="isActive ? btn btn-warning btn-lg btn-block"
            // disabled={!isActive}
          >
            Match Up!
          </button>
        </div>
      </form>
      {newUser ? (
        <MatchesTable
          currentName={name}
          currentTask={task}
          currentEmail={email}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default InputForm;
