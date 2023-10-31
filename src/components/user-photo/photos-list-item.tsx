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
    <div
      className={`h-full relative group w-full rounded-3xl overflow-hidden border-4 hover:border-zinc-600 dark:hover:border-zinc-500`}
    >
      <div className="cursor-pointer">
        <img
          className={`object-cover h-32 w-full md:h-48 group-hover:scale-110 transition`}
          src={imageUrl}
          alt="user"
        />
      </div>
      <div
        onClick={onClick}
        className="absolute rounded-md right-2 top-2 opacity-0 group-hover:opacity-100 group-hover:text-red-600 cursor-pointer group-hover:bg-white"
      >
        {!isLoading && <IoMdTrash size={24} />}
        {isLoading && <ClipLoader size={24} />}
      </div>
    </div>
  );
};

export default PhotosListItem;
