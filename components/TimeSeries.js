import {useState,React} from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function TimeSeries({data,symbol}) {
    const [timeline,setTimeline] = useState(data.five_years)
    console.log(timeline);
    const time_ago = timeline[timeline.length - 1][0]
    var options = {
        series: [{
        data: timeline
      }],
        chart: {
        id: 'area-datetime',
        type: 'area',
        height: 400,
        foreColor: "#ccc",
        zoom: {
          autoScaleYaxis: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 3,
        dashArray: 0,      
    },    
      title: {
          text : symbol + ' Price',
          align: 'left',
          offsetX: 0,
          style: {
            fontSize:  '22px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  'white'
          },
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      yaxis: {
        title:{
            text: 'Price in USD',
            fontSize: '16px',
            colors: ['#fff'],

        },
      },
      xaxis: {
        type: 'datetime',
        min: time_ago,
        tickAmount: 100,
        labels: {
            show: true,
            format: 'dd/MM',
        },
        title:{
            text: 'Date',
            fontSize: '50px',
            colors: ['#fff'],
        },
        
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy h:mm TT'
        },
        theme: 'dark'
      },
      grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0
        }
      },
      colors: ["#00BAEC"],


    };

  return (
    <div className='w-full flex justify-start'>
        <div className='w-full lg:w-3/4 bg-sidebar p-3 rounded-lg relative h-full'>
            <Chart options={options} series={options.series} height={400}/>
            <div className='absolute top-2 w-5/6 flex justify-end'>
                <div className='bg-timeline rounded-lg text-sm'>
                    <button className='px-6 py-2 text-sm text-white' onClick={() => setTimeline(data.five_years)}>5y</button>
                    <button className='px-6 py-2 text-sm text-white' onClick={() => setTimeline(data.three_years)}>3y</button>
                    <button className='px-6 py-2 text-sm text-white' onClick={() => setTimeline(data.one_month)}>1m</button>
                    <button className='px-6 py-2 text-sm text-white' onClick={() => setTimeline(data.one_day)}>1d</button>
                </div>

            </div>
        </div>

    </div>

  )
}
