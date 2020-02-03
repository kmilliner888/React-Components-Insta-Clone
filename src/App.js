/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata


import { dummyData } from "./dummy-data";
import PostPage from "./components/PostsContainer/PostsPage";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import CommentSectionContainer from "./components/CommentSection/CommentSectionContainer";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const initialState = dummyData;
  const [data, setData] = useState(initialState);
  // console.log("data", data);
  // console.log(dummyData);
  return (
    <div className="App">
      <SearchBarContainer />
      <PostPage pageData={data}/>
      <CommentSectionContainer />
    </div>
  );
};

export default App;
