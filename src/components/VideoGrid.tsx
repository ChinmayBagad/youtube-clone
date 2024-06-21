import { VideoInfo } from "@/constants/index";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VideoInfo.map((vid) => (
        <div>
          <VideoCard
            image={vid.thumb}
            thumb={vid.image}
            title={vid.title}
            author={vid.author}
            view={vid.view}
            timeStamp={vid.timeStamp}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
