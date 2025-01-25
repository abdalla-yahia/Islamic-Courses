'use client'
import { Chapter } from '@/Interfaces/InterFaces'
import AudioPlayer from '@/Utils/AudioPlayer'
import { useState } from 'react'
export default function BookSoundPage({Book}:{Book:Chapter}) {
    const [SahapyName,SetSahapyName] = useState<null|string>(null)
    const [type,SetType] = useState<null|string>(null)
    const [Search,SetSearch] = useState<null|string>(null)
    const [ID,SetID] = useState<number>(0)
    const [audioUrl,setAudioUrl] = useState<undefined|string>(undefined)
    const [play,setplay] = useState(false)
        
    const SORT: keyof typeof Book.data[0] = Book?.sort as keyof typeof Book.data[0]
  return (
    <>
    <div className='w-full flex justify-center items-center'>
    <input onChange={(e)=>SetSearch(e.target.value)} type="search" name="" id="" className='w-full lg:w-[80%] rounded outline-none border-none my-2 p-1 text-gray-900' placeholder={`${Book?.search}....`}/>
    </div>
    <div className='flex w-full flex-wrap justify-center items-start mt-3 h-screen overflow-y-scroll scrollbar-hide'>
    {
        (Search === undefined || Search === null ) ?
        
        (Book?.data?.sort((a, b) =>a[SORT] > b[SORT] ? 1 : -1).map((sound) => {
            return (
                <div title={`${sound.name}`} style={{backgroundColor:`${ID === sound.id ?'#006':''}`,color:`${ID === sound.id ?'white':''}`}} onClick={()=>{setAudioUrl(`${Book?.url}/${sound.url}`);SetType(Book?.type);setplay(true);SetID(sound.id as number);SetSahapyName(sound.name)}} key={sound.id} className={`cursor-pointer line-clamp-1 w-full md:w-1/3 lg:w-1/4 text-end text-lg p-2 hover:bg-blue-900 hover:text-white bg-slate-400 rounded m-2 text-blue-950`}>
                    {   Book?.id === 3?
                        <h1  className='line-clamp-1'>{`( ${sound.id} ) - ${sound.name}`}</h1>:
                        <h1  className='line-clamp-1'>{sound.name}</h1>
                    }
                    </div>
                    )
                    })
                )
                    :
                    (
                        Book?.data?.filter(item=>item.name.includes(Search)).sort((a, b) =>a[SORT] > b[SORT] ? 1 : -1).map((sound) => {
                            return (
                                <div title={`${sound.name}`} style={{backgroundColor:`${ID === sound.id ?'#006':''}`,color:`${ID === sound.id ?'white':''}`}} onClick={()=>{setAudioUrl(`${Book?.url}/${sound.url}`);SetType(Book?.type);setplay(true);SetID(sound.id as number);SetSahapyName(sound.name)}} key={sound.id} className={`cursor-pointer w-full md:w-1/3 lg:w-1/4 text-end text-lg p-2 hover:bg-blue-900 hover:text-white bg-slate-400 rounded m-2 text-blue-950`}>
                                    {   Book?.id === 3?
                                        <h1 className='line-clamp-1'>{`( ${sound.id} ) - ${sound.name}`}</h1>:
                                        <h1 className='line-clamp-1'>{sound.name}</h1>
                                    }
                                    </div>
                                    )
                        })
                    )
    }
    </div>
        {/* Player Audio Box */}
        <AudioPlayer Book={Book} audioUrl={audioUrl ?? ''} setAudioUrl={setAudioUrl} play={play} setplay={setplay} ID={ID} SetID={SetID} type={type ?? ''} SahapyName={SahapyName ?? ''} SetSahapyName={SetSahapyName} />
    </>
  )
}
