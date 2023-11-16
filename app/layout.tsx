import "./globals.css";
import {Inter, Montserrat} from "@next/font/google";
const montserrat = Montserrat({subsets: ["latin"]});
import {DataProvider} from "../context/DataContext";
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={montserrat.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={montserrat.className}>
        <DataProvider>
          {children}
        
        </DataProvider>
      </body>
    </html>
  );
}
