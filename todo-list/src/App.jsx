import { Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TaskPage from "./pages/TaskPage";
import { useEffect, useState } from "react";
import Title from "./components/Title";

function App() {
  const initialTask = {
    id: "",
    title: "",
    description: "",
    isCompleted: false,
  };

  const [formTask, setFormTask] = useState(initialTask);
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("list")) || [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function onTaskClick(taskId) {
    const newTasks = list.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setList(newTasks);
  }

  function OnAddTaskSubmit(title, description) {
    if (!title.trim() || !description.trim()) return;
    const newTask = {
      id: list.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setList([...list, newTask]);
  }

  function OnDeleteTaskClick(taskId) {
    const newTasks = list.filter((t) => t.id != taskId);
    setList(newTasks);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
              <Title>Gerenciador de Tarefas</Title>
              <AddTask
                OnAddTaskSubmit={OnAddTaskSubmit}
                formTask={formTask}
                setFormTask={setFormTask}
              />
              <Tasks
                tasks={list}
                onTaskClick={onTaskClick}
                OnDeleteTaskClick={OnDeleteTaskClick}
              />
            </div>
          </div>
        }
      />

      <Route path="/task" element={<TaskPage />} />
    </Routes>
  );
}

export default App;
