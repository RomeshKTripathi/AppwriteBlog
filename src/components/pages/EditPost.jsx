import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../PostForm";
import service from "../../appwrite/AppwriteService";

const EditPost = () => {
  const { postId } = useParams();
  const [loader, setLoader] = useState(true);
  const [post, setPost] = useState({});
  useEffect(() => {
    service.getPost(postId).then((response) => {
      setPost(response);
      setLoader(false);
    });
  }, []);
  return loader ? <div>Loading Editor</div> : <PostForm post={post} />;
};

export default EditPost;
