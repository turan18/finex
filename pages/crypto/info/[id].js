import CryptoService from '../../../services/CryptoService'
import Sidebar from '../../../components/Sidebar'
import TimeSeries from '../../../components/TimeSeries'

const Currency = ({data}) => {
  function stripHtml(html)
  {
    return ((html.replace(/(<([^>]+)>)/gi, " ")).replace(/\xA0/g,' ')).replace(/(\r\n|\n|\r)/gm, "");;
  }
  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
  function toCurrency(n){
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    })
    return formatter.format(n)
  }
  const [info,history] = data
  return (
    <div className='w-screen min-h-screen bg-landing bg-no-repeat bg-center bg-fixed bg-cover flex overflow-x-hidden'>
    <Sidebar />
     <div className='flex-1 flex flex-col px-2 py-4 gap-y-6 pt-6'>
        <div className='w-full flex justify-center gap-x-2 text-white text-4xl'>
          <p className='text-3xl font-extrabolg'>{info.name}</p>
          <img src={info.iconUrl} width='50px' height='50px'></img>
        </div>
        <div className='w-full flex justify-center'>
          <TimeSeries data={history} symbol={info.symbol}/>
        </div>
        <div className='flex gap-x-4'>
            <div className='flex flex-col w-1/3'>
                <p className='text-3xl text-white font-bold'>Data</p>
                <div class="py-4">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                <div>
                  <ul className='text-white'>
                    <li>
                      <span className='font-semibold text-lg'>Price :</span> {toCurrency(info.price)}
                    </li>
                    <li>
                      <span className='font-semibold text-lg'>Change :</span> {info.change}%
                    </li>
                    <li>
                      <span className='font-semibold text-lg'>All Time High :</span> {toCurrency(info.allTimeHigh.price)} at {new Date(info.allTimeHigh.timestamp * 1000).toDateString()}
                    </li>
                    <li>
                      <span className='font-semibold text-lg'>Market Cap :</span> {toCurrency(info.marketCap)}
                      </li>
                      <li>
                        <span className='font-semibold text-lg'>24 Hours Volume :</span> {toCurrency(info['24hVolume'])}
                      </li>
                      <li>
                        <span className='font-semibold text-lg'>Number of Market :</span> {info.numberOfMarkets}
                      </li>
                      <li>
                        <span className='font-semibold text-lg'>Number of Market :</span> {info.numberOfMarkets}
                      </li>
                      <li>
                        <span className='font-semibold text-lg'>Number of Exhanges :</span> {info.numberOfExchanges}
                      </li>
                  </ul>
                </div>
            </div>
            <div className='flex flex-col w-2/3'>
            <p className='text-3xl text-white font-bold'>Info</p>
            <div class="py-4">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
              <ul className='text-white flex flex-col'>
                <li>
                  <span className='text-lg font-bold'>Description :</span> 
                  <ul className='pt-3 text-gray-200'>
                    <li className='text-md'>{stripHtml(info.description)}</li>
                  </ul>
                </li>
                <li className='pt-3'>
                <span className='text-lg font-bold '>Links :</span> 
                  <ul className='text-sm flex flex-wrap gap-x-4 flex-1 gap-y-4 pt-3'>

                      {info.links.map(link => <li><span className='font-bold'>{capitalizeFirstLetter(link.type)}</span> <a href={link.url}>{link.url}</a></li>)}
                  </ul>
                </li>
              </ul>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Currency


export async function getServerSideProps(ctx){
  const {id} = ctx.query
  const data = await CryptoService.getCryptoByID(id)
  return {
    props:{
      data
    }
  }
}