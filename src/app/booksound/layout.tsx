import type { Metadata } from "next";
import { Container, Row } from "react-bootstrap";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
  description: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله , تحتوي على المنهج العلمي لكل طالب علم يسعى إلى الإرتقاء في  سلم طلب العلم الشرعي وفق منهج علمي على الكتاب والسنة",
  openGraph: {
    title: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
    description: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله , تحتوي على المنهج العلمي لكل طالب علم يسعى إلى الإرتقاء في  سلم طلب العلم الشرعي وفق منهج علمي على الكتاب والسنة",
    images: [
      {
        url: "/Salaf_Logo.png",
        width: 1200,
        height: 630,
        alt: "Salaf Logo",
      },
    ],
    url: "https://khaled-mansour.vercel.app/booksound",
    series: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
    section: "كتب صوتية",
  },
  twitter: {
    card: "summary_large_image",
    title: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
    description: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله , تحتوي على المنهج العلمي لكل طالب علم يسعى إلى الإرتقاء في  سلم طلب العلم الشرعي وفق منهج علمي على الكتاب والسنة",
    images: ["/images/Title_Logo.png"],
  },
  keywords: [
    "الشيخ خالد منصور",
    "المنهج العلمي",
    "طلب العلم الشرعي",
    "الكتاب والسنة",
    "الدكتور خالد منصور",
    "علوم شرعية",
    "تعليم إسلامي",
    "الدورات العلمية",
    "منهج طالب العلم الشرعي",
    "منهج السالكين",
    "منهج السلف الصالح",
    "منهج أهل السنة والجماعة",
    "منهج أهل الحديث",
    "منهج أهل العلم",
    "منهج أهل الدعوة",
    "منهج أهل التفسير",
    "منهج أهل الفقه",
    "منهج أهل العقيدة",
    "شرح كتاب ",
    "بشرح الشيخ ",
    "بشرح الدكتور ",
    "فقه",
    "عقيدة",
    "تفسير",
    "سيرة",
    "حديث",
    "مصطلح",
    "اصول فقه",
  ],
};

export default function BooksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
             <Container>
               <Row>
               <div  className={`${amiri.className} min-h-screen  select-none`}>
                 {children}
               </div>
               </Row>
             </Container>
             </>

  );
}
