import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homecontainer w-full flex flex-row">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
