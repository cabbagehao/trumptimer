import Header from './Header';
import Footer from './Footer';
import AutoAds from '../Adsense/AutoAds';
import FeedbackButton from '../Feedback/FeedbackButton';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <AutoAds />
      <Header />
      <main className="flex-grow container mx-auto px-4 pb-8 sm:pb-16">
        {children}
      </main>
      <FeedbackButton />
      <Footer />
    </div>
  );
}