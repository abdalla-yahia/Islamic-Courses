import React from "react";
import FullTitle from "@/Utils/FullTitle";
// import * as BookSound from "../../Components/Books";
import BookInfo from "./BookInfo";
import { Chapter } from "@/Interfaces/InterFaces";
import BookSoundPage from "app/booksound/BookSoundPage";


export default function BookContainer({Book}:{Book:Chapter}) {

  return (
    <div className="w-full h-full">
            <FullTitle F_Title={Book?.title}/>
            <BookInfo Book={Book}/>
            {/* {
                Book?.title === 'مختصر السيرة النبوية' ?
                <BookSound.sera /> :
                Book?.title === 'صور من حياة التابعين' ?
                <BookSound.tabean /> :
                Book?.title === 'صور من حياة الصحابة' ?
                <BookSound.sahaba /> :
                <h1 className="text-black "> يرجى إختيار كتاب من القائمة للإستماع إليه</h1>
            } */}
            <BookSoundPage Book={Book}/>
        </div>
  )
}
