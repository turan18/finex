import React from 'react'
import NewsCard from '../../components/NewsCard'
import Sidebar from '../../components/Sidebar'
import NewsService from '../../services/NewsService'
export default function index({news}) {
  return (
    <div className='w-screen min-h-screen bg-landing bg-no-repeat bg-center bg-fixed bg-cover flex overflow-x-hidden'>
    <Sidebar />
    <div className='flex-1 flex flex-col px-2 py-4 gap-y-6 pt-6'>
      <div>
        <p className="text-gray-200 font-extrabold text-4xl lg:text-left sm:text-center">All News</p>
      </div>
      <div class="py-4">
          <div class="w-5/6 border-t-4 border-gray-300"></div>
        </div>
      
        <div className='flex flex-wrap h-1/5 gap-x-4 gap-y-4'>
          {news.map(article => <NewsCard data={article} key={article.id} height={false}/>)}
        </div>
    </div>
  </div>
  )
}

export async function getServerSideProps(){
  const news = await NewsService.getAllNews()
  return {
    props: {
      protected: true,
      news
    }
  };
}