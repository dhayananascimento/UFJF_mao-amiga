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
    <div
      style={{
        backgroundImage: 'url(/assets/about-us/hexagon.svg)',
        backgroundPosition: '80vw center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 90%',
        backgroundColor: 'rgb(231 241 254 / 1)',
      }}
    >
      <LayoutDefault>{children}</LayoutDefault>
    </div>
  );
}
