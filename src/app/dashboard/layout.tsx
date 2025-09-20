import React from "react";
import NavBar from "@/components/dashboard/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-800">
      {/* noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[size:4px_4px]"></div>
      {/* mesh circle */}
      <div className="animate-float fixed -top-[100px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[rgba(106,90,205,0.15)] blur-[50px]"></div>
      <div className="animate-float fixed -right-[200px] -bottom-[200px] h-[500px] w-[500px] rounded-full bg-[rgba(255,105,180,0.15)] blur-[50px] delay-[-5s]"></div>
      <div className="relative z-20 p-6">
        <NavBar />
        <div className="mt-[var(--nav-height)] py-10">{children}</div>
      </div>
    </main>
  );
}
