import "@/styles/index.scss";
import { Provider } from "react-redux";
import { appStore } from "@/store/store";
import AppRouter from "@/routes/AppRouter";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <Provider store={appStore}>
    <AppRouter />
  </Provider>,
);
