import React from 'react'
import Lottie from "lottie-react";
import notfoundAnimation from "../../assets/lottie/notfound.json"
export default function NotfoundPage() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Lottie animationData={notfoundAnimation} style={{height: 400}}/>
      <div className="mt-14">
        <button onClick={()=> window.history.back()} className="btn btn-primary">
          Kembali
        </button>
      </div>
    </div>
  )
}
