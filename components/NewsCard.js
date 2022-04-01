import React from 'react'

export default function NewsCard({data,height}) {
  function getTimeDiff(){
    const date_now = new Date()
    const date_then = new Date(data.datetime * 1000)
    const hours = Math.floor(Math.abs(date_now - date_then) / 36e5);
    return hours
  }
  return (
    <div className={`${height} ? h-full : ''}w-2/3 lg:w-1/5 flex-col border py-5 px-3 border-gray-900 shadow-md bg-sidebar rounded-lg gap-y-3 relative hover:bg-sidebar_hover hover:cursor-pointer`} onClick={() => window.open(data.url,'_blank')}>
            <div className='h-1/3 flex justify-center'>
                <img src={data.image} className={'w-1/2'}/>
            </div>
            <div className='h-2/3 flex flex-col pt-3'>
                <p className='text-md text-center font-bold text-gray-200'>{data.headline}</p>
                <p className='text-sm pt-2 text-center text-gray-400 pb-8'>{data.summary}</p>
            </div>
            <div className='absolute bottom-2 right-2 text-sm text-gray-300'>
                {getTimeDiff()} hour(s) ago
            </div>
    </div>
  )
}
