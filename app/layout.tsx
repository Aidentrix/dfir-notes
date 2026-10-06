import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'DFIR Journey',
    template: '%s | DFIR Journey',
  },
  description: 'Practical DFIR notes, reproducible labs, and forensic artifact analysis.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
