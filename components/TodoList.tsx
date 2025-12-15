"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { motion } from "framer-motion";
import { REMOVE_FROM_LIST, SET_TODOS } from "@/context/actions/TodoActions";

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/todos/");
        const data = await response.json();
        dispatch(SET_TODOS(data));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [dispatch]);

  const handleRemove = async (id: number) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/todos/${id}/`, {
        method: "DELETE",
      });
      dispatch(REMOVE_FROM_LIST(id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-6">
      {todos?.length > 0 ? (
        todos.map((todo: any) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full flex items-center justify-between px-6 py-4 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 transition-colors"
          >
            <p className="text-lg text-gray-300 font-medium">{todo.item}</p>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleRemove(todo.id)}
              className="p-2 rounded-full hover:bg-red-500/10 group"
            >
              <BsTrash className="text-xl text-red-400 group-hover:text-red-500 transition-colors" />
            </motion.button>
          </motion.div>
        ))
      ) : (
        <div className="w-full text-center py-10 text-gray-500">
          No todos yet. Add one above!
        </div>
      )}
    </div>
  );
};

export default TodoList;
