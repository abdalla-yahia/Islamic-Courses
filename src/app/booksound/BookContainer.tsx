import React from "react";
import FullTitle from "@/Utils/FullTitle";
import * as icon from "@/Components/Icons/icons";
import BookInfo from "./BookInfo";
import { Chapter } from "@/Interfaces/InterFaces";
import BookSoundPage from "app/booksound/BookSoundPage";


export default function BookContainer({Book}:{Book:Chapter}) {
  return (
    <div className="w-full h-full">
      {
        Book.title !== null && Book.title !== undefined ? (
            <>
            <FullTitle F_Title={Book?.title}/>
            <BookInfo Book={Book}/>
            <BookSoundPage Book={Book}/>
            </>
        )
            : 
            (
            <div className='w-full flex flex-col h-screen justify-center gap-2 items-center'>
            <icon.SiAudiobookshelf className="text-blue-700 text-3xl  mx-1 "/>
            <h1 className='text-center flex justify-center items-center text-3xl text-red-500'>قم باختيار كتاب من القائمة الجانبية للإستماع إليه 
            </h1>
            </div>
            )
      }
        </div>
  )
}
