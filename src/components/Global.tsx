// import Pageloader from "./global/Pageloader";
import MainWrapper from "./MainWrapper";
import LeftSideBar from "./global/LeftSideBar";
import RightSideMenu from "./global/RightSideMenu";
import RightSideFloatingNav from "./global/RightSideFloatingNav";

export default function Global() {
  return (
    <div>
      {/* <Pageloader /> */}
      <LeftSideBar />
      <RightSideMenu />
      <RightSideFloatingNav />
      <MainWrapper />
    </div>
  );
}
