import "./App.css";
import React, { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo";
import TaskInfo from "./components/TaskInfo";

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
      TEST
      <button type="button" className="btn btn-primary">
        TEST BUTTON
      </button>
      <UserInfo users={users} />
      <TaskInfo tasks={tasks} />
    </div>
  );
}
