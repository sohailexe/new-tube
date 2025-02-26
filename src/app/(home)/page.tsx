"use client";
import { trpc } from "@/trpc/client";
export default function Home() {
  // const { data } = trpc.hello.useQuery({ text: "Antonio" });
  const { data } = trpc.Sohail.useQuery("Faiz");

  return (
    <div className="">
      Videos will be displayed here {data?.greeting} {data?.greeting}
    </div>
  );
}
