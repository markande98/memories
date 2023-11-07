import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/use-modal";
import ReactPlayer from "react-player";
import { Button } from "../ui/button";
import { useCallback } from "react";
import useDelete from "@/hooks/use-delete";
import { useUser } from "@clerk/clerk-react";

const VideoPreviewModal = () => {
  const { user } = useUser();
  const { data, onClose } = useModal();
  const { id, videoUrl } = data;
  const { onDelete } = useDelete(id, user?.id, true);

  const handleDelete = useCallback(async () => {
    await onDelete();
    onClose();
  }, [onDelete, onClose]);

  return (
    <Modal
      title="Memories"
      description="Video Preview"
      typeModal="videoPreview"
    >
      <div className="flex items-center">
        <ReactPlayer
          url={videoUrl}
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
      <Button onClick={handleDelete}>Delete</Button>
    </Modal>
  );
};

export default VideoPreviewModal;
