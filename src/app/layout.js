import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StudentDataContextProvider } from "@/context/StudentDataContext";
import { BlogDataContextProvider } from "@/context/BlogData";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { CandidateDataContextProvider } from "@/context/CandidateDataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QCS Best Industrial Training Company in Mohali",
  description:
    "Discover your potential at QCS! Gain hands-on training in Web Development, UI/UX Design, Digital Marketing, Data Analytics, Cybersecurity, and more. Enroll now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/vercel.png" />

      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MM68DHXB');
            `,
        }}
      />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7JRBR0RQGH" />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7JRBR0RQGH');
        `,
        }}
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MM68DHXB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <PrimeReactProvider>
          <CandidateDataContextProvider>
            <BlogDataContextProvider>
              <StudentDataContextProvider>
                {children}
                <Analytics />
              </StudentDataContextProvider>
            </BlogDataContextProvider>
          </CandidateDataContextProvider>
        </PrimeReactProvider>
        
      </body>
    </html>
  );
}
