import { useChange } from "@/hooks/use-change";
import { useModal } from "@/hooks/use-modal";
import { useUser } from "@clerk/clerk-react";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface PhotosListItemProps {
  id: string;
  imageUrl: string;
  isLiked: boolean;
}

const PhotosListItem = ({ imageUrl, id, isLiked }: PhotosListItemProps) => {
  const { user } = useUser();
  const { onOpen } = useModal();
  const { onToggle } = useChange(id, user?.id as string);
  const onClick = useCallback(async () => {
    await onToggle(isLiked);
    if (!isLiked) toast.success("added to favorites");
    else toast.success("remove from favorites");
  }, [onToggle, isLiked]);

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
        className="absolute rounded-full p-2 right-1 top-1 opacity-0 group-hover:opacity-100 group-hover:text-red-600 cursor-pointer bg-white"
      >
        {!isLiked && <IoMdHeartEmpty size={24} />}
        {isLiked && <IoMdHeart size={24} />}
      </div>
    </div>
  );
};

export default PhotosListItem;
