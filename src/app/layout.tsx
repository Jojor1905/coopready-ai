import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"CoopReady AI", description:"Your friendly AI career companion" };

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="th"><body>{children}</body></html>; }
