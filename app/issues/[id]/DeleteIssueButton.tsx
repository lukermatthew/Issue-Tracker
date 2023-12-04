"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <TrashIcon />
          Delete Issue
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Confirmation Deletion</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete the issue? This application will no
          longer be accessible and any existing sessions will be expired.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
