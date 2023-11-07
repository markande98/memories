import useDelete from "@/hooks/use-delete";
import { useModal } from "@/hooks/use-modal";
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
  const { onOpen } = useModal();
  const { onDelete, isLoading } = useDelete(id, user?.id as string);
  const onClick = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <div className="h-48 md:h-36 lg:h-52 overflow-hidden relative group rounded-3xl border-4 hover:border-zinc-600 dark:hover:border-zinc-500 transition">
      <div onClick={() => onOpen("imagePreview", { imageUrl, id })}>
        <img
          className="group-hover:scale-110 transition cursor-pointer object-cover h-48 md:h-36 lg:h-52 w-full"
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
