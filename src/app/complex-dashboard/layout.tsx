import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div className="flex w-fit h-fit bg-slate-300 gap-x-4 p-4">
        <div className="flex flex-col bg-slate-300 justify-evenly gap-y-4">
          <div className="bg-pink-300 flex-1 ">{users}</div>
          <div className="bg-orange-300 flex-1 ">{revenue}</div>
        </div>
        <div className="flex bg-green-300 ">{notifications}</div>
      </div>
    </>
  );
}
