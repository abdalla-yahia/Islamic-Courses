/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client'
import { useEffect, useState } from "react"
import * as icon from '@/Components/Icons/icons'
import Image from "next/image";
import style from './style.module.css'
import SelectQarea from "./SelectQarea";
import Data from './Data/Quran-hafs.json';
import Type from './Data/Quran.json';
import VolumeSpans from "./VolumeSpans";
import { Datainterface } from "@/Interfaces/InterFaces";

export default function NafMoshaf({NameSoras,SoraNumber,setSoraNumber,setShaikhSound,setAyaNumber,audioRef,soraData}:
    {
        NameSoras: string[],
        SoraNumber:number,
        setSoraNumber: React.Dispatch<React.SetStateAction<number>>,
        setShaikhSound: React.Dispatch<React.SetStateAction<string>>,
        setAyaNumber: React.Dispatch<React.SetStateAction<number>>,
        audioRef: { current: {muted:boolean|undefined,paused?:boolean|undefined,volume:number,play:()=>void,pause:()=>void} },
        soraData: [{sura_name_ar:string}]
    }
) {
    const [search,setSearch] = useState('');
    const [searchToggle,setSearchToggle] = useState(false);
    const [ResultSearch,setResultSearch] = useState<Datainterface[]>([]);
    const [shaikhToggle,setShaikhToggle] = useState(false);
    const [soraToggle,setSoraToggle] = useState(false);
    const [nameShaikh,setNameShaikh] = useState('');
    const [nameSora,setNameSora] = useState('');
    const [TypeSora,setTypeSora] = useState('');
    const [LengthAyat,setLengthAyat] = useState(0);
    const [play,setPlay] = useState(false);
    const [mute,setMute] = useState(false);

    const PlayAudioHandeller = ()=>{
        if(!audioRef?.current.paused){
            audioRef?.current.pause()
            setPlay(false)
            setMute(false)
        }else{
            audioRef?.current.play()
            setPlay(true)
            setMute(true)
        } 
    }  
    document.onkeydown =(e)=>{
        if(e.keyCode === 32  && search == ''  ){
            e.preventDefault();
            PlayAudioHandeller()
            }
        
        } 
useEffect(()=>{
search?.length > 3 as unknown as boolean && setResultSearch(Data?.filter(el=>el.aya_text_emlaey.includes(`${search}`))) 
if(search.length > 0)
    setSearchToggle(true)
},[search])
useEffect(()=>{
    const Elements = document.querySelectorAll('.elementVolume');
    Elements.forEach((el,i)=>{
        el.addEventListener('mouseenter',async()=>{
            //Change Volume Audio
            audioRef.current.volume !== undefined && (audioRef.current.volume = parseInt(i as unknown as string)/10)
                Elements.forEach((el2)=>{
                el2.classList.remove(style.active)
                })
            for(let y =0;y<=i;y++){
                Elements[y].classList.add(style.active)
            }
        })
    })
},[audioRef])
const MuteHandeller =()=>{
    audioRef.current.muted !== undefined && (audioRef.current.muted = true)
    setMute(!mute)
}
const UnMuteHandeller =()=>{
    audioRef.current.muted === true && (audioRef.current.muted = false)
    setMute(!mute)
}
const Equalizer = []
for(let i = 0 ; i < 20 ; i++){
    Equalizer.push(<span style={{marginLeft:'1px'}} className={`${style.audio_play} hidden lg:block md:block`}>
        <span style={{animationDelay:`calc(.3s * ${i})`}} className={`${style.audio_play_before}`}></span>
    </span>)
}
useEffect(() => {
    setNameSora(soraData?.[0]?.sura_name_ar);
  setTypeSora((Type as [{type:string}])[+SoraNumber + 1] ?.type) as unknown as string;
    setLengthAyat(soraData?.length);
}, [soraData, SoraNumber]);
  return (
    <>
      <nav className="text-gray-700 fixed top-0  left-0 z-30 w-full flex justify-between items-end gap-3 bg-blue-950 shadow py-3 px-2">
        {/*Search for Aya */}
        <div className="w-1/6 flex  justify-between items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full overflow-y-scroll scrollbar-hide text-sm rounded px-2 py-2 bg-gray-300"
            type="search"
            placeholder="بحث عن ايه او كلمه ..."
          />
          {/*Results Of Search */}
          {ResultSearch.length > 0 && searchToggle && (
            <div className="w-full overflow-y-scroll scrollbar-hide flex flex-col pt-5 absolute max-h-[400px] top-[100%] left-0 backdrop:filter(0,0,0,.5) bg-slate-500 text-white">
              {ResultSearch.map((e, i) => {
                return (
                  <span
                    onClick={() => {
                      setAyaNumber(e.aya_no);
                      setSoraNumber(e.sura_no);
                      setSearchToggle(false);
                      setSearch("");
                    }}
                    key={i}
                    className=" w-full  flex justify-start text-end items-center my-2 p-2"
                  >
                    <span
                      style={{ left: "15px", top: "10px" }}
                      className=" absolute   text-blue-700"
                    >
                      عدد النتائج =
                      <span className="text-red-800">
                        {ResultSearch?.length}
                      </span>
                    </span>
                    <span
                      style={{
                        left: "50%",
                        top: "10px",
                        textShadow: "1px 0px 0px #1b8cd8",
                      }}
                      className=" absolute top-0 text-blue-800 text-2xl "
                    >
                      نتائج البحث
                    </span>
                    <span
                      onClick={() => {
                        setSearchToggle(false);
                        setSearch("");
                      }}
                      style={{ right: "15px", top: "10px" }}
                      className=" absolute top-0 cursor-pointer text-red-800"
                    >
                      {" "}
                      غلق
                      <span className="text-red-700">X</span>
                    </span>
                    <span className="text-red-700 ">{`(${i + 1}) `}</span>
                    <span className="hover:bg-blue-400 p-2 text-2xl text-gray-800 leading-loose cursor-pointer">
                      {e?.aya_text?.slice(0, -2)}
                    </span>
                    <span className="text-white">{`(${e?.sura_name_ar}) `}</span>
                  </span>
                );
              })}
            </div>
          )}
        </div>
        {/*Select Name Of Shaikh */}
        <div
          onClick={() => {
            setShaikhToggle(!shaikhToggle);
          }}
          className=" w-1/6 relative flex justify-evenly cursor-pointer text-sm rounded px-2 py-1 bg-gray-300"
        >
          {" "}
          {nameShaikh || "اختر الشيخ"}
          <icon.MdKeyboardDoubleArrowDown className=" self-end" />
          {shaikhToggle && (
            <SelectQarea
              setShaikhToggle={setShaikhToggle}
              setNameShaikh={setNameShaikh}
              setShaikhSound={
                setShaikhSound as unknown as React.Dispatch<
                  React.SetStateAction<string | null>
                >
              }
              setMute={setMute}
              setPlay={setPlay}
            />
          )}
          <Image
            src={
              nameShaikh
                ? `/favicon/${nameShaikh.replaceAll(" ", "-")}.png`
                : "/favicon/33.png"
            }
            width={30}
            height={40}
            className="rounded"
            alt="shaik-pic"
          />
        </div>
        {/*Play And Stop Sound */}
        <div className="w-1/6 flex justify-between items-center">
          <button
            disabled={!nameShaikh ? true : false}
            onClick={() => {
              PlayAudioHandeller();
              setMute(!mute);
            }}
            className={`${
              play
                ? "bg-green-500 hover:bg-green-800"
                : "bg-blue-500 hover:bg-blue-800"
            } rounded cursor-pointer px-2 py-1 text-center outline-none border-none text-white`}
          >
            {play ? "توقف" : "تشغيل"}
          </button>
          {mute && (
            <div className="flex items-center justify-end  w-full h-full">
              {Equalizer}
            </div>
          )}
        </div>
        {/*Name Of Soara */}
        <div className="w-1/6 flex justify-between items-center">
          <h3 className="text-white ">{`سورة ${nameSora}`}</h3>
          <h3 className="text-white ">{`التنزيل ${TypeSora}`}</h3>
          <h3 className="text-white ">{`أياتها ${LengthAyat}`}</h3>
        </div>
        {/*Volume Spans  */}
        <VolumeSpans
          mute={mute}
          setMute={setMute}
          MuteHandeller={MuteHandeller}
          UnMuteHandeller={UnMuteHandeller}
        />
        {/*Select Sora*/}
        <div
          onClick={() => setSoraToggle(!soraToggle)}
          className=" w-1/6 relative flex justify-evenly cursor-pointer text-sm rounded px-2 py-2 bg-gray-300"
        >
          {" "}
          {nameSora || "اختر السورة"}
          <icon.MdKeyboardDoubleArrowDown className=" self-end" />
          {soraToggle && (
            <div className="flex flex-col justify-start items-start px-2 absolute top-[100%] z-40 left-0 w-[80%] max-h-[400px] overflow-y-scroll scrollbar-hide bg-gray-600 text-red-500">
              {NameSoras?.length > 0 &&
                NameSoras.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => {
                      setShaikhToggle(false);
                      setNameSora(item);
                      setSoraNumber(index + 1);
                      setAyaNumber(1);
                    }}
                    className="hover:bg-blue-700 hover:text-white px-2 py-1 rounded w-full text-end"
                  >
                    {item}
                  </span>
                ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
