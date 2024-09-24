import { ReactElement } from "react";
import { CardHome } from "../../ui/components/CardHome";
import Reviews from "../../ui/components/Review";
import FAQ from "../../ui/components/FAQ";
import InteractiveMoon from "../../ui/components/ModelMoon";

export const HomePage = (): ReactElement => {
  return (
    <>
      <CardHome/>
      <InteractiveMoon/>
      <Reviews/>
      <FAQ/>
    </>
  );
};
