import { Footer } from './_components/footer';
import { Navbar } from './_components/navbar';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pb-20 pt-40">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
