
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { EmployeeList } from "../components/EmployeeList";
import { EmployeeForm } from "../components/EmployeeForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'list' | 'form'>('list');
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setCurrentView('form');
  };

  const handleEditEmployee = (employee: any) => {
    setEditingEmployee(employee);
    setCurrentView('form');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setEditingEmployee(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Overview</span>
              <span>/</span>
              <span>Employee</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search or type a command (Ctrl + K)"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm w-80"
                />
                <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {currentView === 'list' ? (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Employee</h1>
                <Button onClick={handleAddEmployee} className="bg-gray-900 hover:bg-gray-800">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Employee
                </Button>
              </div>
              <EmployeeList onEditEmployee={handleEditEmployee} />
            </div>
          ) : (
            <EmployeeForm 
              employee={editingEmployee} 
              onBack={handleBackToList}
              onSave={handleBackToList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
