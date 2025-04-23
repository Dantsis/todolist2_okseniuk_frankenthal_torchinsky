import './TodoItem.css';

function TodoItem({ texto, completada, fechaCreacion, fechaLimite }) {
  return (
    <li className={`todo-item ${completada ? 'completada' : ''}`}>
      <div className="texto">{texto}</div>
      <div className="fechas">
        <small>Creado: {fechaCreacion}</small>
        <small>Para: {fechaLimite}</small>
      </div>
    </li>
  );
}

export default TodoItem;
