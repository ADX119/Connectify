import MoreVertIcon from "@mui/icons-material/MoreVert";
import { User } from "../Dummydata";
import { useState } from "react";


export default function Post({post}) {
  const [like,setlike] = useState(post.like)
  const [isliked,setisliked] = useState(false)

  const likehandler = ()=>{
    setlike(isliked ? like-1 : like+1)
    setisliked(!isliked)
  }

  return (
    <div className="post w-full rounded-[10px] shadow-inner m-[15px]  ">
      <div className="postwrapper p-[10]">
        <div className="posttop flex item-center justify-between">
          <div className="topleft m-[10px] flex item-center ">
            <img
              className="postprofileimg w-[32px] h-[32px] rounded-full object-cover"
              src={User.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postusername text-[15px] font-semibold px-3 ">
              {User.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postdate text-[13px]">{post.date}</span>
          </div>
          <div className="topright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter mx-[20px] ">
          <span className="posttext">{post?.desc}</span>
          <img
            className="postimg mt-[15px] mb-[15px] w-full h-max-[500px] object-contain"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="postbottom flex item-center justify-between">
          <div className="bottomleft ml-[15px] flex item-center ">
            <img
              className="likeicon w-[24px] h-[24px] cursor-pointer mr-[5px]"
              src="assets/heart.png"
              alt=""
              onClick={likehandler}
            />
            <img
              className="likeicon w-[24px] h-[24px] cursor-pointer mr-[5px]"
              src="assets/like.png"
              alt=""
              onClick={likehandler}
            />
            <span className="likecounter text-[15px]">{like} liked this </span>
          </div>
          <div className="bottomright ">
            <span className="postcomment  cursor-pointer border-b-[1px] border-gray-500">
              {post.comment} comment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
