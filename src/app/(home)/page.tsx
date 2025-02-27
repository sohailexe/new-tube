import { trpc } from "@/trpc/server";
import { PageClient } from "./client";
export default async function Home() {
  void (await trpc.hello.prefetch({ text: "Antonio" }));

  return (
    <div className="">
      <PageClient />
    </div>
  );
}
