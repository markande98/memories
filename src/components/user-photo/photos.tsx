import { ScrollArea } from "../ui/scroll-area";
import Gallery from "./gallery";
import PhotoHeader from "./photo-header";

const Photos = () => {
  return (
    <ScrollArea>
      <div className="p-12 h-[85vh]">
        <PhotoHeader />
        <Gallery />
      </div>
    </ScrollArea>
  );
};

export default Photos;
