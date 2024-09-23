import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../appwrite/AppwriteService";

const PostButtons = ({ article }) => {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user.userData);
    const [isAuthor, setIsAuthor] = useState(false);
    useEffect(() => {
        if (userData && userData.$id === article.userid) setIsAuthor(true);
        else setIsAuthor(false);
    }, [isAuthor, userData, article.userid]);
    return (
        isAuthor && (
            <div className="mt-3 pt-3 border-t flex justify-end">
                <button
                    onClick={() => {
                        navigate(`/edit-post/${article.$id}`);
                    }}
                    className="py-1 px-2 text-green-600 border rounded border-green-600 mx-3 hover:text-green-800 hover:border-green-800"
                >
                    Edit
                </button>
                <button
                    onClick={() => {
                        service.deletePost(article.$id);
                        navigate("/");
                    }}
                    className="py-1 px-2 text-orange-600 border rounded border-orange-600 mx-3 hover:text-orange-800 hover:border-orange-800"
                >
                    Delete
                </button>
            </div>
        )
    );
};

export default PostButtons;
