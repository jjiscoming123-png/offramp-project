import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "OFFRAMP — The Smart Exit",
  description: "Everyone's looking for the on-ramp. Smart money finds the off-ramp.",
  icons: { icon: [{ url: "/favicon.ico", sizes: "32x32" }], apple: [{ url: "/apple-icon.png", sizes: "180x180" }] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
