import useDelete from "@/hooks/use-delete";
import { useUser } from "@clerk/clerk-react";
import { useCallback } from "react";
import { IoMdTrash } from "react-icons/io";
import { ClipLoader } from "react-spinners";

interface PhotosListItemProps {
  id: string;
  imageUrl: string;
}

const PhotosListItem = ({ imageUrl, id }: PhotosListItemProps) => {
  const { user } = useUser();
  const { onDelete, isLoading } = useDelete(id, user?.id as string);
  const onClick = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <div className="h-full relative group w-48 rounded-3xl overflow-hidden border-4 hover:border-zinc-600">
      <div className="cursor-pointer">
        <img
          className="object-cover h-48 w-full group-hover:scale-110 transition"
          src={imageUrl}
          alt="user"
        />
      </div>
      <div
        onClick={onClick}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 group-hover:text-red-600 cursor-pointer"
      >
        {!isLoading && <IoMdTrash size={24} />}
        {isLoading && <ClipLoader size={24} />}
      </div>
    </div>
  );
};

export default PhotosListItem;
