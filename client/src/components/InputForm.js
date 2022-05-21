import React, { useState } from "react";

//Sending input information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

const InputForm = ({ addNewMatch, users, tasks, newMatch }) => {
  const [formData, setFormData] = useState({});

  const [message, setMessage] = useState(""); //message for choosing 2 names
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = (e) => {
    console.log("Submit clicked!", "e.target", e.target);
    console.log(e.target); // targets form
    e.preventDefault();
    addNewMatch(formData);

    console.log("formData", formData);
    console.log("users", users);
    console.log("tasks", tasks);
  };

  const changeIsActive = () => {
    if (formData.user_id === formData.user_id2) {
      setMessage("Choose two different names!");
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  // THIS FORMAT COULD BE USED TO SET USERS AND TASKS IN ONE OBJECT
  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));

    changeIsActive(); //checking if names are different
  };

  return (
    <div>
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        {/*----------SELECT USER 1----------*/}
        {/* <label for="selectUser1">Select Your Name:</label> */}
        <select
          className="user1-dropdown"
          name="user_id" //targeting the variable from the state
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={formData.user_id} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={handleChange} //instead of creating separate function, we are creating an anon function on the jsx
        >
          <option selected>-Choose Your Name-</option>
          {/* 'users' array is being passed from App.js as an array.
           This variable was set in the state in the getUsers function which gets the entire
           list of users from the database */}
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.user_name}
            </option>
          ))}
        </select>
        {/*----------SELECT USER 2----------*/}

        {/* <label for="selectUser2">Choose Your Partner:</label> */}

        <select
          className="user2-dropdown"
          name="user_id2" //targeting the name of it
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={formData.user_id2} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={handleChange} //instead of creating separate function, we are creating an anon function on the jsx
        >
          <option selected>-Choose Your Partner-</option>
          {users.map((user) => (
            // props is working the same way as it does in "Select User 1"
            <option key={user.id} value={user.id}>
              {user.user_name}
            </option>
          ))}
        </select>
        {/*----------TASK----------*/}

        <select
          className="task-dropdown"
          name="task_id" //targeting the name of it
          //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
          value={formData.task_id} //value is selecting the variable --activating the variable
          as="select" //equivalent to "type" for input
          onChange={handleChange} //instead of creating separate function, we are creating an anon function on the jsx
          // onChange={(e) => setSelectTask(e.target.value)}
        >
          <option selected>-Choose An Activity-</option>
          {tasks
            .filter((task) => {
              for (let match of newMatch) {
                if (task.task_name === match.task_name) {
                  return false;
                }
              }
              return task;
            })
            .map((task) => (
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
          <button
            type="submit"
            className="isActive ? btn btn-warning btn-lg btn-block"
            disabled={!isActive}
          >
            Match Up!
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
