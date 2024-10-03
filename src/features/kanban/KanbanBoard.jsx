import React from "react";
import Column from "./Column";
import { useSelector } from "react-redux";

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.kanban.tasks);

  return (
    <div className="flex justify-center items-start bg-gray-100 p-6 min-h-screen">
      <Column
        title="To Do"
        tasks={tasks.todo}
        columnId="todo"
        bgColor="bg-pink-200"
      />
      <Column
        title="In Progress"
        tasks={tasks.inProgress}
        columnId="inProgress"
        bgColor="bg-yellow-200"
      />
      <Column
        title="Done"
        tasks={tasks.done}
        columnId="done"
        bgColor="bg-blue-200"
      />
    </div>
  );
};

export default KanbanBoard;
