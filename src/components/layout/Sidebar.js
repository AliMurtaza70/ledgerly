import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  return (
    <div className="px-4 py-6 bg-sidebar w-max min-h-screen flex flex-col">
      <SidebarNav />
      <p className="text-2xs text-subtle px-3  mt-7 mb-0.5 tracking-[0.08em] ">WORKSPACE</p>
    </div>
  );
}
