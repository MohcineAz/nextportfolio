import React from 'react'
import Image from 'next/image'
import fb from '../assets/facebook-logo.png'
import yt from '../assets/youtube-logo(1).png'
import x from '../assets/x-logo(1).png'
import email from '../assets/envelope(1).png'

const ListMenu = [
    {id: 1, name: 'Facebook', img:fb},
    {id: 2, name: 'YouTube ', img:yt},
    {id: 3, name: 'Twitter', img:x},
]

const InterMenu = () => {
  return (
    <div className='flex items-center justify-between mt-5'>
        <div className="line w-[200px] bg-gray-300 h-[1px] mr-2"></div>
        <div className='flex items-center gap-8'>
            {
                ListMenu.map((menu, index) =>(
                    <li key={index} className='flex justify-center'><Image src={menu.img} alt='icons' height={20} width={20} className='mr-1'/> {menu.name}</li>
                ))
            }
        </div>
        <div className="line w-[400px] bg-gray-300 h-[1px] mr-2"></div>
        <div className="email flex items-center"><Image src={email} alt='email logo' /> <span className='ml-2'>desinger@gmail.com</span></div>
    </div>
  )
}

export default InterMenu