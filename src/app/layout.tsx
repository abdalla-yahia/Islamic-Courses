import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
// import { Container, Row } from "react-bootstrap";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import  Amiri  from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";

const amiri = Amiri({
   src: [
    {
      path: '../../public/fonts/Amiri-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Amiri-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
  description: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله , يحتوي على المنهج العلمي لكل طالب علم يسعى إلى الإرتقاء في  سلم طلب العلم الشرعي وفق منهج علمي على الكتاب والسنة",
  openGraph: {
    title: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
    description: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله , يحتوي على المنهج العلمي لكل طالب علم يسعى إلى الإرتقاء في  سلم طلب العلم الشرعي وفق منهج علمي على الكتاب والسنة",
    images: [
      {
        url: "/Salaf_Logo.png",
        width: 1200,
        height: 630,
        alt: "Salaf Logo",
      },
    ],
    url: "https://khaled-mansour.vercel.app",
    siteName: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
    type: "website",
    locale: "ar_AR",

  },
  twitter: {
    card: "summary_large_image",
    title: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
    description: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله , يحتوي على المنهج العلمي لكل طالب علم يسعى إلى الإرتقاء في  سلم طلب العلم الشرعي وفق منهج علمي على الكتاب والسنة",
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
    "منهج طالب العلم الشرعي"
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
  applicationName: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
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
  alternates: {
    canonical: "https://khaled-mansour.vercel.app",
    languages: {
      "ar": "/ar",
      "en": "/en",
    }
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "الموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
   
      <body suppressHydrationWarning>
      <StoreProvider>
        <Header />
        {/* <Container>
          <Row> */}
          <div   className={`${amiri.className} min-h-screen  select-none`}>
            {children}
          </div>
          {/* </Row>
        </Container> */}
        <Footer />
     </StoreProvider>
        <ToastContainer  />
        <SpeedInsights />
      </body>
    </html>
  );
}
