'use client'
import { useEffect, useMemo, useState } from "react"
import * as icon from '@/Components/Icons/icons'
import Image from "next/image";
import style from './style.module.css'
import SelectQarea from "./SelectQarea";
import Data from './Data/Quran-hafs.json';
import Type from './Data/Quran.json';
import VolumeSpans from "./VolumeSpans";
import QareeAndSrs from './Data/QareeAndSrs.json';
import { Datainterface } from "@/Interfaces/InterFaces";
import {useRouter, useSearchParams} from 'next/navigation';

export default function NafMoshaf({ NameSoras, SoraNumber, setSoraNumber, setShaikhSound, setAyaNumber, audioRef1, audioRef2, soraData }:
  {
    NameSoras: string[],
    SoraNumber: number,
    setSoraNumber: React.Dispatch<React.SetStateAction<number>>,
    setShaikhSound: React.Dispatch<React.SetStateAction<string>>,
    setAyaNumber: React.Dispatch<React.SetStateAction<number>>,
    audioRef1: { current: { muted: boolean | undefined, paused?: boolean | undefined, volume: number, play: () => void, pause: () => void } },
    audioRef2: { current: { muted: boolean | undefined, paused?: boolean | undefined, volume: number, play: () => void, pause: () => void } },
    soraData: [{ sura_name_ar: string }]
  }
) {
  const [search, setSearch] = useState('');
  const [searchToggle, setSearchToggle] = useState(false);
  const [ResultSearch, setResultSearch] = useState<Datainterface[]>([]);
  const [shaikhToggle, setShaikhToggle] = useState(false);
  const [soraToggle, setSoraToggle] = useState(false);
  const [nameShaikh, setNameShaikh] = useState('');
  const [nameSora, setNameSora] = useState('');
  const [TypeSora, setTypeSora] = useState('');
  const [LengthAyat, setLengthAyat] = useState(0);
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [Equalizer, setEqualizer] = useState<JSX.Element[]>([]);


  const router = useRouter();
  const searchParams = useSearchParams();
  // Set Url params 
  const ChangeUrlWithoutReload =(qaree:string, sora:string)=>{
    router.replace(`/moshaf?السورة=${encodeURIComponent(sora)}&القارىء=${encodeURIComponent(qaree)}`);
  }
  
  // Set Sora Number From Params
  useMemo(() => {
    const qareeFromUrl = searchParams.get('القارىء');
    const soraFromUrl = searchParams.get('السورة');
    if (qareeFromUrl) {
      setNameShaikh(decodeURIComponent(qareeFromUrl));
      const shaikhFound = QareeAndSrs.find((item) => item.qaree.trim() == decodeURIComponent(qareeFromUrl));
      if(shaikhFound) {
        setShaikhSound(shaikhFound.title);
      }
        setPlay(true);

    }
    if (soraFromUrl) {
      const soraIndex = NameSoras.indexOf(decodeURIComponent(soraFromUrl));
      if (soraIndex !== -1) {
        setSoraNumber(soraIndex + 1);
        setNameSora(soraFromUrl);
      }
    }
  },[nameShaikh, nameSora, NameSoras, searchParams,SoraNumber]);
  // Play Audio Handeller
  const PlayAudioHandeller = () => {
    if (!audioRef1?.current.paused || !audioRef2?.current.paused) {
      audioRef1?.current.pause()
      audioRef2?.current.pause()
      setPlay(false)
      setMute(false)
    } else {
      audioRef1?.current.play()
      setPlay(true)
      setMute(true)
    }
  }
  // Search Handeller
  useEffect(() => {
    if (search?.length > 3) {
      setResultSearch(Data?.filter(el => el.aya_text_emlaey.includes(`${search}`)));
    }
    if (search.length > 0)
      setSearchToggle(true)
  }, [search])
  // Mute Handeller 
  const MuteHandeller = () => {
    if (audioRef1.current.muted !== undefined && audioRef1.current.muted !== false) {
      audioRef1.current.muted = true;
      audioRef2.current.muted = true;
    }
    setMute(!mute)
  }
  // UnMute Handeller
  const UnMuteHandeller = () => {
    if (audioRef1.current.muted === true && audioRef2.current.muted === true) {
      audioRef1.current.muted = false;
      audioRef2.current.muted = false;
    }
    setMute(!mute)
  }
  // Set Equalizer 
  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      setEqualizer(prev => [
        ...prev,
        <span
          key={i}
          style={{ marginLeft: "1px" }}
          className={`${style.audio_play} hidden lg:block md:block`}
        >
          <span
            style={{ animationDelay: `calc(.3s * ${i})` }}
            className={`${style.audio_play_before}`}
          ></span>
        </span>
      ]);
    }

  }, []);
  // set Sora Information
  useEffect(() => {
    setNameSora(soraData?.[0]?.sura_name_ar);
    setTypeSora((Type as [{ type: string }])[+SoraNumber + 1]?.type) as unknown as string;
    setLengthAyat(soraData?.length);
  }, [soraData, SoraNumber]);
  // set Shaikh Sound
    useEffect(() => {
    document.title = `سورة ${nameSora} بصوت القارىء ${nameShaikh}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `سورة ${nameSora} للقارىء الشيخ ${nameShaikh} عدد أياتها ${LengthAyat} أية - التنزيل ${TypeSora}`);
    }
  }, [nameSora, nameShaikh, LengthAyat, TypeSora]);
  // Close Select sora Toggle on Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.selectSora') && soraToggle == true) {
        setSoraToggle(false);
        setShaikhToggle(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [soraToggle]);
    // Close Select Shaikh Toggle on Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.selectShaikh') && shaikhToggle == true) {
        setSoraToggle(false);
        setShaikhToggle(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [shaikhToggle]);
  return (
    <>
      <nav className="text-gray-700 fixed top-0  left-0 z-30 w-full flex-wrap md:flex-nowrap lg:flex-nowrap flex justify-evenly md:justify-between lg:justify-between items-end gap-1 bg-second_background_color shadow py-3 px-2">
        {/*Search for Aya */}
        <div className="w-1/3 md:w-[15%] lg:w-[15%]  flex  justify-between items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full overflow-y-scroll scrollbar-hide text-sm rounded px-2 py-2 bg-gray-300"
            type="search"
            placeholder="بحث عن ايه او كلمه ..."
          />
          {/*Results Of Search */}
          {ResultSearch.length > 0 && searchToggle && (
            <div className="w-full overflow-y-scroll scrollbar-hide flex flex-col pt-5 absolute max-h-[400px] top-[100%] left-0 backdrop:filter(0,0,0,.5) bg-slate-500 text-text_color">
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
                    <span className="text-text_color">{`(${e?.sura_name_ar}) `}</span>
                  </span>
                );
              })}
            </div>
          )}
        </div>
        {/*Select Name Of Shaikh */}
        <div
          className="selectShaikh w-1/3 md:w-[15%] lg:w-[15%]  relative flex justify-evenly cursor-pointer text-sm rounded px-2 py-1 bg-gray-300"
          onClick={() => setShaikhToggle(!shaikhToggle)}
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
              ChangeUrlWithoutReload={ChangeUrlWithoutReload}
              nameSora={nameSora}
              setMute={setMute}
              setPlay={setPlay}
            />
          )}
          <Image loading="lazy"
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
        <div className="w-1/3 md:w-[15%] lg:w-[15%]  flex justify-between items-center">
          <button
            disabled={!nameShaikh ? true : false}
            onClick={() => {
              PlayAudioHandeller();
              setMute(!mute);
            }}
            className={`${play
              ? "bg-green-500 hover:bg-green-800 text-background_color"
              : "bg-background_color hover:bg-blue-800 hover:text-background_color"
              } rounded cursor-pointer px-2 py-1 text-center outline-none border-none text-text_color`}
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
        <div className="w-1/3 md:w-[15%] lg:w-[15%]  flex justify-between items-center">
          <h3 className="text-text_color px-1 shadow-md shadow-[#d5c5ab]">{`سورة ${nameSora}`}</h3>
          <h3 className="text-text_color px-1 shadow-md shadow-[#d5c5ab]">{`التنزيل ${TypeSora}`}</h3>
          <h3 className="text-text_color px-1 shadow-md shadow-[#d5c5ab]">{`أياتها ${LengthAyat}`}</h3>
        </div>
        {/*Volume Spans  */}
        <div className="w-1/3 md:w-[15%] lg:w-[15%]  flex justify-between items-center">
          <VolumeSpans
            mute={mute}
            setMute={setMute}
            MuteHandeller={MuteHandeller}
            UnMuteHandeller={UnMuteHandeller}
            audioRef1={audioRef1}
            audioRef2={audioRef2}
          />
        </div>
        {/*Select Sora*/}
        <div className="selectSora w-1/3 md:w-[15%] lg:w-[15%]  relative flex justify-evenly cursor-pointer text-sm rounded px-2 py-2 bg-gray-300"
          onClick={() => setSoraToggle(!soraToggle)}
        >
          {" "}
          {nameSora || "اختر السورة"}
          <icon.MdKeyboardDoubleArrowDown className=" self-end" />
        {/*Sora Change */}
          {soraToggle && (
            <div className="flex flex-col justify-start items-start px-2 absolute top-[100%] z-40 left-0 w-[80%] max-h-[400px] overflow-y-scroll scrollbar-hide bg-background_color text-text_color">
              {NameSoras?.length > 0 &&
                NameSoras.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => {
                      setShaikhToggle(false);
                      setNameSora(item);
                      setSoraNumber(index + 1);
                      setAyaNumber(1);
                      ChangeUrlWithoutReload(nameShaikh, item);
                    }}
                    className="hover:bg-second_background_color hover:text-primary_color px-2 py-1 rounded w-full text-end"
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
