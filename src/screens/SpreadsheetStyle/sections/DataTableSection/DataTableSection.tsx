import React from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { 
  HashIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  CircleIcon, 
  UserIcon, 
  GlobeIcon, 
  SmileIcon,
  ChevronDownIcon,
  LinkIcon,
  RefreshCwIcon,
  PlusIcon,
  MoreHorizontalIcon,
  SplitIcon
} from "lucide-react";

export const DataTableSection = (): JSX.Element => {
  // Row numbers data
  const rowNumbers = Array.from({ length: 25 }, (_, i) => i + 1);

  // Job request data
  const jobRequests = [
    {
      id: 1,
      title: "Launch social media campaign for product XYZ",
      submitted: "15-11-2024",
      status: { label: "In-process", color: "bg-[#fff3d6] text-[#84640a]" },
      submitter: "Aisha Patel",
      url: "www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: { label: "Medium", color: "text-[#c1920f]" },
      dueDate: "20-11-2024",
      estValue: "6,200,000",
    },
    {
      id: 2,
      title: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: { label: "Need to start", color: "bg-slate-200 text-slate-600" },
      submitter: "Irfan Khan",
      url: "www.irfankhanportfolio.com",
      assigned: "Tejas Pandey",
      priority: { label: "High", color: "text-[#ef4c43]" },
      dueDate: "30-10-2024",
      estValue: "3,500,000",
    },
    {
      id: 3,
      title: "Finalize user testing feedback for app update",
      submitted: "05-12-2024",
      status: { label: "In-process", color: "bg-[#fff3d6] text-[#84640a]" },
      submitter: "Mark Johnson",
      url: "www.markjohnsondesigns.com",
      assigned: "Rachel Lee",
      priority: { label: "Medium", color: "text-[#c1920f]" },
      dueDate: "10-12-2024",
      estValue: "4,750,000",
    },
    {
      id: 4,
      title: "Design new features for the website",
      submitted: "10-01-2025",
      status: { label: "Complete", color: "bg-[#d2f2e2] text-[#0a6d3c]" },
      submitter: "Emily Green",
      url: "www.emilygreenart.com",
      assigned: "Tom Wright",
      priority: { label: "Low", color: "text-[#1a8cff]" },
      dueDate: "15-01-2025",
      estValue: "5,900,000",
    },
    {
      id: 5,
      title: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: { label: "Blocked", color: "bg-[#ffe1dd] text-[#c12119]" },
      submitter: "Jessica Brown",
      url: "www.jessicabrowncreative.com",
      assigned: "Kevin Smith",
      priority: { label: "Low", color: "text-[#1a8cff]" },
      dueDate: "30-01-2025",
      estValue: "2,800,000",
    },
  ];

  // Column headers data with proper icons
  const columnHeaders = [
    { icon: <HashIcon className="w-4 h-4" />, label: "#", bgColor: "bg-[#eeeeee]" },
    { icon: <BriefcaseIcon className="w-4 h-4" />, label: "Job Request", bgColor: "bg-[#eeeeee]" },
    { icon: <CalendarIcon className="w-4 h-4" />, label: "Submitted", bgColor: "bg-[#eeeeee]" },
    { icon: <CircleIcon className="w-4 h-4" />, label: "Status", bgColor: "bg-[#eeeeee]" },
    { icon: <UserIcon className="w-4 h-4" />, label: "Submitter", bgColor: "bg-[#eeeeee]" },
    { icon: <GlobeIcon className="w-4 h-4" />, label: "URL", bgColor: "bg-[#eeeeee]" },
    {
      icon: <SmileIcon className="w-4 h-4" />,
      label: "Assigned",
      bgColor: "bg-[#e8f0e9]",
      textColor: "text-[#666c66]",
      headerBg: "bg-[#d2e0d4]",
      headerText: "text-[#505450]",
      headerTitle: "ABC",
    },
    {
      icon: null,
      label: "Priority",
      bgColor: "bg-[#eae3fc]",
      textColor: "text-[#645c7f]",
      headerBg: "bg-[#dccffc]",
      headerText: "text-[#463e59]",
      headerTitle: "Answer a question",
    },
    {
      icon: null,
      label: "Due Date",
      bgColor: "bg-[#eae3fc]",
      textColor: "text-[#645c7f]",
      headerBg: "bg-[#dccffc]",
      headerText: "text-[#463e59]",
      headerTitle: "Answer a question",
    },
    {
      icon: null,
      label: "Est. Value",
      bgColor: "bg-[#ffe9e0]",
      textColor: "text-[#8c6b61]",
      headerBg: "bg-[#fac2af]",
      headerText: "text-[#695149]",
      headerTitle: "Extract",
    },
  ];

  return (
    <div className="flex flex-col h-[872px] w-full bg-[#f6f6f6] overflow-hidden">
      <div className="flex w-full h-8 items-center bg-[#e2e2e2] px-2 gap-2 z-10">
        <div className="inline-flex items-center gap-1 p-1 bg-[#eeeeee] rounded">
          <LinkIcon className="w-4 h-4 text-[#545454]" />
          <span className="text-[#545454] text-xs font-paragraph-12-XS-regular-12-16">
            Q3 Financial Overview
          </span>
        </div>
        <RefreshCwIcon className="w-4 h-4 text-[#545454]" />
      </div>

      <div className="flex flex-1 w-full overflow-auto">
        {/* Row numbers column */}
        <div className="flex-none w-8 flex flex-col border-r border-[#f6f6f6]">
          <div className="h-8 bg-white"></div>
          <div className="h-8 bg-[#eeeeee] flex items-center pl-2">
            <HashIcon className="w-4 h-4 text-[#757575]" />
          </div>

          {rowNumbers.map((num) => (
            <div
              key={`row-${num}`}
              className="h-8 bg-white flex items-center justify-center"
            >
              <span className="text-[#757575] text-xs font-paragraph-14-s-regular-14-20">
                {num}
              </span>
            </div>
          ))}
        </div>

        {/* Main table content */}
        <div className="flex-1 overflow-x-auto">
          <Table className="border-collapse">
            <TableHeader>
              <TableRow className="border-none">
                {columnHeaders.slice(1).map((header, index) => (
                  <TableHead
                    key={`header-${index}`}
                    className={`h-8 px-0 ${header.headerBg || "bg-white"} border-none`}
                  >
                    {header.headerTitle && (
                      <div
                        className={`h-8 flex items-center justify-center gap-2 px-4 ${header.headerBg}`}
                      >
                        <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded">
                          <SplitIcon className="w-4 h-4 text-[#505450]" />
                          <span
                            className={`text-sm font-medium ${header.headerText}`}
                          >
                            {header.headerTitle}
                          </span>
                          <div className="flex w-5 h-5 items-center justify-center rounded">
                            <MoreHorizontalIcon className="w-4 h-4 text-[#505450]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
              <TableRow className="border-none">
                {columnHeaders.slice(1).map((header, index) => (
                  <TableHead
                    key={`subheader-${index}`}
                    className={`h-8 ${header.bgColor} border-none`}
                  >
                    <div className="flex h-8 items-center gap-1 pl-2 pr-1">
                      <div className="flex items-center gap-1 flex-1">
                        {header.icon}
                        <span
                          className={`text-xs font-semibold ${header.textColor || "text-[#757575]"}`}
                        >
                          {header.label}
                        </span>
                      </div>
                      {header.label !== "Priority" &&
                        header.label !== "Due Date" &&
                        header.label !== "Est. Value" && (
                          <div className="inline-flex items-center p-1 rounded">
                            <ChevronDownIcon className="w-3 h-3 text-[#757575]" />
                          </div>
                        )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobRequests.map((job) => (
                <TableRow key={`job-${job.id}`} className="border-none">
                  <TableCell className="h-8 px-2 py-0 bg-white border-none">
                    <div className="text-xs text-[#121212]">{job.title}</div>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none text-right">
                    <div className="text-xs text-[#121212]">
                      {job.submitted}
                    </div>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none">
                    <Badge
                      className={`${job.status.color} rounded-full font-medium text-xs px-2 py-1`}
                    >
                      {job.status.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none">
                    <div className="text-xs text-[#121212]">
                      {job.submitter}
                    </div>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none">
                    <div className="text-xs text-[#121212] underline font-normal">
                      {job.url}
                    </div>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none">
                    <div className="text-xs text-[#121212]">{job.assigned}</div>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none text-center">
                    <div
                      className={`text-xs font-semibold ${job.priority.color}`}
                    >
                      {job.priority.label}
                    </div>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none text-right">
                    <div className="text-xs text-[#121212]">{job.dueDate}</div>
                  </TableCell>
                  <TableCell className="h-8 px-2 py-0 bg-white border-none">
                    <div className="flex justify-end items-center gap-1">
                      <span className="text-xs text-[#121212] text-right">
                        {job.estValue}
                      </span>
                      <span className="text-xs text-[#afafaf] font-medium">
                        ₹
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {/* Empty rows to fill the table */}
              {Array.from({ length: 20 }, (_, i) => (
                <TableRow key={`empty-row-${i}`} className="border-none">
                  {Array.from({ length: 9 }, (_, j) => (
                    <TableCell
                      key={`empty-cell-${i}-${j}`}
                      className="h-8 bg-white border-none p-0"
                    >
                      {i === 7 && j === 1 && (
                        <div className="h-8 w-full bg-white border border-solid border-[#6b8b6f] shadow-[0px_0px_12px_#0a6e3d38,0px_0px_4px_-2px_#0a6d3c99]"></div>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Add column */}
        <div className="flex-none w-[126px] border border-dashed border-[#cbcbcb] flex flex-col">
          <div className="h-8 bg-[#eeeeee] flex items-center justify-center">
            <PlusIcon className="w-5 h-5 text-[#757575]" />
          </div>
          <div className="flex-1 bg-white"></div>
        </div>
      </div>
    </div>
  );
};