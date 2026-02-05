"use client";

import React, {  useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) return null;

  return (
    <ReactPlayer
      url={url}
      className="absolute inset-0"
      playing={true}
      width="100%"
      height="100%"
      controls
      muted={false} // Autoplay with sound might be blocked, but user requested 'video en grande'
    />
  );
};

export default VideoPlayer;
