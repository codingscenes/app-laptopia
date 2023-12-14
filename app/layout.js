import MainHeader from '@/components/main-header';
import './globals.css';

export const metadata = {
  title: 'Laptopia - Your One-Stop Shop for Laptops',
  description:
    'Discover a wide range of laptops and accessories at Laptopia. From gaming laptops to business laptops, find the perfect device for your needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en '>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
