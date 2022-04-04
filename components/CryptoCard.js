import Link from 'next/link';
import React from 'react'

export default function CryptoCard({data}) {
  function toCurrency(n){
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    })
    return formatter.format(n)
  }
    return (
      <Link href={`/crypto/info/${data.uuid}`}>
        <div className="flex justify-center hover:cursor-pointer lg:w-1/5 w-56">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg text-gray-100 bg-sidebar hover:bg-sidebar_hover shadow-lg p-2 w-full">
              <img className="w-1/4" src={data.iconUrl} alt="" />
              <div className="px-6 py-3 flex flex-col justify-start">
                <h5 className="text-gray-300 text-2xl font-bold mb-2">{data.name}</h5>
                <ul className='text-sm'>
                  <li>
                    <span className='text-gray-400 font-semibold'>Symbol : </span>{data.symbol}
                  </li>
                  <li>
                    <span className='text-gray-400 font-semibold'>Price :</span> {toCurrency(data.price)}
                  </li>
                  <li>
                    <span className='text-gray-400 font-semibold'>Market Cap :</span> {toCurrency(data.marketCap)}
                  </li>
                  <li>
                    <span className='text-gray-400 font-semibold'>24 Hour Volume :</span> {toCurrency(data['24hVolume'])}
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </Link>
    )
}
