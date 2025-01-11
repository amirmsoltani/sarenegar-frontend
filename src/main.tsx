import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// styles
import "@/styles/index.scss";
// redux
import { appStore } from "@/store/store";
import { Provider } from "react-redux";
// routes
import AppRouter from "@/routes/AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <AppRouter />
      {/*<Toaster />*/}
    </Provider>
  </StrictMode>,
);
