import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Filter,
  X,
  MoreHorizontal,
  RefreshCw,
  FileText,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeaveApplicationListProps {
  onAddLeaveApplication: () => void;
  onEditLeaveApplication: (application: any) => void;
}

export const LeaveApplicationList = ({
  onAddLeaveApplication,
  onEditLeaveApplication,
}: LeaveApplicationListProps) => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Leave Application
        </h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <span>List View</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <Button
            onClick={onAddLeaveApplication}
            className="bg-gray-900 hover:bg-gray-800"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Leave Application
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
            ID
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
            Employee
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
            Employee Name
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
            Leave Type
          </div>
          <Select defaultValue="open">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <X className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2 ml-auto">
            <span className="text-sm text-gray-600">Created On</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span className="text-sm text-gray-600 ml-4">Filter By</span>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg border min-h-96 flex flex-col items-center justify-center space-y-4">
        <FileText className="w-16 h-16 text-gray-400" />
        <p className="text-gray-600 text-center">
          No Leave Application found with matching filters. Clear filters to see
          all Leave Application.
        </p>
        <Button
          variant="outline"
          onClick={onAddLeaveApplication}
          className="mt-4"
        >
          Create a new Leave Application
        </Button>
      </div>
    </div>
  );
};
