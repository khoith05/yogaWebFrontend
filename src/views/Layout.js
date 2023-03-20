import {Outlet, Link } from "react-router-dom";
import { NavBar } from './views/NavBar';
import Sequence from './views/Sequence';
import { Footer } from './views/Footer';
function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Home />
      <Sequence />
      <Footer />
      
    </div>
  );
}

export default Layout;