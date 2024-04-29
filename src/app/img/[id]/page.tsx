import FullPageImage from "~/components/FullImagePage";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="pt-32 flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPageImage id={photoId} />
    </div>
  );
}