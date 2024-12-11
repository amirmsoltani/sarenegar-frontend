// styles
import "./Toaster.scss";
// react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// icons
import TickSvg from "@/assets/svg/tick-circle.svg";
import ErrorSvg from "@/assets/svg/error-circle.svg";
import WarningSvg from "@/assets/svg/warning-circle.svg";

export const Toaster = () => {
  return (
    <ToastContainer
      draggable
      pauseOnHover
      closeOnClick
      pauseOnFocusLoss
      closeButton={false}
      position="top-right"
      icon={({ type }) => {
        if (type === "success") return <TickSvg />;
        else if (type === "error") return <ErrorSvg />;
        else if (type === "warning") return <WarningSvg />;
      }}
    />
  );
};
