import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile flex flex-row">
        <Sidebar />
        <div className="profileright basis-[100%]">
          <div className="profilerighttop">
            <div className="profilecover h-[320px] relative">
              <img
                className="profilecoverimg w-full h-[250px] object-cover"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileuserimg w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto bottom-[0px] border-[3px] border-solid border-white"
                src="assets/person/4.jpeg"
                alt=""
              />
            </div>
            <div className="profileinfo flex flex-col items-center justify-center">
              <h4 className="profileinfoname text-[24px] font-semibold">Adi</h4>
              <span className="profileinfodesc font-light">hello!</span>
            </div>
          </div>
          <div className="profilerighbottom flex">

          <Feed />
          <Rightbar profile/>

          </div>

        </div>
      </div>
    </>
  );
}
