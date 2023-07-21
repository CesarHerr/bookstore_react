import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <section className="panelBook">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Root;
