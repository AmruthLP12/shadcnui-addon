import React from "react";
import KanbanBoard from "./KanbanBoard";

const KanbanBoardDemo = () => {
  const initialTasks = [
    {
      id: "1",
      title: "Task 1",
      columnId: "todo",
    },
    {
      id: "2",
      title: "Task 2",
      columnId: "in-progress",
    },
    {
      id: "3",
      title: "Task 3",
      columnId: "todo",
    },
    {
      id: "4",
      title: "Task 4",
      columnId: "todo",
    },
    {
      id: "5",
      title: "Task 5",
      columnId: "todo",
    },
    {
      id: "6",
      title: "Task 6",
      columnId: "done",
    },
  ];

  const initialColumns = [
    {
      id: "todo",
      title: "Todo",
    },
    {
      id: "in-progress",
      title: "In Progress",
    },
    {
      id: "done",
      title: "Done",
    },
  ];



  return (
    <div>
      <KanbanBoard initialTasks={initialTasks} initialColumns={initialColumns} />
    </div>
  );
};

export default KanbanBoardDemo;
