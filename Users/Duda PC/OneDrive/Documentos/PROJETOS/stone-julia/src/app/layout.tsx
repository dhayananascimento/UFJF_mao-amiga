import { ThemeProvider } from '@/providers/theme-provider/theme-provider';
import { GlobalStyles } from '@mui/material';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const amplesoft = localFont({
  src: './fonts/AmpleSoftPro.ttf',
  variable: '--font-ample-soft',
  weight: '100 200 300 400 500 600 700 800 900',
});
const amplesoftBold = localFont({
  src: './fonts/AmpleSoftPro-Bold.ttf',
  variable: '--font-ample-soft-bold',
  weight: '100 200 300 400 500 600 700 800 900',
});

export const metadata: Metadata = {
  title: 'Meu site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${amplesoft.variable} ${amplesoftBold.variable}`}>
        <ThemeProvider>
          <GlobalStyles
            styles={{
              '*': {
                boxSizing: 'border-box',
              },
              body: {
                margin: 0,
              },
              html: {
                fontSize: 16,
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
