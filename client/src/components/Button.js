import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

// toggling a button enables the buttons to have their own state
function Button({ oneUser, currentName, currentEmail }) {
  const [emailButtonClicked, setEmailButtonClicked] = useState(false);

  const handleSendEmail = () => {
    setEmailButtonClicked(true);
    let newObj = oneUser;
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

    toast.success(`Email sent to ${oneUser.user_name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button
        onClick={() => handleSendEmail(oneUser)}
        className={
          emailButtonClicked ? "btn btn-success disabled" : "btn btn-success"
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
    </div>
  );
}
export default Button;
