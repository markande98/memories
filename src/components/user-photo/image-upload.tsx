import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useModal } from "@/hooks/use-modal";

const ImageUpload = () => {
  const { onOpen } = useModal();
  const handleClick = () => {
    onOpen("imageUpload");
  };
  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="flex text-sm md:text-md items-center space-x-2"
    >
      <p>Add Photo</p>
      <span>
        <Plus size={22} />
      </span>
    </Button>
  );
};

export default ImageUpload;
