import React from "react";

const Home = () => {
  return (
    <div className="w-full  p-12 max-sm:p-4 flex flex-wrap justify-evenly">
      <article className="w-7/12 max-lg:w-full px-8 max-sm:p-2 rounded-tl-md h-fit">
        <img
          className="rounded-sm mb-12 max-sm:mb-3"
          src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        dolor animi sed iusto possimus harum ad quod autem, odio excepturi.
        Soluta eligendi suscipit consequatur repellat alias quibusdam possimus
        temporibus eum ex cum deserunt neque delectus laborum sit eaque modi
      </article>
      <div className="w-3/12 max-lg:w-full max-lg:mt-6 max-lg:mx-6 max-md:mx-3 max-md:mt-4 max-sm:mx-1 max-sm:mt-2 max-lg:border-l-0 max-lg:border-t-2 max-lg:rounded-none bg-rose-50 p-4 rounded-tr-md border-l-2 border-rose-500 h-fit">
        <h1 className="font-semibold text-3xl">Related Articles</h1>
        <div className="mt-2 p-2 border-b border-rose-200 hover:border-rose-300 cursor-pointer hover:bg-gradient-to-r hover:from-rose-200 hover:to-transparent rounded">
          <p className="font-semibold">Title of the featured post</p>
          <div className="flex justify-between text-sm text-black *:text-nowrap *:overflow-ellipsis">
            <span>Posted By</span>
            <span>Last Updated 23/06/2023</span>
          </div>
        </div>
        <div className="mt-2 p-2 border-b border-rose-200 hover:border-rose-300 cursor-pointer hover:bg-gradient-to-r hover:from-rose-200 hover:to-transparent rounded">
          <p className="font-semibold">Title of the featured post</p>
          <div className="flex justify-between text-sm text-black">
            <span>Posted By</span>
            <span>Last Updated 23/06/2023</span>
          </div>
        </div>
        <div className="mt-2 p-2 border-b border-rose-200 hover:border-rose-300 cursor-pointer hover:bg-gradient-to-r hover:from-rose-200 hover:to-transparent rounded">
          <p className="font-semibold">Title of the featured post</p>
          <div className="flex justify-between text-sm text-black">
            <span>Posted By</span>
            <span>Last Updated 23/06/2023</span>
          </div>
        </div>
        <div className="mt-2 p-2 border-b border-rose-200 hover:border-rose-300 cursor-pointer hover:bg-gradient-to-r hover:from-rose-200 hover:to-transparent rounded">
          <p className="font-semibold">Title of the featured post</p>
          <div className="flex justify-between text-sm text-black">
            <span>Posted By</span>
            <span>Last Updated 23/06/2023</span>
          </div>
        </div>
        <div className="mt-2 p-2 border-b border-rose-200 hover:border-rose-300 cursor-pointer hover:bg-gradient-to-r hover:from-rose-200 hover:to-transparent rounded">
          <p className="font-semibold">Title of the featured post</p>
          <div className="flex justify-between text-sm text-black">
            <span>Posted By</span>
            <span>Last Updated 23/06/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
