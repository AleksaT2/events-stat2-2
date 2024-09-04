import './App.css';
import products from './data';
import Store from './components/Store';

function App() {

  return (
    <div className="App">
      <Store products={products}/>
    </div>
  );
}

export default App
