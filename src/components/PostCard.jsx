import React from "react";
import service from "../appwrite/AppwriteService";
import { useNavigate } from "react-router-dom";

const PostCard = ({ article }) => {
  const navigate = useNavigate();
  console.log("PostCard:", article);
  return (
    <div
      onClick={() => {
        navigate(`/post/${article.$id}`);
      }}
      className="w-52 p-4 m-4 rounded-md border cursor-pointer hover:text-rose-600 hover:shadow-sm duration-200  "
    >
      <img
        className="w-full rounded-md"
        src={service.getFilePreview(article.featuredimage)}
        alt=""
      />
      <p className="font-semibold mt-2 truncate">{article.title}</p>
    </div>
  );
};

export default PostCard;
