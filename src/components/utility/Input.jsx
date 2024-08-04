import React from "react";

function Input({
  Icon,
  error,
  register,
  type,
  name,
  placeholder,
  validationObject,
}) {
  return (
    <div
      className={`w-full bg-neutral-200 rounded-md p-3 flex *:self-center mb-2 ${
        error
          ? "outline outline-1 outline-red-600 bg-red-50 *:placeholder:text-red-500/50"
          : ""
      }`}
    >
      {Icon && <Icon style={error ? "text-red-600" : "text-neutral-600"} />}
      <input
        type={type}
        autoComplete="off"
        className="h-8 w-full bg-transparent pl-2 outline-none "
        placeholder={placeholder}
        {...register(name, validationObject)}
      />
    </div>
  );
}

export default Input;
