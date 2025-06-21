import { useState } from "react";
import { LeaveApplicationList } from "../components/LeaveApplicationList";
import { LeaveApplicationForm } from "../components/LeaveApplicationForm";

const LeaveApplication = () => {
  const [currentView, setCurrentView] = useState<"list" | "form">("list");
  const [editingApplication, setEditingApplication] = useState(null);

  const handleAddLeaveApplication = () => {
    setEditingApplication(null);
    setCurrentView("form");
  };

  const handleEditLeaveApplication = (application: any) => {
    setEditingApplication(application);
    setCurrentView("form");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setEditingApplication(null);
  };

  return (
    <>
      {currentView === "list" ? (
        <LeaveApplicationList
          onAddLeaveApplication={handleAddLeaveApplication}
          onEditLeaveApplication={handleEditLeaveApplication}
        />
      ) : (
        <LeaveApplicationForm
          application={editingApplication}
          onBack={handleBackToList}
          onSave={handleBackToList}
        />
      )}
    </>
  );
};

export default LeaveApplication;
