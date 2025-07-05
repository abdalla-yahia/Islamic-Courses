import type { Metadata } from "next";
import { Container, Row } from "react-bootstrap";
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
  title: "مكتبة القرآن الكريم",
  description: "مكتبة القرآن الكريم , تحتوي على المصحف الشريف بصوت أشهر القراء فى العالم الإسلامي , كما تحتوي على قراءات مختلفة بأصوات متنوعة",
  openGraph: {
    title: "مكتبة القرآن الكريم",
    description: "مكتبة القرآن الكريم , تحتوي على المصحف الشريف بصوت أشهر القراء فى العالم الإسلامي , كما تحتوي على قراءات مختلفة بأصوات متنوعة",
    images: [
      {
        url: "/Salaf_Logo.png",
        width: 1200,
        height: 630,
        alt: "Salaf Logo",
      },
    ],
    url: "https://khaled-mansour.vercel.app/moshaf",
    siteName: "مكتبة القرآن الكريم",
    type: "website",
    locale: "ar_AR",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "مكتبة القرآن الكريم",
    description: "مكتبة القرآن الكريم , تحتوي على المصحف الشريف بصوت أشهر القراء فى العالم الإسلامي , كما تحتوي على قراءات مختلفة بأصوات متنوعة",
    images: ["/images/Title_Logo.png"],
  },
  keywords: [
   "حفص عن عاصم",
   "ورش عن نافع",
   "قالون",
   "الكسائي",
   "حمزة",
   "الزيات",
   "الدوري",
   "شعبة عن عاصم",
   "ابن كثير",
   "المنشاوي",
   "عبدالباسط",
   "المعيقلي",
   "ياسر الدوسري",
   "ناصر القطامي",
   "سعد الغامدي",
   "السديس",
   "برواية ",
   "القرأن الكريم",
   "القرآن الكريم",
   "المصحف الشريف",
   "القرأن مسموع",
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
  applicationName: "مكتبة القرآن الكريم",
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

export default function MoshafLayout({
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
