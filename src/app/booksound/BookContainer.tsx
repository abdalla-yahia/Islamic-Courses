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
            <BookSoundPage Book={Book}/>
        </div>
  )
}
