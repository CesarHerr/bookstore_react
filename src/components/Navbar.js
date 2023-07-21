import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.header}>
      <h1>Bookstore CMS</h1>
      <ul className={styles.header__ul}>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link className={styles['header__ul--category']} to="categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
