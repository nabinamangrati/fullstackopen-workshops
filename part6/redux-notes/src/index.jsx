import { createRoot } from "react-dom/client";

import ReactApp from "./ReactQueryApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactApp />
  </QueryClientProvider>
);
