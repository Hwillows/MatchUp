import React from "react";

export default function MatchesTable({ matches }) {
  return (
    <ul>
      {matches.map((match) => (
        <li>
          {match.user_name}
          {match.task_id}
        </li>
      ))}
    </ul>
  );
}
