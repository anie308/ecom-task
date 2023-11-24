import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='p-[20px] lg:p-[20px_50px] flex flex-col lg:flex-row items-start lg:items-center justify-between'>
        <p className='font-notosans text-[12px] text-secondary'>Copyright © 2023 Corporate UI Design System by Creative Tim.</p>
        <div className='flex flex-col lg:flex-row items-start lg:items-center space-y-[10px] lg:space-y-0 lg:space-x-[28px] mt-[20px] lg:mt-0'>
            <Link className='font-notosans text-[12px] text-secondary ' href='/'>Creative Tim</Link>
            <Link className='font-notosans text-[12px] text-secondary ' href='/'>About Us</Link>
            <Link className='font-notosans text-[12px] text-secondary ' href='/'>Blog</Link>
            <Link className='font-notosans text-[12px] text-secondary ' href='/'>License</Link>
        </div>
    </div>
  )
}

export default Footer