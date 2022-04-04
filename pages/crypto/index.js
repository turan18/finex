import CryptoCard from "../../components/CryptoCard";
import Sidebar from "../../components/Sidebar";
import CryptoService from "../../services/CryptoService";

export default function index({cryptocurrencies}) {
  return (
    <div className='w-screen min-h-screen bg-landing bg-no-repeat bg-center bg-fixed bg-cover flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col px-2 py-4 gap-y-6 pt-6'>
        <div>
          <p className="text-gray-200 font-extrabold text-4xl lg:text-left sm:text-center">All Cryptocurrencies</p>
        </div>
        <div class="py-4">
          <div class="w-5/6 border-t-4 border-gray-300"></div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-start gap-x-4 gap-y-4 flex-wrap">
          {cryptocurrencies.map(currency => <CryptoCard data={currency} key={currency.uuid}/>)}
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
  const cryptocurrencies = await CryptoService.getTopTwentyCrypto()
  return {
    props: {
      protected: true,
      cryptocurrencies,
    }
  };
}
