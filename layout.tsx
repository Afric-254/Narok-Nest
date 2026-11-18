import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "NarokNest | Stays in Narok Town, Kenya",
  description: "Find welcoming homes, lodges, and stays in Narok Town, Kenya.",
  verification: {
    google: "google6a9712bff2bbd54f",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="site-footer">
          <div className="container footer-wrap">
            <div>
              <Link className="brand footer-brand" href="/">
                <span className="brand-mark">N</span><span>NarokNest</span>
              </Link>
              <p>Stays and experiences in Narok Town, Kenya.</p>
            </div>
            <div className="footer-links">
              <Link href="/stays">Browse stays</Link>
              <Link href="/host">Host with us</Link>
              <Link href="/signup">Create account</Link>
              <Link href="/login">Sign in</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
