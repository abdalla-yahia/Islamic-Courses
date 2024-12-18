import Image from "next/image";
import Link from "next/link";
import { Amiri } from 'next/font/google'
import NavLinks from "./NavLinks";
import { cookies } from "next/headers";
import  Jwt  from "jsonwebtoken";
import { UserPayload } from "@/Interfaces/InterFaces";


const amiri = Amiri({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-amiri",
  display: "swap",
  adjustFontFallback: false,
});
export default async function Header() {
  const token:string =(await cookies()).get('JwtToken')?.value || "";
  if(!token){
    return (
      <>
     <nav  className={`${amiri.className} relative w-full z-50 bg-gray-900`}>
        <div className="container  w-full p-2 flex justify-around items-center">
          <Link  href="/" className={'flex justify-center  items-center font-bold text-fuchsia-700 hover:text-white'}>
          <Image className="rounded-lg ml-2" alt="logo" width={50} height={80} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9myW1PlBH70Q6CqJtsX523qtXdQrn9s1dfw&s'}/>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-fuchsia-700 hover:text-white">الدورات العلمية</h1>
            <h4 className="text-[12px] text-gray-400">للدكتور باسم عبد رب الرسول</h4>
          </div>
          </Link>
            <NavLinks user={null}/>
        </div>
      </nav>
      </>
  
  )
}
const Decoade = Jwt.verify(token, process.env.JWT_SECRET_KEY as string) as UserPayload;

  return (
    <>
      <nav  className={`${amiri.className} relative w-full z-50 bg-gray-900`}>
        <div className="container  w-full p-2 flex justify-around items-center">
          <Link  href="/" className={'flex justify-center  items-center font-bold text-fuchsia-700'}>
          <Image className="rounded-lg ml-2" alt="logo" width={50} height={80} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9myW1PlBH70Q6CqJtsX523qtXdQrn9s1dfw&s'}/>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-fuchsia-700 hover:text-white">الدورات العلمية</h1>
            <h4 className="text-[12px] text-gray-400">للدكتور باسم عبد رب الرسول</h4>
          </div>
          </Link>
            <NavLinks user={Decoade}/>
        </div>
      </nav>
    </>
  );
}
