import { LayoutDefault } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stonebranch',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LayoutDefault>{children}</LayoutDefault>
    </div>
  );
}
