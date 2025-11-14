# 📝 Gerenciador de Tarefas (React)

Um aplicativo simples e funcional para gerenciamento de tarefas,
desenvolvido com **React**, **React Router**, **TailwindCSS** e
**LocalStorage**.\
O usuário pode criar tarefas, marcá-las como concluídas, excluir e
visualizar seus detalhes em uma página dedicada.

## 🚀 Tecnologias Utilizadas

- React
- React Router DOM
- TailwindCSS
- Lucide Icons
- LocalStorage
- Vite

## 📌 Funcionalidades

- ➕ Adicionar tarefa com título e descrição\
- ✔️ Marcar tarefa como concluída\
- 🔎 Ver detalhes da tarefa\
- 🗑️ Excluir tarefa\
- 💾 Salvamento automático no LocalStorage\
- 🔁 Carregar tarefas salvas ao abrir o app

## 📂 Estrutura dos Componentes

    src/
      ├─ components/
      │    ├─ AddTask.jsx
      │    ├─ Button.jsx
      │    ├─ Input.jsx
      │    ├─ Tasks.jsx
      │    └─ Title.jsx
      ├─ pages/
      │    └─ TaskPage.jsx
      ├─ App.jsx
      ├─ main.jsx
      └─ index.css

## 🧠 Lógica Principal

### Salvando no LocalStorage

```js
useEffect(() => {
  localStorage.setItem("list", JSON.stringify(list));
}, [list]);
```

### Alternar tarefa concluída

```js
const newTasks = list.map((task) => {
  if (task.id === taskId) {
    return { ...task, isCompleted: !task.isCompleted };
  }
  return task;
});
```

### Adicionar tarefa

```js
const newTask = {
  id: list.length + 1,
  title,
  description,
  isCompleted: false,
};
setList([...list, newTask]);
```

## ▶️ Como Rodar o Projeto

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173/

## 👨‍💻 Desenvolvido por

<table>
  <tr>
    <td align="center">
      <a href="#">
         <img src="https://avatars.githubusercontent.com/u/89953265?v=4" width="100px;" alt="Foto de Davi Afonso no GitHub"/><br>
        <sub>
          <b>Davi Afonso</b>
        </sub>
      </a>
    </td>
</table>
