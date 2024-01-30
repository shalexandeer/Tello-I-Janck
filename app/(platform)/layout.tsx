import { ClerkProvider } from '@clerk/nextjs';

interface PlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
