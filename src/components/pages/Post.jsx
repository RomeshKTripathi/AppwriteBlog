import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/AppwriteService";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import CommentSystem from "../CommentSystem";
import PostButtons from "../PostButtons";

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
        console.log(typeof postId);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, [userData]);

  return loader ? (
    <Loading />
  ) : (
    <div className="w-1/2 mx-auto my-5 text-justify text-neutral-900 max-lg:w-2/3 max-md:w-full max-md:px-6 max-md:py-8 article">
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
      <PostButtons article={article} />
      <CommentSystem postId={postId} userData />
    </div>
  );
};

export default Post;
