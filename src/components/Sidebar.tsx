import {
  Users,
  BarChart3,
  Calendar,
  Settings,
  Home,
  Building,
  DollarSign,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  currentView: "list" | "form" | "dashboard";
  onViewChange: (view: "list" | "form" | "dashboard") => void;
}

export const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Overview", route: "/overview" },
    { icon: Users, label: "Employee", route: "/" },
    { icon: Building, label: "Company", route: "/company" },
    { icon: Calendar, label: "Apply Leave", route: "/leave-application" },
    { icon: DollarSign, label: "Payroll", route: "/payroll" },
    { icon: BarChart3, label: "Reports", route: "/reports" },
    { icon: Settings, label: "Settings", route: "/settings" },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}
    >
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">
              Tringapps
            </span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-sm">T</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft
            className={`w-4 h-4 text-gray-600 transition-transform ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.route;

            return (
              <li key={item.label}>
                <button
                  onClick={() => navigate(item.route)}
                  className={`w-full flex items-center ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="w-5 h-5" />
                  {!isCollapsed && <span>{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
