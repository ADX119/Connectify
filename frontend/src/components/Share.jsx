import PermMediaIcon from "@mui/icons-material/PermMedia";
import TagIcon from "@mui/icons-material/Tag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
export default function Share() {
  return (
    <div className="share m-[15px] w-full h-[170px] rounded-[10px] shadow-inner ">
      <div className="sharewrapper p-[10px] ">
        <div className="sharetop flex item-cemter">
          <img
            className="shareprofileimg w-[50px] h-[50px] rounded-full object-cover mr-[10px] "
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input
            placeholder="Whats in your mind"
            className="shareinput w-full border-none outline-none "
          />
        </div>
        <hr className="sharehr m-[20px]" />
        <div className="sharebottom w-full flex item-center justify-between">
          <div className="shareoptions flex ml-[20px]">
            <div className="shareoption flex item-center cursor-pointer">
              <PermMediaIcon htmlColor="green" className="shareicon" />
              <span className="shareoptiontext"> Media</span>
            </div>
            <div className="shareoption flex item-center cursor-pointer">
              <TagIcon htmlColor="black" className="shareicon" />
              <span className="shareoptiontext"> Tag</span>
            </div>
            <div className="shareoption flex item-center cursor-pointer">
              <LocationOnIcon htmlColor="blue" className="shareicon" />
              <span className="shareoptiontext"> Location</span>
            </div>
            <div className="shareoption flex item-center cursor-pointer">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareicon" />
              <span className="shareoptiontext">Feeling</span>
            </div>
          </div>
          <button className="sharebutton border-none cursor-pointer px-3 py-2 rounded-[15px] bg-zinc-200">Share</button>
        </div>
      </div>
    </div>
  );
}
