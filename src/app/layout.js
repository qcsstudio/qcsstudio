import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StudentDataContextProvider } from "@/context/StudentDataContext";
import { BlogDataContextProvider } from "@/context/BlogData";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';

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
  description: "Discover your potential at QCS! Gain hands-on training in Web Development, UI/UX Design, Digital Marketing, Data Analytics, Cybersecurity, and more. Enroll now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" type="image/png" href="/vercel.png" />
        
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >

        <PrimeReactProvider>
          <BlogDataContextProvider>
            <StudentDataContextProvider>
              {children}
             <Analytics/>
            </StudentDataContextProvider>
          </BlogDataContextProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
