// App.js is front-end Parent Component

/*------------------------IMPORT------------------------*/
import "./App.css";
import React from "react";
import InputForm from "./components/InputForm"; //import InputForm componenet

export default function App() {
  return (
    /*------------------------JSX/HTML-----------------------*/

    <div className="App">
      <img src="logo.png" alt="matchUp logo" />
      <div className="app-container">
        <h1>Find Your Match</h1>
        <h4>some things are a better in pairs</h4>
        <hr></hr>
        <div className="description-container">
          <h5>
            Looking for a gym partner, shopping buddy, or even a chess opponent?
            <br />
            <br />
            MatchUP is a platform where you can find and match with people who
            have similar interests and likeminded goals.
          </h5>
        </div>

        <hr></hr>
        <h4>Create A New Match:</h4>
        <InputForm />
      </div>
    </div>
  );
}
