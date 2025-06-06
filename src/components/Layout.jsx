import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet context={{ menuOpen, setMenuOpen }} />
    </>
  );
};

export default Layout;
