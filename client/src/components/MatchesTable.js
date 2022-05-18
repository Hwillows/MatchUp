import React from "react";

export default function MatchesTable({ matches }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Activity</th>
            <th scope="col">Name #1</th>
            <th scope="col">Name #2</th>
          </tr>
        </thead>
        {matches.map((match) => (
          <tbody>
            <tr>
              <th scope="row">{match.task_id}</th>
              <td>{match.user_name}</td>
              <td></td>
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
