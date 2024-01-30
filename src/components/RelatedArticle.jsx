import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const RelatedArticle = ({ article }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/post/${article.$id}`);
      }}
      className="mt-2 p-2 border-b border-rose-200 hover:border-rose-300 cursor-pointer hover:bg-gradient-to-r hover:from-rose-200 hover:to-transparent rounded"
    >
      <p className="font-semibold">{article.title}</p>
      <div className="flex justify-between text-[12px] text-black *:text-nowrap *:overflow-ellipsis">
        <span>Posted By</span>
        <span>
          <b>{article.$updatedAt.split("T")[0]}</b>
        </span>
      </div>
    </div>
  );
};

export default memo(RelatedArticle);
