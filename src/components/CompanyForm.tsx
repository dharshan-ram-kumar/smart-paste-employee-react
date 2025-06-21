import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { SmartPasteButton } from "./smartPasting";

interface CompanyFormProps {
  company?: any;
  onBack: () => void;
  onSave: () => void;
}

export const CompanyForm = ({ company, onBack, onSave }: CompanyFormProps) => {
  const [formData, setFormData] = useState({
    company: company?.id || "",
    abbr: "",
    defaultCurrency: "",
    country: "India",
    isGroup: false,
    defaultHolidayList: "",
    defaultLetterHead: "",
    taxId: "",
    domain: "",
    dateOfEstablishment: "",
    parentCompany: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving company:", formData);
    onSave();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold">New Company</h1>
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
      <div className="p-6">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="buying">Buying and Selling</TabsTrigger>
            <TabsTrigger value="hr">HR & Payroll</TabsTrigger>
            <TabsTrigger value="stock">Stock and Manufacturing</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6 mt-6">
            <div className="bg-white p-6 rounded-lg border">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">
                    Company <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    placeholder="Company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="defaultLetterHead">Default Letter Head</Label>
                  <Input
                    id="defaultLetterHead"
                    value={formData.defaultLetterHead}
                    onChange={(e) =>
                      handleInputChange("defaultLetterHead", e.target.value)
                    }
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="abbr">
                    Abbr <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="abbr"
                    value={formData.abbr}
                    onChange={(e) => handleInputChange("abbr", e.target.value)}
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID</Label>
                  <Input
                    id="taxId"
                    value={formData.taxId}
                    onChange={(e) => handleInputChange("taxId", e.target.value)}
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="defaultCurrency">
                    Default Currency <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="defaultCurrency"
                    value={formData.defaultCurrency}
                    onChange={(e) =>
                      handleInputChange("defaultCurrency", e.target.value)
                    }
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="domain">Domain</Label>
                  <Input
                    id="domain"
                    value={formData.domain}
                    onChange={(e) =>
                      handleInputChange("domain", e.target.value)
                    }
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfEstablishment">
                    Date of Establishment
                  </Label>
                  <Input
                    id="dateOfEstablishment"
                    type="date"
                    value={formData.dateOfEstablishment}
                    onChange={(e) =>
                      handleInputChange("dateOfEstablishment", e.target.value)
                    }
                    className="bg-gray-100"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isGroup"
                    checked={formData.isGroup}
                    onCheckedChange={(checked) =>
                      handleInputChange("isGroup", checked as boolean)
                    }
                  />
                  <Label htmlFor="isGroup">Is Group</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentCompany">Parent Company</Label>
                  <Input
                    id="parentCompany"
                    value={formData.parentCompany}
                    onChange={(e) =>
                      handleInputChange("parentCompany", e.target.value)
                    }
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2 col-span-2">
                  <Label htmlFor="defaultHolidayList">
                    Default Holiday List
                  </Label>
                  <Input
                    id="defaultHolidayList"
                    value={formData.defaultHolidayList}
                    onChange={(e) =>
                      handleInputChange("defaultHolidayList", e.target.value)
                    }
                    className="bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accounts">
            <div className="bg-white p-6 rounded-lg border">
              <p className="text-gray-600">
                Accounts configuration will be added here.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="buying">
            <div className="bg-white p-6 rounded-lg border">
              <p className="text-gray-600">
                Buying and selling configuration will be added here.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="hr">
            <div className="bg-white p-6 rounded-lg border">
              <p className="text-gray-600">
                HR & Payroll configuration will be added here.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="stock">
            <div className="bg-white p-6 rounded-lg border">
              <p className="text-gray-600">
                Stock and manufacturing configuration will be added here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
