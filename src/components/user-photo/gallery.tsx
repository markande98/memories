import { useUser } from "@clerk/clerk-react";
import PhotosList from "./photos-list";
import { ClipLoader } from "react-spinners";
import usePhotos from "@/hooks/use-photos";

const Gallery = () => {
  const { user } = useUser();
  const { data: photos = [], isLoading } = usePhotos(user?.id);
  return (
    <div className="flex justify-center items-center mt-10">
      {isLoading && <ClipLoader size={48} />}
      {!isLoading && <PhotosList items={photos} />}
    </div>
  );
};

export default Gallery;
