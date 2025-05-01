import "@/styles/index.scss";
import { Provider } from "react-redux";
import { appStore } from "@/store/store";
import AppRouter from "@/routes/AppRouter";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <Provider store={appStore}>
    <HelmetProvider>
      <AppRouter />
      <ToastContainer closeOnClick rtl />
    </HelmetProvider>
  </Provider>,
);
