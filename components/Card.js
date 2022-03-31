import Link from 'next/link';
import React from 'react'

function getTimeDiff(published){
  const now = new Date()
  const published_date = new Date(published * 1000)
  const hours = Math.floor(Math.abs(now - published_date) / 36e5);
  return hours

}

export default function Card({type,data}) {

  if(type === 'crypto'){
    return (
      <Link href={`/crypto/info/${data.symbol}`}>
        <div className='w-1/5 flex flex-col justify-center items-center h-full hover:cursor-pointer hover:bg-gray-200' key={data.uuid}>
            <p className='font-bold text-lg'>{data.name}</p>
            <img src={data.iconUrl} width='100px' height='100px'></img>
            <div className='flex flex-col flex-1 justify-around'>
                <p>Market Cap: {data.marketCap}</p>
                <p>Price: {data.price}</p>
            </div>
        </div>
      </Link>
 
    )
  }
  else if(type === 'stock'){
    return (
      <div className='w-1/5 flex h-full p-3 hover:bg-gray-200' key={data.ticker}>
          <div className='flex flex-col w-2/3'>
              <p className='font-bold text-lg'>{data.name}</p>
              <p>Market Cap: {data.price}</p>
              <p>Price: {data.market_cap}</p>
              <p>Price: {data.day_high}</p>
          </div>
          <div className='flex flex-col w-1/3'>
              IMAGE
          </div>
      </div>
    )
  }else{
      return (
        <div className='w-1/5 flex flex-col h-full p-3 hover:bg-gray-200' key={data.ticker}>
          <div className='h-1/2 flex gap-x-2'>
              <div className='w-1/2'>
                <p className='font-bold'>{data.headline}</p>
              </div>
              <div className='w-1/2'>
                <img src={data.image}></img>
              </div>
          </div>
          <div className='h-1/2 flex flex-col justify-between'>
            <div>
              <p className='text-sm'>{data.summary}</p>
            </div>
            <div className='flex justify-between'>
              <a href={data.url} target="_blank" className='text-blue-400 underline'>{data.source}</a>
              <p>{getTimeDiff(data.datetime)} hour(s) ago</p>
            </div>
          </div>
        </div>
      )
  }
}
