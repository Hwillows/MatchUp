//You need to send user information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <ul>
        {/* trying to render user name list */}
        {props.users.map((user) => {
          /* use .map b/c tasks is an array of objects */
          return <li key={user.id}>{user.user_name}</li>;
        })}
      </ul>
      There are '{props.users.length}' users in the database;
    </div>
  );
};

export default UserInfo;
