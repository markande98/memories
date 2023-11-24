import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/use-modal";
import ReactPlayer from "react-player";
import { Button } from "../ui/button";
import { useCallback } from "react";
import { useUser } from "@clerk/clerk-react";
import { useChange } from "@/hooks/use-change";

const VideoPreviewModal = () => {
  const { user } = useUser();
  const { data, onClose } = useModal();
  const { id, videoUrl } = data;
  const { onDelete } = useChange(id, user?.id, true);

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
      <div className="flex items-center h-64">
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
