import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import FileUpload from "../file-upload";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { useModal } from "@/hooks/use-modal";
import useVideos from "@/hooks/use-videos";

const VideoModal = () => {
  const { user } = useUser();
  const { onClose } = useModal();
  const { mutate: mutateFetchVideos } = useVideos(user?.id);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await axios.post(`http://localhost:3000/videos`, {
        userId: user?.id,
        videoUrl,
      });
      onClose();
      mutateFetchVideos();
      toast.success("uploaded successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, [onClose, videoUrl, user?.id, mutateFetchVideos]);
  return (
    <Modal
      title="Memories Videos"
      description="Upload your videos"
      typeModal="videoUpload"
    >
      <div className="flex justify-center items-center">
        <FileUpload onChange={(url: string) => setVideoUrl(url)} isVideo />
      </div>
      <Button disabled={loading || videoUrl === ""} onClick={onSubmit}>
        Save
      </Button>
    </Modal>
  );
};

export default VideoModal;
