import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../appwrite/AppwriteService";
import parse from "html-react-parser";
const Post = () => {
  const { postId } = useParams();
  const [loader, setLoader] = useState(true);
  const [article, setArticle] = useState({});

  useEffect(() => {
    service
      .getPost(postId)
      .then((response) => setArticle(response))
      .finally(() => {
        // console.log(article);
        setLoader(false);
      });
  }, []);

  return loader ? (
    <div className="w-full h-full mx-auto my-auto text-3xl text-center align-middle text-rose-500">
      Loading...
    </div>
  ) : (
    <div className="w-2/3 mx-auto my-5 text-justify text-neutral-900 max-md:w-full max-md:px-6 max-md:py-8">
      {
        <img
          className=" p-8"
          src={service.getFilePreview(article.featuredimage)}
          alt=""
        />
      }
      {article.content && parse(article.content)}
    </div>
  );
};

export default Post;
