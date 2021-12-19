import { Header } from "./components/header/header";
import { Loader } from "./components/loader/loader";

import "./app.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy, StrictMode } from "react";

const List = lazy(() => import("./components/list/list"));

type PropTypes = {
  client: QueryClient;
};

export function App({ client }: PropTypes) {
  return (
    <StrictMode>
      <QueryClientProvider client={client}>
        <div className="layout">
          <Header />
          <Suspense fallback={<Loader />}>
            <List />
          </Suspense>
        </div>
      </QueryClientProvider>
    </StrictMode>
  );
}
