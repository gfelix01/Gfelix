  import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Gabriel's Portfolio | Software Engineer",
  description: "Software Engineer Portfolio",
};

export const viewport = "width=device-width, initial-scale=1";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon y configuraciones de íconos */}
        <link rel="apple-touch-icon" sizes="180x180" href="/my-app/public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/my-app/public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/my-app/public/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
