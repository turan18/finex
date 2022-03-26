import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-landing bg-no-repeat bg-center bg-fixed bg-cover flex flex-col gap-y-6'>
      <section className='w-full flex justify-center mt-10'>
        <div className='w-3/4 flex'>
          <div className='w-1/2 pt-8 pb-10 px-10 flex flex-col justify-around'>
            <div className='flex flex-col gap-y-8'>
              <p className='text-5xl font-extrabold text-white'>Welcome to <span className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-white'>Finex!</span></p>
              <p className='text-xl text-gray-400'>Enter the world of crpyto and finance. Be one step ahead by visualizing any changes in the market!</p>
              <p className='text-lg text-gray-400'>Get relevant news on <span className='text-gray-100 font-semibold'>crpyto</span> currencies and stocks.</p>
              <p className='text-lg text-gray-400'>Visualize changes in the market with <span className='text-gray-100 font-semibold'>intuitive and accurate charts.</span></p>
            </div>
            <div className='pt-11'>
              <div className='flex w-1/2 lg:1/4 gap-x-4'>
                <Link href={'/signup'}>
                  <a className='w-2/3 p-2 text-white bg-blue-800 rounded-md text-lg text-center hover:cursor-pointer'>Sign Up</a>
                </Link>
                <Link href={'/login'}>
                  <a className='w-2/3 p-2 text-white bg-blue-800 rounded-md text-lg text-center hover:cursor-pointer'>Login</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex justify-end items-center'>
            <img src='images/landing_demo_2.svg'></img>
          </div>
        
        </div>
       

      </section>

      <section className='w-full flex justify-center mt-8 flex-1 pt-11'>
        <div className='w-5/6 flex p-4'>
            <div className='w-full flex gap-x-3 text-white'>


                <div className='w-1/3 flex flex-col'>
                  <div className='flex flex-col items-center gap-y-8'>
                    <div>
                        <img src='images/bitcoin.png' width={'100px'} height={'100px'}></img>
                      </div>
                      <div>
                        <p className='font-semibold	'>Learn more about <span className='font-extrabold'>crpytocurrencies.</span></p> 
                    </div>
                    <div className='w-3/4 justify-center'>
                      <p className='leading-loose text-center text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>           
                  </div>
                </div>
            

                <div className='w-1/3 flex flex-col'>
                  <div className='flex flex-col items-center gap-y-8'>
                    <div>
                        <img src='images/news.png' width={'100px'} height={'100px'}></img>
                      </div>
                      <div>
                        <p className='font-semibold	'>Recieve relevant <span className='font-extrabold'>news.</span></p> 
                    </div>
                    <div className='w-3/4 justify-center'>
                      <p className='leading-loose text-center text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>           
                  </div>
                </div>

                <div className='w-1/3 flex flex-col'>
                  <div className='flex flex-col items-center gap-y-8'>
                    <div>
                        <img src='images/chart.png' width={'100px'} height={'100px'}></img>
                      </div>
                      <div>
                        <p className='font-semibold	'><span className='font-extrabold'>Visualize</span> your investments.</p> 
                    </div>
                    <div className='w-3/4 justify-center'>
                      <p className='leading-loose text-center text-gray-400' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>           
                  </div>
                </div>

            </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      protected: false
    }
  };
}