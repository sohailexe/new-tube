import { Sidebar } from "@/components/ui/sidebar";
import { SidebarContent } from "@/components/ui/sidebar";
import MainSection from "./main-section";
import { Separator } from "@/components/ui/separator";
import PersonalSection from "./personal-section";

const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none">
      <SidebarContent className="bg-background ">
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};

export default HomeSidebar;
