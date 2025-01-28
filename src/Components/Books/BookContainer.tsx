import React from "react";
import FullTitle from "@/Utils/FullTitle";
import * as icon from "@/Components/Icons/icons";
import BookInfo from "./BookInfo";
import { Chapter } from "@/Interfaces/InterFaces";
import BookSoundPage from "@/Components/Books/BookSoundPage";


export default function BookContainer({Book}:{Book:Chapter}) {
  return (
    <>
    <div  className="w-full h-full">
      {
        Book.title !== null && Book?.title !== undefined ? (
            <>
            <FullTitle F_Title={Book?.description}/>
            <BookInfo Book={Book}/>
            <BookSoundPage Book={Book}/>
            </>
        )
            : 
            (
              <>
            <div className='w-full flex flex-col h-screen justify-center gap-2 items-center'>
              <h1 className='text-center w-[50%] my-2 flex justify-center items-center text-3xl text-fuchsia-700'>روى الإمام البخاري (71)، ومسلم (1037)  عن مُعَاوِيَةَ بن أبي سفيان رضي الله عنهما قال: سَمِعْتُ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ.</h1>
            <icon.SiAudiobookshelf className="text-blue-700 text-3xl  mx-1 "/>
            <h1 className='text-center flex justify-center items-center text-3xl text-red-500'>قم باختيار كتاب من القائمة الجانبية للإستماع إليه 
            </h1>
            </div>
              </>
            )
      }
        </div>
    </>
  )
}
