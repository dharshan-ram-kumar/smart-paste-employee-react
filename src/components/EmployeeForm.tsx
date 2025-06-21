import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { FormTabs } from "./FormTabs";
import { extractData } from "../../utils/gemini";
import { SmartPasteButton } from "./smartPasting";

interface EmployeeFormProps {
  employee?: any;
  onBack: () => void;
  onSave: () => void;
}

export const EmployeeForm = ({
  employee,
  onBack,
  onSave,
}: EmployeeFormProps) => {
  const [formData, setFormData] = useState({
    series: "HR-EMP-",
    firstName: employee?.fullName?.split(" ")[0] || "",
    middleName: "",
    lastName: employee?.fullName?.split(" ").slice(1).join(" ") || "",
    gender: "",
    dateOfBirth: "",
    dateOfJoining: "",
    status: employee?.status || "Active",
    salutation: "",
    company: "Tringapps",
    designation: employee?.designation || "",
    branch: "",
    department: "",
    reportsTo: "",
    grade: "",
    employmentType: "",
  });

  const [activeTab, setActiveTab] = useState("Overview");
  const [userDetailsExpanded, setUserDetailsExpanded] = useState(false);

  // const parseClipboardData = (text: string) => {
  //   // Extract names from common patterns
  //   const patterns = {
  //     firstName: /first name (?:is )?(\w+)/i,
  //     lastName: /last name (?:is )?(\w+)/i,
  //     fullName: /name (?:is )?(\w+ \w+)/i,
  //     username: /username (?:is )?(\w+)/i,
  //   };

  //   let extractedData: any = {};

  //   // Try to extract first name
  //   const firstNameMatch = text.match(patterns.firstName);
  //   if (firstNameMatch) {
  //     extractedData.firstName = firstNameMatch[1];
  //   }

  //   // Try to extract last name
  //   const lastNameMatch = text.match(patterns.lastName);
  //   if (lastNameMatch) {
  //     extractedData.lastName = lastNameMatch[1];
  //   }

  //   // If no first/last name found separately, try full name
  //   if (!extractedData.firstName && !extractedData.lastName) {
  //     const fullNameMatch = text.match(patterns.fullName);
  //     if (fullNameMatch) {
  //       const nameParts = fullNameMatch[1].split(" ");
  //       extractedData.firstName = nameParts[0];
  //       if (nameParts.length > 1) {
  //         extractedData.lastName = nameParts.slice(1).join(" ");
  //       }
  //     }
  //   }

  //   return extractedData;
  // };

  const handleSmartPaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const extractedData = await extractData(clipboardText);

      if (Object.keys(extractedData).length > 0) {
        setFormData((prev) => ({
          ...prev,
          ...extractedData,
        }));
        alert("Smart Paste successful");
      } else {
        alert("No recognizable data found.");
      }
    } catch (err) {
      console.error("Smart Paste failed:", err);
      alert("Smart Paste failed.");
    }
  };

  const handleSave = () => {
    console.log("Saving employee data:", formData);
    onSave();
  };

  return (
    <div className="flex-1 bg-white">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {employee ? "Edit Employee" : "New Employee"}
              </h1>
              {!employee && (
                <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded">
                  Not Saved
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <SmartPasteButton
              onDataExtracted={(extractedData) => {
                setFormData((prev) => ({
                  ...prev,
                  ...extractedData,
                }));
              }}
            />

            <Button
              onClick={handleSave}
              className="bg-gray-900 hover:bg-gray-800"
            >
              Save
            </Button>
          </div>
        </div>
      </div>

      <FormTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="p-6">
        <div className="max-w-4xl">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <Label
                htmlFor="series"
                className="text-sm font-medium text-gray-700"
              >
                Series <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.series}
                onValueChange={(value) =>
                  setFormData({ ...formData, series: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HR-EMP-">HR-EMP-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="gender"
                className="text-sm font-medium text-gray-700"
              >
                Gender <span className="text-red-500">*</span>
              </Label>
              <Input
                id="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="bg-gray-50"
              />
            </div>

            <div>
              <Label
                htmlFor="dateOfJoining"
                className="text-sm font-medium text-gray-700"
              >
                Date of Joining <span className="text-red-500">*</span>
              </Label>
              <Input
                id="dateOfJoining"
                type="date"
                value={formData.dateOfJoining}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfJoining: e.target.value })
                }
                className="bg-gray-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="bg-gray-50"
              />
            </div>

            <div>
              <Label
                htmlFor="dateOfBirth"
                className="text-sm font-medium text-gray-700"
              >
                Date of Birth <span className="text-red-500">*</span>
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                className="bg-gray-50"
              />
            </div>

            <div>
              <Label
                htmlFor="status"
                className="text-sm font-medium text-gray-700"
              >
                Status <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <Label
                htmlFor="middleName"
                className="text-sm font-medium text-gray-700"
              >
                Middle Name
              </Label>
              <Input
                id="middleName"
                value={formData.middleName}
                onChange={(e) =>
                  setFormData({ ...formData, middleName: e.target.value })
                }
                className="bg-gray-50"
              />
            </div>

            <div>
              <Label
                htmlFor="salutation"
                className="text-sm font-medium text-gray-700"
              >
                Salutation
              </Label>
              <Input
                id="salutation"
                value={formData.salutation}
                onChange={(e) =>
                  setFormData({ ...formData, salutation: e.target.value })
                }
                className="bg-gray-50"
              />
            </div>

            <div></div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="bg-gray-50"
              />
            </div>
          </div>

          <div className="mb-8">
            <button
              onClick={() => setUserDetailsExpanded(!userDetailsExpanded)}
              className="flex items-center space-x-2 text-lg font-medium text-gray-900 mb-4"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  userDetailsExpanded ? "rotate-180" : ""
                }`}
              />
              <span>User Details</span>
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Company Details
            </h3>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                  Company <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-gray-50"
                />
              </div>

              <div>
                <Label
                  htmlFor="designation"
                  className="text-sm font-medium text-gray-700"
                >
                  Designation
                </Label>
                <Input
                  id="designation"
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData({ ...formData, designation: e.target.value })
                  }
                  className="bg-gray-50"
                />
              </div>

              <div>
                <Label
                  htmlFor="branch"
                  className="text-sm font-medium text-gray-700"
                >
                  Branch
                </Label>
                <Input
                  id="branch"
                  value={formData.branch}
                  onChange={(e) =>
                    setFormData({ ...formData, branch: e.target.value })
                  }
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <Label
                  htmlFor="department"
                  className="text-sm font-medium text-gray-700"
                >
                  Department
                </Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="bg-gray-50"
                />
              </div>

              <div>
                <Label
                  htmlFor="reportsTo"
                  className="text-sm font-medium text-gray-700"
                >
                  Reports to
                </Label>
                <Input
                  id="reportsTo"
                  value={formData.reportsTo}
                  onChange={(e) =>
                    setFormData({ ...formData, reportsTo: e.target.value })
                  }
                  className="bg-gray-50"
                />
              </div>

              <div>
                <Label
                  htmlFor="grade"
                  className="text-sm font-medium text-gray-700"
                >
                  Grade
                </Label>
                <Input
                  id="grade"
                  value={formData.grade}
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <Label
                  htmlFor="employmentType"
                  className="text-sm font-medium text-gray-700"
                >
                  Employment Type
                </Label>
                <Input
                  id="employmentType"
                  value={formData.employmentType}
                  onChange={(e) =>
                    setFormData({ ...formData, employmentType: e.target.value })
                  }
                  className="bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
