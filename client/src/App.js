// App.js is front-end Parent Component

/*------------------------IMPORT------------------------*/
import "./App.css";
import React, { useEffect, useState } from "react";
import InputForm from "./components/InputForm"; //import InputForm componenet
import MatchesTable from "./components/MatchesTable"; //import MatchesTable component

export default function App() {
  /*------------------------SET STATE------------------------*/
  const [tasks, setTasks] = useState([]); //ALL tasks
  const [users, setUsers] = useState([]); //ALL users
  const [newMatch, setNewMatch] = useState([]); // new match created when form is submitted
  //I DON'T THINK SETNEWMATCH IS RUNNING CORRECTLY. NEW MATCHES AREN'T BEING ADDED TO THE TABLE.

  /*------------------------FUNCTIONS-----------------------*/

  useEffect(() => {
    //useEffect runs every time page refreshes
    getTasks(); //gets ALL tasks from database and sets them in the tasks state variable
    getUsers(); //gets ALL users from database and sets them in the tasks state variable
    getMatches(); //returns objects with two names and the task they're matched to.
  }, []);
  /*------------------------handleAddMatches-----------------------*/

  /*------------------------FUNCTIONS-----------------------*/
  const handleAddNewMatch = (match) => {
    console.log("match from handleAddMatches", match);
    //'match' is an object that holds user_id, user_id2, and task_id --- EXAMPLE: {user_id: '10', user_id2: '12', task_id: '6' }

    //setNewMatch saves all previous matches and adds the new match. Updating the state.
    // setNewMatch((previousMatches) => [...previousMatches, match]);
    // console.log("newMatch", newMatch);
    /*newMatch returns an array of objects. Each object holds matched names (after submit) and the task they are matched to. 
    
    EXAMPLE:
    group_concat(users.user_name separator ','): "Deb,Joseph"
    task_name: "Explore Barcelona";
    */

    /*------------------------INFORMATION COMING FROM DB WHICH IS SET IN BACKENED (users.js, tasks.js)-----------------------*/

    /*------------------------ERROR WITH /updateMatch WHEN INFO SUBMITTED -----------------------*/
    fetch("/users/updateMatch", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match),
    })
      .then((response) => response.json())
      .then((tasks) => {
        setNewMatch(tasks); //NOT WORKING?
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*GET all 'tasks' from tasks table from db() declared in tasks.js. This list is being set in the 'tasks' variable
  in the state as an array so that it can be mapped through in the dropdown menu in the InputForm. */
  const getTasks = () => {
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
      <img src="logo.png" alt="matchUp logo" />
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
          addNewMatch={(addNewMatch) => handleAddNewMatch(addNewMatch)}
          /*************??????????????????????????????????**************/
        />
        {/* <MatchesTable addNewMatch={addNewMatch} /> */}
        <MatchesTable newMatch={newMatch} tasks={tasks} />
      </div>
    </div>
  );
}
