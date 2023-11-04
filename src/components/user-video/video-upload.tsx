import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const VideoUpload = () => {
  return (
    <Button
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
