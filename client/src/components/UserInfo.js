//You need to send user information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

import React, { useState } from "react";

const UserInfo = (props) => {
  const [selectVal, setSelectVal] = useState("");

  console.log("selectVal", selectVal);

  return (
    <div>
      {/* trying to render user name list */}
      <select
        name="selectVal" //targeting the name of it
        //   any time we select anything from the dropdown, it's going to target the name to the initial state selectVal
        value={selectVal} //value is selecting the variable --activating the variable
        as="select" //equivalent to "type" for input
        onChange={(e) => setSelectVal(e.target.value)} //instead of creating separate function, we are creating an anon function on the jsx
      >
        {/* use .map b/c tasks is an array of objects  */}
        {props.users.map((user) => (
          <option key={user.id}>{user.user_name}</option>
        ))}
      </select>
    </div>
  );
};

export default UserInfo;
