import React from "react";
import PostDetails from "./PostDetails";
import PostTitle from "./PostTitle";
import featured from "../../assets/featured.png";

function PickedArticle({ style }) {
  return (
    <div className={`w-full h-72 flex  mt-16 cursor-pointer ${style}`}>
      <div className="h-72 w-[350px] shrink-0">
        <img className="h-full w-full rounded-r-lg" src={featured} alt="" />
      </div>
      <div className="ml-10 ">
        <PostTitle />
        <PostDetails />
        <div className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus
          unde alias aperiam asperiores sunt dolor enim inventore et, animi
          quasi corrupti soluta dicta, repellendus eveniet incidunt omnis
          delectus a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae exercitationem quae est dolorem itaque cupiditate velit
          vitae quibusdam, labore ea nesciunt ipsa cum voluptatem nobis
          doloremque quidem reprehenderit rem harum repellat culpa dolor.
          Deleniti vero numquam blanditiis vel commodi culpa quia consequatur
          eum cumque assumenda maiores, illo similique pariatur impedit!
        </div>
      </div>
    </div>
  );
}

export default PickedArticle;
