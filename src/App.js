import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Ecomm Project</h1>
       <button>Normal button</button>
       <Button>Bootstrap button</Button>
      </header>
    </div>
  );
}

export default App;
