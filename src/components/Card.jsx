import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/post/${title}`);
      }}
      className="w-52 bg-gradient-to-br from-rose-200 to-teal-50  hover:shadow-md cursor-pointer duration-100 transition-all hover:shadow-rose-200 p-4  hover:text-rose-500  rounded m-5 max-sm:mx-auto max-sm:my-2"
    >
      <img
        className="w-full rounded"
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <h2 className=" font-semibold my-2">{title}</h2>
    </div>
  );
};

export default Card;
