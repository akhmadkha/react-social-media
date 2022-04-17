import React, {useState, useEffect} from 'react'
import HomeRightbar from '../../components/home_rightbar'
import PostCard from '../../components/post_card'


export default function TabPost(props) {
  const {idUser, data} = props
  return (
    <div className="flex gap-4">
      <div className="flex flex-col flex-1 gap-6">
        {
          data ?
          data.map((val, idx) => {
            return(
              <PostCard {...val}/>
            )
          })
          :null
        }
      </div>
      <wiv className="w-72">
        <HomeRightbar/>
      </wiv>
    </div>
  )
}
