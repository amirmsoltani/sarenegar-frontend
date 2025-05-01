import "@/styles/index.scss";
import { Provider } from "react-redux";
import { appStore } from "@/store/store";
import AppRouter from "@/routes/AppRouter";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <Provider store={appStore}>
    <AppRouter />
    <ToastContainer closeOnClick rtl />
  </Provider>,
);
