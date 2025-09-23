import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
import SideNav from '@/app/ui/dashboard/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
