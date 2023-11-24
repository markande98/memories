import VideoListItem from "./video-list-item";

interface VideoListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Record<string, any>[];
}

const VideosList = ({ items }: VideoListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
      {items.map((item) => (
        <VideoListItem
          key={item.id}
          id={item.id}
          videoUrl={item.videoUrl}
          isLiked={item.isLiked}
        />
      ))}
    </div>
  );
};

export default VideosList;
