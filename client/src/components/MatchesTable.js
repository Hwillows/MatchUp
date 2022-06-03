import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";

export default function MatchesTable({
  currentTask,
  currentEmail,
  currentName,
}) {
  const [userInfo, setUserInfo] = useState([]); // all users in the database

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/users");
      const results = await response.json();
      setUserInfo(results);
      console.log(`${userInfo} is the user in the list`);
    }
    fetchData();
  }, []);

  // information displayed matches the same activity as the person who just submitted

  return (
    <div>
      <div className="table-header">ALL MATCHES</div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="table-light">
              <th scope="col">ACTIVITY</th>
              <th scope="col">NAMES</th>
              <th scope="col">Want to connect?</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((oneUser, index) =>
              currentTask === oneUser.task ? (
                <tr key={index}>
                  <th className="table-light" scope="row">
                    {oneUser.task}
                  </th>
                  <td className="table-light">{oneUser.user_name}</td>
                  <td className="table-light">
                    <Button
                      oneUser={oneUser}
                      currentEmail={currentEmail}
                      currentName={currentName}
                    />
                  </td>
                </tr>
              ) : (
                <tr></tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
