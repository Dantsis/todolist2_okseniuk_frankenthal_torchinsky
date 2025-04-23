import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const tareas = [
    {
      id: 1,
      texto: 'Terminar el TP de EFSI',
      completada: false,
      fechaCreacion: '2025-04-20',
      fechaLimite: '2025-04-25'
    },
    {
      id: 2,
      texto: 'Estudiar para la prueba de historia',
      completada: true,
      fechaCreacion: '2025-04-18',
      fechaLimite: '2025-04-22'
    },
    {
      id: 3,
      texto: 'Practicar piano',
      completada: false,
      fechaCreacion: '2025-04-21',
      fechaLimite: '2025-04-23'
    }
  ];

  return (
    <ul className="todo-list">
      {tareas.map(tarea => (
        <TodoItem key={tarea.id} {...tarea} />
      ))}
    </ul>
  );
}

export default TodoList;
