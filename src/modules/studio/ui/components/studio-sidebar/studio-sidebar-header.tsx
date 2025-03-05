import { SidebarHeader } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function SduioSidebarHeader() {
  const { user } = useUser();
  return (
    <SidebarHeader>
      <Link href="/users/current"></Link>
    </SidebarHeader>
  );
}

export default SduioSidebarHeader;
