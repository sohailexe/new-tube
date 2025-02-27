import { trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
export default async function Home() {
  void (await trpc.hello.prefetch({ text: "Antonio" }));

  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <PageClient />
      </Suspense>
    </HydrateClient>
  );
}
