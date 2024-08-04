import React from "react";
import PostDetails from "./PostDetails";
import PostTitle from "./PostTitle";

function FeaturedArticle({
  tag,
  title,
  author,
  published,
  article,
  featuredImage,
  position,
  style,
}) {
  const positionStyle = {
    leftTop: "top-0 left-10",
    rightTop: "right-10 top-0",
    leftCenter: "top-10 left-16",
    rightCenter: "top-10 right-16",
  };

  return (
    <div className={`w-full relative  ${style}`}>
      <img className="w-full max-h-[580px]" src={featuredImage} alt="" />
      <div
        className={`bg-white/80 backdrop-blur-md  p-10 absolute w-2/5 h-[500px] cursor-pointer ${positionStyle[position]}`}
      >
        <div className="mt-10">
          <PostTitle tag={tag} tigle={title} />
          <PostDetails author={author} published={published} />
          <div className="line-clamp-[8]">
            {article ??
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nisi quod omnis voluptatum commodi est praesentium quibusdam voluptates corrupti molestiae aliquam, deleniti doloribus porro asperiores dolore quisquam illum facilis consectetur! Necessitatibus esse et accusamus totam ipsam nemo pariatur soluta, exercitationem eius veritatis eum est odit suscipit, repellat, eveniet dolore animi impedit aut doloribus qui beatae? exercitationem eius veritatis eum est odit suscipit, repellat, eveniet dolore animi impedit aut doloribus qui beatae?"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticle;
