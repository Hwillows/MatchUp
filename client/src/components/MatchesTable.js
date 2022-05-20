import React from "react";

export default function MatchesTable({ newMatch }) {
  return (
    //Table displays the two users and activity that were matched in inputForm.js
    <div>
      <div className="table-header">ALL MATCHES</div>
      <div className="table-container">
        <table className="table">
          <div className="table-header"></div>
          <thead>
            <tr className="table-light">
              <th scope="col">ACTIVITY</th>
              <th scope="col">NAMES</th>
            </tr>
          </thead>
          <tbody>
            {newMatch.map((match) => (
              <tr key="index">
                <th className="table-light" scope="row">
                  {match.task_name}
                </th>
                <td className="table-light">{match.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
