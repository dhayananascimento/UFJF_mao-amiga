
'use client'
import { Navbar } from '../navbar/navbar';

export function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
