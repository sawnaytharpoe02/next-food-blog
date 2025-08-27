"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import NavBar from "@/components/dashboard/NavBar";

import { HeroUIProvider } from "@heroui/react";
import { Briefcase, FileText, Home, User } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Post", url: "/dashboard", icon: Home },
    { name: "Category", url: "/dashboard/category", icon: User },
    { name: "Tag", url: "/dashboard/tag", icon: Briefcase },
    { name: "Comment", url: "/dashboard/comment", icon: FileText },
  ];

  return (
    <HeroUIProvider>
      <main className="dark text-foreground bg-background h-screen">
        <div className="p-6">
          <NavBar items={navItems} />
          <div className="mt-[var(--nav-height)] py-10">{children}</div>
        </div>
        {/* <Navbar onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <p className="font-bold text-inherit">FOOD BLOG</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Posts
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" href="#">
                Category
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Tag
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar> */}
      </main>
    </HeroUIProvider>
  );
}
