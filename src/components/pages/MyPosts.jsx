import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading, PostCard } from "../ComponentIndex";
import service from "../../appwrite/AppwriteService";

const MyPosts = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    service.getPosts([Query.equal("userid", userData.$id)]).then((response) => {
      setArticles(response.documents);
      console.log("Articles loaded");
      setLoader(false);
    });
  }, []);
  return loader ? (
    <Loading />
  ) : (
    <div className="flex justify-center p-12 max-md:p-4 max-sm:p-2 flex-wrap">
      {articles && articles.length ? (
        articles.map((article) => {
          return <PostCard key={article.title} article={article} />;
        })
      ) : (
        <div className="w-full text-center text-rose-600 text-lg font-bold">
          You Have not Posted Anything...!
        </div>
      )}
    </div>
  );
};

export default MyPosts;
