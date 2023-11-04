import axios from "axios";
import toast from "react-hot-toast";

import { Modal } from "@/components/ui/modal";
import FileUpload from "../file-upload";
import { Button } from "../ui/button";
import { useCallback, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import usePhotos from "@/hooks/use-photos";
import { useModal } from "@/hooks/use-modal";

export const ImageModal = () => {
  const { user } = useUser();
  const { mutate: mutateFetchPhotos } = usePhotos(user?.id);
  const { onClose } = useModal();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await axios.post(`http://localhost:3000/photos`, {
        userId: user?.id,
        imageUrl,
      });
      onClose();
      mutateFetchPhotos();
      toast.success("uploaded successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, [imageUrl, onClose, user?.id, mutateFetchPhotos]);
  return (
    <Modal
      title="Memories photos"
      description="Upload Your Snapshot"
      typeModal="imageUpload"
    >
      <div className="flex justify-center items-center">
        <FileUpload onChange={(url: string) => setImageUrl(url)} />
      </div>
      <Button disabled={loading || imageUrl === ""} onClick={onSubmit}>
        Save
      </Button>
    </Modal>
  );
};
