'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader } from '..';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        {isHome && <Preloader setComplete={setComplete} />}
        <div className={complete || !isHome ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          <Footer />
          {/* Toast container must be inside the client layout */}
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
