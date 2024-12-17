import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventIcon from "@mui/icons-material/Event";
import Friends from "./Friends";
import { User } from "../Dummydata";
export default function Sidebar() {
  return (
    <div className="sidebar overflow-y-scroll  basis-[15%] h-[calc(100vh-50px)] ">
      <div className="sidebarwrapper p-[20px]">
        <ul className="sidebarlist ">
          <li className="sidebarlistitem">
            <DynamicFeedIcon className="sidebaricon" />
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarlistitem">
            <ChatIcon className="sidebaricon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarlistitem">
            <PlayCircleOutlineIcon className="sidebaricon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarlistitem">
            <GroupIcon className="sidebaricon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarlistitem">
            <BookmarkIcon className="sidebaricon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarlistitem">
            <EventIcon className="sidebaricon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarbutton w-[130px] bg-zinc-200 px-2 py-3  rounded-[25px] font-semibold  ">
          Show more
        </button>
        <hr className="shr m-[20px]" />
        <ul className="sidebarfriendlist p-0 m-0 list-none">
          {User.map(u=>(
            <Friends key={u.id} user={u}/>
          ))}

        </ul>
      </div>
    </div>
  );
}
