import React from "react";
import { useDrag } from "react-dnd";

const Task = ({ task, from }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, from },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-white rounded-md p-3 shadow hover:shadow-lg cursor-pointer transition-transform transform ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {task.name}
    </div>
  );
};

export default Task;
