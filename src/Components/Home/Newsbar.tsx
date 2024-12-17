import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import style from './style.module.css';
import { useEffect } from 'react';
import { fetchNews } from '@/lib/Actions/NewsActions';
import { News } from '@prisma/client';

export default function Newsbar() {
  const {AllNews} = useAppSelector(state=>state.news) as unknown as {AllNews:{News:News[]}}
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchNews())
  },[dispatch])

  return (
    <>
   {AllNews?.News?.length > 0 && <div className='w-[100%] relative left-[6%] h-9 flex overflow-hidden'>
      <span className='bg-red-600 text-white absolute h-full z-40 right-[8%] px-2 text-center flex justify-center items-center top-0'>عاجل</span>
    <div className={`overflow-hidden animate w-[130%] flex justify-center items-start text-gray-100 h-9 bg-fuchsia-900 p-2`}>
    <p className={`${style.newsbar}`}>
      {
        AllNews?.News?.length > 0 && AllNews?.News?.map(e=>`${e?.content}  . `).join(' ')
      }
      </p>
    </div>
    </div>}
    </>
  )
}
