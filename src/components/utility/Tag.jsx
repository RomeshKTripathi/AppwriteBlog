import React from "react";
import { Link } from "react-router-dom";

function Tag({ tag }) {
  return (
    <Link to={`/tags/${tag.toLowerCase()}`}>
      <span
        key={tag}
        className="my-4 cursor-pointer hover:font-semibold duration-100 block"
      >
        {tag}
      </span>
    </Link>
  );
}

export default Tag;
