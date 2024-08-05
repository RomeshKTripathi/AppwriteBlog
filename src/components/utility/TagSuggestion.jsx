import React, { useState } from "react";

const tags = [
  "Technology",
  "Lifestyle",
  "Health",
  "Travel",
  "Food",
  "Education",
  "Finance",
  "Fashion",
  "Entertainment",
  "Business",
  "Parenting",
  "Fitness",
  "Personal-Development",
  "DIY",
  "Home-Decor",
  "Marketing",
  "Photography",
  "Art",
  "Music",
  "Sports",
  "Relationships",
  "Recipes",
  "News",
  "Environment",
  "Science",
  "History",
  "Books",
  "Movies",
  "TV",
  "Gaming",
  "Nature",
  "Adventure",
  "Beauty",
  "Wellness",
  "Self-Care",
  "Mindfulness",
  "Career",
  "Startups",
  "Productivity",
  "Writing",
  "Blogging",
  "Social-Media",
  "Technology-News",
  "Software",
  "Gadgets",
  "Programming",
  "Coding",
  "Web-Development",
  "Artificial-Intelligence",
  "Machine-Learning",
  "Blockchain",
  "Cryptocurrency",
  "Virtual-Reality",
  "Augmented-Reality",
  "Sustainability",
  "Green-Living",
  "Eco-Friendly",
  "Climate-Change",
  "Renewable-Energy",
  "Minimalism",
  "Zero-Waste",
  "Travel-Tips",
  "Destinations",
  "Culinary",
  "Recipes",
  "Restaurant-Reviews",
  "Wine",
  "Baking",
  "Cooking-Tips",
  "Healthy-Eating",
  "Diet",
  "Weight-Loss",
  "Exercise",
  "Yoga",
  "Meditation",
  "Mental-Health",
  "Happiness",
  "Inspiration",
  "Motivation",
  "Leadership",
  "Management",
  "Entrepreneurship",
  "Investing",
  "Real-Estate",
  "Budgeting",
  "Saving-Money",
  "Frugality",
  "Debt-Management",
  "Insurance",
  "Taxes",
];

function TagSuggestion({ setSearchedTag, searchedTag, handleTagClick }) {
  let suggestedTags = tags.slice(0, 16);
  if (searchedTag) {
    suggestedTags = tags.filter((tag) =>
      tag.toLowerCase().includes(searchedTag)
    );
  }
  if (
    suggestedTags.length == 1 &&
    suggestedTags[0].toLowerCase() === searchedTag.toLowerCase()
  )
    return null;
  return (
    <div className="flex w-10/12 mx-auto my-10 gap-4 flex-wrap justify-center">
      {suggestedTags.slice(0, 17).map((tag, index) => (
        <span
          key={index}
          onClick={(event) => {
            handleTagClick(tag);
          }}
          className="px-4 py-2 border border-black rounded-full cursor-pointer hover:bg-neutral-100 duration-100 "
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

export default React.memo(TagSuggestion);
