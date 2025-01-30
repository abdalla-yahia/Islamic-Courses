import { CreateHadithInterface, LogedUserInterface } from "@/Interfaces/InterFaces"
import { createHadith, deleteHadith, fetchHadith } from "@/lib/Actions/HadithActions"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import React, { useEffect, useState } from "react"
import * as icon from '@/Components/Icons/icons'
import { toast } from "react-toastify"
import Swal from "sweetalert2"
// import DateConvert from "@/Utils/Date"
import { Amiri } from "next/font/google";
const amiri = Amiri({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-amiri_quran",
  display: "swap",
  adjustFontFallback: false,
});
export default function LeftSidbar() {
      const {UserLogedData} = useAppSelector(state=>state.user) as unknown as {UserLogedData:LogedUserInterface}
      const {CreateHadith} = useAppSelector(state=>state.hadith) as unknown as {CreateHadith:{status:number}}
      const {DeleteHadith} = useAppSelector(state=>state.hadith) as unknown as {DeleteHadith:{status:number}}
      const { AllHadith } = useAppSelector(
        (state) => state.hadith
      ) as unknown as { AllHadith: { Hadith: CreateHadithInterface[] } };
      const [toggle,setToggle]= useState(false)
      const [showAlot, setShowAlot] = useState(false);
      const [title,setTitle]= useState('')
      const [content,setContent]= useState('')
      // const [body,setBody]= useState({src:''})
      const [HadithIndex,setHadithIndex]= useState(0)
      const dispatch = useAppDispatch();
      const CreatePostHandeller = ()=>{
          dispatch(createHadith({
              title,
              content,
              author:{id:parseInt(UserLogedData?.id) as number,name:UserLogedData?.name as string,image:UserLogedData?.image as string}}))
  }
  useEffect(() => {
    dispatch(fetchHadith())
  },[CreateHadith,dispatch])
      useEffect(()=>{
          if(CreateHadith.status){
              if(CreateHadith?.status === 201){
                  toast.success('تم إنشاء البوست بنجاح')
                setToggle(false)
                setContent('')
              }else if(CreateHadith?.status === 400){
                  toast.error('حدث خطأ في إنشاء البوست')
              }
          }
      }, [CreateHadith,DeleteHadith,dispatch])
  setTimeout(() => {
    if (HadithIndex !== AllHadith?.Hadith?.length - 1) {
      setHadithIndex(HadithIndex + 1)
    } else {
      setHadithIndex(0)
    }
  }, 1000 * 60 * 2)
  //Delete Hadith
  const DeleteHadithHandeller = (e: string) => {
     Swal.fire({
                title: 'هل ستقوم بحذف هذا الموضوع/الحديث؟',
                text: '!!سيؤدي هذا إلى حذف جميع بيانات الموضوع/الحديث',
                icon: "warning",
                showCancelButton: true,
                cancelButtonText:'إلغاء',
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: 'نعم ! قم بحذف الموضوع/الحديث',
              }).then((result) => {
                if (result.isConfirmed) {
                      dispatch(deleteHadith(e));
                    if (DeleteHadith?.status === 200) {
                      Swal.fire({
                        title: "تم الحذف!",
                        text: "تم الحذف بنجاح.",
                        icon: "success",
                      });
                    }
                }
              });
  }
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {!toggle &&
        (UserLogedData?.role as React.ReactNode) &&
        UserLogedData?.role === "OWNER" && (
          <>
            <button
              onClick={() => setToggle(!toggle)}
              className="hover:text-blue-600 my-1 bg-blue-900 text-white w-full px-3 rounded cursor-pointer"
            >
              إنشاء موضوع
            </button>
            <div className="w-full flex flex-col">
              {AllHadith?.Hadith?.length > 0 &&
                AllHadith?.Hadith?.slice(0, !showAlot?3:undefined).map((hadith, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col gap-2 justify-center items-center"
                    title={hadith?.content as unknown as string}
                  >
                    <p className="w-full flex  gap-2 justify-center items-center">
                      <span className="text-gray-600 line-clamp-1 w-full">
                        {" "}
                        {hadith?.content}
                      </span>
                      <icon.CiTrash
                        className="text-red-500 cursor-pointer"
                        onClick={() =>
                          DeleteHadithHandeller(hadith?.id as unknown as string)
                        }
                      />
                    </p>
                  </div>
                ))}
              <span className="cursor-pointer" onClick={() => setShowAlot(!showAlot)}>
                {showAlot ? (
                  <span className="text-red-600">عرض أقل...</span>
                ) : (
                  <span className="text-red-600">عرض المزيد ...</span>
                )}
              </span>
            </div>
          </>
        )}
      {toggle && (
        <div className="container text-gray-700 w-full flex flex-col justify-center items-center">
          <div className="w-full flex gap-2 mb-2  justify-center items-center">
            {/* <h3 className="flex hidden text-gray-200">عنوان الموضوع : </h3> */}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name=""
              id=""
              className="rounded px-2 w-full"
              placeholder="ادخل عنوان الموضوع"
            />
          </div>
          <div className="w-full flex gap-2 mb-2  justify-center items-center">
            {/* <h3 className="flex hidden text-blue-400">محتوي الموضوع :</h3> */}
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              name=""
              id=""
              className="rounded px-2 w-full"
              placeholder="ادخل محتوي الموضوع"
            />
          </div>
          {/* <div className="w-full flex gap-2 mb-2  justify-center items-center">
                  <h3 className="flex hidden text-red-500"> رابط الفيديو :</h3>
                  <input  onChange={(e)=>setBody({src:e.target.value})} type="text" name="" id="" className="rounded px-2 w-full" placeholder="ادخل رابط فيديو الموضوع"/>
              </div> */}
          <button
            onClick={() => CreatePostHandeller()}
            className="p-2 rounded text-white hover:bg-blue-700 bg-blue-500 cursor-pointer"
          >
            إنشاء الموضوع
          </button>
        </div>
      )}

      {AllHadith?.Hadith?.length > 0 &&
        AllHadith?.Hadith?.slice(HadithIndex, HadithIndex + 1).map(
          (hadith, index) => (
            <div key={index} className="transition ease-in-out opacity-1">
              <h1 className="text-2xl w-full my-3 text-orange-600 flex justify-center items-center">
                {hadith?.title}
              </h1>
              <p style={{lineHeight:'2'}} className={`${amiri.className} text-justify`}>
                {hadith?.content}
              </p>
              <p className="text-gray-500 mt-5">
                الناشر / {hadith?.author?.name as unknown as string}
              </p><br/>
              {/* <p className="text-gray-300 mt-5">
                تاريخ النشر : {DateConvert(hadith?.createdAt  as unknown as Date)}
              </p> */}
            </div>
          )
        )}
    </div>
  );
}
