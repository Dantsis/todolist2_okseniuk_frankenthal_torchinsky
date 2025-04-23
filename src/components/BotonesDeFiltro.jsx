import './BotonesDeFiltro.css';

function BotonesDeFiltro() {
  return (
    <div className="botones-filtro">
      <button>Todos</button>
      <button>Pendientes</button>
      <button>Completados</button>
      <button className="eliminar">Eliminar completadas</button>
    </div>
  );
}

export default BotonesDeFiltro;
