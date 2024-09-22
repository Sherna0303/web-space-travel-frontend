import { ReactElement } from "react";
import { CardHome } from "../../ui/components/CardHome";
import Reviews from "../../ui/components/Review";

export const HomePage = (): ReactElement => {
  return (
    <>
      <CardHome/>
      <Reviews/>
    </>
  );
};
