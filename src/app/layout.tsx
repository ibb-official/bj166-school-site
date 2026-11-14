import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE = 'https://bj166zx.cn';
const SITE_NAME = '北京市第一六六中学';
const SITE_TAGLINE = '养成教育为本，让成长发芽';
const DESCRIPTION = '北京市第一六六中学校园资料整理：学校概况、公开报道、教育方针与校园文化，条目均标注公开来源。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: `${SITE_NAME} · ${SITE_TAGLINE}`,
    template: `%s - ${SITE_NAME}`
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: SITE_NAME,
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description: DESCRIPTION,
    url: SITE,
    images: [
      {
        url: '/images/school-emblem.jpg',
        alt: '北京市第一六六中学校徽'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description: DESCRIPTION
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
