import Header from "../header/header";
import { Outlet } from 'react-router-dom';

const Layout = () => 
  (
    <>
      <Header />
      <Outlet />
    </>
  )

  export default Layout;