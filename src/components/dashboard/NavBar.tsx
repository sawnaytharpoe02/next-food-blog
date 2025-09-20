"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Briefcase, FileText, Home, User } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

const navItems = [
  { name: "Post", url: "/dashboard", icon: Home },
  { name: "Category", url: "/dashboard/category", icon: User },
  { name: "Tag", url: "/dashboard/tag", icon: Briefcase },
  { name: "Comment", url: "/dashboard/comment", icon: FileText },
];

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(navItems[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed bottom-0 left-1/2 z-50 mb-6 h-[var(--nav-height)] -translate-x-1/2 sm:top-6 sm:mb-0">
      <div className="flex items-center gap-3 rounded-full border-transparent bg-white/5 px-1 py-1 backdrop-blur-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors",
                "text-[#fafafa]/80 hover:text-[#fafafa]",
                isActive && "bg-transparent text-[#fafafa]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-emerald-950"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-[#fafafa]">
                    <div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-[#fafafa]/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-[#fafafa]/20 blur-md" />
                    <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-[#fafafa]/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
