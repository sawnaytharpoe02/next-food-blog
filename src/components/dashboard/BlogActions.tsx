"use client";

import { DropdownMenuItem } from "@/components/ui/DropdownMenu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const DeleteBlogItem = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          // await DeleteOrder(id);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
};

export const EditBlogItem = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          // await DeleteOrder(id);
          router.refresh();
        });
      }}
    >
      Edit
    </DropdownMenuItem>
  );
};
