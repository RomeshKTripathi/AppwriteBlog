import React from "react";

const extractDate = (rawDate) => {
  return rawDate.split("T")[0];
};

const Comment = ({ data }) => {
  return (
    <div className="w-full my-3 border-t border-teal-500 ">
      <span className="text-lg font-semibold">{data.comment}</span>
      <div className="pl-2">
        <p>
          <i>by:</i>
          {" " + data.username}
        </p>
        <i className="text-[12px]">Date: {extractDate(data.$createdAt)}</i>
      </div>
    </div>
  );
};

export default Comment;
