import { getImage } from "~/server/queries";
// import Image from "next/image";
{
  /* <Image
      className="w-96"
      width={390}
      height={600}
      src={image.url}
      alt={image.name}
    /> */
}

const FullPageImage = async ({ id }: { id: string }) => {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("invalid photo id");

  const image = await getImage(idAsNumber);
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center">
      <div className="flex">
        <div className="flex-shrink">
          <img
            className="w-96 flex-shrink object-cover"
            src={image.url}
            alt={image.name}
          />
        </div>

        <div className="bg-zinc-900/50 flex w-48 flex-shrink-0 flex-col p-4 border-l">
          <div className="text-lg border-b text-center text-white pb-4">{image.name}</div>
        </div>
      </div>
    </div>
  );
};

export default FullPageImage;
