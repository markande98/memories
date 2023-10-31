import { useUser } from "@clerk/clerk-react";
import PhotosList from "./photos-list";
import { ClipLoader } from "react-spinners";
import usePhotos from "@/hooks/use-photos";

const Gallery = () => {
  const { user } = useUser();
  const { data: photos = [], isLoading } = usePhotos(user?.id);
  return (
    <div className="flex h-full items-center justify-center">
      {isLoading && <ClipLoader size={72} />}
      {!isLoading && <PhotosList items={photos} />}
    </div>
  );
};

export default Gallery;
