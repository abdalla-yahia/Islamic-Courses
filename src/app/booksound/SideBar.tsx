'use client'
import * as icon from '@/Components/Icons/icons'
import { useState } from 'react';
import Books from './Books.json'
import { Chapter } from '@/Interfaces/InterFaces';

export default function SideBar({setBook}:{setBook:(chapter:Chapter)=>void}) {
 const [toggle,setToggle]=useState(0)
  return (
    <section className="w-1/6 sm:w-1/6 h-screen overflow-y-scroll scrollbar-hide bg-gray-400 rounded flex justify-center p-2">
        <div className="w-full flex justify-start items-center flex-col ">
            <ul className="text-fuchsia-600 font-bold w-full flex justify-center items-center flex-col">
                {
                    Books?.map((book, index) => {
                        return (
                            <div key={index} className='w-full'>
                                <li  onClick={()=>setToggle(toggle === book?.id ?0:book?.id)}  className={` ${toggle !== book?.id ? ' border-1 border-gray-500' : 'border-t border-l border-r border-b-0 border-gray-500 '} cursor-pointer h-auto flex justify-start items-center gap-3 w-full py-2 `} >
                                    
                                    {toggle === book?.id ? 
                                    <icon.FaMinus /> :
                                    <icon.FaPlus />
                                    }
                                    {book.title}
                                    </li>
                                <div className='px-1 border-t-0 border-l border-r border-b border-gray-500  text-black flex flex-col justify-end items-end line-clamp-1  w-full gap-1' style={{display: toggle === book?.id ?'flex':'none'}}>
                                    {book?.books?.map((chapter, index) => {
                                        return (
                                            <div onClick={()=>setBook(chapter as Chapter)}  key={index} className='w-full text-center line-clamp-1 flex justify-end items-start py-2 cursor-pointer hover:text-white'>
                                                {chapter.title}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                })
            }
            </ul>
        </div>
    </section>
    
  )
}
