import { ImageModal } from "../modals/image-modal";
import ImagePreviewModal from "../modals/image-preview-modal";
import VideoModal from "../modals/video-modal";
import VideoPreviewModal from "../modals/video-preview-modal";

const ModalProvider = () => {
  return (
    <>
      <ImageModal />
      <VideoModal />
      <ImagePreviewModal />
      <VideoPreviewModal />
    </>
  );
};

export default ModalProvider;
