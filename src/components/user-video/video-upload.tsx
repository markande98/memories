import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";
import { Plus } from "lucide-react";

const VideoUpload = () => {
  const { onOpen } = useModal();
  const handleClick = () => {
    onOpen("videoUpload");
  };
  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="flex text-sm md:text-md items-center gap-x-2"
    >
      <p>Add Videos</p>
      <span>
        <Plus size={22} />
      </span>
    </Button>
  );
};

export default VideoUpload;
