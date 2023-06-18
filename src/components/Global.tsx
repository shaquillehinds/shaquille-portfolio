// import Pageloader from "./global/Pageloader";
import Settings from "./global/Settings";
import MainWrapper from "./MainWrapper";
import LeftSideBar from "./global/LeftSideBar";
import RightSideMenu from "./global/RightSideMenu";
import RightSideFloatingNav from "./global/RightSideFloatingNav";

export default function Global() {
  return (
    <div>
      {/* <Pageloader /> */}
      <Settings />
      <LeftSideBar />
      <RightSideMenu />
      <RightSideFloatingNav />
      <MainWrapper />
    </div>
  );
}
