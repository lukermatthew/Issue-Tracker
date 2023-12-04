import { Button } from "@radix-ui/themes";
import { Pencil1Icon } from "@radix-ui/react-icons";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
