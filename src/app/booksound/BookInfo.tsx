import { Chapter } from "@/Interfaces/InterFaces";
import Image from "next/image";
import Link from "next/link";
import * as icon from '@/Components/Icons/icons'
export default function BookInfo({Book}:{Book:Chapter}) {
  return (
    <div className="flex justify-start items-start gap-3 wi-full mt-2">
        <Image src={Book?.image} width={60} height={60} alt={Book?.title} />
        <div className="w-full h-full gap-3 flex flex-col pt-2">
            <div className="flex justify-start text-gray-800 items-center w-full gap-3 flex-nowrap mb-2">
                <h2>اسم الكتاب :
                    <span className="text-red-500">{Book?.title}</span>
                </h2>
                <h2>المؤلف :
                    <span className="text-red-500">{Book?.author}</span>
                </h2>
                <h2>الناشر :
                    <span className="text-red-500">{Book?.publisher}</span>
                </h2>
            </div>
            <div className="flex justify-start text-gray-800 items-center w-full gap-3 flex-nowrap">
                <h2>عدد المواد  :
                    <span className="text-red-500">{Book?.audio_count} مادة</span>
                </h2>
                <h2>تاريخ النشر :
                    <span className="text-red-500">{Book?.year}</span>
                </h2>
                {Book?.download &&<h2>تحميل الكتاب PDF :
                    <span className="text-red-500">{
                        <Link href={Book?.download} target="_blank" download={true} className="cursor-pointer text-blue-500 flex">
                        اضغط هنا للتحميل <icon.FaDownload />
                        </Link>
                    }</span>
                </h2>}
                
            </div>
        </div>
    </div>
  )
}
