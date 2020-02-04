// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // console.log("comment props", props);
  // Add state for the comments
  const initialState = props.comments;
  const [comm, setComments] = useState(initialState);
  // console.log("comm", comm);
  // console.log("CommentSection initialState", initialState);

  return (
    <div>
      {comm.map((commentItem, index) => {
        return <Comment key={index} comment={commentItem} />
      })}

      <CommentInput />
      
    </div>
  );
};

export default CommentSection;
