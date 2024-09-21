import { ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./routes/routes";

export const App = (): ReactElement => {
  return <AppRouter />;
};
