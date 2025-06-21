
const tabs = [
  "Overview",
  "Joining", 
  "Address & Contacts",
  "Attendance & Leaves",
  "Salary",
  "Personal Details",
  "Profile",
  "Exit"
];

interface FormTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const FormTabs = ({ activeTab, onTabChange }: FormTabsProps) => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="px-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
