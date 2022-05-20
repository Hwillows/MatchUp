import React from "react";

export default function MatchesTable({ newMatch }) {
  return (
    //Table displays the two users and activity that were matched in inputForm.js
    <div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="table-light">
              <th scope="col">Activity</th>
              <th scope="col">Name #1</th>
              <th scope="col">Name #2</th>
            </tr>
          </thead>
          <tbody>
            {/*ERROR- NEEDS TO BE FIXED -- table showing task but not users */}
            {newMatch.map((match) => (
              <tr key="index">
                <th className="table-light" scope="row">
                  {match.task_name}
                </th>
                <td className="table-light">{match.user_name}</td>
                <td className="table-light">{match.user_name}</td>
              </tr>
            ))}

            {/* {newMatch.map((outer, index) => {
              return newMatch.map((inner, inner_index) => {
                if (
                  outer.task_name !== undefined &&
                  inner.task_name !== undefined &&
                  outer.task_name === inner.task_name &&
                  outer.user_name !== inner.user_name
                ) {
                  console.log(outer.task_name, " second ", inner.task_name);
                  return (
                    <tr key={inner_index}>
                      <th className="table-light" scope="row">
                        {inner.task_name}
                      </th>
                      <td className="table-light">{outer.user_name}</td>
                      <td className="table-light">{inner.user_name}</td>
                    </tr>
                  );
                }
              });
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
