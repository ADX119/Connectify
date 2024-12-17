import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function Topbar() {
  return (
    <div className="topbarContainer z-50 w-full h-[50px] bg-blue-400 flex item-center sticky top-0 flex-row">
      <div className="topbarleft  basis-1/5 ">
        <span className="logo  text-[24px] ml-[10px] font-semibold text-white cursor-pointer">
          Connectify
        </span>
      </div>
      <div className="topbarcenter basis-1/2 mt-[7px]">
        <div className="searchbar py-1 px-1 flex item-center w-full h-[30px] bg-white rounded-[30px] ">
          <SearchIcon />
          <input
            placeholder="Search for friends or posts"
            className="searchInput w-full rounded-[30px] border-none outline-none"
          />
        </div>
      </div>
      <div
        className="topbarright basis-1/4 flex item-center justify-around text-white font-semibold text-[17px] cursor-pointer
mt-[7px]"
      >
        <div className="topbarlinks ">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons flex justify-center item-center gap-[2px] ">
          <PersonIcon />
          <span className="topbarIconbadge">1</span>
          <ChatIcon />
          <span className="topbarIconbadge">1</span>
          <NotificationsIcon />
          <span className="topbarIconbadge">1</span>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="topbarimg w-[32px] h-[32px] mb-[4px] rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}
