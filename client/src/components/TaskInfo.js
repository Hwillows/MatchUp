//You need to send user information as props from App.js.
//Data must be passed into this component so it knows how to render the user data

import React from "react";

const TaskInfo = (props) => {
  return (
    <div>
      <ul>
        {/* trying to render user name list */}
        {props.tasks.map((task) => {
          /* use .map b/c tasks is an array of objects */
          return <li key={task.id}>{task.task_name}</li>;
        })}
      </ul>
      There are '{props.tasks.length}' users in the database;
    </div>
  );
};
export default TaskInfo;
