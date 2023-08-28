import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do App",
  description: "Task manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
