'use client'
import * as icon from '@/Components/Icons/icons'
import { LegacyRef, useRef, useState } from 'react'
import Sahaba from './sahabaDB.json'

export default function SahabaBage() {
    const [audioUrl,setAudioUrl] = useState('')
    const [play,setplay] = useState(false)
    const [mute,SetMute] = useState(false)
    const [ID,SetID] = useState<null|number>(null)
    const [SahapyName,SetSahapyName] = useState<null|string>(null)
    const [Search,SetSearch] = useState<null|string>(null)
  const refAudio = useRef<HTMLAudioElement>() as unknown as { current: {muted:boolean|undefined,volume:number,play:()=>void,pause:()=>void,load:()=>void} }


      const selectMute = () =>{
          if (refAudio.current.muted !== undefined) {
              refAudio.current.muted = true;
          }
          SetMute(!mute)
      }
      const selectUnMute = () =>{
          if (refAudio.current.muted === true) {
              refAudio.current.muted = false;
          }
          SetMute(!mute)
      }
  return (
    <>
    <div className='w-full flex justify-center items-center'>
    <input onChange={(e)=>SetSearch(e.target.value)} type="search" name="" id="" className='w-[80%] rounded outline-none border-none my-2 p-1 text-gray-900' placeholder='بحث عن صحابي ...'/>
    </div>
    <div className='flex w-full flex-wrap justify-center items-start mt-3 h-screen overflow-y-scroll scrollbar-hide'>
    {
        (Search === undefined || Search === null) ?
        Sahaba.sort((a, b) =>a.name.localeCompare(b.name)).map((sahaba) => {
            return (
                <div style={{backgroundColor:`${ID === sahaba.id ?'#006':''}`,color:`${ID === sahaba.id ?'white':''}`}} onClick={()=>{setAudioUrl(sahaba.url);setplay(true);SetID(sahaba.id as number);SetSahapyName(sahaba.name)}} key={sahaba.id} className={`cursor-pointer w-full md:w-1/3 lg:w-1/4 text-center text-lg p-2 hover:bg-blue-900 hover:text-white bg-slate-400 rounded m-2 text-blue-950`}>
                    <h1>{sahaba.name}</h1>
                    </div>
                    )
                    })
                    :
                    (
                        Sahaba.filter(item=>item.name.startsWith(Search)).sort((a, b) =>a.name.localeCompare(b.name)).map((sahaba) => {
                            return (
                                <div style={{backgroundColor:`${ID === sahaba.id ?'#006':''}`,color:`${ID === sahaba.id ?'white':''}`}} onClick={()=>{setAudioUrl(sahaba.url);setplay(true);SetID(sahaba.id as number);SetSahapyName(sahaba.name)}} key={sahaba.id} className={`cursor-pointer w-full md:w-1/3 lg:w-1/4 text-center text-lg p-2 hover:bg-blue-900 hover:text-white bg-slate-400 rounded m-2 text-blue-950`}>
                                    <h1>{sahaba.name}</h1>
                                    </div>
                                    )
                        })
                    )
    }
    </div>
        {/*Player Audio Box */}
        
        <div className="fixed bottom-2 left-0 w-full flex justify-evenly items-center rounded h-9 px-2 py-1 bg-blue-950 shadow">
            {ID && ('ّالصَحَابِيُ :' +' ' + SahapyName + ' ' + 'رَضْيَّ اللَّهُ عَنْهُ')}
            <icon.VscUnmute onClick={()=>{selectMute();setplay(false)}} className={`${mute ? 'hidden':'block'} cursor-pointer hover:text-blue-600 shadow `}/>
            <icon.VscMute onClick={()=>{selectUnMute();setplay(true)}} className={`${!mute ? 'hidden':'block  text-gray-600'} cursor-pointer hover:text-blue-600 shadow `}/>
            <icon.FaPause onClick={()=>{refAudio?.current?.pause();setplay(false)}} className={`${!play && 'text-blue-600'} cursor-pointer hover:text-blue-600 shadow `}/>
            <icon.FaPlay  onClick={()=>{refAudio?.current?.play();setplay(true)}} className={`${play && 'text-blue-600'} cursor-pointer hover:text-blue-600 shadow `}/>
        </div>
    <audio  ref={refAudio  as unknown as LegacyRef<HTMLAudioElement>} className='hidden' controls autoPlay src={`https://ia601506.us.archive.org/9/items/Sowar.mn.Hayat.Sehaba/${audioUrl}`}></audio>
    </>
  )
}
