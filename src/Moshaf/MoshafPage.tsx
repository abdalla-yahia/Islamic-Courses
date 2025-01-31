/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { LegacyRef, useEffect, useRef, useState } from "react";
import NavMoshaf from "./NavMoshaf";
import SoraPage from "./SoraPage";
import SoursAudioQarea from "./SoursAudioQarea";

export default function MoshafPage() {
    const [NameSoras, setNameSoras] = useState([]);
    const [SoraNumber, setSoraNumber] = useState(1);
    const [AyaNumber, setAyaNumber] = useState(1);
    const [AyaClicked, setAyaClicked] = useState(false);
    const [FirstPlay, setFirstPlay] = useState(true);

    const [ShaikhSound, setShaikhSound] = useState('');
    const [soraData, setSoraData] = useState('');
    const [AyatLengthOfSora, setAyatLengthOfSora] = useState(0);

    const audioRef1 = useRef<HTMLAudioElement>() as unknown as { current: {muted:boolean|undefined,volume:number,play:()=>void,pause:()=>void,src:string} }
    const audioRef2 = useRef<HTMLAudioElement>() as unknown as { current: {muted:boolean|undefined,volume:number,play:()=>void,pause:()=>void,src:string} }
    const audioBasmalaRef = useRef<HTMLAudioElement>() as unknown as {
      current: {
        muted: boolean | undefined;
        volume: number;
        play: () => void;
        pause: () => void;
      };
    };
    
    useEffect(()=>{
            if (audioRef1.current) {
                setAyaNumber(AyaNumber-1)
                audioRef1.current.src = SoursAudioQarea(AyaNumber, SoraNumber, ShaikhSound);
                PlusAya()
            }
    },[ShaikhSound, SoraNumber])
    
const PlusAya = ()=>{
    if((AyaNumber < AyatLengthOfSora)){
        (setAyaNumber(AyaNumber + 1))
    }else if (AyaNumber >= AyatLengthOfSora){
        if(SoraNumber !== 114){
            setSoraNumber(SoraNumber + 1)
            setAyaNumber(1)
        }else if(SoraNumber === 114){
            setAyaNumber(1)
            setSoraNumber(1)
        }
    }
    localStorage.setItem('Islamic_Course_Sora_Number',SoraNumber as unknown as string)
    localStorage.setItem('Islamic_Course_Aya_Number',AyaNumber as unknown as string)
}
    const AudioBasmallaEnded = () => { 
        audioRef1?.current?.play();
        if (audioRef1.current) {
            audioRef1.current.play()
            if (!FirstPlay) {
                PlusAya();
            }
        }
    }
const AudioOneEnded =()=>{
    audioRef2?.current?.play();
    if (!FirstPlay) {
        PlusAya();
    }
}
const AudioOnePlay = ()=>{
    if (audioRef2.current) {
        audioRef2.current.src = SoursAudioQarea(AyaNumber, SoraNumber, ShaikhSound);
    }
    audioRef2?.current?.pause();
    if (FirstPlay) {
        PlusAya();
    }
    setFirstPlay(false)
}
const AudioTwoPlay = ()=>{
    if (audioRef1.current) {
        audioRef1.current.src = SoursAudioQarea(AyaNumber, SoraNumber, ShaikhSound);
    }
    audioRef1?.current?.pause();
    setFirstPlay(false)
}
const AudioTwoEnded = ()=>{
    audioRef1?.current?.play();
    if (!FirstPlay) {
        PlusAya();
    }
}
useEffect(()=>{
    if (audioRef1.current) {
        audioRef1.current.src = SoursAudioQarea(AyaNumber-1, SoraNumber, ShaikhSound);
        audioRef2.current.src = SoursAudioQarea(AyaNumber, SoraNumber, ShaikhSound);
        // PlusAya()
    }
    audioRef1?.current?.play();
    setAyaClicked(false)
},[AyaClicked])
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center">
                <NavMoshaf NameSoras={NameSoras as unknown as string[]} SoraNumber={ SoraNumber as number} setSoraNumber={setSoraNumber} setShaikhSound={setShaikhSound} setAyaNumber={setAyaNumber as unknown as React.Dispatch<React.SetStateAction<number>>} audioRef1={audioRef1} audioRef2={audioRef2} soraData={soraData as unknown as [{sura_name_ar:string}]}/>
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <SoraPage setNameSoras={setNameSoras as unknown as React.Dispatch<React.SetStateAction<string>>} setSoraNumber={setSoraNumber} setAyaClicked={setAyaClicked} SoraNumber={SoraNumber} AyaNumber={AyaNumber as unknown as React.Dispatch<React.SetStateAction<number>>} setAyaNumber={setAyaNumber} setAyatLengthOfSora={setAyatLengthOfSora} setSoraData={setSoraData}/>
                <audio onEnded={()=>AudioBasmallaEnded()} className="audio_Player hidden" ref={audioBasmalaRef as unknown as LegacyRef<HTMLAudioElement>}  src={'/Audios/basmalla.mp3'} controls autoPlay >
                    متصفحك لا يدعم  هذا النوع من الصوتيات
                </audio>
                <audio onPlay={()=>AudioOnePlay()} onEnded={()=>AudioOneEnded()} className="audio_Player hidden " ref={audioRef1 as unknown as LegacyRef<HTMLAudioElement>}   controls autoPlay >
                    متصفحك لا يدعم  هذا النوع من الصوتيات
                </audio>
                <audio onPlay={()=>AudioTwoPlay()} onEnded={()=>AudioTwoEnded()} className="audio_Player hidden " ref={audioRef2 as unknown as LegacyRef<HTMLAudioElement>}   controls autoPlay >
                    متصفحك لا يدعم  هذا النوع من الصوتيات
                </audio>
            </div>
        </div>
    </div>
    </>
  )
}