import React from "react";
import service from "../appwrite/AppwriteService";
import { useNavigate } from "react-router-dom";
import { alternative } from "../assets";

const PostCard = ({ article }) => {
  const navigate = useNavigate();
  console.log(article.featuredimage);
  return (
    <div
      onClick={() => {
        navigate(`/post/${article.$id}`);
      }}
      className="w-52 p-2 m-2 bg-gradient-to-b from-gray-200 to-transparent rounded-md border cursor-pointer hover:text-rose-600 hover:shadow-sm duration-200  "
    >
      <img
        className="w-full rounded-md"
        src={
          article.featuredimage
            ? service.getFilePreview(article.featuredimage)
            : alternative
        }
        alt=""
      />
      <p className="font-semibold mt-2 truncate">{article.title}</p>
    </div>
  );
};

export default PostCard;
