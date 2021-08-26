import Home from "./components/Home";
import Display from "./components/Display";

import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Display path="/:main/" />
        <Display path="/:main/:bgColor/" />
        <Display path="/:main/:bgColor/:color" />
      </Router>
    </div>
  );
}

export default App;
