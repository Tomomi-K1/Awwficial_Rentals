import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afficial Rentals",
  description: "360 Photo Booth Rental Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
