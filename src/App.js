import './App.css';
import Comentario from './components/Comentario';
import Produto from './components/Produto';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css.map';

function App() {
  return (
    <div className="App">
      <h1>Avaliações de Produtos</h1>
      <Comentario />
      <Produto />
    </div>
  );
}

export default App;
