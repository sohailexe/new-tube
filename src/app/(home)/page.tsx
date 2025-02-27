import { trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
export default async function Home() {
  void (await trpc.hello.prefetch({ text: "Antonio" }));

  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>Failed to load</div>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
      hello word
    </HydrateClient>
  );
}
