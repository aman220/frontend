import { Inter } from "next/font/google";
import "../GlobalStyle/globals.css";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expenses Tracking",
  description: "Innovation is the Key of Betterment of Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen" id="main">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Header />
            <main className="overflow-y-auto p-6">{children}</main>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
