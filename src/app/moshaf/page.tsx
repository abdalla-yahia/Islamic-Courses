import MoshafPage from "@/Moshaf/MoshafPage";
import { Metadata } from "next";
import Head from "next/head";

export const metadata:Metadata = {
  title:{
    absolute:'',
    default:'القرآن الكريم',
    template:'%s | المصحف الشريف بصوت القارئ'
  },
  description:'القرآن الكريم يحتوي على قراءات لمجموعة متنوعة من كبار المشايخ والقراء في الوطن العربي'

}
export default function Moshaf() {

  return (
    <>
      <Head>
        <link rel="icon" href={ '/favicon/الحصري - مجود.png'}  />
    </Head>
    <div>
        <MoshafPage />
    </div>
    </>
  )
}
