import React from "react";
import Logo from "../components/utility/Logo";
import story from "../assets/story.jpg";
import news from "../assets/news.jpg";

function About() {
  return (
    <div className="p-10 pb-0">
      <div className="my-44 mx-auto">
        <Logo style={"text-5xl text-center"} />
        <span className="w-80 text-lg font-medium mx-auto block text-center my-4">
          A Publishing Company that focuses <br /> on the essentials.
        </span>
      </div>
      <div className="relative bg-neutral-800 w-full h-fit ">
        <div className="absolute top-0 right-40 w-2 bg-white h-[1200px] "></div>
        <div className="absolute bottom-0 left-40 w-2 bg-white h-[1200px]"></div>

        <div className="flex p-20 *:self-center z-[1] ">
          <div className="w-1/2 pr-10 z-[1]">
            <span className="text-white text-5xl mb-5 block">
              We Tell Stories That <br /> Drive the hearts.
            </span>
            <span className="text-white font-thin">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              incidunt eveniet molestiae cupiditate repellendus rerum sit sint
              necessitatibus nihil odit natus, eaque qui optio unde suscipit
              dolor voluptatem magnam nemo temporibus. Quaerat voluptatem nobis
              dolores libero dignissimos ratione, ad eveniet molestiae
              perferendis similique harum ducimus magnam laboriosam aliquam
              atque dolor nemo!
            </span>
          </div>
          <div className="w-1/2 z-[1] p-10">
            <img className="w-full ml-auto " src={story} alt="" />
          </div>
        </div>

        <div className="relative mx-auto w-2/5 z-10 -mt-48 *:mx-auto  ">
          <div className="w-full  mb-5">
            <img className="w-full ml-auto " src={news} alt="" />
          </div>
          <div className="w-full p-2">
            <span className="text-white text-5xl mb-5 block ">
              We Tell News That <br /> makes the most impact.
            </span>
            <span className="text-white font-thin ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              magnam ea at soluta illum reprehenderit ad odit aspernatur nulla.
              Ea nulla natus labore, maxime ex consequuntur quae accusantium
              atque, reiciendis fuga perspiciatis. Iusto, quasi eum! Pariatur
              doloremque impedit nostrum maiores cupiditate eveniet perferendis
              quos.
            </span>
          </div>
        </div>

        <div className="flex p-20 pb-40 *:self-center z-[1] ">
          <div className="pl-40 z-[1]">
            <span className="text-white text-5xl font-medium mb-5 block">
              We Tell Stories That <br /> Drive the hearts.
            </span>
            <span className="text-white font-thin leading-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              incidunt eveniet molestiae cupiditate repellendus rerum sit sint
              necessitatibus nihil odit natus, eaque qui optio unde suscipit
              dolor voluptatem magnam nemo temporibus. Quaerat voluptatem nobis
              dolores libero dignissimos ratione, ad eveniet molestiae
              perferendis similique harum ducimus magnam laboriosam aliquam
              atque dolor nemo!
            </span>
          </div>
        </div>
      </div>

      <div className="my-44 mx-auto">
        <span className="w-96 font-semibold block mx-auto text-4xl text-center">
          Because We are one of Best Services !
        </span>
        <span className="w-2/5 text-lg font-thin mx-auto block text-center my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus
          voluptate earum cupiditate iste!
        </span>
      </div>
      <div className=" bg-neutral-800 py-40 -mb-10 w-full h-fit">
        <div className=" w-1/3 mx-auto">
          <span className="block text-center text-4xl  text-white">
            Want to Connect !
          </span>
          <span className="block text-center my-5 text-white font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            dolores quia alias.
          </span>
          <div className="flex justify-center gap-5 *:font-extrabold text-white text-3xl">
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
