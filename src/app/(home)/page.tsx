import HomeView from "@/modules/home/ui/views/home-view";
import { trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";
import { VideoOff } from "lucide-react";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { categoryId } = await searchParams;
  void trpc.categories.getMany.prefetch();
  const videos = await trpc.videos.getMany();
  console.log("videos ", videos);

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}
