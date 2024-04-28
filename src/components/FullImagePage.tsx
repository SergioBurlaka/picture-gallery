import { getImage } from "~/server/queries";
import Image from "next/image";

const FullPageImage = async ({ id }: { id: string }) => {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("invalid photo id");

  const image = await getImage(idAsNumber);
  return (
    <Image
      className="w-96"
      width={390}
      height={600}
      src={image.url}
      alt={image.name}
    />
  );
};

export default FullPageImage;
