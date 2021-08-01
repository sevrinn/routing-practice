import Home from './components/Home';
import { Router } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path={"/"} />
      </Router>
      
    </div>
  );
}

 
export default App;