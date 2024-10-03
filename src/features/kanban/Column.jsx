import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveTask, addTask } from "./kanbanSlice";
import Task from "./Task";

const Column = ({ title, tasks, columnId, bgColor }) => {
  const dispatch = useDispatch();
  const [newTaskName, setNewTaskName] = useState("");

  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      dispatch(moveTask({ taskId: item.id, from: item.from, to: columnId }));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      dispatch(addTask({ name: newTaskName }));
      setNewTaskName("");
    }
  };

  return (
    <div
      ref={drop}
      className={`bg-${bgColor} rounded-lg p-4 w-80 min-h-[500px] shadow-md transition-colors duration-300 ${
        isOver ? "bg-gray-300" : ""
      } m-4`}
    >
      <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>
      <div className="flex flex-col gap-4 min-h-[400px]">
        {tasks.map((task) => (
          <Task key={task.id} task={task} from={columnId} />
        ))}
      </div>
      {title === "To Do" && (
        <div className="mt-4 flex flex-col items-center">
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Nueva tarea"
            className="border border-gray-400 p-2 rounded w-3/4 mb-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Añadir
          </button>
        </div>
      )}
    </div>
  );
};

export default Column;
