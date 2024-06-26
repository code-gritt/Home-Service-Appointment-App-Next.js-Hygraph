import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Service Appointment App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
