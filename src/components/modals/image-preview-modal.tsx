import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/use-modal";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react";
import { useCallback } from "react";
import { useChange } from "@/hooks/use-change";

const ImagePreviewModal = () => {
  const { user } = useUser();
  const { data, onClose } = useModal();
  const { imageUrl, id } = data;
  const { onDelete } = useChange(id, user?.id);

  const handleDelete = useCallback(async () => {
    await onDelete();
    onClose();
  }, [onDelete, onClose]);

  return (
    <Modal
      title="Memories"
      description="Image Preview"
      typeModal="imagePreview"
    >
      <div className="flex justify-center items-center h-64 w-full">
        <img
          src={imageUrl}
          alt="user-image"
          className="rounded-lg h-64 w-full object-cover"
        />
      </div>
      <Button onClick={handleDelete}>Delete</Button>
    </Modal>
  );
};

export default ImagePreviewModal;
