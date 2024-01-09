import React, { useState } from "react";
import { database } from "../Firebase";
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const [todo, setTodo] = useState("");

  const handleTodo = () => {
    if (!todo) {
      alert("Empty");
    } else {
      set(ref(database, "todos/" + uuidv4()), {
        todo: todo,
      });

      setTodo("");
    }
  };

  return (
    <div>
      <h1 className=" text-center text-4xl font-bold ">Todo App</h1>

      <div className="w-[250px] h-[50px] mx-auto relative mt-[20px]">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="h-[50px] w-[250px] px-4 outline-green-500 outline"
          type="text"
          name=""
          id=""
          placeholder="Write Something"
        />

        <button
          onClick={handleTodo}
          className="w-[50px] h-[50px] bg-green-500 font-bold text-white text-2xl absolute top-0 right-0"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Input;
