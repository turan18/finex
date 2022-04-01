import React from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function MiniCrypto({currency}) {
  const temp = currency.sparkline.map(n => parseFloat(n))
  const y_min = temp.sort((a,b) => b-a).pop()
  const colors_set = currency.change < 0 ? ['#F44336', '#E91E63', '#9C27B0'] : ['#4CAF50','#00E396','#90EE7E'] 
  const change = currency.change > 0 ? '+' + currency.change + '%' : currency.change + '%' 
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  })

  const sparkline_data = {
    seriesSpark3: [{
        data: currency.sparkline.map(n => parseFloat(n).toFixed(4))
      }],
      optionsSpark3: {
        chart: {
          type: 'area',
          height: 140,
          sparkline: {
            enabled: true
          },
        },
        colors: colors_set,
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        tooltip: {
          theme: 'dark'
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
        <div className='bg-sidebar px-3 py-4 rounded-xl relative'>
            <Chart options={sparkline_data.optionsSpark3} series={sparkline_data.seriesSpark3} type="area" height={140} />
            <p className={`absolute top-3 right-2 ${currency.change > 0 ? 'text-spark_up' : 'text-spark_down'}`}>
              {change}
            </p>
        </div>
        
        )
}
