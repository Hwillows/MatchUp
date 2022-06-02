import React, { useState, useEffect } from "react";
var nodemailer = require("nodemailer");
require("dotenv").config();

// I am passing variables from the form page to get the current user - this works
// I need to fix the email password thing
export default function MatchesTable({
  currentName,
  currentTask,
  currentEmail,
}) {
  // these variables are what has been posted in to the
  const [userInfo, setUserInfo] = useState([{}]);
  const [userEmail, setUserEmail] = useState(""); // this gets the email of the button that is clicked

  // console.log(
  //   `the current user is ${currentName}, ${currentTask}, ${currentEmail}`
  // );

  const handleSetUserEmail = (event) => {
    setUserEmail(event);
    console.log(userEmail);
    console.log(`${userInfo} is the user in the list`);
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

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testemailhannah@gmail.com",
      pass: process.env.emailpass, // need to fix this
    },
  });

  var mailOptions = {
    from: "testemailhannah@gmail.com",
    to: { userEmail },
    subject: `MatchUp connection request for ${currentTask}`,
    text: `${currentName} is requesting you get in touch with them via ${currentEmail} to participate in ${currentTask} together`,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // I want display user information that matches the same activity as the person who just submitted
  // i need to pass the tasks variable from inputform.js
  // i need to then only map the ones from this
  return (
    //Table displays the two users and activity that were matched in inputForm.js
    <div>
      <div className="table-header">ALL MATCHES</div>
      <div className="table-container">
        <table className="table">
          <div className="table-header"></div>
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
                    <button onClick={() => handleSetUserEmail(oneUser.email)}>
                      Send Email
                    </button>
                  </td>
                </tr>
              ) : (
                <div></div>
              )
            )}

            {/* // <tr>
              //   <th className="table-light" scope="row"></th>
              //   <td className="table-light"></td>
              // </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
