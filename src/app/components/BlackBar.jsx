import React from 'react'
import Image from 'next/image'
import star from '../assets/sparkle.png'
const services = [
    {id:1 , name: "WEB DESIGN", img: star},
    {id:2 , name: "APP DESIGN", img: star},
    {id:3 , name: "DEVELOPMENT", img: star},
    {id:4 , name: "WEB FLOW", img: star},
    {id:4 , name: "BRANDING", img: star},
]
const BlackBar = () => {
  return (
    <div className='bg-black flex justify-between p-2'>
        {
            services.map((service, index) => (
                <span key={index} className='font-bold text-white flex items-center'> <Image src={service.img} alt='star' className='mr-2'/> {service.name}</span>
            ))
        }
    </div>
  )
}

export default BlackBar