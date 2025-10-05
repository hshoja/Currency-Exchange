import { CircularProgress } from "@material-ui/core";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AllProviders from "./providers/AllProviders";
import { Layout, ErrorBoundary } from "./components";
import { Converter } from "./pages/converter/Converter";

const Currencies = lazy(() => import("./pages/currencies/Currencies"));

const App = () => (
  <ErrorBoundary>
    <AllProviders>
      <Layout>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/currencies" element={<Currencies />} />
          </Routes>
        </Suspense>
      </Layout>
    </AllProviders>
  </ErrorBoundary>
);

export default App;
