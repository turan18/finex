import { useRouter } from 'next/router';
import {useEffect,React} from 'react'
import useUser from '../../hooks/useUser';
import CryptoService from '../../services/CryptoService';
import StockService from '../../services/StockService';



export default function dashboard(props) {
    
    useEffect(() => {
        console.log(props.crpytocurrencies);
        console.log(props.stocks);

    },[])

    const {user,logout} = useUser()

    function handleLogout(){
        logout() 
    }
    return (
        <div>
            <h1>Hello, {user.username}</h1>
            <button className='p-2 bg-red-600 text-white' onClick={handleLogout}>Logout</button>
        </div> 
    )
}


export async function getServerSideProps(context) {
    const crpytocurrencies = await CryptoService.getTopFiveCrypto()
    const stocks = await StockService.getTopFiveStock()
    return {
      props: {
        protected: true,
        crpytocurrencies,
        stocks
      }
    };
}
