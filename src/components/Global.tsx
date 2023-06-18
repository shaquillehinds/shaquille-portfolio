import { useState } from "react";
import Video from "./global/Video";
// import Pageloader from "./global/Pageloader";
import Rsidemenu from "./global/Rsidemenu";
import Scrollnav from "./global/Scrollnav";
import Lsb from "./global/Lsb";
import Settings from "./global/Settings";
import MainWrapper from "./MainWrapper";

export default function Global() {
  const [currentVideo, setVideo] = useState("");

  function changeVideo(videos: string) {
    setVideo(videos);
  }
  return (
    <div>
      <Video video={currentVideo} />
      {/* <Pageloader /> */}
      <Settings clickEvent={changeVideo} />
      <Lsb />
      <Rsidemenu />
      <Scrollnav />
      <MainWrapper />
    </div>
  );
}
