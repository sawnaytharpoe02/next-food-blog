import React from "react";
import NavBar from "@/components/dashboard/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dark text-foreground bg-background h-screen">
      <div className="p-6">
        <NavBar />
        <div className="mt-[var(--nav-height)] py-10">{children}</div>
      </div>
    </main>
  );
}
