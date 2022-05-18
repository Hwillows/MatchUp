import React from "react";

export default function MatchesTable({ newMatch }) {
  return (
    //Table displays the two users and activity that were/ matched in inputForm.js
    <div>
      <div className="table-header">ALL MATCHES</div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="table-light">
              <th scope="col">Activity</th>
              <th scope="col">Name #1</th>
              <th scope="col">Name #2</th>
            </tr>
          </thead>
          {newMatch.map((match) => (
            <tbody>
              <tr>
                <th className="table-light" scope="row" key="match.task_id">
                  {match.task_id}
                </th>
                <td className="table-light">{match.user_name}</td>
                <td className="table-light">{match.user_name}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
