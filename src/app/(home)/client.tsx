"use client";
import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Antonio", // always using the same text here whats defined in the server for prefetch data e.g if i prefetch product with id 1 but here i use id 2 it will work but it will not be prefetched and its completely new request and loose its purpose of prefetching
  });
  return <div>Page client {data.greeting}</div>;
};
