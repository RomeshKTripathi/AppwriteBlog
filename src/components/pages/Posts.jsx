import React, { useEffect, useState } from "react";
import { PostCard } from "../ComponentIndex";
import service from "../../appwrite/AppwriteService";

const Posts = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    service.getPosts().then((response) => setArticles(response.documents));
  }, []);
  return (
    <div className="w-full flex flex-wrap justify-center">
      {articles &&
        articles.map((article) => (
          <PostCard key={article.title} article={article} />
        ))}
    </div>
  );
};

export default Posts;
