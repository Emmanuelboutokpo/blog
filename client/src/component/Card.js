import React from 'react'
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <div className='card'>
       <Link className='link' to={`/post/${item.id}`} >
        <span className='title'>{item.title} </span>
        <img className='img' src={item.img} alt="" />
        <p className="desc">{item.desc}</p>
        <button className='cardButton'>Read  more</button>
       </Link>
    </div>
  )
}

export default Card
