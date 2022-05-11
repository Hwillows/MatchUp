//You need to send user information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

import React from "react";

const TaskInfo = (props) => {
  return <div>There are '{props.tasks.length}' users in the database.</div>;
};

export default TaskInfo;
