//You need to send user information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

import React, { useState } from "react";

const InputForm = (props) => {
  const [selectUser1, setSelectUser1] = useState("");
  const [selectUser2, setSelectUser2] = useState("");
  const [selectTask, setSelectTask] = useState("");

  console.log("selectUser1", selectUser1);
  console.log("selectUser2", selectUser2);
  console.log("selectTask", selectTask);

  return (
    <div>
      {/*----------SELECT USER 1----------*/}
      <label for="selectUser1">Choose Name 1:</label>
      <select
        name="selectUser1" //targeting the name of it
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
        name="selectUser2" //targeting the name of it
        //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
        value={selectUser2} //value is selecting the variable --activating the variable
        as="select" //equivalent to "type" for input
        onChange={(e) => setSelectUser2(e.target.value)} //instead of creating separate function, we are creating an anon function on the jsx
      >
        {/* use .map b/c tasks is an array of objects  */}
        {props.users.map((user) => (
          <option key={user.id}>{user.user_name}</option>
        ))}
      </select>

      {/*----------TASK----------*/}
      <label for="selectTask">Choose an Activity:</label>
      <select
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
      <button type="button" class="btn btn-warning">
        Match Up!
      </button>
    </div>
  );
};

export default InputForm;
