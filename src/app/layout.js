import { Nunito,Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cabbage E-commerce",
  description: "An e-commerce website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${nunito.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
