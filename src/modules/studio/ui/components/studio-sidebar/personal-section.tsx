"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";

const items = [
  {
    title: "History",
    href: "/playlist/history",
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: "Liked Videos",
    href: "/playlist/liked",
    icon: ThumbsUp,
    auth: true,
  },
  {
    title: "All Playlists",
    href: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
];

const PersonalSection = () => {
  const { isSignedIn } = useAuth();
  const clerk = useClerk();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="py-1 ">
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} //TODO add active state
                onClick={(e) => {
                  if (item.auth && !isSignedIn) {
                    e.preventDefault();
                    return clerk.openSignIn({
                      afterSignInUrl: item.href,
                    });
                  }
                }}
              >
                <Link href={item.href} className="flex items-center gap-4">
                  <item.icon /> {/* Render the icon component */}
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default PersonalSection;
