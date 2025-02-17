interface PageProps {
  params: { videoId: string };
}

export async function generateStaticParams() {
  return [{ videoId: "A" }, { videoId: "B" }];
}

const page = async ({ params }: { params: Promise<{ videoId: string }> }) => {
  const resolvedParams = await params;
  const { videoId } = resolvedParams;
  return <div>video id : {videoId}</div>;
};

export default page;
