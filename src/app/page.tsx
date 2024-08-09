"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  HomePage,
  MarketDashboard,
  Dashboard,
  Staking,
  Marketsingle,
} from "./pages";
import DashboardLayout from "./layout/dashboard-layout";

function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="market" element={<MarketDashboard />} />
          <Route path="dapp" element={<Dashboard />} />
          <Route path="staking" element={<Staking />} />
          <Route path="marketsingle" element={<Marketsingle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Page;
