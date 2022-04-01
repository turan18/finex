import {React} from 'react'
import useUser from '../../hooks/useUser';
import CryptoService from '../../services/CryptoService';
import NewsService from '../../services/NewsService';
import Sidebar from '../../components/Sidebar';
import SparkCrypto from '../../components/SparkCrypto';
import TimeSeries from '../../components/TimeSeries';
import NewsCard from '../../components/NewsCard';

export default function dashboard({cryptocurrencies,stocks,news}) {
    
    const {user,logout} = useUser()

    function handleLogout(){
        logout() 
    }
    const currencies = cryptocurrencies[0]
    const {symbol} = cryptocurrencies[0][0]
    const time_series_data = cryptocurrencies[1]
    console.log(news);

    
    // console.log(currencies);
    return (
        <div className='w-screen min-h-screen bg-landing bg-no-repeat bg-center bg-fixed bg-cover flex overflow-x-hidden'>
            <Sidebar />
            <div className='flex-1 flex flex-col items-center lg:items-start px-2 py-4 gap-y-6 pt-6'>
                <div className='w-full lg:w-92'>
                    <div className='flex gap-x-4 flex-wrap gap-y-4 justify-center lg:justify-start'>
                    {(typeof window !== 'undefined') && currencies.map(currency => <SparkCrypto currency={currency} key={currency.uuid}/>)}
                    </div>
                </div>
                <div className='flex-1 flex flex-col'>
                    <TimeSeries symbol={symbol} data={time_series_data}/>
                    <div className='flex flex-col'>
                    <div className='text-3xl text-white py-2'>
                            <p className='font-bold'>Trending News</p>
                        </div>
                     <div class="py-4">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                       
                        <div className='flex flex-col items-center gap-y-4 lg:flex-row lg:justify-start gap-x-4 w-full '>
                            {news.map(article => <NewsCard data={article} key={article.id} height={true}/>)}
                        </div>
                    </div>

                    
                </div>
            </div>
          
        </div>
        
    )
}


export async function getServerSideProps({req,res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const cryptocurrencies = await CryptoService.getDashboardCrypto()
    const news = await NewsService.getDashboardNews()
    return {
      props: {
        protected: true,
        cryptocurrencies,
        news
      }
    };
}
