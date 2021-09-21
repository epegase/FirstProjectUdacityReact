import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
