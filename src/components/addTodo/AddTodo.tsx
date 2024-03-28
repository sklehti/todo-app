import React from "react";

const AddTodo = () => {
  return (
    <div>
      {/* TODO: */}
      <div className="relative flex justify-center flex-col">
        <input type="text" className="w-full p-3 x-2 rounded" />
        <div className="block absolute cursor-pointer text-xl select-none pl-5 flex justify-center flex-col">
          <input
            type="checkbox"
            checked={true}
            name="checkmark"
            className="opacity-0 cursor-pointer"
          />
          <span className="absolute h-5 w-5 bg-black rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
