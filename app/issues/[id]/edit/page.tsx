import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import IssueFormSkeleton from "./loading";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const prisma = new PrismaClient();

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issues.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
