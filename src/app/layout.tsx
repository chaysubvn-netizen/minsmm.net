import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "MINSMM.NET | #1 SMM Panel | Cheapest & Fastest | Social Media Marketing",
  description: "#1 social media marketing, fastest and cheapest, auto like, auto follow, auto share, auto comment, increase view, like, follower, comment share facebook, youtube, instagram, tiktok, telegram",
  keywords: "#1 social media marketing, auto like, auto follow, auto share, auto comment, increase view youtube, subscribers youtube, like follower facebook, view tiktok, view follow instagram",
  robots: "index, follow",
  alternates: {
    canonical: "https://minsmm.net/",
  },
  openGraph: {
    title: "MINSMM.NET | #1 SMM Panel | Cheapest & Fastest | Social Media Marketing",
    description: "#1 social media marketing, fastest and cheapest, auto like, auto follow, auto share, auto comment, increase view, like, follower, comment share facebook, youtube, instagram, tiktok, telegram",
    url: "https://minsmm.net",
    siteName: "MINSMM.NET | #1 SMM Panel | Cheapest & Fastest | Social Media Marketing",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://minsmm.net/MinSmm-min.gif",
        alt: "MINSMM.NET | #1 Socical Media Marketing | Cheapest & Fastest",
      },
    ],
  },
  icons: {
    icon: "/MinSmm-min.gif",
  },
  themeColor: "#eac257",
} as any;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Professionalservice",
              "@id": "https://minsmm.net",
              "url": "https://minsmm.net",
              "additionaltype": ["https://en.wikipedia.org/wiki/Review", "https://en.wikipedia.org/wiki/User:Quyetcoder2k3"],
              "logo": "https://minsmm.net/MinSmm-min.gif",
              "image": "https://minsmm.net/MinSmm-min.gif",
              "priceRange": "1$-5000$",
              "email": "mailto:quyetcoder2k3@gmail.com",
              "founder": "QuyetCoder2k3",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hà Nội",
                "addressCountry": "Việt Nam",
                "addressRegion": "Hà Nội",
                "postalCode": "10000",
                "streetAddress": "Tuy Lai Xã Phúc Sơn, Huyện Mỹ Đức, Hà Nội, Vietnam"
              },
              "description": "MINSMM.NET | #1 SMM Panel | Cheapest & Fastest | Social Media Marketing",
              "name": "minsmm",
              "telephone": "0395-046-244",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "8:00",
                  "closes": "11:00"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "10.7714201",
                "longitude": "106.6529533"
              },
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://minsmm.net",
                  "inLanguage": "en",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "minsmm"
                }
              },
              "sameAs": ["https://www.facebook.com/quyetcoder2k3"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Bùi Văn Quyết",
              "jobTitle": "CEO",
              "image": "",
              "worksFor": "Minsmm",
              "url": "https://minsmm.net",
              "sameAs": ["https://www.facebook.com/quyetcoder2k3/"],
              "AlumniOf": ["Aprotrain Aptech"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ha Noi",
                "addressRegion": "vietnam"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
