import { Modal } from "@/components/ui/modal";
import FileUpload from "../file-upload";

export const ImageModal = () => {
  return (
    <Modal title="Memories photos" description="Upload Your Snapshot">
      <div className="flex justify-center items-center">
        <FileUpload />
      </div>
    </Modal>
  );
};
