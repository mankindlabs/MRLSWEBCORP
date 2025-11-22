import "./css/style.css";

import localFont from "next/font/local";

import Header from "@/components/ui/header";
import SiteLoader from "@/components/site-loader";

const gtMaru = localFont({
  src: [
    {
      path: "../public/fonts/GT-Maru-Light-Trial.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/GT-Maru-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gt-maru",
  display: "swap",
});

const gtPressura = localFont({
  src: [
    {
      path: "../public/fonts/GT-Pressura-Light-Trial.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/GT-Pressura-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gt-pressura",
  display: "swap",
});

export const metadata = {
  title: "Mankind Research Labs Sandton",
  description: "Redefining Intelligence. Advancing Research. Translating Innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gtMaru.variable} ${gtPressura.variable} bg-gray-950 font-[family-name:var(--font-gt-pressura)] text-base text-gray-200 antialiased`}
      >
        <SiteLoader />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
