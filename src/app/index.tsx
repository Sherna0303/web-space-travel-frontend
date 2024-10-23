import { ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./routes/routes";
import './ui/styles/normalize.css'
import './ui/styles/global.css'

export const App = (): ReactElement => {
  return <>
  <AppRouter />
  </>;
};
