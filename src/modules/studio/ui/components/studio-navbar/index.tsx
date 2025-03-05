import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import AuthButton from "@/modules/auth/ui/components/auth-btn";
import StudioUploadModel from "../studio-upload-model";

const StudioNavbar = () => {
  return (
    <nav className="fixed top-0  left-0 right-0 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and logo*/}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/studio">
            <div className="flex p-4 items-center gap-1">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tighter">Studio</p>
            </div>
          </Link>
        </div>
        {/* for pushing profile btn to the right */}
        <div className="flex flex-1 "></div>

        <div className="flex-shrink-0 items-center flex gap-4">
          <StudioUploadModel />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default StudioNavbar;
