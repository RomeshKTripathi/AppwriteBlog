import React, { useEffect, useState } from "react";
import { Loading, PostCard } from "../ComponentIndex";
import service from "../../appwrite/AppwriteService";

const Posts = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    service
      .getPosts()
      .then((response) => setArticles(response.documents))
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return loader ? (
    <Loading />
  ) : (
    <div className="w-full flex flex-wrap justify-center">
      {articles &&
        articles.map((article) => (
          <PostCard key={article.title} article={article} />
        ))}
    </div>
  );
};

export default Posts;
