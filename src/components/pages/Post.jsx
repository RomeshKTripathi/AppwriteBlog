import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/AppwriteService";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

const Post = () => {
  const { postId } = useParams();
  const [loader, setLoader] = useState(true);
  const [article, setArticle] = useState({});
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  useEffect(() => {
    service
      .getPost(postId)
      .then((response) => setArticle(response))
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return loader ? (
    <div className="w-full h-full mx-auto my-auto text-3xl text-center align-middle text-rose-500">
      Loading...
    </div>
  ) : (
    <div className="w-1/2 mx-auto my-5 text-justify text-neutral-900 max-lg:w-2/3 max-md:w-full max-md:px-6 max-md:py-8">
      <div>
        {
          <img
            className=" p-1 mb-8 max-md:mb-3"
            src={service.getFilePreview(article.featuredimage)}
            alt=""
          />
        }
        {article.content && parse(article.content)}
      </div>

      {userData.$id === article.userid && (
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
              service.deletePost(postId);
              navigate("/");
            }}
            className="py-1 px-2 text-orange-600 border rounded border-orange-600 mx-3 hover:text-orange-800 hover:border-orange-800"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
