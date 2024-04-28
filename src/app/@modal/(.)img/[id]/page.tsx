import { Modal } from "./modal";
import FullPageImage from "~/components/FullImagePage";

const PhotoPae = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Modal>
      <FullPageImage id={id} />
    </Modal>
  );
};

export default PhotoPae;
