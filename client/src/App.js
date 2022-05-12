import "./App.css";
import React, { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo";
import TaskInfo from "./components/TaskInfo";
import { Dropdown } from "bootstrap";
import DropDown from "./components/DropDown";

export default function App() {
  // const [matches, setMatches] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getTasks();
    getUsers();
  }, []);

  const getTasks = () => {
    fetch("/users/tasks")
      .then((response) => response.json())
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    fetch("/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickDropDown = (e) => {
    console.log("SUCCESS");
    console.log({ tasks });
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1>Find Your Match</h1>

        <h4>some things are a better in pairs</h4>
        <hr></hr>

        <h5>
          Looking for a gym partner, shopping buddy, or even a chess opponent?
          <br />
          <br />
          MatchUP is a platform where you can find and match with people who
          have similar interests and likeminded goals.
        </h5>
        <h5>Choose an activity</h5>
        {/* PROPS */}
        <UserInfo users={users} />
        <TaskInfo tasks={tasks} />
        <DropDown tasks={tasks} />

        {/* DROP DOWN BUTTON BOOTSTRAP */}
        <div className="dropdown">
          <button
            // onClick={getTasks}
            onClick={handleClickDropDown}
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Click to get started
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
