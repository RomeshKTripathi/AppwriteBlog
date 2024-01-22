import React from "react";

const Input = (
  { label, className = "", type = "text", placeholder = "", ...props },
  ref
) => {
  return (
    <div className="w-full mt-2 relative">
      {label && <label className="text-teal-800  font-semibold">{label}</label>}
      <input
        type={type}
        className={`outline-none border  rounded w-full bg-transparent border-gray-500 p-1 ${className}`}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    </div>
  );
};

export default React.forwardRef(Input);
