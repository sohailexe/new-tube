import { trpc } from "@/trpc/server";
export default async function Home() {
  const data = await trpc.hello({ text: "Antonio" });
  console.log(data);

  return <div className="">Videos will be displayed here {data.greeting}</div>;
}
