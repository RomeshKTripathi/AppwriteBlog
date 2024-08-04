import React from "react";

function PostDetails({ author, published }) {
  return (
    <div className="text-neutral-500  py-1 flex *:self-center">
      <div>{author ?? "Author"}</div>
      <div className="mx-3 size-1 rounded-full bg-neutral-400"></div>
      <div>{published ?? "May 7, 2024"}</div>
    </div>
  );
}

export default PostDetails;
