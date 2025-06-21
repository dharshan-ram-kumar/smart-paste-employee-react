import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Users, ChevronLeft, ChevronRight, Building2, Calendar } from "lucide-react";

interface SidebarProps {
  currentView: 'list' | 'form' | 'dashboard';
  onViewChange: (view: 'list' | 'form' | 'dashboard') => void;
}

export const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleNavigation = (view: string) => {
    if (view === 'employee') {
      onViewChange('list');
    } else {
      // Handle other navigation
      window.location.href = view === 'company' ? '/company' : '/leave-application';
    }
  };

  return (
    <>
      <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-gray-900">Frappe</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button
              onClick={() => handleNavigation('dashboard')}
              className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              {!isCollapsed && <span>Dashboard</span>}
            </button>

            {/* Organization Section */}
            <div className="space-y-1">
              {!isCollapsed && (
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </div>
              )}
              
              <button
                onClick={() => handleNavigation('employee')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors ${
                  currentView === 'list' || currentView === 'form' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="w-5 h-5" />
                {!isCollapsed && <span>Employee</span>}
              </button>

              <button
                onClick={() => handleNavigation('company')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Building2 className="w-5 h-5" />
                {!isCollapsed && <span>Company</span>}
              </button>
            </div>

            {/* Time and Attendance Section */}
            <div className="space-y-1">
              {!isCollapsed && (
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time and Attendance
                </div>
              )}
              
              <button
                onClick={() => handleNavigation('leave-application')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Calendar className="w-5 h-5" />
                {!isCollapsed && <span>Leave Application</span>}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
