"use client";
import {
  Sidebar,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarContent } from "@/components/ui/sidebar";

import Link from "next/link";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const StudioSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="pt-16 z-40">
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/studio"}
                tooltip="Content"
              >
                <Link href="/studio" className="w-full">
                  <VideoIcon className="size-5" />
                  <span>Content</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Exit Studio">
                <Link href="/" className="w-full">
                  <LogOutIcon className="size-5" />
                  <span>Exit Studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default StudioSidebar;
