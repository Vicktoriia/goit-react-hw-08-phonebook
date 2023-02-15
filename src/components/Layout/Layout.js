import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


import Loader from '../Loader/Loader';


const Layout = () => {
  return (
    <div>
      <p>AppBar</p>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;;
