import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Cindy Tan's Portfolio",
  description: "A showcase of Cindy Tan's UI/UX and digital marketing work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/version-logo.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
