import React from "react";

function TagSearchResult({ tag }) {
  return (
    <div className="w-2/3 mx-auto mt-32">
      <span className="text-lg text-neutral-700 font-bold  italic">
        Search Result : #{tag}
      </span>
      <div className="mt-4 pt-4 border-t-2 border-neutral-600"></div>
    </div>
  );
}

export default TagSearchResult;
