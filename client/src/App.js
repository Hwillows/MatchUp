import "./App.css";
import React, { useEffect, useState } from "react";
import InputForm from "./components/InputForm";

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

        <InputForm users={users} tasks={tasks} />
      </div>
    </div>
  );
}
