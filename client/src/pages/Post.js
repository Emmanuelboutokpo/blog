import React from 'react'
import { posts } from '../data'
import {useLocation} from "react-router"
const Post = () => {
const location = useLocation();
const path = location.pathname.split("/")[2];
const postDetail = posts.find(p => p.id.toString() === path);
  return (
    <div className='post'>
       <img src={postDetail.img} alt="" className="postImg" />
       <h1 className="postTitle">{postDetail.title}</h1>
       <p className='postDesc'>{postDetail.desc}</p>
       <p className='postLongDesc'>{postDetail.longDesc}</p>
    </div>
  )
}

export default Post
