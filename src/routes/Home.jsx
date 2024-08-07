import React from "react";
import travel from "../assets/travel.jpg";
import plan from "../assets/plan.jpg";
import FeaturedArticle from "../components/utility/FeaturedArticle";
import Title from "../components/utility/Title";
import PickedArticle from "../components/utility/PickedArticle";
import SuggestedArticle from "../components/utility/SuggestedArticle";
import Tag from "../components/utility/Tag";

const tags =
    "Technology Lifestyle Health Travel Food Education Finance Fashion Entertainment Business Parenting Fitness Personal-Development DIY Home-Decor Marketing Photography Art Music Sports Relationships Recipes News Environment".split(
        " "
    );

function Home() {
    return (
        <>
            <FeaturedArticle featuredImage={travel} position={"leftTop"} />
            <Title text="Editor's Pick" />
            <div className="w-3/5 mx-auto">
                <PickedArticle />
                <PickedArticle />
                <PickedArticle />
                <PickedArticle />
            </div>
            <FeaturedArticle
                featuredImage={plan}
                position={"rightCenter"}
                style={"my-20"}
            />
            <Title text={"Suggested"} />
            <div className="flex w-10/12 mx-auto gap-24 ">
                <div className="w-9/12">
                    <SuggestedArticle />
                    <SuggestedArticle />
                    <SuggestedArticle />
                    <SuggestedArticle />
                    <SuggestedArticle />
                </div>
                <div>
                    <span className="text-lg font-bold mb-2 block">Tags</span>
                    {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
