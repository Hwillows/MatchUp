//You need to send user information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

import React from "react";

const UserInfo = (props) => {
  return <div>There are '{props.users.length}' users in the database.</div>;
};

export default UserInfo;
