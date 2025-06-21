import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar currentView="list" onViewChange={() => {}} />
      <div className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
