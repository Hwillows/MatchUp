import "./App.css";
import React, { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import MatchesTable from "./components/MatchesTable";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getTasks();
    getUsers();
  }, []);

  const handleAddMatches = (newMatch) => {
    console.log("App component receiving new match from Admin", newMatch);

    setMatches((state) => [...state, matches]);
  };

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
      <img src="logo.png" />
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-warning"
          // onClick={() => handleChangeView(true)}
        >
          ADMIN
        </button>
        <button
          type="button"
          className="btn btn-warning"
          // onClick={() => handleChangeView(false)}
        >
          USER
        </button>
        {/* onClick is react event handler */}

        {/* change view */}
      </div>
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
        <InputForm
          users={users}
          tasks={tasks}
          addNewMatch={(addNewMatch) => handleAddMatches(addNewMatch)}
        />
        {/* MatchesTable addNewMatch={addNewMatch} /> */}
        <MatchesTable />
      </div>
    </div>
  );
}
