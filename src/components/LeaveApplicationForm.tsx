import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SmartPasteButton } from "./smartPasting";

interface LeaveApplicationFormProps {
  application?: any;
  onBack: () => void;
  onSave: () => void;
}

export const LeaveApplicationForm = ({
  application,
  onBack,
  onSave,
}: LeaveApplicationFormProps) => {
  const [formData, setFormData] = useState({
    series: "HR-LAP-.YYYY.-",
    employee: "",
    company: "Tringapps",
    leaveType: "",
    fromDate: "",
    toDate: "",
    halfDay: false,
    reason: "",
    leaveApprover: "",
    postingDate: "21-06-2025",
    followViaEmail: true,
    status: "Open",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving leave application:", formData);
    onSave();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <span>Overview</span>
          <span>/</span>
          <span>Leave Application</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold">New Leave Application</h1>
              <span className="text-sm text-orange-600">Not Saved</span>
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

      {/* Form Content */}
      <div className="p-6 max-w-4xl">
        <div className="bg-white p-6 rounded-lg border space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="series">
                Series <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.series}
                onValueChange={(value) => handleInputChange("series", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HR-LAP-.YYYY.-">HR-LAP-.YYYY.-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="leaveType">
                Leave Type <span className="text-red-500">*</span>
              </Label>
              <Input
                id="leaveType"
                value={formData.leaveType}
                onChange={(e) => handleInputChange("leaveType", e.target.value)}
                className="bg-gray-100"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employee">
                Employee <span className="text-red-500">*</span>
              </Label>
              <Input
                id="employee"
                value={formData.employee}
                onChange={(e) => handleInputChange("employee", e.target.value)}
                className="bg-gray-100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">
                Company <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                readOnly
                className="bg-gray-100"
              />
            </div>
          </div>

          {/* Dates & Reason Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dates & Reason</h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fromDate">
                  From Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fromDate"
                  type="date"
                  value={formData.fromDate}
                  onChange={(e) =>
                    handleInputChange("fromDate", e.target.value)
                  }
                  className="bg-gray-100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason</Label>
                <div className="h-32">
                  {" "}
                  {/* Fixed height container */}
                  <Textarea
                    id="reason"
                    value={formData.reason}
                    onChange={(e) =>
                      handleInputChange("reason", e.target.value)
                    }
                    className="bg-gray-100 h-full resize-none"
                    placeholder="Enter reason for leave"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="toDate">
                  To Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="toDate"
                  type="date"
                  value={formData.toDate}
                  onChange={(e) => handleInputChange("toDate", e.target.value)}
                  className="bg-gray-100"
                />
              </div>
              <div></div> {/* Empty cell to maintain grid */}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="halfDay"
                checked={formData.halfDay}
                onCheckedChange={(checked) =>
                  handleInputChange("halfDay", checked as boolean)
                }
              />
              <Label htmlFor="halfDay">Half Day</Label>
            </div>
          </div>

          {/* Approval Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Approval</h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="leaveApprover">
                  Leave Approver <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="leaveApprover"
                  value={formData.leaveApprover}
                  onChange={(e) =>
                    handleInputChange("leaveApprover", e.target.value)
                  }
                  className="bg-gray-100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postingDate">
                  Posting Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="postingDate"
                  value={formData.postingDate}
                  onChange={(e) =>
                    handleInputChange("postingDate", e.target.value)
                  }
                  readOnly
                  className="bg-gray-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="followViaEmail"
                  checked={formData.followViaEmail}
                  onCheckedChange={(checked) =>
                    handleInputChange("followViaEmail", checked as boolean)
                  }
                />
                <Label htmlFor="followViaEmail">Follow via Email</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">
                  Status <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleInputChange("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
