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
      className={`h-20 w-20 sm:h-28 sm:w-28 md:w-32 md:h-32 lg:h-44 lg:w-44 relative group rounded-3xl overflow-hidden border-4 hover:border-zinc-600 dark:hover:border-zinc-500 transition`}
    >
      <div>
        <img
          className={`object-cover h-20 w-20 sm:h-28 sm:w-28 md:w-32 md:h-32 lg:h-44 lg:w-44 group-hover:scale-110 transition`}
          src={imageUrl}
          alt="user"
        />
      </div>
      <div
        onClick={onClick}
        className="absolute rounded-full p-2 right-1 top-1 opacity-0 group-hover:opacity-100 group-hover:text-red-600 cursor-pointer bg-red-600"
      >
        {!isLoading && <IoMdTrash color="white" size={24} />}
        {isLoading && <ClipLoader size={24} className="p-0" />}
      </div>
    </div>
  );
};

export default PhotosListItem;
