import { Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Converter } from "./pages/converter";
import { Currencies } from "./pages/currencies";
import AllProviders from "./providers/AllProviders";

function App() {
  return (
    <AllProviders>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Converter />
          </Route>
          <Route exact path="/currencies">
            <Currencies />
          </Route>
        </Switch>
      </Layout>
    </AllProviders>
  );
}

export default App;
