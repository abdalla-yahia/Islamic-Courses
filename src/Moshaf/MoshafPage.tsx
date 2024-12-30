'use client'
import { LegacyRef, useEffect, useRef, useState } from "react";
import NavMoshaf from "./NavMoshaf";
import SoraPage from "./SoraPage";
import SoursAudioQarea from "./SoursAudioQarea";

export default function MoshafPage() {
    const [NameSoras, setNameSoras] = useState([]);
    const [SoraNumber, setSoraNumber] = useState(1);
    const [AyaNumber, setAyaNumber] = useState(1);
    const [ShaikhSound, setShaikhSound] = useState('');
    const [SourcAudio, setSourcAudio] = useState('');
    const [soraData, setSoraData] = useState('');
    const [AyatLengthOfSora, setAyatLengthOfSora] = useState(0);

    const audioRef = useRef<HTMLAudioElement>() as unknown as { current: {muted:boolean|undefined,volume:number,play:()=>void,pause:()=>void} }
    const audioBasmalaRef = useRef<HTMLAudioElement>() as unknown as {
      current: {
        muted: boolean | undefined;
        volume: number;
        play: () => void;
        pause: () => void;
      };
    };
    
    useEffect(()=>{
        if (AyaNumber === 1 && SoraNumber !== 9 && ShaikhSound !== '') {
          audioBasmalaRef?.current?.play();
          audioRef?.current?.pause();
        } else {
          setSourcAudio(SoursAudioQarea(AyaNumber, SoraNumber, ShaikhSound));
        }
    },[ShaikhSound,SoraNumber,AyaNumber])
    
const PlusAya = ()=>{
    if(AyaNumber !== AyatLengthOfSora){
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
    audioRef?.current?.play()
    localStorage.setItem('Islamic_Course_Sora_Number',SoraNumber as unknown as string)
    localStorage.setItem('Islamic_Course_Aya_Number',AyaNumber as unknown as string)
}
    const AudioBasmallaEnded = () => { 
        audioRef?.current?.play();
        setSourcAudio(
            SoursAudioQarea(AyaNumber, SoraNumber, ShaikhSound)
        );

    }
const AudioEnded =()=>{
    PlusAya()
    audioRef?.current?.play()
}

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center">
                <NavMoshaf NameSoras={NameSoras as unknown as string[]} SoraNumber={ SoraNumber as number} setSoraNumber={setSoraNumber} setShaikhSound={setShaikhSound} setAyaNumber={setAyaNumber as unknown as React.Dispatch<React.SetStateAction<number>>} audioRef={audioRef} soraData={soraData as unknown as [{sura_name_ar:string}]}/>
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <SoraPage setNameSoras={setNameSoras as unknown as React.Dispatch<React.SetStateAction<string>>} setSoraNumber={setSoraNumber} SoraNumber={SoraNumber} AyaNumber={AyaNumber as unknown as React.Dispatch<React.SetStateAction<number>>} setAyaNumber={setAyaNumber} setAyatLengthOfSora={setAyatLengthOfSora} setSoraData={setSoraData}/>
                <audio onEnded={()=>AudioEnded()} className="audio_Player hidden" ref={audioRef as unknown as LegacyRef<HTMLAudioElement>}  src={SourcAudio} controls autoPlay >
                    متصفحك لا يدعم  هذا النوع من الصوتيات
                </audio>
                <audio onEnded={()=>AudioBasmallaEnded()} className="audio_Player hidden" ref={audioBasmalaRef as unknown as LegacyRef<HTMLAudioElement>}  src={'/Audios/basmalla.mp3'} controls autoPlay >
                    متصفحك لا يدعم  هذا النوع من الصوتيات
                </audio>
            </div>
        </div>
    </div>
    </>
  )
}
