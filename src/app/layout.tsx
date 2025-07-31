import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import { ThemeProvider } from '../components/theme-provider';
import { Toaster } from '../components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iTERRA™ - Luxury Wellness Experience',
  description: 'Sacred botanicals and emotional wellness through essential oils',
  keywords: 'essential oils, wellness, aromatherapy, luxury, sacred geometry',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
        </ThemeProvider>
      </body>
    </html>
  );
}