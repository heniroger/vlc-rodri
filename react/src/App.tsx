import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Post from "./components/Post";

function App() {
  const postData = [1, 2, 3, 4, 5];
  const postItems = postData.map((post) => <Post />);

  return (
    <>
      <NavBar />
      <div className="container ">{postItems}</div>
    </>
  );
}

export default App;
