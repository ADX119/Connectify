
export default function Onlinefriends(user) {
  return (
    <li className="rightbarfriend flex item-center mb-[15px]">
      <div className="rightbarprofileimgcontainer mr-[10px] relative">
        <span className="rightbaronline"></span>
        <img
          src={user.profilePicture}
          alt=""
          className="rightbarprofileimg w-[40px] h-[40px] rounded-full object-cover"
        />
      </div>
      <span className="rightbarusername font-semibold">{user.username}</span>
    </li>
  );
}
