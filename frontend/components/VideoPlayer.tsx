import React, { useRef, useEffect } from 'react';

interface Props {
  url: String;
}

const VideoPlayer: React.FC<Props> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const options = {
      root: null,
      rootMargin: '500px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const videoElement = videoRef.current;
        const playButtonElement = playButtonRef.current;
        if (videoElement && videoElement.paused && playButtonElement) {
          playButtonElement.click();
        }
      }
    });
  };

  const handlePlay = () => {
    const videoElement = videoRef.current;
    const playButtonElement = playButtonRef.current;
    if (videoElement && playButtonElement) {
      videoElement.play().catch((error) => {
        console.log('Failed to play the video:', error);
      });
      playButtonElement.style.display = 'none';
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="max-w-full">
        <video
          ref={videoRef}
          className="w-full rounded-md"
          controls
          src={String(url)}
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
        <button
          ref={playButtonRef}
          className="play-button"
          onClick={handlePlay}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
