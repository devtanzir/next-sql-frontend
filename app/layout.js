import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideBar from "./Components/LeftSideBar";
import TopNavBar from "./Components/TopNavBar";
import Settings from "./Components/Settings";
import AllDuaTitle from "./Components/AllDuaTitle";
import Container from "./Components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua is everything",
  description: "this tamplate is made with ❤ by tanzir ibne ali",
  keywords: "HTML,CSS,JavaSript",
  aurthor: "Tanzir Ibne ali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ebeef2] relative`}>
        <Container>
          <LeftSideBar />
          <TopNavBar />
          <Settings />
          {children}
          <AllDuaTitle />
        </Container>
      </body>
    </html>
  );
}
