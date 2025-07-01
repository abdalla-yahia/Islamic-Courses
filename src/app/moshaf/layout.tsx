import type { Metadata } from "next";
import { Container, Row } from "react-bootstrap";
import { Amiri } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  adjustFontFallback: false,
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
};

export default function MoshafLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body >
         <Header />
        <Container>
          <Row>
          <div  className={`${amiri.className} min-h-screen  select-none`}>
            {children}
          </div>
          </Row>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
