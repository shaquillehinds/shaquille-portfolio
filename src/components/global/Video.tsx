import { useEffect, useRef } from "react";

interface VideoProps {
  video: string;
}
export default function Video(props: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (props.video) {
      videoRef.current && (videoRef.current.src = props.video);
    }
  }, [props.video]);
  return (
    <video
      className="body-overlay"
      muted
      autoPlay
      loop
      style={{
        opacity: 0.1,
      }}
      ref={videoRef}
    >
      <source src={props.video} type="video/mp4" />
    </video>
  );
}
