interface ClerkLayoutProps {
  children: React.ReactNode;
}

const ClerkLayout: React.FC<ClerkLayoutProps> = ({ children }) => {
  return <div className="grid h-full place-items-center">{children}</div>;
};
export default ClerkLayout;
