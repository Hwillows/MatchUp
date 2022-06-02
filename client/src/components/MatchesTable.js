import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

// I am passing variables from the form page to get the current user
export default function MatchesTable({
  currentName,
  currentTask,
  currentEmail,
}) {
  const [userInfo, setUserInfo] = useState([]); // all users in the database
  const [existingUserEmail, setExistingUserEmail] = useState(""); // the email of the person when the button is clicked
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserTask, setCurrentUserTask] = useState("");
  const [existingUserName, setExistingUserName] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  const handleSendEmail = (e) => {
    // e.preventDefault();
    setExistingUserEmail(e.email);
    setCurrentUserName(currentName);
    setCurrentUserTask(currentTask);
    setExistingUserName(currentName);
    setCurrentUserEmail(currentEmail);

    let userInfoObject = {
      userEmail: existingUserEmail,
      userName: existingUserName,
      currentName: currentUserName,
      currentTask: currentUserTask,
      currentEmail: currentUserEmail,
    };

    emailjs
      .send("gmail", "template_sm1s4gs", userInfoObject, "fgWR9WYWIE_nYqIDn")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          {/* <div className="table-header"></div> */}
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
                    <button onClick={() => handleSendEmail(oneUser)}>
                      Send Email
                    </button>
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
