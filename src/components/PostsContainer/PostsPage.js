//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  // console.log("PostsPage props", props);
  return (
    <div className="posts-container-wrapper">
      {props.pageData.map((item, index) => {
        // console.log("item", item);
        return <div  key={index}><Post post={item}/></div>
      })}
      
    </div>

  );
} 
export default PostsPage;

