import { ReactElement } from "react";
import { CardHome } from "../../ui/components/CardHome";
import Reviews from "../../ui/components/Review";
import FAQ from "../../ui/components/FAQ";

export const HomePage = (): ReactElement => {
  return (
    <>
      <CardHome/>
      <Reviews/>
      <FAQ/>
    </>
  );
};
