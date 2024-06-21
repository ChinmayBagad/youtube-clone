const VideoCard = (props: any) => {
  return (
    <div className="p-3">
      <img src={props.image} className=" rounded-xl" />
      <div className="grid grid-cols-12">
        <div className=" col-span-1 mt-2">
          <img src={props.thumb} className="rounded-full h-10 w-10  ml-4" />
        </div>
        <div className="col-span-11 pl-8 xl:pl-10">
          <div>{props.title}</div>
          <div className="col-span-11 text-base text-gray-500">
            {props.author}
          </div>
          <div className="col-span-11 text-base text-gray-500">
            {props.view} | {props.timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
