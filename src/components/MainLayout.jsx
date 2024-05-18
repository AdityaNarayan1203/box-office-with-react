import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
function MainLayout() {
  return (
    <div>
      <AppTitle
        title="Box-Office"
        subtitle="Are you looking for a movie or actor?"
      />
      <Navs />

      <Outlet />
    </div>
  );
}

export default MainLayout;
