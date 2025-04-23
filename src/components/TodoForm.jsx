import './TodoForm.css';

function TodoForm() {
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Escribí una nueva tarea..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Agregar
      </button>
    </form>
  );
}

export default TodoForm;
