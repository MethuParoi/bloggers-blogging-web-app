import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { AuthProvider } from "./AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bloggers",
  description: "Bloggers",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gray-100 text-base-content `}
        >
          <div className="min-h-screen flex flex-col justify-between ">
            <Navbar />
            <div className="mx-2 xl:max-w-[1250px] container md:mx-auto">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
