import React from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function MiniCrypto({currency}) {
  const temp = currency.sparkline.map(n => parseFloat(n))
  const y_min = temp.sort((a,b) => b-a).pop()

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  const sparkline_data = {
    seriesSpark3: [{
        data: currency.sparkline.map(n => parseFloat(n).toFixed(4))
      }],
      optionsSpark3: {
        chart: {
          type: 'area',
          height: 130,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          },
        },
        yaxis: {
          show: false,
          min: y_min
        },
        title: {
          text: currency.symbol,
          offsetX: 0,
          style: {
            fontSize: '24px',
            color: 'white'
          }
        },
        subtitle: {
          text: formatter.format(parseFloat(currency.price)),
          offsetX: 0,
          style: {
            fontSize: '14px',
            color : 'white'
          }
        }
      }
  }
    return (
        <div className='bg-sidebar px-3 py-4 rounded-xl'>
            <Chart options={sparkline_data.optionsSpark3} series={sparkline_data.seriesSpark3} type="area" height={130} />
        </div>
        
        )
}
