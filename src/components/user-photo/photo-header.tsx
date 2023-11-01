import { format } from "date-fns";
import ImageUpload from "./image-upload";
import usePhotos from "@/hooks/use-photos";
import { useUser } from "@clerk/clerk-react";

const PhotoHeader = () => {
  const { user } = useUser();
  const { data: photos = [] } = usePhotos(user?.id);
  const currentDate = new Date();
  return (
    <div className="flex justify-between items-center gap-4">
      <div>
        <h1
          className={`text-xl md:text-3xl font-semibold text-muted-foreground`}
        >
          Photos
        </h1>
        <p className={`text-sm text-muted-foreground`}>
          {format(currentDate, "MMMM dd, yyyy")} - {photos.length} images.
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <ImageUpload />
      </div>
    </div>
  );
};

export default PhotoHeader;
