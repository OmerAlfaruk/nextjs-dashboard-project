import "@/app/ui/global.css";
import { Metadata } from 'next';
import { inter } from './ui/fonts'; 

 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 // Note: I fixed the typo: 'inter' → 'inter'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}