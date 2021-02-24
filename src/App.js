import { CircularProgress } from "@material-ui/core";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AllProviders from "./providers/AllProviders";
import { Layout } from "./components";

const Converter = lazy(() => import("./pages/converter/Converter"));
const Currencies = lazy(() => import("./pages/currencies/Currencies"));

const App = () => (
    <AllProviders>
      <Layout>
        <Switch>
          <Suspense fallback={<CircularProgress />}>
            <Route exact path="/" component={Converter} />
            <Route exact path="/currencies" component={Currencies} />
          </Suspense>
        </Switch>
      </Layout>
    </AllProviders>
  );

export default App;
