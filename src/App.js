import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Converter } from "./pages/converter";
import { Currencies } from "./pages/currencies";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Converter />
        </Route>
        <Route exact path="/currencies">
          <Currencies />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
