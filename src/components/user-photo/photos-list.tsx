import PhotosListItem from "./photos-list-item";

interface PhotosListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Record<string, any>[];
}

const PhotosList = ({ items }: PhotosListProps) => {
  return (
    <div className="flex items-center justify-evenly w-full flex-wrap gap-2">
      {items.map((item) => (
        <PhotosListItem key={item.id} imageUrl={item.imageUrl} id={item.id} />
      ))}
    </div>
  );
};

export default PhotosList;
