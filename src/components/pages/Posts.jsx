import React, { useEffect, useState } from "react";
import { Loading, PostCard } from "../ComponentIndex";
import service from "../../appwrite/AppwriteService";
import { useSelector } from "react-redux";

const Posts = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    if (!userData) {
      setLoader(false);
      return;
    }

    service
      .getPosts()
      .then((response) => setArticles(response.documents))
      .finally(() => {
        setLoader(false);
      });
  }, [userData]);
  return loader ? (
    <Loading />
  ) : (
    <div className="w-full flex flex-wrap justify-center">
      {userData && articles ? (
        articles.map((article) => (
          <PostCard key={article.title} article={article} />
        ))
      ) : (
        <div className="w-full h-full text-center text-teal-800 text-3xl font-extralight">
          Login to view articles
        </div>
      )}
    </div>
  );
};

export default Posts;
