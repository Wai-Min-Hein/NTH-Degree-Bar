import type { Metadata } from "next";
import "./globals.css";
import { montserrat, roboto } from "@/components/font";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";

export const metadata: Metadata = {
  title: "NTH Degree Bar",
  description: "Generated by MKAS",

  // icons: {
  //   icon: ["favicon.ico=v?4"],
  //   apple: ["apple-touch-icon.png=v?4"],
  //   shortcut: ["apple-touch-icon.png"],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} flex flex-col justify-between min-h-screen relative`}
      >
        {/* <header>
          <NavBar />
        </header> */}

        <main className="flex-1">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
