import * as icon from '@/Components/Icons/icons'
import style from './style.module.css'

export default function VolumeSpans({mute,setMute,MuteHandeller,UnMuteHandeller}:
  {
    mute:boolean,
    setMute:React.Dispatch<React.SetStateAction<boolean>>,
    MuteHandeller:()=>void,
    UnMuteHandeller:()=>void,
  }
) {
  return (
    <>
    <div  className="w-1/6 flex justify-center gap-2 items-end">
    
            <div  aria-disabled={mute?true:false} className="flex w-fit justify-center min-h-full flex-row-reverse items-end">
            <div  style={{height:`5px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`10px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`15px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`20px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`25px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`30px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`35px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`40px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`45px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            <div  style={{height:`50px`,width:'3px',marginLeft:'1px'}} className={`elementVolume ${mute && style.active} bg-gray-700 rounded block`}></div>
            </div>
            {mute ? <icon.VscUnmute onClick={()=>{setMute(!mute);MuteHandeller()}} className={`${mute ? 'text-green-500' :' '}  cursor-pointer`}/>:
            <icon.VscMute  onClick={()=>{setMute(!mute);UnMuteHandeller()}} className={`${!mute ? 'text-gray-500' :'text-green-500 '}  cursor-pointer`}/>}
        </div>
    </>
  )
}
