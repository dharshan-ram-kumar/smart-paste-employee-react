
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, MoreHorizontal, Heart, MessageCircle } from "lucide-react";

interface EmployeeListProps {
  onEditEmployee: (employee: any) => void;
}

const mockEmployees = [
  {
    id: "HR-EMP-00001",
    fullName: "Dharshan",
    status: "Active",
    designation: "",
    department: "",
    daysAgo: "4 d"
  },
  {
    id: "TRL 134",
    fullName: "JAIGANESH J",
    status: "Active",
    designation: "Senior Technical L...",
    department: "",
    daysAgo: "4 d"
  },
  {
    id: "TRL 148",
    fullName: "KAVERIPRASATH KAVERISUNDHARA",
    status: "Active",
    designation: "Exective- Operations",
    department: "",
    daysAgo: "4 d"
  },
  {
    id: "TRL 338",
    fullName: "PRINCE P",
    status: "Active",
    designation: "Senior Network Ad...",
    department: "",
    daysAgo: "4 d"
  },
  {
    id: "TRL 571",
    fullName: "SARAVANAN DHATCHINAMOORTHY",
    status: "Active",
    designation: "Executive-Operatio...",
    department: "",
    daysAgo: "4 d"
  },
  {
    id: "TRL 642",
    fullName: "JAYA VEERA PANDIYAN GANESAN",
    status: "Active",
    designation: "Associate Director ...",
    department: "",
    daysAgo: "4 d"
  },
  {
    id: "TRL 668",
    fullName: "PARAG DILIP SHELAR",
    status: "Active",
    designation: "Sr. SEO Specialist",
    department: "",
    daysAgo: "4 d"
  },
  {
    id: "TRL 670",
    fullName: "KUMARESAN MURUGESAN",
    status: "Active",
    designation: "Director-Delivery ...",
    department: "",
    daysAgo: "4 d"
  }
];

export const EmployeeList = ({ onEditEmployee }: EmployeeListProps) => {
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedEmployees(mockEmployees.map(emp => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  };

  const handleSelectEmployee = (employeeId: string, checked: boolean) => {
    if (checked) {
      setSelectedEmployees([...selectedEmployees, employeeId]);
    } else {
      setSelectedEmployees(selectedEmployees.filter(id => id !== employeeId));
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>List View</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">20 of 127</span>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Filter By</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Designation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockEmployees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => onEditEmployee(employee)}>
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedEmployees.includes(employee.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleSelectEmployee(employee.id, e.target.checked);
                    }}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {employee.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {employee.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {employee.daysAgo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>0</span>
                    <Heart className="w-4 h-4" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {[20, 100, 500, 2500].map((num) => (
              <button
                key={num}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
              >
                {num}
              </button>
            ))}
          </div>
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </div>
  );
};
