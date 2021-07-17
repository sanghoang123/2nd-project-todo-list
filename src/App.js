import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <div className="todo-list">
      <div className="container">
        <Header />
        <Todos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
