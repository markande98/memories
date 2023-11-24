import PhotosListItem from "./photos-list-item";

interface PhotosListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Record<string, any>[];
}

const PhotosList = ({ items }: PhotosListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
      {items.map((item) => (
        <PhotosListItem
          key={item.id}
          imageUrl={item.imageUrl}
          id={item.id}
          isLiked={item.isLiked}
        />
      ))}
    </div>
  );
};

export default PhotosList;
