"use client";
import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign...">
        <Select.Content>
          <Select.Group>
            <Select.Label>
              <Select.Item value="1">Mat Mercer</Select.Item>
            </Select.Label>
          </Select.Group>
        </Select.Content>
      </Select.Trigger>
    </Select.Root>
  );
};

export default AssigneeSelect;
