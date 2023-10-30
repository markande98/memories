import axios from "axios";

import { UploadButton } from "@bytescale/upload-widget-react";

import { Modal } from "@/components/ui/modal";
import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { useImageModal } from "@/hooks/use-image-modal";
import { Button } from "@/components/ui/button";

const options = {
  apiKey: "public_kW15bkT2C89qzwMmXdpkqiBpHXvs",
  maxFileCount: 1,
};

export const ImageModal = () => {
  const { onClose } = useImageModal();
  const { user } = useUser();
  const handleUpload = async (imageUrl: string) => {
    try {
      await axios.post("http://localhost:3000/photos", {
        imageUrl,
        userId: user?.id,
      });
      onClose();
      toast.success("Uploaded successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };
  return (
    <Modal title="Memories photos" description="Upload Your Snapshot">
      <div className="flex justify-center items-center">
        <UploadButton
          options={options}
          onComplete={(files) => handleUpload(files[0].fileUrl)}
        >
          {({ onClick }) => <Button onClick={onClick}>Upload a file...</Button>}
        </UploadButton>
      </div>
    </Modal>
  );
};
