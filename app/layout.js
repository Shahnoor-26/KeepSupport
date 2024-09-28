import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KeepSupport - Empowering Creators Through Crowdfunding",
  description:
    "Welcome to KeepSupport, where innovation meets community! Our platform connects talented creators, developers, and influencer with supporters passionate about bringing ideas to life. Join us to fuel creativity and make a difference today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white scroll-smooth p-0 m-0 cursor-default select-none`}
      >
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
        </SessionWrapper>
      </body>
    </html>
  );
}
