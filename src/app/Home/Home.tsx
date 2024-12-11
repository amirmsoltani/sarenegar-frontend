// react-router-dom
import { Outlet } from "react-router-dom";
// components
import { Modals } from "./_components/Modals/Modals";
import { Buttons } from "./_components/Buttons/Buttons";
import { Validation } from "./_components/Validation/Validation";
import { FormContainer } from "./_components/FormContainer/FormContainer";

export const Home = () => {
  return (
    <main
      style={{
        gap: "16px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FormContainer />
      <Modals />
      <Buttons />
      <Validation />
      <Outlet />
    </main>
  );
};
