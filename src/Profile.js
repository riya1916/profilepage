import React from 'react'
import "./Profile.css"
import { BiLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import Download from "./download.png";


function Profile() {
  return (
    <div >
      <div className="image_area">
        <div className='image'>
        <img src={Download} height={500} width={500} alt='Profile' />
        </div>
        <div className='like'>
          <div>
          <button>Like </button>
          <BiLike size={25} />
          </div>
          
          <div>
          <button>Comment  </button>
          <BiCommentDetail size={25} />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Profile