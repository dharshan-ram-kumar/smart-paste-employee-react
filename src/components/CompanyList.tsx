
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
import { Plus, Search, Filter, X, MoreHorizontal, RefreshCw, Heart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CompanyListProps {
  onAddCompany: () => void;
  onEditCompany: (company: any) => void;
}

export const CompanyList = ({ onAddCompany, onEditCompany }: CompanyListProps) => {
  const [companies] = useState([
    {
      id: "Tringapps",
      country: "India",
      parentCompany: "",
      createdTime: "5 h",
      comments: 0,
      likes: 0
    },
    {
      id: "TechiTrack",
      country: "India", 
      parentCompany: "",
      createdTime: "5 h",
      comments: 0,
      likes: 0
    }
  ]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Company</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <span>List View</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <Button onClick={onAddCompany} className="bg-gray-900 hover:bg-gray-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">ID</div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <X className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2 ml-auto">
            <span className="text-sm text-gray-600">Created On</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-sm text-gray-600 ml-4">Filter By</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" className="rounded" />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Parent Company</TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end space-x-1">
                  <span>2 of 2</span>
                  <Heart className="w-4 h-4" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id} className="cursor-pointer" onClick={() => onEditCompany(company)}>
                <TableCell>
                  <input type="checkbox" className="rounded" />
                </TableCell>
                <TableCell className="font-medium">{company.id}</TableCell>
                <TableCell>{company.country}</TableCell>
                <TableCell>{company.parentCompany}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-4 text-sm text-gray-600">
                    <span>{company.createdTime}</span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.477 8-10 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.477-8 10-8s10 3.582 10 8z" />
                      </svg>
                      <span>{company.comments}</span>
                    </div>
                    <Heart className="w-4 h-4" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-start space-x-2 mt-4 text-sm text-gray-600">
        <span>20</span>
        <span>100</span>
        <span>500</span>
        <span>2500</span>
      </div>

      {/* Filter Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white border-l shadow-lg p-6 space-y-4">
        <div className="space-y-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Assigned To" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user1">User 1</SelectItem>
              <SelectItem value="user2">User 2</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Created By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user1">User 1</SelectItem>
              <SelectItem value="user2">User 2</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full">Edit Filters</Button>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tags</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Saved Filters</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
