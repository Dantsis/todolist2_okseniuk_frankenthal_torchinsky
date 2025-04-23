import TodoForm from './TodoForm';
import TodoList from './TodoList';
import BotonesDeFiltro from './BotonesDeFiltro';
import './TodoApp.css';

function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Mi Lista de Tareas</h1>
      <TodoForm />
      <BotonesDeFiltro />
      <TodoList />
    </div>
  );
}

export default TodoApp;
