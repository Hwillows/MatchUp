import React, { useState } from "react";

//Sending input information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

const InputForm = (props) => {
  // const [selectUser1, setSelectUser1] = useState([]);
  // const [selectUser2, setSelectUser2] = useState([]);
  const [users, setUsers] = useState({});
  const [tasks, setTasks] = useState({});
  const [selectTask, setSelectTask] = useState([]);
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(true);

  const changeIsActive = () => {
    if (users.selectUser1 === users.selectUser2) {
      setMessage("Please choose two different names.");
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked!");
    props.addNewMatch(users);
  };

  const handleChange = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });

    setTasks({
      ...tasks,
      [event.target.name]: event.target.value,
    });
    changeIsActive(); //checking if names are different
  };

  return (
    <div>
      <form className="form-container">
        {/*----------SELECT USER 1----------*/}
        <label for="selectUser1">Select Your Name:</label>
        <select
          className="user1-dropdown"
          name="user_id" //targeting the variable from the state
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={users.selectUser1} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={handleChange} //instead of creating separate function, we are creating an anon function on the jsx
        >
          {/* 'users' array is being passed from App.js as an array.
           This variable was set in the state in the getUsers function which gets the entire
           list of users from the database */}
          {props.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.user_name}
            </option>
          ))}
        </select>
        {/*----------SELECT USER 2----------*/}
        <label for="selectUser2">Choose Your Partner:</label>
        <select
          className="user2-dropdown"
          name="user_id2" //targeting the name of it
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={users.selectUser2} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={handleChange} //instead of creating separate function, we are creating an anon function on the jsx
        >
          {props.users.map((user) => (
            // props is working the same way as it does in "Select User 1"
            <option key={user.id} value={user.id}>
              {user.user_name}
            </option>
          ))}
        </select>
        {/*----------TASK----------*/}
        <label for="selectTask">Choose An Activity:</label>
        <select
          className="task-dropdown"
          name="task_id" //targeting the name of it
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={selectTask} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={handleChange} //instead of creating separate function, we are creating an anon function on the jsx
        >
          {props.tasks.map((task) => (
            /* 'tasks' is an array of objects is being passed from App.js.
           This variable was set in the state in the getTasks function which gets the entire
           list of tasks from the database */
            <option key={task.id} value={task.id}>
              {task.task_name}
            </option>
            /* We are mapping through the array. 'tasks' is an array of objects. '.id' refers to the task's unique ID 
            and ".task_name" is referring to the task_name in the DB. Again, this info has been set as a 'tasks' variable 
            in the state in App.js. '(task)' is referring to each individual task in the 'tasks' array*/
          ))}
        </select>
        <div id="message">{message}</div>
        <div>
          {/* hide button with if statement -check portfolio */}
          <button
            type="submit"
            // trying to conditionally render submit button ---not working
            // className="{isActive ? btn btn-warning btn-lg btn-block : noShow}"
            className="isActive ? btn btn-warning btn-lg btn-block"
            onClick={(e) => handleSubmit(e)}
            // disabled={!isActive}
          >
            Match Up!
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
