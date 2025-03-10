import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

export default function VideoSection() {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return <div>VideoSection</div>;
}
