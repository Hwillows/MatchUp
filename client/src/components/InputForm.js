import React, { useState } from "react";

//Sending input information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

const InputForm = (props) => {
  const [selectUser1, setSelectUser1] = useState("");
  const [selectUser2, setSelectUser2] = useState("");
  const [selectTask, setSelectTask] = useState("");
  // const [isMatch, setIsMatched] = useState("");

  //Check variables and info being passed
  console.log("selectUser1", selectUser1);
  console.log("selectUser2", selectUser2);
  console.log("selectTask", selectTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked!");
  };

  return (
    <div>
      <div className="form-container">
        {/*----------SELECT USER 1----------*/}
        <label for="selectUser1">Choose Name 1:</label>
        <select
          className="user1-dropdown"
          name="selectUser1" //targeting the variable from the state
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={selectUser1} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={(e) => setSelectUser1(e.target.value)} //instead of creating separate function, we are creating an anon function on the jsx
        >
          {/* use .map b/c tasks is an array of objects  */}
          {props.users.map((user) => (
            <option key={user.id}> {user.user_name}</option>
          ))}
        </select>
        {/*----------SELECTUSER 2----------*/}
        <label for="selectUser2">Choose Name 2:</label>
        <select
          className="user2-dropdown"
          name="selectUser2" //targeting the name of it
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={selectUser2} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={(e) => setSelectUser2(e.target.value)} //instead of creating separate function, we are creating an anon function on the jsx
        >
          {/* use .map b/c tasks is an array of objects  */}
          {props.users.map((user) => (
            <option
              key={user.id}
              //trying to disable already selected user
              // disabled={selectUser1.id === selectUser2.id ? "disabled" : ""}
            >
              {user.user_name}
            </option>
          ))}
        </select>
        {/*----------TASK----------*/}
        <label for="selectTask">Choose an Activity:</label>
        <select
          className="task-dropdown"
          name="selectTask" //targeting the name of it
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={selectTask} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={(e) => setSelectTask(e.target.value)} //instead of creating separate function, we are creating an anon function on the jsx
        >
          {/* use .map b/c tasks is an array of objects  */}
          {props.tasks.map((task) => (
            <option key={task.id}>{task.task_name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="btn btn-warning btn-lg btn-block"
          onClick={(e) => handleSubmit(e)}
        >
          Match Up!
        </button>
      </div>
    </div>
  );
};

export default InputForm;
