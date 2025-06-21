import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar currentView="list" onViewChange={() => {}} />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};
