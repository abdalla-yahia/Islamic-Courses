import type { Metadata } from "next";
import  Amiri  from "next/font/local";

const amiri = Amiri({
   src: [
    {
      path: '../../../public/fonts/Amiri-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Amiri-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
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
    url: "https://khaled-mansour.vercel.app/booksound?",
    siteName: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
    type: "website",
    locale: "ar_AR",

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
  icons: {
    icon: "/favicon.ico",
    apple: "/icon/apple-touch-icon.png",
    shortcut: "/icon/favicon-16x16.png",
    other: [
      {
        rel: "icon",
        url: "/icon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  applicationName: "المكتبة العلمية لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
  authors: [
    {
      name: "م/ عبدالله يحيى",
      url: "https://www.linkedin.com/in/abdalla-yahia",
    },
  ],
  creator: "م/ عبدالله يحيى",
  publisher: "م/ عبدالله يحيى",
  colorScheme: "light dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
   robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,
    nosnippet: false,
  },

};

export default function BooksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>

               <div  className={`${amiri.className} min-h-screen  select-none`}>
                 {children}
               </div>

             </>

  );
}
