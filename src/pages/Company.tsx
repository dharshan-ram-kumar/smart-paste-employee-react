
import { useState } from "react";
import { CompanyList } from "../components/CompanyList";
import { CompanyForm } from "../components/CompanyForm";

const Company = () => {
  const [currentView, setCurrentView] = useState<'list' | 'form'>('list');
  const [editingCompany, setEditingCompany] = useState(null);

  const handleAddCompany = () => {
    setEditingCompany(null);
    setCurrentView('form');
  };

  const handleEditCompany = (company: any) => {
    setEditingCompany(company);
    setCurrentView('form');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setEditingCompany(null);
  };

  return (
    <>
      {currentView === 'list' ? (
        <CompanyList onAddCompany={handleAddCompany} onEditCompany={handleEditCompany} />
      ) : (
        <CompanyForm 
          company={editingCompany} 
          onBack={handleBackToList}
          onSave={handleBackToList}
        />
      )}
    </>
  );
};

export default Company;
