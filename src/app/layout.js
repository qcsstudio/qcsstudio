import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StudentDataContextProvider } from "@/context/StudentDataContext";
import { BlogDataContextProvider } from "@/context/BlogData";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "qcsstudio",
  description: "quantumm crafters studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <PrimeReactProvider>
          <BlogDataContextProvider>
            <StudentDataContextProvider>{children}</StudentDataContextProvider>
          </BlogDataContextProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
