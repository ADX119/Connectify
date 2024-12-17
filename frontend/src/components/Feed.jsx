import Share from "./Share"
import Post from "./Post"
import { Posts } from "../Dummydata"

export default function Feed() {
  return (
    <div className="feed basis-[75%]">
        <div className="feedwrapper">
            <Share/>
            {Posts.map((p)=>(

              <Post key={p.id} post={p} />

            ))}
            
        </div>
    
    </div>
  )
}
