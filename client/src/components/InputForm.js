import React, { useState } from "react";
import MatchesTable from "./MatchesTable";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [currentUser, setCurrentUser] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewUser(true);
    setCurrentUser({ user_name: name, email: email, task: task });
    console.log(currentUser);
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(currentUser),
    }).then(() => {
      console.log("New user added");
    });
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
          value={task}
          as="select" //equivalent to "type" for input
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
          <button type="submit" className="btn btn-warning btn-lg btn-block">
            Match Up!
          </button>
        </div>
      </form>
      {newUser ? (
        <MatchesTable
          currentName={name}
          currentTask={task}
          currentEmail={email}
          currentUser={currentUser}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default InputForm;
