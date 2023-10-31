import { format } from "date-fns";
import {
  MdOutlineGridView,
  MdOutlineViewQuilt,
  MdViewCompact,
} from "react-icons/md";
import ImageUpload from "./image-upload";

const PhotoHeader = () => {
  const currentDate = new Date();
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1
          className={`text-xl md:text-3xl font-semibold text-muted-foreground`}
        >
          Photos
        </h1>
        <p className={`text-sm text-muted-foreground`}>
          {format(currentDate, "MMMM dd, yyyy")} - 12 images.
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex justify-between items-center text-muted-foreground gap-x-1">
          <MdOutlineViewQuilt size={28} className="-rotate-90" />
          <MdViewCompact size={36} />
          <MdOutlineGridView size={28} />
        </div>
        <div>
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default PhotoHeader;
