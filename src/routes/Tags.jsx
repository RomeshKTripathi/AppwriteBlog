import React, { useRef, useState } from "react";
import { SearchIcon } from "../assets/Icons";
import TagSuggestion from "../components/utility/TagSuggestion";
import { useParams } from "react-router-dom";
import TagSearchResult from "../components/utility/TagSearchResult";

function Tags() {
  const { tag } = useParams();
  const ref = useRef(); // to clear focus after submitting tag

  const [showTags, setShowTags] = useState(!tag);
  const [searchedTag, setSearchedTag] = useState(tag ?? "");

  const handleInput = (event) => {
    const text = event.target.value;
    setSearchedTag(text);
  };

  const handleTagClick = (tag) => {
    setSearchedTag(tag);
    setShowTags(false);
  };

  return (
    <div className="w-full pt-44">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          ref.current.blur();

          if (!searchedTag) return;
          setShowTags(false);
        }}
        className="h-16 border border-black rounded-full w-8/12 mx-auto flex"
      >
        <input
          onFocus={() => {
            setShowTags(true);
          }}
          ref={ref}
          onInput={handleInput}
          value={searchedTag}
          className="h-full w-full outline-none bg-transparent placeholder:text-neutral-500 pl-10 text-lg"
          type="text"
          name=""
          placeholder="Find the topics you care about..."
          id=""
        />
        <button type="submit" className="mr-10">
          <SearchIcon />
        </button>
      </form>

      {showTags ? (
        <TagSuggestion
          searchedTag={searchedTag.trim().toLowerCase()}
          handleTagClick={handleTagClick}
        />
      ) : (
        <TagSearchResult tag={searchedTag.toLowerCase()} />
      )}
    </div>
  );
}

export default Tags;
