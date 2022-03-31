import {React} from 'react'
import useUser from '../../hooks/useUser';
import CryptoService from '../../services/CryptoService';
import NewsService from '../../services/NewsService';
import Sidebar from '../../components/Sidebar';
import MiniCrypto from '../../components/MiniCrypto';

export default function dashboard({cryptocurrencies,stocks,news}) {
    
    const {user,logout} = useUser()

    function handleLogout(){
        logout() 
    }
    const currencies = cryptocurrencies[0]
    const {symbol} = cryptocurrencies[0][0]
    const time_series_data = cryptocurrencies[1]
    console.log(currencies);
    return (
        <div className='w-screen h-screen bg-landing bg-no-repeat bg-center bg-fixed bg-cover flex'>
            <Sidebar />
            <div className='flex-1 flex flex-col'>
                <div className='flex w-full justify-center p-4'>
                    <div className='flex gap-x-4 flex-wrap gap-y-4'>
                    {(typeof window !== 'undefined') && currencies.map(currency => <MiniCrypto currency={currency} key={currency.uuid}/>)}
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
    // const stocks = await StockService.getDashboardStocks()
    const news = await NewsService.getDashboardNews()
    return {
      props: {
        protected: true,
        cryptocurrencies,
        // stocks,
        news
      }
    };
}
