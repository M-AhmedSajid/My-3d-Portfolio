import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { CursorProvider } from "@/context/cursor-context";
import Cursor from "@/lib/cursor";
import { ThemeProvider } from "@/lib/theme-provider";

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Ahmed Sajid",
  description: "Passionate Web Developer 🚀 & Creative Designer 🎨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gabarito.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorProvider>
            <Cursor />
            <Navbar />
            {children}
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
