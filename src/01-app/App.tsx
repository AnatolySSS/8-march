import { HolidayLandingPage } from "@/02-pages";
import { AppLayout } from "./layout/AppLayout";
import { JSX } from "react";

export const App = (): JSX.Element => {
  return (
    <AppLayout>
      <HolidayLandingPage />
    </AppLayout>
  );
};
