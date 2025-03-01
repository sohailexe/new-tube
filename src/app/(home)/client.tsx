"use client";
import { trpc } from "@/trpc/client";
import { json } from "stream/consumers";

export const PageClient = () => {
  const [data] = trpc.categories.getMany.useSuspenseQuery();
  return <div> {JSON.stringify(data)}</div>;
};
