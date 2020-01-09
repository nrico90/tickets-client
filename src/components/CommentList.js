import React from "react";

export default function(props) {
  const { comments } = props;
  console.log("comentlist", comments);

  return (
    <div>
      <div></div>
      <h2>Comments</h2>
      {comments / 2}
      <ul>
        {!comments
          ? "Loading..."
          : comments.map(comment => {
              return (
                <li key={comment.id}>
                  <p>Author: {comment.author}</p>
                  <p>Text: {comment.text}</p>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
