import React from "react";

export default function MatchesTable({ matches }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr className="table-light">
            <th scope="col">Activity</th>
            <th scope="col">Name #1</th>
            <th scope="col">Name #2</th>
          </tr>
        </thead>
        {matches.map((match) => (
          <tbody>
            <tr>
              <th className="table-light" scope="row">
                {match.task_id}
              </th>
              <td className="table-light">{match.user_name}</td>
              <td className="table-light">{match.user_name}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>

    // <ul>
    //   {matches.map((match) => (
    //     <li>
    //       {match.user_name}
    //       {match.task_id}
    //     </li>
    //   ))}
    // </ul>
  );
}
