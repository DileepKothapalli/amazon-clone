import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Auth from "./Auth";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/Auth" component={Auth}></Route>
        <Route exact path="/Cart" component={Cart}>
          <Header />
          <Cart />
        </Route>
        <Route exact path="/" component={Home}>
          <Header />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
