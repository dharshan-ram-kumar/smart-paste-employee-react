
import { Users, BarChart3, Calendar, Settings, Home, Building, Clock, DollarSign } from "lucide-react";

interface SidebarProps {
  currentView: 'list' | 'form';
  onViewChange: (view: 'list' | 'form') => void;
}

export const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Overview", active: false },
    { icon: Users, label: "Employee", active: true },
    { icon: Building, label: "Organization", active: false },
    { icon: Calendar, label: "Time & Attendance", active: false },
    { icon: DollarSign, label: "Payroll", active: false },
    { icon: BarChart3, label: "Reports", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Tringapps</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
