import React from 'react'
import { assets } from '../assets/assets'

function AppDownload() {
  return (
    <div id='app_download' className='flex flex-col justify-center items-center p-4 gap-2'>
      <h1 className='text-4xl'>For better experience download our app on playstore and app store</h1>
      <div className='flex gap-4'>
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
