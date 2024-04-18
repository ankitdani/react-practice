import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <div className="data">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>
        Student. Searching for a full time software engineer role or a web
        developer intern role.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skill-list">
      <Skill skillName="React" color="green" />
      <Skill skillName="JavaScript" color="blue" />
      <Skill skillName="JSX" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <h3>{props.skillName}</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
