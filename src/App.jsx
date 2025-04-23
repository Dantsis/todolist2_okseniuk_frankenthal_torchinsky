import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="App">
<video autoPlay loop muted playsInline className="video-background">
  <source src="/escena.mp4" type="video/mp4" />
</video>
      <TodoApp />
    </div>
  );
}

export default App;

