import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomeScreen } from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/app" component={HomeScreen} />
      </Router>
    </div>
  );
}

export default App;
