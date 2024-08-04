import React from "react";

function PostTitle({ tag, title }) {
  return (
    <div>
      <div className="uppercase text-neutral-500 text-xl">
        {tag ?? "Featured Article"}
      </div>
      <div className="text-4xl font-semibold line-clamp-3 py-1">
        {title ?? "World's Most Dangerous Technology Ever Made."}
      </div>
    </div>
  );
}

export default PostTitle;
