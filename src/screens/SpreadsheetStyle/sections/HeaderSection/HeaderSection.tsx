import { PlusIcon } from "lucide-react";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const HeaderSection = (): JSX.Element => {
  // Define tab data for easy mapping
  const tabItems = [
    { id: "all", label: "All Orders", active: true },
    { id: "pending", label: "Pending", active: false },
    { id: "reviewed", label: "Reviewed", active: false },
    { id: "arrived", label: "Arrived", active: false },
  ];

  return (
    <header className="flex items-center gap-6 pl-8 pr-4 pt-1 pb-0 relative w-full bg-white border-t border-[#eeeeee]">
      <Tabs defaultValue="all" className="flex items-start">
        <TabsList className="bg-transparent p-0 h-auto">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`gap-2 px-4 py-2.5 rounded-none ${
                tab.active
                  ? "bg-[#e8f0e9] border-t-2 border-[#4b6a4f] text-[#3e5741] font-paragraph-16-m-semi-bold-16-24"
                  : "bg-transparent text-[#757575] font-paragraph-16-m-medium-16-24"
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
          <div className="gap-1 px-1 py-2 self-stretch inline-flex items-center justify-center">
            <button className="inline-flex items-center gap-2 p-1 bg-white rounded">
              <PlusIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </TabsList>
      </Tabs>
    </header>
  );
};
