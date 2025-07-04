import { ChevronRightIcon, MoreHorizontalIcon, SearchIcon, BellIcon, MenuIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const NavigationBarSection = (): JSX.Element => {
  // Breadcrumb navigation items
  const breadcrumbItems = [
    { label: "Workspace", href: "#", active: false },
    { label: "Folder 2", href: "#", active: false },
    { label: "Spreadsheet 3", href: "#", active: true },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-2 relative self-stretch w-full flex-[0_0_auto] z-[3] bg-white border-b [border-bottom-style:solid] border-[#eeeeee]">
      {/* Left side - Logo and breadcrumbs */}
      <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
        <MenuIcon className="w-6 h-6 text-gray-600" />

        {/* Custom breadcrumb navigation */}
        <nav className="flex items-center space-x-1">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <ChevronRightIcon className="w-3 h-3 text-[#afafaf] mx-1" />
              )}
              <div className="flex items-center">
                <a
                  href={item.href}
                  className={`font-paragraph-14-s-medium-14-20 ${
                    item.active ? "text-[#121212]" : "text-[#afafaf]"
                  } hover:text-[#121212] transition-colors whitespace-nowrap`}
                >
                  {item.label}
                </a>
                {item.active && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6 p-0 ml-2 hover:bg-gray-100"
                  >
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Right side - Search, notifications, and profile */}
      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
        {/* Search field */}
        <div className="inline-flex items-center gap-2 p-3 relative flex-[0_0_auto] bg-[#f6f6f6] rounded-md overflow-hidden hover:bg-[#f0f0f0] transition-colors">
          <SearchIcon className="w-4 h-4 text-[#757575]" />
          <span className="font-paragraph-12-XS-regular-12-16 text-[#757575] text-[length:var(--paragraph-12-XS-regular-12-16-font-size)] tracking-[var(--paragraph-12-XS-regular-12-16-letter-spacing)] leading-[var(--paragraph-12-XS-regular-12-16-line-height)]">
            Search within sheet
          </span>
        </div>

        {/* Notifications */}
        <div className="inline-flex items-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="relative w-10 h-10 p-2 hover:bg-gray-100 transition-colors"
          >
            <BellIcon className="w-6 h-6 text-gray-600" />
          </Button>
          <Badge className="flex items-center justify-center w-5 h-5 absolute top-0 left-5 bg-[#4b6a4f] text-[#f6f6f6] rounded-full border-2 border-solid border-white p-0">
            <span className="font-paragraph-10-XXS-medium-10-16 text-[length:var(--paragraph-10-XXS-medium-10-16-font-size)] tracking-[var(--paragraph-10-XXS-medium-10-16-letter-spacing)] leading-[var(--paragraph-10-XXS-medium-10-16-line-height)]">
              2
            </span>
          </Badge>
        </div>

        {/* User profile */}
        <div className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 relative flex-[0_0_auto] bg-white rounded-lg hover:bg-gray-50 transition-colors">
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" alt="User profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="inline-flex flex-col max-w-[120px] items-start relative flex-[0_0_auto]">
            <span className="font-paragraph-12-XS-regular-12-16 text-[#121212] text-[length:var(--paragraph-12-XS-regular-12-16-font-size)] tracking-[var(--paragraph-12-XS-regular-12-16-letter-spacing)] leading-[var(--paragraph-12-XS-regular-12-16-line-height)] whitespace-nowrap">
              John Doe
            </span>
            <span className="font-label-10-XXS-regular text-[#757575] text-[length:var(--label-10-XXS-regular-font-size)] tracking-[var(--label-10-XXS-regular-letter-spacing)] leading-[var(--label-10-XXS-regular-line-height)]">
              john.doe@companyname.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};