import { Modal } from "../ui/modal";
import { Image } from "lucide-react";
import { Button } from "../ui/button";

export const ImageModal = () => {
  const onClick = () => {};

  return (
    <Modal title="Memories photos" description="Upload Your Snapshot">
      <div onClick={onClick} className="flex justify-center items-center">
        <Button variant="outline" className="space-x-4 text-muted-foreground">
          <p className="text-xl">Upload</p>
          <Image size={28} />
        </Button>
      </div>
    </Modal>
  );
};
