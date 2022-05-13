//You need to send user information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

import React, { useState } from "react";

const InputForm = (props) => {
  const [selectUser1, setSelectUser1] = useState("");
  const [selectUser2, setSelectUser2] = useState("");

  console.log("selectUser1", selectUser1);

  return (
    <div>
      {/* USER 1 */}
      <select
        name="selectUser1" //targeting the name of it
        //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
        value={selectUser1} //value is selecting the variable --activating the variable
        as="select" //equivalent to "type" for input
        onChange={(e) => setSelectUser1(e.target.value)} //instead of creating separate function, we are creating an anon function on the jsx
      >
        {/* use .map b/c tasks is an array of objects  */}
        {props.users.map((user) => (
          <option key={user.id}>{user.user_name}</option>
        ))}
      </select>
      {/* USER 2*/}
      <select
        name="selectUser2" //targeting the name of it
        //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
        value={selectUser2} //value is selecting the variable --activating the variable
        as="select" //equivalent to "type" for input
        onChange={(e) => setSelectUser2(e.target.value)} //instead of creating separate function, we are creating an anon function on the jsx
      >
        {/* use .map b/c tasks is an array of objects  */}
        {props.users.map((user) => (
          <option key={user.id}>{user.user_name}</option>
        ))}
      </select>
    </div>
  );
};

export default InputForm;
