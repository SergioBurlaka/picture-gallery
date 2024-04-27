import { getImage } from "~/server/queries";

const PhotoModal = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("invalid photo id");

  const image = await getImage(idAsNumber);
  return (
    <div>
      <img src={image.url} alt="img" className="w-96" />
    </div>
  );
};

export default PhotoModal;
