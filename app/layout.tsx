import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhruv | Personal Portfolio",
  description: "Dhruv is a full-stack developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36
      dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}>
        
        <div className="bg-[#fbe2e3] blur-[10rem] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem]
          w-[31.25rem] rounded-full  sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem]
          w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
          lg:left-[-28rem] xl:left-[-15rem]  2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContextProvider>

        <ThemeSwitch />
      </body>
    </html>
  );
}
