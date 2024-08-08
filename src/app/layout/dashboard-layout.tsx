import { Outlet } from "react-router-dom";

import NavigationLayout from "./navigatiojn-layout";

const DashboardLayout = () => {
  return (
    <div className="bg-black pb-24 min-h-screen">
      <NavigationLayout />
      <br /> <br />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
