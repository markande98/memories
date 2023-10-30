import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useImageModal } from "@/hooks/use-image-modal";

const ImageUpload = () => {
  const { onOpen } = useImageModal();
  const handleClick = () => {
    onOpen();
  };
  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="flex text-md items-center space-x-2"
    >
      <p>Add Photo</p>
      <span>
        <Plus size={22} />
      </span>
    </Button>
  );
};

export default ImageUpload;
