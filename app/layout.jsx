import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { CursorProvider } from "@/context/cursor-context";
import Cursor from "@/lib/cursor";
import { ThemeProvider } from "@/lib/theme-provider";
import Loader from "./components/loader";
import { ModelLoadProvider } from "@/context/model-load-context";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
const AOSInit = dynamic(() =>
  import("@/lib/aos-init").then((mod) => mod.AOSInit)
);

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Ahmed Sajid - Portfolio",
  description:
    "I'm Ahmed, a passionate Web Developer and Full Stack MERN Developer with 2 years of experience. I build websites that not only look great but solve real business problems. From small sites to complex apps, I create secure, user-friendly solutions that help businesses grow.",
  metadataBase: new URL("https://ahmed-sajid.web.app"),
  openGraph: {
    title: "M. Ahmed Sajid - 3D Portfolio",
    description:
      "Interactive 3D portfolio built with Next.js, Three.js & TailwindCSS. Responsive, animated, and modern web experience.",
    url: "https://ahmed-sajid.web.app",
    siteName: "Ahmed Sajid Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M. Ahmed Sajid Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Ahmed Sajid - 3D Portfolio",
    description:
      "A modern 3D developer portfolio made with React, Tailwind, and Three.js.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AOSInit />
      <body className={`${gabarito.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorProvider>
            <ModelLoadProvider>
              <Loader />
              <Cursor />
              <Toaster />
              <Navbar />
              {children}
              <Footer />
            </ModelLoadProvider>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
