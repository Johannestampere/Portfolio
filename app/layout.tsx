import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: 'Johannes Tampere',
  description: 'Portfolio website of Johannes Tampere',
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Shared background layers */}
        <div className="bg-layer">
          <div className="blob blob1" />
          <div className="blob blob2" />
          <div className="blob blob3" />

          <div className="wave back">
            <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
              <path
                d="M0,700 C220,640 320,760 520,710 C710,660 780,560 980,600 C1160,635 1260,760 1440,700 L1440,900 L0,900 Z"
                fill="rgba(170, 198, 187, 0.65)"
              />
            </svg>
          </div>

          <div className="wave front">
            <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
              <path
                d="M0,760 C180,700 330,830 520,770 C690,720 840,620 1010,655 C1180,690 1280,790 1440,740 L1440,900 L0,900 Z"
                fill="rgba(195, 222, 215, 0.75)"
              />
            </svg>
          </div>
        </div>

        <div className="grain" />
        <div className="dots" />

        {children}
      </body>
    </html>
  );
}
