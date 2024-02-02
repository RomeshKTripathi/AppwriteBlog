import React from "react";
import Input from "../Input";
import Logo from "../Logo";

const ContactUs = () => {
  return (
    <div className="p-4  w-full flex justify-center h-screen items-center ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Message Sent");
        }}
        class="w-full max-w-lg bg-gradient-to-br from-rose-50 to-teal-50 p-8  rounded-md max-md:rounded-sm max-md:p-4 max-sm:p-2 max-sm:rounded-none"
      >
        <Logo />
        <Input
          id="1"
          type="text"
          placeholder="Nickname"
          label="Nickname"
          className={"text-teal-500-500"}
          autoComplete="off"
        />
        <Input
          id="1"
          type="email"
          placeholder="Email"
          label="Email"
          className={"text-teal-500-500"}
          autoComplete="off"
        />
        <textarea
          id="1"
          type="textarea"
          placeholder="Message"
          label="Message"
          className={
            "text-teal-500-500 min-h-48 w-full border border-gray-500 rounded-md p-4 my-2 outline-none bg-transparent text-gray-800"
          }
          autoComplete="off"
        />
        <Input
          id="1"
          type="submit"
          placeholder="Send Message"
          label=""
          className={"text-teal-500-500 h-10 hover:bg-teal-100 cursor-pointer"}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default ContactUs;
