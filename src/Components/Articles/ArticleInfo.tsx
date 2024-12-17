import DateConvert from "@/Utils/Date";
import { Articles } from "@prisma/client";



export default function ArticleInfo({Article}:{Article:Articles}) {

  return (
    <>
     <div className={`'bg-slate-300 w-full p-2 rounded`}>
      <h1 className="text-center flex gap-2 text-xl my-3 font-bold text-gray-900">عنوان المقال: 
        <p className="font-bold text-blue-500">{Article?.title} </p>
        </h1>
      <h2 className="text-center flex gap-2 text-xl my-3 font-bold text-red-500">موضوع  المقال: 
        <p className="font-bold  text-gray-900">{Article?.content} </p>
        </h2>

      <h2 className="text-center  flex gap-2 text-sm  my-3 font-bold text-gray-900"> تاريخ إنشاء المقال: 
        <p className="font-bold text-fuchsia-800">{DateConvert(Article?.createdAt)} </p>
        </h2>

    </div>

    </>
  )
}
