import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarNavigation() {
  const pathname = usePathname();
  const navigationData = [
    { id: 1, Name: "Dashboard", icon: "/svg", linkTo: "/" },
    { id: 1, Name: "Clients", icon: "/svg", LinkTo: "/clients", number: 12 },
    { id: 1, Name: "Projects", icon: "/svg", LinkTo: "/projects", number: 6 },
    { id: 1, Name: "Invoices", icon: "/svg", LinkTo: "/invoices", number: 2 },
    { id: 1, Name: "Settings", icon: "/svg", LinkTo: "/setting" },
  ];
  return (
    <div className="flex flex-col gap-1">
      {navigationData.map((data) => {
        const isActive = usePathname == data.linkTo;
        return (
          <Link
            key={data.id}
            href={data.linkTo}
            className={`no-underline flex  flex-row items-center justify-between py-2.5 px-3 text-[14px] ${
                isActive ? "bg-accent-soft  text-white" : "bg-none text-muted hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div>{data.icon}</div>
              <h1 className="text-[14px] font-medium">{data.Name}</h1>
            </div>
            {data.number && <p className="text-subtle text-13">{data.number}</p>}
          </Link>
        );
      })}
    </div>
  );
}
