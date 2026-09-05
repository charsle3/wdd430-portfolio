import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./globals.css";

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
  return (
    <html
      lang="en"
    >
      <head>
        <title>Next Practice</title>
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
