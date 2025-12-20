import "@/app/ui/global.css";
import { inter } from './ui/fonts';  // Note: I fixed the typo: 'inter' → 'inter'

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