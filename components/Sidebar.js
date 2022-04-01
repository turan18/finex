import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='min-h-screen h-auto w-14 bg-sidebar flex flex-col relative overflow-x-hidden'>
        <div className='sticky top-2 left-8 '>
            <Link href={'/'}>
                <p className='text-4xl text-white hover:cursor-pointer'>Finex</p>
            </Link>
        </div>  
        <div className='top-12 sticky px-2 text-white flex flex-col gap-y-6 '>
            <Link href={'/dashboard'}>
                <div className='py-4 px-2 hover:bg-sidebar_hover  hover:cursor-pointer rounded-lg'>
                    Dashboard
                </div>
            </Link>
            <Link href={'/crypto'}>
                <div className='py-4 px-2 hover:bg-sidebar_hover  hover:cursor-pointer rounded-lg'>
                    Crypto
                </div>
            </Link>
            <Link href={'/stock'}>
                <div className='py-4 px-2 hover:bg-sidebar_hover  hover:cursor-pointer rounded-lg'>
                    Stock
                </div>
            </Link>
            <Link href={'/news'}>
                <div className='py-4 px-2 hover:bg-sidebar_hover hover:cursor-pointer rounded-lg'>
                    Trending News
                </div>
            </Link>
        </div>
     
    </div>
  )
}
