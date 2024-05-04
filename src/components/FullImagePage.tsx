import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";
import Image from "next/image";

import { Button } from "./ui/button";

import { deleteImage } from "~/server/queries";

const FullPageImage = async ({ id }: { id: string }) => {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("invalid photo id");

  const image = await getImage(idAsNumber);
  const uloaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center">
      <div className="flex">
        <div className="flex-shrink">
          <Image
            className="w-96 flex-shrink object-cover"
            width={390}
            height={600}
            src={image.url}
            alt={image.name}
          />
        </div>

        <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l bg-zinc-900/50 p-4 text-white">
          <div className="break-words border-b pb-4 text-center text-lg">
            {image.name}
          </div>
          <div className="flex flex-col">
            <span>Uploaded By:</span>
            <span>{uloaderInfo.fullName}</span>
          </div>
          <div className="flex flex-col">
            <span>Created On:</span>
            <span>{new Date(uloaderInfo.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col">
            <form
              action={async () => {
                "use server";
                await deleteImage(idAsNumber);
              }}
            >
              <Button type="submit" variant="destructive">
                Delete
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageImage;
