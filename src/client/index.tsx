/// <reference types="react-dom/next" />
/// <reference types="react/next" />

import { createRoot, hydrateRoot } from "react-dom";
import { QueryClient } from "react-query";
import { App } from "../common/app";

const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

const container = document.getElementById("root");
hydrateRoot(container, <App client={client} />);
