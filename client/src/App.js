// App.js is front-end Parent Component

/*------------------------SET STATE------------------------*/
import "./App.css";
import React, { useEffect, useState } from "react";
import InputForm from "./components/InputForm"; //import InputForm componenet
import MatchesTable from "./components/MatchesTable"; //import MatchesTable component

export default function App() {
  /*------------------------SET STATE------------------------*/
  const [tasks, setTasks] = useState([]); //ALL tasks
  const [users, setUsers] = useState([]); //ALL users
  const [newMatch, setNewMatch] = useState([]); // new match created when form is submitted

  /*------------------------FUNCTIONS-----------------------*/

  useEffect(() => {
    //useEffect runs every time page refreshes
    getTasks(); //gets ALL tasks from database and
    getUsers();
    getMatches();
    // getTaskNameByID();
  }, []);
  /*************??????????????????????????????????**************/
  const handleAddMatches = (match) => {
    console.log("App component receiving new match from Admin", match);
    console.log(match);
    // setNewMatch((state) => [...state, newMatch]); //saves previous state and adds new matches

    fetch("/users/updateMatch", {
      method: "PUT",

      body: JSON.stringify(match),
    })
      .then((response) => response.json())
      .then((tasks) => {
        setNewMatch(tasks); //add all tasks to the setTasks state so they can render in the dropdown
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*************??????????????????????????????????**************/

  /*------------------------INFORMATION COMING FROM DB WHICH IS SET IN BACKENED (users.js, tasks.js)-----------------------*/
  const getTasks = () => {
    //GET all 'tasks' from tasks table from db() declared in tasks.js
    fetch("/tasks")
      .then((response) => response.json())
      .then((tasks) => {
        setTasks(tasks); //add all tasks to the setTasks state so they can render in the dropdown
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    fetch("/users")
      //GET all 'users' from users table from db() declared in users.js
      .then((response) => response.json())
      .then((users) => {
        setUsers(users); //add all users to the setUsers state so they can render in the dropdown
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMatches = () => {
    fetch("/tasks/showTasks")
      .then((response) => response.json())
      .then((newMatch) => {
        setNewMatch(newMatch);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    /*------------------------JSX/HTML-----------------------*/

    <div className="App">
      <img src="logo.png" />
      <div className="d-flex justify-content-end">
        {/* <button
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
        <hr></hr>
        <h4>Choose an activity</h4>
        {/*------------------------PROPS-----------------------*/}
        <InputForm
          users={users}
          tasks={tasks}
          /*************??????????????????????????????????**************/
          addNewMatch={(addNewMatch) => handleAddMatches(addNewMatch)}
          /*************??????????????????????????????????**************/
        />
        {/* <MatchesTable addNewMatch={addNewMatch} /> */}
        <MatchesTable newMatch={newMatch} tasks={tasks} />
      </div>
    </div>
  );
}
