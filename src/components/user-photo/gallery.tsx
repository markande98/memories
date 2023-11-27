import { useUser } from "@clerk/clerk-react";
import PhotosList from "./photos-list";
import { ClipLoader } from "react-spinners";
import usePhotos from "@/hooks/use-photos";
import useFavPhotos from "@/hooks/use-fav-photos";

interface GalleryProps {
  isFav?: boolean;
}

const Gallery = ({ isFav }: GalleryProps) => {
  const { user } = useUser();
  const { data: photos = [], isLoading } = isFav
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useFavPhotos(user?.id)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      usePhotos(user?.id);
  return (
    <div className="flex items-center justify-center mt-10">
      {isLoading && <ClipLoader color="red" size={72} />}
      {!isLoading && <PhotosList items={photos} />}
    </div>
  );
};

export default Gallery;
