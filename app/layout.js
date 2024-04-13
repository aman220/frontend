import { Inter } from "next/font/google";
import "../GlobalStyle/globals.css";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebar/Sidebar";

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
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
