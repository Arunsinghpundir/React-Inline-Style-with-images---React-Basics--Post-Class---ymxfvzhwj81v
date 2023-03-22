import React from "react";
import "../styles/App.css";
import pic from "../NewtonSchool.jpg";
const App = () => {
  return (
    <div id="navbar">
      <div>NavBar</div>
      <img src={pic} width="130px" height="100px" margin="10px" />
    </div>
  );
};

export default App;
