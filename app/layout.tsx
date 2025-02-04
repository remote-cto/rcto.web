import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script"



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

export const metadata: Metadata = {
  title: "Remote CTO - A New Age Digital Transformation Studio",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-S71MY8W4F6"></Script>
<Script id="google-analytics">
  {
    `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S71MY8W4F6');
    `
  }
  
</Script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
     
    </html>
  );
}
