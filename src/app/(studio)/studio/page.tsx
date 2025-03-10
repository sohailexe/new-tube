import StudioView from "@/modules/studio/ui/views/studio-view";
import { HydrateClient, trpc } from "@/trpc/server";
import React from "react";

function page() {
  void trpc.studio.getMany.prefetchInfinite();
  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
}

export default page;
