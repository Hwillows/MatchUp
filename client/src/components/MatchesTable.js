import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MatchesTable({
  currentName, // I am passing variables from the form page to get the current user
  currentTask,
  currentEmail,
}) {
  // current is the person who has just added their details. Existing is the person already on the database
  const [userInfo, setUserInfo] = useState([]); // all users in the database
  const [emailButtonClicked, setEmailButtonClicked] = useState(false);

  const handleSendEmail = (user) => {
    console.log(user);
    let newObj = user;
    newObj.currentUserName = currentName;
    newObj.currentUserEmail = currentEmail;
    console.log("next line is new obj");
    console.log(newObj);

    emailjs
      .send("service_johhsxu", "template_sm1s4gs", newObj, "fgWR9WYWIE_nYqIDn")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    toast.success(`Email sent to ${user.user_name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setEmailButtonClicked(true);
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
                    <>
                      <button
                        onClick={() => handleSendEmail(oneUser)}
                        value={oneUser.id}
                        className={
                          emailButtonClicked
                            ? "btn btn-success"
                            : "btn btn-secondary"
                        }
                      >
                        Send Email
                      </button>
                      <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                      />
                    </>
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
