import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE = 'https://bj166zx.cn';
const SITE_NAME = '北京市第一六六中学（非正式网站）';
const DESCRIPTION = '北京市第一六六中学非官方网站资料整理页，涵盖学校概况、公开报道、教育方针和校园文化。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: SITE_NAME,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    url: SITE,
    images: [
      {
        url: '/images/school-emblem.jpg',
        alt: '北京市第一六六中学校徽（本站为资料整理站，非官方发布）'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: SITE_NAME,
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
