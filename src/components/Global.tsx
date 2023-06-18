import { useState } from "react";
import Video from "./global/Video";
// import Pageloader from "./global/Pageloader";
import Settings from "./global/Settings";
import MainWrapper from "./MainWrapper";
import LeftSideBar from "./global/LeftSideBar";
import RightSideMenu from "./global/RightSideMenu";
import RightSideFloatingNav from "./global/RightSideFloatingNav";

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
      <LeftSideBar />
      <RightSideMenu />
      <RightSideFloatingNav />
      <MainWrapper />
    </div>
  );
}
