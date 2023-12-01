import React from "react";
import IssueForm from "../_components/IssueForm";
import { Prisma, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

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
