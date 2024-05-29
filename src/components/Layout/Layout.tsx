import { Suspense, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Suspense fallback={null}>{children}</Suspense>;
};

export default Layout;
