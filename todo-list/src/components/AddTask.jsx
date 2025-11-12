import { useState } from "react";
import Input from "./Input";

function AddTask({ OnAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o título da tarefa"
      />
      <Input
        type="text"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição da tarefa"
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          OnAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
