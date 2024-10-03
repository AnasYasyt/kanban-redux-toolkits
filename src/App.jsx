import React from "react";
import KanbanBoard from "./features/kanban/KanbanBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <KanbanBoard />
      </div>
    </DndProvider>
  );
};

export default App;
