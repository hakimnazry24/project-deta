import React from "react";
import Image from "next/image";

const VideoCard = ({image, title, channel, view}) => {
  return (
    <div className="rounded-2xl border border-gray-600 shadow-md shadow-gray-400">
      <Image src={image} width={300} height={300} alt="thumbnail" className="rounded-t-2xl" />
      <div className="p-5">
          <h1 className="text-gray-300 font-semibold text-lg mb-2">{title}</h1>
          <h2 className="text-sm text-gray-300">{channel}</h2>
          <h3 className="text-sm text-gray-300">{view} views</h3>
      </div>
    </div>
  );
};

export default VideoCard;
