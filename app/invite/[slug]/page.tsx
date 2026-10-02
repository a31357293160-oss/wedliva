import InvitationPage from "@/components/InvitationPage";

export default async function InviteRoute({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <InvitationPage slug={slug} />;
}
