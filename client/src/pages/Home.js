import React from 'react'
import Card from '../component/Card'
import { posts } from '../data'

const Home = () => {
  return (
    <div className='home'>
         {
              posts.map((item, index)=>(
                   <Card item={item} key={index}/>
              ))
         }
    </div>
  )
}

export default Home
