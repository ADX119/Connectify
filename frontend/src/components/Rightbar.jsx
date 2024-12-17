import { User } from "../Dummydata";
import Onlinefriends from "./Onlinefriends";



export default function Rightbar({profile}) {

  const Homerightbar = ()=>{
    return (
      <>
        <div className="birthdaycontainer flex item-center ">
          <img
            className="birthdayimg w-[40px] h-[40px] mr-[10px]"
            src="assets/gift.png"
            alt=""
          />
          <span className="birthdaytext font-medium text-[15px]">
            <b>your friends</b> and <b> 3 others </b> have a birthday today
          </span>
        </div>
        <img
          src="assets/ad.png"
          alt=""
          className="rightbarAd w-full rounded-[10px] mt-[20px]"
        />
        <h4 className="rightbartitle mb-[10px]">Online friends</h4>
        <ul className="rightbarfriendlist p-0 m-0 list-none ">
          {User.map((u) => (
            <Onlinefriends key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = ()=>{

    return (
      <>
        <h4 className="rightbartitle">User Information</h4>
        <div className="rightbarinfo mb-[30px]">
          <div className="rightbarinfoitem mb-[10px]">
            <span className="rightbarinfokey">City</span>
            <span className="rightbarinfovalue">Pune</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From</span>
            <span className="rightbarinfovalue">Pune</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship</span>
            <span className="rightbarinfovalue">Pune</span>
          </div>
        </div>
        <h4 className="rightbartitle">User Friends</h4>
        <div className="rightbarfollowings flex flex-wrap justify-between">
          <div className="rightbarfollowing flex flex-col mb-[20px] cursor-pointer">
            <img src="assets/person/1.jpeg" alt="" className="rightbarfollowingimg w-[100px] h-[100px] object-cover rounded-[5px]" />
            <span className="rightbarfollowingname">johnny</span>
          </div>
        </div>
      </>
    );

  }




  return (
    <div className="rightbar flex flex row basis-1/4 ">
      <div className="rightbarwrapper px-5 py-5">
        {profile ? <ProfileRightbar/> : <Homerightbar/> }
      </div>
    </div>
  );
}
