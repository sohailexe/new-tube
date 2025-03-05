import { Sidebar } from "@/components/ui/sidebar";
import { SidebarContent } from "@/components/ui/sidebar";
import MainSection from "./main-section";
import { Separator } from "@/components/ui/separator";
import PersonalSection from "./personal-section";

const StudioSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="pt-16 z-40 ">
      <SidebarContent className="bg-background ">
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};

export default StudioSidebar;
