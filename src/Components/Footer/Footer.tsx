'use client'
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    
<footer className=" rounded-lg shadow bg-gray-900 mt-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-between w-full items-center">
          <Navbar.Brand href="/" className="flex justify-center items-center font-bold text-fuchsia-700">
          <Image alt="logo" width={50} height={50} src={'/Salaf_Logo.png'}/>
          الدورات العلمية 
          </Navbar.Brand>
            <Nav className="text-fuchsia-500 font-bold">
              <Nav.Link href="/">الرئيسية</Nav.Link>
              <Nav.Link href="/moshaf">المصحف</Nav.Link>
              <Nav.Link href="/booksound">المكتبة</Nav.Link>
              <Nav.Link href="/about">من نحن</Nav.Link>
              <Nav.Link href="/contact">إتصل بنا</Nav.Link>
            </Nav>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link href="mailto:abdalla_y2007@yahoo.com/" className="hover:underline text-fuchsia-600">Abdalla Yahia™</Link>. All Rights Reserved.</span>
    </div>
</footer>


  )
}
