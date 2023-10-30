import PhotosListItem from "./photos-list-item";

interface PhotosListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Record<string, any>[];
}

const PhotosList = ({ items }: PhotosListProps) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {items.map((item) => (
        <PhotosListItem key={item.id} imageUrl={item.imageUrl} id={item.id} />
      ))}
    </div>
  );
};

export default PhotosList;
