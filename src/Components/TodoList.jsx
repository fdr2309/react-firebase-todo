import React, { useEffect, useState } from "react";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";
const TodoList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const starCountRef = ref(database, "todos/");
    onValue(starCountRef, (snapshot) => {
      let arr = [];

      snapshot.forEach((item) => {
        arr.push(item.val());
      });

      setList(arr);
    });
  }, []);

  return (
    <div className="w-[250px] h-[200px] mx-auto mt-[20px] overflow-y-scroll">
      <ul>
        {list.map((item, i) => (
          <li
            key={i}
            className=" bg-slate-700 px-4 py-2 mb-5 text-white rounded"
          >
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
