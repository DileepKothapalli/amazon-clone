import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Auth from "./Auth";
import Cart from "./Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/Auth" component={Auth}></Route>
        <Route exact path="/Cart">
          <Header />
          <Cart />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
