
export default function Friends(user) {
  return (
    <li className="sidebarfriend flex item-center mb-[15px]">
      <img
        src={user.profilePicture}
        alt=""
        className="sidebarfriendimg w-[32px] h-[32px] rounded-full object-cover "
      />
      <span className="sidebarfriendname">{user.username}</span>
    </li>
  );
}
